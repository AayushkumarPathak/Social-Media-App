import { useContext, useEffect, useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "./contexts/UserContent";
import Preloader from "./Preloader";

export default function PostFormCard({ onPost }) {
  const [content, setContent] = useState("");
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession();
  // useEffect(() => {
  //   // alert(session.user.id);
  //   supabase.from('profiles')
  //   .select()
  //   .eq('id',session.user.id)
  //   .then(result =>{
  //     if(result.data.length){
  //       setProfile(result.data[0]);
  //     }
  //   })
  // },[]);

  // if(!profile){
  //   return 'Waiting for profile info...';
  // }
  const { profile } = useContext(UserContext);
  // console.log("profile: ",profile);

  function createPost() {
    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        content,
        photos: uploads,
      })
      .then((response) => {
        // console.log(response);
        if (!response.error) {
          setContent("");
          setUploads([]);
          // alert('created!');
          if (onPost) {
            onPost();
          }
        }
      });
  }

  async function addPhotos(ev) {
    // console.log(ev);
    const files = ev.target.files;
    if (files.length > 0) {
      setIsUploading(true);
      for (const file of files) {
        const newName = Date.now() + file.name;
        // console.log("file uploaded by you: ",file);
        const res = await supabase
          .storage
          .from("photos")
          .upload(newName, file);
        if (res.data) {
          const url = process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/photos/" + res.data.path;
          // console.log(url);
          setUploads((prevUploads) => [...prevUploads, url]);
        } else {
          console.log(res);
        }
      }
      setIsUploading(false);
    }
  }

  return (
    <Card>
      <div className="flex gap-2">
        <div className="">
          <Avatar url={profile?.avatar} />
        </div>
        {profile && (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="grow py-3 h-14 "
            placeholder={`Whats on your mind, ${profile.name}?`}
          />
        )}
      </div>
      {isUploading && (
        <div>
          <Preloader />
        </div>
      )}

      {uploads.length > 0 && (
        <div className="flex gap-2">
          {uploads.map((upload) => (
            <div className="mt-2">
              <img
                src={upload}
                alt="uploadedImage"
                className="w-auto h-24 rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-6 iteams-center mt-2 ">
        <div className="">
          <label className="flex gap-1">
            <input type="file" className="hidden" onChange={addPhotos} />

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
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>

            <span className="hidden md:block cursor-pointer">Photos</span>
          </label>
        </div>
        <div className="">
          <button className="flex gap-1">
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
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="hidden md:block">People</span>
          </button>
        </div>

        <div className="">
          <button className="flex gap-1">
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
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="hidden md:block">Check in</span>
          </button>
        </div>

        <div className="">
          <button className="flex gap-1">
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
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <span className="hidden md:block">Mood</span>
          </button>
        </div>
        <div className="grow text-right">
          <button
            onClick={createPost}
            className="bg-socialBlue text-white px-6 py-1 rounded-md "
          >
            Share
          </button>
        </div>
      </div>
    </Card>
  );
}
