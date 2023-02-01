import Image from "next/image";

const FimlistCom = ({data}:{data:Film[]}) => {
    return (  
        <section className="w-[80%] mx-autos grid grid-cols-6 gap-2">
        {data.map((movie) => {
          return (
            <div
              key={movie?.id}
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
                <div>
                <h1>Title : {movie?.attributes?.title}</h1>
                <p>Director : {movie?.attributes.director}</p>

                </div>
            </div>
          );
        })}
        {/* movie card*/}
      </section>

    );
}
 
export default FimlistCom;