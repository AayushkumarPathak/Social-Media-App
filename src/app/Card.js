/** @type {import('tailwindcss').Config} */
import "tailwindcss/tailwind.css";

export default function Card({ children, noPadding }) {
  let classes =
    "bg-white shadow-sm shadow-gray-400 rounded-md mb-5 p-4 overflow-hidden";
  if (!noPadding) {
    classes += "p-4";
  }

  return <div className={classes}>{children}</div>;
}
