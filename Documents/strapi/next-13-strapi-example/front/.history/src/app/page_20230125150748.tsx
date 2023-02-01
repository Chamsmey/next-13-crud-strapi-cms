import Image from "next/image";
import { Inter } from "@next/font/google";
import { fetcher } from "../../lib/api";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("./layout"),{ssr:false});
import { userFetchUser } from "lib/userContext";
import FimlistCom from "./filmListCom";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // fetch films from Strapi
  let {data}:{data:Film[]} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log("films:", data);

  return (
    <>
      <RootLayout>
        <div>
          <Image
            className="w-full fixed z-[-100] top-0"
            width={1500}
            height={1000}
            src="https://cnbl-cdn.bamgrid.com/assets/60c53d45f6f0546647ddd4e006a207c713d149586cea401fdc0152f2fa9263a6/original"
            alt="banner"
          />
        </div>
        <main className="w-full">
          <FimlistCom data={data}/>
        </main>
      </RootLayout>
    </>
  );
}
