"use client";
import NavigationCard from "./NavigationCard";
import PostCard from "./PostCard";
import PostFormCard from "./PostsFormCard";
import LayoutH from "../app/LayoutH";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "../../pages/login";
import { useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContent";
import { createClient } from "@supabase/supabase-js";

export default function Home() {
  // const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  // console.log(session);

  // const getSession = async () =>{
  //   const {
  //     data:{
  //       session
  //     }
  //   } = await supabase.auth.getSession();
  //   return session;
    
  // }
  // const sessionObject = await getSession();
  // console.log("session obj",sessionObject);
//------------------------------------------ this worked.
//   const getSession = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const {
//                 data: {
//                     session
//                 }
//             } = await supabase.auth.getSession();

//             resolve(session.user.id);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

// // Call the function and handle the result using then/catch
// getSession()
//     .then(sessionObject => {
//         // Now you can use the sessionObject as needed
//         console.log("session object: ",sessionObject);
//         // console.log("Session object id: ",sessionObject.user.id);
//     })
//     .catch(error => {
//         console.error("Error getting session:", error);
//     });

  
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);



  useEffect(() => {
    fetchPosts();
  }, []);
  
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => { 
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  }, [session?.user?.id]);
// commiting 1st time
  function fetchPosts() {
    supabase
      .from("posts")
      .select("id, content, created_at, photos, profiles(id,avatar,name)")
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log("posts", result);
        setPosts(result.data);
      });
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    // <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
    //   <div className="w-3/12">
    //     <NavigationCard/>

    //   </div>
    //   <div className="w-8/12">
    //     <PostFormCard/>
    //     <PostCard/>
    //   </div>
    // </div>

    <LayoutH>
      <UserContext.Provider value={{ profile }}>
        <PostFormCard onPost={fetchPosts} />
        {posts?.length > 0 &&
          posts.map((post) => <PostCard key={post.created_at} {...post} />)}
      </UserContext.Provider>
    </LayoutH>
  );
}
