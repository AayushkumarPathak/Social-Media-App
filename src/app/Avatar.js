import { createClient } from "@supabase/supabase-js";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function Avatar({ size,url,editable,onChange }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);


  const pathname = usePathname?.() || "";
  const user = pathname.split("/");
  const userId = user[2];

  const [isUploading, setIsUploading] = useState(false);

  async function handleAvatarChange(ev){
    const file = ev.target.files?.[0];
    if(file){
      setIsUploading(true);
      const newName = Date.now() + file.name;
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(newName, file);

      setIsUploading(false);

      if (error) throw error;
      if (data) {
        const url =
          process.env.NEXT_PUBLIC_SUPABASE_URL +
          "/storage/v1/object/public/avatars/" +
          data.path;
        supabase
          .from("profiles")
          .update({
            avatar: url,
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
  
  let width = "w-12";
  if (size == "lg") {
    width = " w-24 md:w-36";
  }
  return (
    <div className={`${width} relative overflow-hidden`}>
      <div className="rounded-full  overflow-hidden flex items-center ">
      <img src={url} alt="" className="w-full rounded-full"/>
      </div>
      {isUploading && (
        <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center z-10">
        <div className="inline-block mx-auto">
      <Preloader/>
        </div>
      </div>
      )}
      {editable &&(
        
        <label className="absolute bottom-0 right-0 cursor-pointer shadow-sm shadow-gray-500 p-2 bg-white rounded-full "> 
        <input type="file" className="hidden" onChange={handleAvatarChange}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>

        </label>
      )}
    </div>
  );
}
