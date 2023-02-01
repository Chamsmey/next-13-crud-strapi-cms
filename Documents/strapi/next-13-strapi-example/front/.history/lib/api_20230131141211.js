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



export const handleDelete = async (id)=>{

  
  try {
  axios({url:`http://localhost:1337/api/films/${id}`,method:"DELETE",headers:{'Content-Type':'application/json'}});
  return {success:tru}

}
catch(error){

}

}

