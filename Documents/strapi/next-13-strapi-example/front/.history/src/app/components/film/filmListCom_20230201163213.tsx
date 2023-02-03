import FilmCom from "@/app/filmCardCom";
import FormEditFilmCom from "@/app/formForEditFilm";
import Image from "next/image";
import { Film } from "types/film";
const FimlistCom = ({data}:{data?:Film[]}) => {
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