"use client";

import Layout from "@/app/LayoutH";
import PostCard from "@/app/PostCard";

export default function SavedPostsPage() {
  return (
    <Layout>
        <div className="text-5xl mb-4 text-gray-400 rounded-md p-2 hover:bg-gray-100">
      <h1 className="mb-2">Your saved posts</h1>

        </div>


      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  );
}
