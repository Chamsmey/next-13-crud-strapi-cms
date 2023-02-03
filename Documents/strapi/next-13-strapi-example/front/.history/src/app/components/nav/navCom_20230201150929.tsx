"use client";
import { unSetToken } from "lib/auth";
import { useFetchUser, useUser } from "lib/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const NavCom = () => {
  const {user,loading} = useFetchUser();
  const acronymName =  user?.match(/\b(\w)/g).join('');

  
 
  const router = useRouter()
  const handleSignOut = () => {
        unSetToken();
  }
  return (
    <header className="lg:max-w-[1400px] md:max-w-[1200px] w-full  mx-auto bg-black/50 backdrop-blur-0 fixed top-0  z-10">
      <nav className="flex justify-between py-2 px-1">
        <div className="logo">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg">
            PNC Film
          </h1>
        </div>
        <div className="px-2 flex text-white items-center">
          <Link href={"/"}>
            <button className="py-2 px-5 hover:bg-white/30 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            </button>
          </Link>
          {!user ? (
            <Link href={"/login"}>
              <button className="p-2 rounded transition duration-200 ease-in-out hover:bg-white/30">
                LogIn
              </button>
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="p-2 rounded transition duration-200 ease-in-out hover:bg-white/30"
            >
              Sign out
            </button>
          )}
          <Link href={"/register"}>
          
            <button className="p-2 rounded transition duration-200 ease-in-out hover:bg-white/30">
              Register
            </button>
          </Link>
          {user && <h1 className="w-10 h-10 flex jus bg-blue-500 rounded-full overflow-hidden">
            <span>
            {acronymName}
            </span>
            </h1>}
        </div>
      </nav>
    </header>
  );
};

export default NavCom;
