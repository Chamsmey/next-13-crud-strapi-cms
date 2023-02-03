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

export const handleDelete =  (id)=>{

    axios({url:`http://localhost:1337/api/films/${id}`,method:"DELETE",headers:{'Content-Type':'application/json'}})
    .then(res=>{
      console.log('responce',res)
      if(res.statusText=='OK'){
        window.location.pathname='/dashboard';
      }
    }
      )
    .catch(err=>{console.log(err)})
  

}

export async function LogIn (url , options){
  let response = {}
          try{
            response = await fetch(url, options);
          }
          catch(err){
              response= err;
          }
  return response;
}