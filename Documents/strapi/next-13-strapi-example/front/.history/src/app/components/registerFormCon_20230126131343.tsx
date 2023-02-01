"use client";

import { fetcher } from "lib/api";
import { useState } from "react";
import { useUser } from "lib/userContext";
import { setToken } from "lib/auth";
import React from "react";
const RegisterFormCom = () => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const user = useUser();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    );
    setToken(res);
    console.log(res);
  };
  const handleInput = async (e: any) => {
    if (e.target.name == "password") {
      setData({ ...data, password: e.target.value });
    } else {
      setData({ ...data, identifier: e.target.value });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 rounded md:w-1/4 border p-2 bg-white grid grid-rows-3">
      <div>
        <h1 className="text-center text-lg">Register</h1>
      </div>
      <div className="mt-4 row-span-1 grid grid-cols-2 gap-1">
      
          <input
            className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
            
            id="identifier"
            value={data.identifier}
            name="identifier"
            type="text"
            onChange={handleInput}
            placeholder="name"
          />

<input
            className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          
            id="identifier"
            value={data.identifier}
            name="identifier"
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


      <h2 className="text-[10px] my-2">
        Did you have account before?
      </h2>
      <div>
        
      </div>
      <div className="mt-2">
        <button type="submit" className="w-full py-1 rounded-sm text-white text-sm bg-indigo-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default RegisterFormCom;
