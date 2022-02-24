import Image from "next/image";
import React, { useState } from "react";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Header() {
    const [displaySearch, setDisplaySearch] = useState(false);
  return (
    <header className="shadow-md sticky top-0 h-[85px] bg-white z-40">
      {
          displaySearch 
          ? <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
              <input className="py-2 font-semibold text-xl text-gray-600 flex-grow outline-none pr-4" type="text" placeholder="What do you want to find?" />
              <XIcon onClick={() => {setDisplaySearch(false)}} className="h-9 p-2 cursor-pointer" />
          </div>
          : <div className="flex items-center justify-between max-w-7xl mx-auto p-4 ">
          {/* BLOCK LEFT */}
          <div className="flex items-center">
            <div className="relative h-12 w-28">
              <Image src="/typer-logo.png" layout="fill" objectFit="fill" />
            </div>
            <div className="items-center space-x-6 ml-12 hidden md:flex">
              <p className="text-gray-600 font-semibold">About</p>
              <p className="text-gray-600 font-semibold">Contact</p>
              <p className="text-white font-semibold bg-red-400 px-4 py-1 rounded-full cursor-pointer">Follow</p>
            </div>
          </div>
          {/* BLOCK RIGHT */}
          <div className="flex items-center">
            <div onClick={() => {setDisplaySearch(true)}}>
              <SearchIcon className="h-9 cursor-pointer p-2 hover:text-green-500 transition duration-150 ease-linear" />
            </div>
            <div className="flex items-center space-x-4 ml-4">
              <Link href={"/login"}>
                <p className="font-semibold text-red-400 cursor-pointer">Sign in</p>
              </Link>
              <p className="font-semibold text-red-400 px-4 py-2 border-2 border-red-400 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition duration-150 ease-out">Get Started</p>
            </div>
          </div>
        </div>
      }
      
    </header>
  );
}
