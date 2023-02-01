"use client";

import { unSetToken } from "lib/auth";

const NavCom = ({ user, loading }: { user: string; loading: boolean }) => {
  return (
    <header className="">
      <nav className="flex justify-between py-2 px-1">
        <div className="logo">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg">
            PNC Film
          </h1>
        </div>
        <div className="px-2 flex text-white">
          {!user ? (
            <button className="p-2 rounded transition duration-200 ease-in-out hover:bg-white/30">
              LogIn
            </button>
          ) : (
            <button
              onClick={async () => {
                unSetToken();
              }}
              className="p-2 rounded transition duration-200 ease-in-out hover:bg-white/30"
            >
              Sign out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavCom;
