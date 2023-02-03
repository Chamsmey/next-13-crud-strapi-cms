
'use client'
import FilmCom from "@/app/filmCardCom";
import FormEditFilmCom from "@/app/formForEditFilm";
import Image from "next/image";
import { useState } from "react";
import { Film } from "types/film";
const FimlistCom = ({data}:{data?:Film[]}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [filmForUpate, setfilmForUpate] = useState({});
  const [filmIdForUpate, setfilmIdForUpate] =useState();
  const handleUpdate = async({film, id,isUpdated}:any)=>{
      if(film && id) {
        setfilmForUpate(film);
        setfilmIdForUpate(id);
        setIsUpdate(isUpdated);;
      }
  }
    return (  
      <>
      <FormEditFilmCom data={undefined} id={1}/>
          <div className="w-full mx-auto flex py-5 flex-wrap">
        {data?.map((item) => {
          return (
              <FilmCom data={item}/> 
              )
            })}
            </div>

        {/* movie card*/}
     </>
     

    );
}
 
export default FimlistCom;