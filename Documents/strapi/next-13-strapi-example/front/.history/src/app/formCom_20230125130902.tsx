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
    <form onSubmit={handleSubmit} className="w-[80%] md:w-1/2">
      <div>
        <label htmlFor="identifier">
          <input
            id="identifier"
            value={data.identifier}
            name="identifier"
            type="text"
            onChange={handleInput}
            placeholder="your name"
          />
        </label>
      </div>
      <div>
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
      <div>
        <button type="submit" className="text-blue-300 text-lg">
          Login
        </button>
      </div>
    </form>
  );
};

export default FormCom;
