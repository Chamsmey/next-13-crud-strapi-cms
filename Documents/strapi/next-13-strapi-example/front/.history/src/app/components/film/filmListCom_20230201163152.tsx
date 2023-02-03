import FilmCom from "@/app/filmCardCom";
import FormEditFilmCom from "@/app/formForEditFilm";
import Image from "next/image";
import { Film } from "types/film";
const FimlistCom = ({data}:{data?:Film[]}) => {
    return (  
      <>
          <div className="w-full mx-auto flex py-5 flex-wrap">
          <FormEditFilmCom data={undefined} id={1}/>
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