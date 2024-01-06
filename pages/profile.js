"use client";
import Avatar from "@/app/Avatar";
import LayoutH from "../src/app/LayoutH";
import Card from "@/app/Card";
/** @type {import('tailwindcss').Config} */
import "tailwindcss/tailwind.css";
import Link from "next/link";
import PostCard from "@/app/PostCard";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import FriendInfo from "@/app/FriendInfo";

export default function ProfilePage() {
  const router = useRouter();
  // const pathname = usePathname();
  const pathname = usePathname?.() || "";
  const isPosts = pathname.includes("posts") || pathname === "/profile";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");
  const isPhotos = pathname.includes("photos");
  // console.log({isAbout,pathname,router});

  const tabClasses =
    "flex gap-1 px-4 py-1 iteams-center  hover:bg-violet-200 text-gray-800 hover:rounded-md hover:shadow-md shadow-gray-300";
  const activeTabClasses =
    "flex gap-1 px-4 py-1 iteams-center  border-b-4 border-socialBlue font-bold text-socialBlue hover:border-0 hover:bg-violet-200  hover:rounded-md hover:shadow-md shadow-gray-300";

  return (
    <LayoutH>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md -my-3 -mr-4 -ml-4 -mt-4">
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <div className="absolute top-24 left-4">
            <Avatar size={"lg"} />
          </div>
          <div className="p-4 pt-0 md:pt-4 pb-0 ">
            <div className="ml-30  mx-28 md:ml-40 ">
              <h1 className=" text-3xl font-bold">Pawan</h1>
              <div className="text-gray-500 leading-4">New Delhi, India</div>
            </div>
            <div className="mt-5 md:mt-10 flex gap-3  ">
              <Link
                href={"/profile/posts"}
                className={isPosts ? activeTabClasses : tabClasses}
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span className="hidden sm:block">Posts</span>
              </Link>

              <Link
                href={"/profile/about"}
                className={isAbout ? activeTabClasses : tabClasses}
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
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <span className="hidden sm:block">About</span>
              </Link>

              <Link
                href={"/profile/friends"}
                className={isFriends ? activeTabClasses : tabClasses}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="hidden sm:block">Friends</span>
              </Link>

              <Link
                href={"/profile/photos"}
                className={isPhotos ? activeTabClasses : tabClasses}
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
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="hidden sm:block">Photos</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      {isPosts && (
        <div>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      )}
      {isAbout && (
        <div>
          <Card>
            <h2 className="text-3xl mb-3 p-1">About me</h2>
            <p className="mb-3 text-md">
              <span className="font-bold">Pawan</span>, a highly accomplished
              Senior Software Engineer at Oracle, brings extensive technical
              prowess to the table. With a proven track record of delivering
              innovative solutions, he plays a pivotal role in Oracle's success.
              Pawan's dedication to excellence and collaborative spirit make him
              an invaluable asset to the company and its clients.
            </p>
          </Card>
        </div>
      )}
      {isFriends && (
        <div>
          <Card>
            <h2 className="text-3xl mb-3 p-1">Friends</h2>
            <div className="">
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
              <div className="p-4 border-b -mx-4 border-b-gray-100 ">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
      {isPhotos && (
        <div>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden md:h-48 shadow-md flex iteams-center">
                <img
                  className="w-full md:-mr-3 "
                  src="https://images.unsplash.com/photo-1625387891389-a4b440ae958e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuY2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 shadow-md flex iteams-center">
                <img
                  className="w-full"
                  src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWElMjBnYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 w-full shadow-md flex iteams-center">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1570015329194-675ae0cf2516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyZWVjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 w-full shadow-md flex iteams-center">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyZWVjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 shadow-md flex iteams-center">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyZWVjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 shadow-md flex iteams-center">
                <img
                  className="w-full"
                  src="https://plus.unsplash.com/premium_photo-1661964068107-6d7f6f4fea51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdyZWVjZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </LayoutH>
  );
}
