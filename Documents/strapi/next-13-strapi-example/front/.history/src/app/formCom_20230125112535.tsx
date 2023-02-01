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
    setToken(res)
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        <input id="username" type="text" placeholder="your name" />
      </label>
      <label htmlFor="password">
        <input id="password" type="password" placeholder="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default FormCom;
