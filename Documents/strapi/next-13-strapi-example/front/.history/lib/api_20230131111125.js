// film data fetcher

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



export const handleDelete = async ({id}:Number)=>{

}

