import NavigationCard from "./NavigationCard";
/** @type {import('tailwindcss').Config} */
import "tailwindcss/tailwind.css";

export default function Layout({ children, hideNavigation }) {
  let rightColClasses = "";
  if (hideNavigation) {
    rightColClasses += "w-full";
  } else {
    rightColClasses += "mx-3 md:mx-0 md:w-9/12";
  }
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-36 md:mb-0">
      {!hideNavigation && (
        <div className=" fixed md:static  w-full bottom-0 md:w-3/12 -mb-5 ">
          <NavigationCard />
        </div>
      )}

      <div className={rightColClasses}>{children}</div>
    </div>
  );
}
