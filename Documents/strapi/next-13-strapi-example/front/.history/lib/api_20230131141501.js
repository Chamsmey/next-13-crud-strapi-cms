// film data fetcher
'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export async function fetcher(url, options = {}) {
  let res;
  if (!options) {
    res = await fetch(url);
  } else {
    res = await fetch(url, options);
  }
  const data = res.json();
  return data;
}


export const handleDelete = async (id)=>{

  const [isSuccess,setIsSuccess] = useState();

  useEffect(()=>{
    try {
    axios({url:`http://localhost:1337/api/films/${id}`,method:"DELETE",headers:{'Content-Type':'application/json'}});
    return {success:true}
  
  }
  catch(error){
    return {success:false};
  
  }

  })

}

