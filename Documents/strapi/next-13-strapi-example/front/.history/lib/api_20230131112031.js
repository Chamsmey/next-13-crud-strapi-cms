// film data fetcher

import axios from "axios";

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



export const handleDelete = async ({id}=)=>{

axios(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/films/${id}`)
}

