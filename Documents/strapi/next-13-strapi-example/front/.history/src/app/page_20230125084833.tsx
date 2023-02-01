import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { fetcher } from "../../lib/api";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  // fetch films from Strapi
  let data = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  console.log("films:", data.data);
  return (
    <>
      <header className="bg-black">
        <nav className="flex justify-between py-2 px-1">
          <div className="logo">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg">PNC Film</h1>
          </div>
          <ul className="px-2 flex text-white">
            <li className="p-2 rounded bg-clip-border text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-lg text-white">Sign In</li>
           
          </ul>
        </nav>
      </header>
      <main className="bg-black">
        <div className="banner absolute z-[-100]">
          <Image className="w-full" width={1500} height={1000} src="https://cnbl-cdn.bamgrid.com/assets/60c53d45f6f0546647ddd4e006a207c713d149586cea401fdc0152f2fa9263a6/original" alt="banner"/>

        </div>
        <section className="w-full grid grid-cols-6 gap-2">
          {data.data.map((movie: any) => {
            return (
              <div className="p-2 movie-card rounded-sm text-gray-500">
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
                <p>Director : {movie?.attributes.Director}</p>
              </div>
            );
          })}
          {/* movie card*/}
        </section>
      </main>
    </>
  );
}
