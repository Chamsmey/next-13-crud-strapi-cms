"use client";

import { fetcher } from "lib/api";
import { useState } from "react";
import { useUser } from "lib/userContext";
import { setToken } from "lib/auth";
const FormCom = () => {
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
    <form onSubmit={handleSubmit} className="w-[80%] mx-auto mt-10 rounded md:w-1/3 border p-2">
      <div className="mt-2">
        <label htmlFor="identifier">
          <input
            className="block px-1 py-2 rounded-sm w-full flex-1 outline  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"

            id="identifier"
            value={data.identifier}
            name="identifier"
            type="text"
            onChange={handleInput}
            placeholder="your name"
          />
        </label>
      </div>
      <div className="mt-2">
      <label htmlFor="password">
        <input
          id="password"
          value={data.password}
          name="password"
          type="password"
          onChange={handleInput}
          placeholder="password"
        />
      </label>

      </div>
      <div className="mt-2">
        <button type="submit" className="text-blue-300 text-lg">
          Login
        </button>
      </div>
    </form>
  );
};

export default FormCom;
