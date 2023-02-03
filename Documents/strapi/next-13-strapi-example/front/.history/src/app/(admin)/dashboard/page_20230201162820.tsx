import FimlistCom from "@/app/components/film/filmListCom";
import FormCreateFilmCom from "@/app/formCreatefilm";
import FormEditFilmCom from "@/app/formForEditFilm";
import { fetcher } from "lib/api";
import { Film } from "types/film";
const Dashboard = async () => {
        let {data}:{data:Film[]} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/films/?populate=*`);
        console.log("films:", data);
        return (
          <>
            <main className="w-full bg-black/50 backdrop-blur-0 pt-20">
              {/* film list */}
              <section className="lg:max-w-[1400px] md:max-w-[1200px] w-full mx-auto">
              <FormEditFilmCom/>
             <FormCreateFilmCom/>
              <section className="w-[80%] mx-auto flex justify-between">
              <FimlistCom data={data}/>
            </section>
          </section>
              </main>
          </>
        


     );
}
 
export default Dashboard;