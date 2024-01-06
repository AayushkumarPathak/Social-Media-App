"use client";
import Avatar from "@/app/Avatar";
import Layout from "@/app/LayoutH";
import Card from "@/app/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Layout>
      <div className="text-5xl mb-4 text-gray-400 rounded-md p-2 hover:bg-gray-100">
        <h1 className="mb-2">Notifications</h1>
      </div>

      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4 bg-gray-200 hover:bg-violet-100 rounded-md hover:shadow-md shadow-gray-300">
            <Link href={'/profile'}>
            <Avatar />
            </Link>
            
            <div>
              <Link href={'/profile'} className="font-semibold mr-1 hover:underline">Ashish</Link>commented
              <Link href={"/"} className={"text-socialBlue ml-1  hover:underline"}>
                 your photo
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 items-center border-b hover:bg-violet-100 border-b-gray-100 p-4  rounded-md hover:shadow-md shadow-gray-300">
            <Link href={'/profile'}>
            <Avatar />
            </Link>
            
            <div className="">
              <Link href={'/profile'} className=" font-semibold mr-1 hover:underline">Ashish1</Link>liked
              <Link href={"/"} className={"text-socialBlue ml-1  hover:underline"}>
                 your photo
              </Link>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2 items-center border-b hover:bg-violet-100 border-b-gray-100 p-4 rounded-md hover:shadow-md shadow-gray-300">
            <Link href={'/profile'}>
            <Avatar />
            </Link>
            
            <div>
              <Link href={'/profile'} className="font-semibold mr-1 hover:underline">Ashish2</Link>liked 
              <Link href={"/"} className={"text-socialBlue ml-1  hover:underline"}>
                 your photo
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
