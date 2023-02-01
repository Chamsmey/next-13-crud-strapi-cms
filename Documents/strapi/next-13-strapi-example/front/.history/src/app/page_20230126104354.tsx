import Image from "next/image";
import { Inter } from "@next/font/google";
import { fetcher } from "../../lib/api";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("./layout"),{ssr:false});
import FimlistCom from "./components/filmListCom";
const inter = Inter({ subsets: ['greek'] });
export default async function Home() {
  // fetch films from Strapi
  let {data}:{data:Film[]} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log("films:", data);

  return (
    <>
      <RootLayout>
       
        <main className="w-full">
          <FimlistCom data={data}/>
        </main>
      </RootLayout>
    </>
  );
}
