"use client";
import React, { useContext, useState } from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Link from "next/link";
import ReactTimeAgo from "react-time-ago";
import { UserContext } from "./contexts/UserContent";

export default function PostCard({content,created_at,photos, profiles:author}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const {profile:myProfile} = useContext(UserContext);



  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleButtonClick = () => {
    toggleDropdown();
  };

  const handleDocumentClick = (e) => {
    if (!e.target.closest(".dropdown-button")) {
      closeDropdown();
    }
  };

  // Add an event listener to handle clicks outside the dropdown
  React.useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropdownOpen]);

  return (
    <Card>
      <div className="flex gap-3 ">
        <div>
          <Link href={"/profile"}>
            <span className="cursor-pointer">
              <Avatar url={author?.avatar} />
            </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href={'/profile/'+author?.id}>
              <span className=" mr-2 font-semibold cursor-pointer hover:underline">
                {author?.name}
              </span>
            </Link>
            shared a<a className="text-socialBlue"> post</a>
          </p>
          <p className="text-gray-500 text-sm">
            <ReactTimeAgo date={created_at}/> 
          </p>
        </div>
        <div>
          <button
            className="text-gray-500 dropdown-button"
            onClick={handleButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="relative">
            {dropdownOpen && (
              <div className="absolute right-3 bg-white shadow-md shadow-gray-400 p-3 rounded-md border border-gray-200 w-52">
                {/* Dropdown content */}

                <a
                  href=" "
                  className="flex  px-2 gap-2 hover:bg-violet-100 rounded-md hover:shadow shadow-gray-400 hover:transition-all -mx-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Hide post
                </a>
                <a
                  href=" "
                  className="flex  px-2 gap-2 hover:bg-violet-100 rounded-md hover:shadow shadow-gray-400 hover:transition-all -mx-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  Save post
                </a>
                <a
                  href=" "
                  className="flex  px-2 gap-2 hover:bg-violet-100 rounded-md hover:shadow shadow-gray-400 hover:transition-all -mx-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Report post
                </a>
                <a
                  href=" "
                  className="flex  px-2 gap-2 hover:bg-violet-100 rounded-md hover:shadow shadow-gray-400 hover:transition-all -mx-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Copy link
                </a>
                <a
                  href=" "
                  className="flex  px-2 gap-2 hover:bg-violet-100 rounded-md hover:shadow shadow-gray-400 hover:transition-all -mx-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ... rest of your post card */}
      <div>
        <p className="my-4 text-sm">{content} </p>
        {photos?.length > 0 && (
          <div className="flex gap-2">
        {photos.map(photo =>(
          <div className="">
            <img src={photo} className="rounded-md w-full h-52" alt="yourPosts.." />
          </div>
        )) }
        </div>
        )}
        
        
        {/* <div>
          <img
            src="https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60 "
            alt=""
          />
        </div> */}
      </div>
      <div className="mt-5 flex gap-8">
        <button className="flex gap-2 iteams-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          62
        </button>
        <button className="flex gap-2 iteams-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          12
        </button>
        <button className="flex gap-2 iteams-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clipRule="evenodd"
            />
          </svg>
          1
        </button>
      </div>
      <div className="flex mt-4 gap-3 ">
        <div className="">
          <Avatar url={myProfile?.avatar}/>
        </div>
        <div className="border grow rounded-full relative ">
          <form>
            <input className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full" placeholder="Leave a comment"/>
          </form>
          {/* <textarea
            className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full "
            placeholder="Leave a comment "
          ></textarea> */}
          <button className="absolute top-3 right-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
}
