import Image from "next/image";
import { Inter } from "@next/font/google";
import { fetcher } from "../../lib/api";
import FimlistCom from "./components/film/filmListCom";
import { Film } from "types/film";
import FormCreateFilmCom from "./formCreatefilm";
const inter = Inter({ subsets: ['greek'] });
export default async function Home() {
  // fetch films from Strapi
  let {data}:{data:Film[]} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/films/?populate=*`);
  console.log("films:", data);
  return (
    <>
      <main className="w-full bg-black/50">
        {/* film list */}

        <section className="lg:max-w-[1400px] md:max-w-[1200px] w-full mx-auto">

       <FormCreateFilmCom/>
        <div className="mx-auto">
          <div className="w-1/3  mx-auto flex justify-end">
          <button className="bg-blue-500 rounded px-2 py-1 text-white">Create post</button>
          </div>
        </div>
        <section className="w-[60%] mx-auto flex justify-between">
        <FimlistCom data={data}/>
      </section>
      </section>
        </main>
    </>
  );
}
