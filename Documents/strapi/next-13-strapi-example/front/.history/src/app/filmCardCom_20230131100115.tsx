import Image from "next/image";
import React from "react";

const FilmCom = ({data}:{data:any}) => {
    return (  

        <div className="w-1/4 relative overflow-hidden transition-all duration-1000  bg-blue-400 group hover:scale-125">
             <Image
                  className="object-none"
                  width={200}
                  height={200}
                  src={
                    `
                    ${process.env.NEXT_PUBLIC_STRAPI_URL}${ data?.attributes?.poster?.data?.attributes?.url}
                    `
                  }
                  alt="item"
                />
                
                
        <div className="flex justify-center">
          <button className="w-[80%] absolute z-0 left-4 transition-[hover] duration-200 ease-in-out delay-100 group-hover:bottom-3 right-4 bottom-[-1] text-white rounded bg-blue-500 px-3 py-2">detail</button>
        </div>
    </div>
    );
}
 
export default FilmCom;