"use client";

import { fetcher } from "lib/api";
import { useState } from "react";
import { useUser } from "lib/userContext";
import { setToken } from "lib/auth";
import React from "react";
const RegisterFormCom = () => {
  const [data, setData] = useState({
    username: "",
    email:"",
    password: "",
  });

  const user = useUser();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          email: data.email
        }),
      }
    );
    setToken(res);
  

  };
  const handleInput = async (e: any) => {
    if(e.target.name == 'password') {
      setData({ ...data, password:e.target.value });
    }else if(e.target.name == 'email') {
      setData({ ...data, email:e.target.value });
    }
    else{
      setData({ ...data, username:e.target.value });

    }

   
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 rounded md:w-1/4 border p-2 bg-white grid grid-rows-3"

      method="POST"
    >
      <div>
        <h1 className="text-center text-lg">Register</h1>
      </div>
      <div className="mt-4 row-span-1 grid grid-cols-2 gap-1">
        <input
          className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          id="username"
          value={data.username}
          name="username"
          type="text"
          onChange={handleInput}
          placeholder="username"
        />
        <input
          className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          id="email"
          value={data.email}
          name="email"
          type="email"
          onChange={handleInput}
          placeholder="email"
        />
      </div>
      <div className="mt-4 row-span-1 ">
        <input
          className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          id="password"
          value={data.password}
          name="password"
          type="password"
          onChange={handleInput}
          placeholder="password"
        />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          className="w-full py-1 rounded-sm text-white text-sm bg-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterFormCom;
