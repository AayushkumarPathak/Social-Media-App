"use client";
import NavigationCard from "./NavigationCard";
import PostCard from "./PostCard";
import PostFormCard from "./PostsFormCard";
import LayoutH from "../app/LayoutH";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LoginPage from "../../pages/login";
import { useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContent";

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  // console.log(session);

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
      .select("id, content, created_at, profiles(id,avatar,name)")
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
