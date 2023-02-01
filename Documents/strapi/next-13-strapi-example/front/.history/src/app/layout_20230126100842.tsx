"use client";

import { userFetchUser } from "lib/userContext";
import dynamic from "next/dynamic";
const FormCom = dynamic(() => import("./components/formCom"));
import "./globals.css";
import NavCom from "./components/navCom";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = userFetchUser();
  console.log("user", user);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavCom user={user} loading={loading}  />
        <div>
          <Image
            className="w-full fixed z-[-100] top-0"
            width={1500}
            height={1000}
            src="https://cnbl-cdn.bamgrid.com/assets/60c53d45f6f0546647ddd4e006a207c713d149586cea401fdc0152f2fa9263a6/original"
            alt="banner"
          />
        </div>
        {user ? children : <FormCom />}

        <footer className="w-full px-2 py-5 h-[50vh] bg-black absolute bottom-0">

          <div className="w-1/2 mx-auto">
            <ul className="text-slate-200">
              <li>Movie</li>
              <li>Top movie</li>
              <li>Favorite</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
