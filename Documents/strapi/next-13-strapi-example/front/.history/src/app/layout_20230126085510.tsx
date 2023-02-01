"use client";

import { userFetchUser } from "lib/userContext";
import dynamic from "next/dynamic";
const FormCom = dynamic(() => import("./components/formCom"));
import "./globals.css";
import NavCom from "./components/navCom";

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
        {user ? children : <FormCom />}

        <footer className="w-full bg-blue-300 absolute bottom-0">Movie</footer>
      </body>
    </html>
  );
}
