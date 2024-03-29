"use client";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import Preloader from "./Preloader";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { uploadUserProfileImage } from "../../helpers/user";

export default function Cover({ url, editable,onChange }) {
  // const supabase = useSupabaseClient();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  //getting session from user id
  // const session = useSession();

  const pathname = usePathname?.() || "";
  const user = pathname.split("/");
  const userId = user[2];

  const [isUploading, setIsUploading] = useState(false);

  async function updateCover(ev) {
    const file = ev.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const newName = Date.now() + file.name;
      const { data, error } = await supabase.storage
        .from("covers")
        .upload(newName, file);

      setIsUploading(false);

      if (error) throw error;
      if (data) {
        const url =
          process.env.NEXT_PUBLIC_SUPABASE_URL +
          "/storage/v1/object/public/covers/" +
          data.path;
        supabase
          .from("profiles")
          .update({
            cover: url,
          })
          .eq("id", userId)
          .then(result =>{
            if(!result.error && onChange){
              onChange();
            }
          });
      }
    }
  }
  return (
    <div className="h-36 overflow-hidden flex justify-center items-center relative">
      <div>
        <img src={url} alt="" />
      </div>
      {isUploading && (
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center z-10">
          <div className="inline-block mx-auto">
            <Preloader />
          </div>
        </div>
      )}
      {editable && (
        <div className="absolute right-0 bottom-0 m-2">
          <label className="flex items-center gap-1 text-sm bg-white rounded-md py-1 px-2 cursor-pointer shadow-md shadow-black">
            <input type="file" onChange={updateCover} className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
            Change cover
          </label>
        </div>
      )}
    </div>
  );
}
