/** @type {import('tailwindcss').Config} */
import "tailwindcss/tailwind.css";

export default function Footer() {
  let classes =
    " flex iteams-center justify-center items-center grow shadow-lg  p-2 shadow-gray-300 rounded-md mb-2 p-5 overflow-hidden ";

  return (
    <div className={classes}>
      <div className="gap-4  grow m-0 bg-rose-300 border rounded-md p-5 shadow-md shadow-gray-400 hover:scale-105 hover:overflow-hidden">
        Powered by{" "}
        <span className="italic font-semibold text-emerald-800">Next.</span>
        <sub className="font-bold">js </sub> ,
        <span className="text-grey-800"> Developed and Managed </span>
        <span> by </span>
        <span className="text-emerald-700 italic font-semibold ">
          <a href="https://www.instagram.com/_real_aayush_pathak_">
            Aayush Pathak
          </a>
        </span>
      </div>
    </div>
  );
}
