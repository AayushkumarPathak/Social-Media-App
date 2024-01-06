// "use client"
// import "./globals.css";
// import { Inter } from "next/font/google";
// import { createBrowserClient } from "@supabase/ssr";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { useState } from "react";
// import { createClientComponentClient, createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";



// const inter = Inter({ subsets: ["latin"] });
// const metadata = {
//   title: "TextOne-Next-app",
//   description: "Generated by create next app",
// };
// // { children, pageProps}
// export default function RootLayout({ Component, pageProps }) {
//   const [supabaseClient] = useState(()=>createPagesBrowserClient());


//   return(
//     <SessionContextProvider 
//       supabaseClient={supabaseClient} 
//       initialSession={pageProps.initialSession}
//     >
//       <html lang="en">
//        <body className={inter.className}>{children}</body>
//      </html>
//     </SessionContextProvider>
//   );




//   // return (
//   //   <html lang="en">
//   //     <body className={inter.className}>{children}</body>
//   //   </html>
//   // );
// }

"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { createBrowserClient } from "@supabase/ssr";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createClientComponentClient, createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);


const inter = Inter({ subsets: ["latin"] });
const metadata = {
  title: "TextOne-Next-app",
  description: "Generated by create next app",
};

export default function RootLayout({ Component, pageProps, children }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider 
      supabaseClient={supabaseClient} 
      initialSession={pageProps?.initialSession} // Ensure that pageProps is defined before accessing initialSession
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionContextProvider>
  );
}

