"use client";
import { fetcher } from "lib/api";
import { useState } from "react";
import { useUser } from "lib/userContext";
import { setToken } from "lib/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
const FormCom = () => {
  const router = useRouter();
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const user = useUser();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('user data',data);
    axios.post(
    `http:localhost:1337/api/auth/local`,
    {
    headers:{
      'Content-Type':"application/json",
      
    },
    data:JSON.stringify({
      'identifier':data.identifier,
      'password':data.password

    })
   })
   .then(res=>{
    console.log('response',res)
   })
   .catch(err=>{
    console.log('error',err);
    
    
   })
    
    // try{
    // let resUser = await fetcher(
    //    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
    //     {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         password: data.password,
    //         identifier: data.identifier,
    //       })
    //     }
    //    );
    //    console.log('user', resUser);
       
    // }
    // catch(error){
    // console.log('eror',error);
    //     alert(error)
    // }
  };
  const handleInput = async (e: any) => {
    if (e.target.name == "password") {
      setData({ ...data, password: e.target.value });
    } else {
      setData({ ...data, identifier: e.target.value });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 rounded md:w-1/4 border p-2 bg-white" method="POST">
      <div>
        <h1 className="text-center text-lg">Login</h1>
      </div>
      <div className="mt-4">
          <input
            className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm bg-white/10 backdrop-blur-sm"

            id="identifier"
            value={data.identifier}
            name="identifier"
            type="text"
            onChange={handleInput}
            placeholder="your name"
          />
      </div>
      <div className="mt-4">
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

    <Link href={'/register'}>
      <h2 className="text-[10px] my-2 hover:text-blue-500">
        create new user
      </h2>
    </Link>
      <div>
        
      </div>
      <div className="mt-2">
        <button type="submit" className="w-full py-1 rounded-sm text-white text-lg bg-indigo-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormCom;
