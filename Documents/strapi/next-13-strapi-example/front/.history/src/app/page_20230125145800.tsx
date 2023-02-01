import Image from "next/image";
import { Inter } from "@next/font/google";
import { fetcher } from "../../lib/api";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("./layout"),{ssr:false});
import { userFetchUser } from "lib/userContext";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // fetch films from Strapi
  let data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log("films:", data.data);

  return (
    <>
      <RootLayout>
        <div>
          <Image
            className="w-full fixed z-[-100] top-0 h-full"
            width={1500}
            height={1000}
            src="https://cnbl-cdn.bamgrid.com/assets/60c53d45f6f0546647ddd4e006a207c713d149586cea401fdc0152f2fa9263a6/original"
            alt="banner"
          />
        </div>
        <main className="w-full">
          <section className="w-[80%] mx-autos grid grid-cols-6 gap-2">
            {data.data.map((movie: any) => {
              return (
                <div
                  key={movie?.attributes?.id}
                  className="bg-black p-2 movie-card rounded-sm text-gray-500"
                >
                  <div className="card-header">
                    <Image
                      className="w-full"
                      width={200}
                      height={200}
                      src={
                        "https://img.yts.mx/assets/images/movies/Captain_America_The_Winter_Soldier_2014/medium-cover.jpg"
                      }
                      alt="movie"
                    />
                  </div>

                  <h1>Title : {movie?.attributes?.title}</h1>
                  <h2>Released date :{movie?.attributes.released}</h2>
                  <p>Director : {movie?.attributes.director}</p>
                </div>
              );
            })}
            {/* movie card*/}
          </section>
        </main>
      </RootLayout>
    </>
  );
}
