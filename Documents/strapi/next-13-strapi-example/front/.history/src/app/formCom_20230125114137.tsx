"use client";

import { fetcher } from "lib/api";
import { useState } from "react";
import {useUser} from 'lib/userContext';
import { setToken } from "lib/auth";
const FormCom = () => {
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const user = useUser();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify({
        identifier: data.identifier,
        password: data.password,
      }),
    });
    // setToken(res)
    console.log(res);
    
  };
  const handleInput = async (e: any) => {
    setData({...e.target.value})
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="identifier">
        <input id="identifier" type="text" onChange={handleInput} placeholder="your name" />
      </label>
      <label htmlFor="password">
        <input id="password" type="password" onChange={handleInput} placeholder="password" />
      </label>
      <button type="submit" className="text-blue-300 text-lg">Login</button>
    </form>
  );
};

export default FormCom;
