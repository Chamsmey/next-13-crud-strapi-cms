'use client'

import { handleDelete } from "lib/api";
import { getUserFromLocalCookies } from "lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";

const FilmCom = ({ data,sentFilm}: { data: any,sentFilm:Function }) => {
const router = useRouter();
console.log('film',data.id);
let user = getUserFromLocalCookies();
const handleDeleteError = async ()=>{
  handleDelete(data.id);
  router.push('/dashboard');

}
const handleUpdate = async ()=>{
  sentFilm.catchFilm(data);

}
  return (
    <div className="w-1/4  relative overflow-hidden transition-all duration-1000   group hover:scale-105 hover:cursor-pointer">
      <div className="w-full h-full bg-black/60 backdrop-blur-0 transition duration-100 absolute top-[-1000px] group-hover:top-0">
{
  (user) &&
        (<div className="flex justify-between items-end px-2 py-2">
          <div onClick={()=> handleDeleteError()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          <div className="" onClick={handleUpdate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-cyan-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
        </div>)
}
        <div className="h-full flex justify-center items-center">
          <h2 className="text-white text-center text-[38px]">
            {data?.attributes?.title}
          </h2>
        </div>
      </div>
      <Image
        className="w-full h-full object-cover aspect-[9/16] object-center"
        width={200}
        height={200}
        src={`
                    ${process.env.NEXT_PUBLIC_STRAPI_URL}${data?.attributes?.poster?.data?.attributes?.url}
                    `}
        alt="item"
      />
      <div className="flex justify-center">
        <button className="w-[80%] absolute z-0 left-4 transition-[hover] duration-200 ease-in-out delay-100 group-hover:bottom-3 right-4 bottom-[-1] text-white rounded bg-blue-500 px-3 py-2">
          detail
        </button>
      </div>
    </div>
  );
};

export default FilmCom;
