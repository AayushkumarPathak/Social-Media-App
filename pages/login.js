import Layout from "@/app/LayoutH";
import Card from "@/app/Card";
import Footer from "@/app/Footer";
import React, { useRef, useEffect } from "react";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginPage() {
  // bg-gradient-to-r from-purple-500 to-pink-500
  const supabase = useSupabaseClient();
  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <Layout hideNavigation={true}>
      <div className="h-screen flex items-center -my-1 bg-gradient-to-r">
        <div className="max-w-xs mx-auto grow -mt-24 ">
          <h1 className="text-8xl mb-8  text-center ">
            <span className="text-orange-500">Log</span>
            <span className="text-gray-600 ">in</span>
          </h1>

          <Card noPadding={true}>
            <div className="rounded-md overflow-hidden -my-4 -mx-4">
              <button
                onClick={loginWithGoogle}
                className="flex gap-4 w-full items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-0 transition-all hover:scale-105 "
              >
                <svg
                  className="h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Login with Google
              </button>
              <a
                href="/"
                className="flex gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-0 transition-all hover:scale-105 "
              >
                <svg
                  className="h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
                Login with Twitter
              </a>

              <a
                href="/"
                className="flex gap-4 items-center justify-center p-4 border-b border-b-gray-100 hover:bg-socialBlue hover:text-white hover:border-b-0 transition-all hover:scale-105 "
              >
                <svg
                  className="h-10 fill-current w-12 -ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                Login with Apple
              </a>
            </div>
          </Card>
          {/* <span className="text-gray-800 border-md mt-7 p-2 border-gray-500 hover:bg-cyan-400 hover:scale-125 hover:text-black hover:rounded-md  text-xl font-mono items-center  flex justify-center">
            Developed and Managed{" "}
          </span>
          <span className="text-gray-800 border-md  p-1 border-gray-500 hover:bg-cyan-400 hover:scale-125 hover:text-black hover:rounded-md  text-xl font-mono items-center  flex justify-center">
            by
          </span>

          <span className="text-gray-800 border-md  p-1 border-gray-500 hover:bg-cyan-400 hover:scale-125 hover:text-black hover:rounded-md  text-xl font-mono items-center  flex justify-center">
            Aayush Pathak
          </span> */}
          <div className="flex flex-col text-center ">
            <span className="text-xl mb-4 text-gray-600">Developed and Managed by Aayush Pathak</span>
            <span className="text-gray-600"> School of Computer Science Engineering</span>
            <span className="text-orange-500 text-sm font-bold hover:text-orange-500 hover:bg-black hover:border rounded-md">
              Lovely Professional University, Punjab India
            </span>
            <a className=" text-blue-500 cursor-pointer" href="https://www.termsandconditionsgenerator.com/live.php?token=Dw9f8JoQ1eOFqkFuNChrWhgNfURixdA4">
              Privacy policy, T & C Apply!
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
