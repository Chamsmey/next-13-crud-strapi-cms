
'use client'
import FilmCom from "@/app/filmCardCom";
import FormEditFilmCom from "@/app/formForEditFilm";
import Image from "next/image";
import { useState } from "react";
import { Film } from "types/film";
const FimlistCom = ({data}:{data?:Film[]}) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [filmForUpate, setFilmForUpate] = useState(null);
  const [filmIdForUpate, setFilmIdForUpate] =useState('');
 
  const catchFilm = (film:any)=>{
    setFilmForUpate(film);
    if(film ) {
      setFilmForUpate(film);
      setFilmIdForUpate(film.id);
      setIsUpdate(true);;
    }
  }
  const handleUpdateStatus = async()=>{
    setIsUpdate(false)
  }
    return (  
      <>
      <FormEditFilmCom data={filmForUpate} id={filmIdForUpate} isUpdated={isUpdate} handlerUpdateStatus={ handleUpdateStatus}/>
          <div className="w-full mx-auto flex py-5 flex-wrap">
        {data?.map((item) => {
          return (
              <FilmCom key={}  data={item} sentFilm={catchFilm}/> 
              )
            })}
            </div>
        {/* movie card*/}
     </>
     

    );
}
 
export default FimlistCom;