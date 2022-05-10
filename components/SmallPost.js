import Image from "next/image";
import React from "react";
import { BookmarkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function SmallPost({ post }) {
  return (
    <Link href={"/post"}>
      <div className="p-4 bg-[#FDFDFC] border-2 border-fuchsia-50 rounded-lg shadow-lg shadow-rose-200">
        <div>
          {/* <div className='relative h-12 w-12 rounded-md'>
                <Image src={post.mainImg} layout="fill" alt='main image' />
            </div> */}
          <div className="flex group">
            <img
              className="h-32 w-32 xl:h-24 xl:w-24 rounded-md mr-4"
              src={post.mainImg}
              alt="main image"
            />
            <div>
              <p className="font-semibold text-sm text-red-400 tracking-widest pb-2">
                {post?.category?.categoryName}
              </p>
              <h3 className="font-bold text-xl pb-2 xl:text-2xl group-hover:text-red-500 transition duration-150 ease-out line-clamp-2">
                {post?.name}
              </h3>
              <p className="block xl:hidden text-sm font-semibold text-gray-600 line-clamp-2">
                {post?.description}
              </p>
            </div>
          </div>
          <p className="hidden xl:block mt-4 text-base font-semibold text-gray-600 xl:line-clamp-3">
            {post?.description}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="group flex items-center cursor-default">
              <img
                className="h-12 w-12 rounded-full mr-2"
                src={post?.author?.avatar}
                alt="avatar"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-600 ">
                  Written by{" "}
                  <span className="group-hover:text-red-500 transition duration-150 ease-out ">
                    {post?.author?.name}
                  </span>
                </h4>
                <span className="text-sm text-gray-500 font-semibold">{post?.createdAt}</span>
              </div>
            </div>
            <BookmarkIcon className="h-6 hover:text-red-500 duration-150 transition ease-out" />
          </div>
        </div>
      </div>
    </Link>
  );
}
