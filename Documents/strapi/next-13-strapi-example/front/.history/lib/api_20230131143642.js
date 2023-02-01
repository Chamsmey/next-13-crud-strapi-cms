// film data fetcher

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

  const [isSuccess,setIsSuccess] = useState(false);

  useEffect(()=>{
    try {
    axios({url:`http://localhost:1337/api/films/${id}`,method:"DELETE",headers:{'Content-Type':'application/json'}});
    setIsSuccess(true)
  
  }
  catch(error){
    setIsSuccess(false)

  }
  },[])

  return isSuccess;

}

