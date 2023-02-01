import FilmCom from "@/app/filmCardCom";
import Image from "next/image";
import { Film } from "types/film";
const FimlistCom = ({data}:{data?:Film[]}) => {
    return (  
      <>
          <div className="w-[60%] mx-auto flex justify-between py-5">
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