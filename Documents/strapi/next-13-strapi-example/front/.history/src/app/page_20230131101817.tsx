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
      <main className="w-full bg-black/0 backdrop-blur-0">
        {/* film list */}
        <section className="lg:max-w-[1400px] md:max-w-[1200px] w-full mx-auto">
       <FormCreateFilmCom/>

        <section className="w-[80%] mx-auto flex justify-between">
        <FimlistCom data={data}/>
      </section>
    </section>
        </main>
    </>
  );
}
