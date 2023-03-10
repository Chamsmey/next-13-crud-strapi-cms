"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Film } from "types/film";
interface FormUpdateProps{
    data:any,
    id:string,
    isUpdated:boolean,
    handlerUpdateStatus:() => void;
}
const FormEditFilmCom = ({data,id,isUpdated,handlerUpdateStatus}:FormUpdateProps) => {
  const router = useRouter();
  const [isUpdate,setIsUpdate] = useState(false);
  const [film, setFilm] = useState({
    title: "",
    director: "",
    released:new Date,
  });
  const [isCreate, setIsCreated] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [image, setImage] = useState(null);
  const handleInputs = (e: any) => {
    setFilm({ ...film, [e.target.name]: e.target.value });
    console.log("input name ", e.target.files);
  };
  const handleUploadImageToClient = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const tmpImage = e.target.files[0];
      setImage(tmpImage);
      console.log(image);
    }
  };
  useEffect(()=>{
    const updateFilm = () => {
      if(data!==null){
          setIsUpdate(true);
          setFilm({...film,
            title:data.attributes.title,
            director: data.attributes.director,
            released:data.attributes.released,
      })
          console.log('data',data);
      }
      else{
          setIsUpdate(false);
    }
  }
  updateFilm()
  },[data])
  /// function handleUploadImage
  const handleSumit = async (e: any) => {
    e.preventDefault();
    if (image) {
      axios({
        url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/films/${id}`,

        method: "PUT",
        data: JSON.stringify({
          data: {
            title: film.title,
            director: film.director,
            released: film.released,
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "bareer",
        },
      })
        .then((res) => {
          return res.data.data.id;
        console.log(res);
        })
        .then((refId) => {
          console.log("???? ~ file: formCreatefilm.tsx:53 ~ .then ~ refId", refId)
          // create image obj
          const formData = new FormData();
          formData.append("files", image);
          // reference of api you can see in the server folder in cotroller folder 
          formData.append("ref", "api::film.film");
          // reference id of post
          formData.append("refId", refId);
          // you field name 
          formData.append("field", "poster");
          // sent image file to server to store
          if(image){
            return axios({
              url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload/files/${data?.poster?.data?.id}`,
              method: "DELETE",
            }).then(response =>{
              axios({
                url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/upload/}`,
                method: "POST",
                data: formData,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
            });

          }
        })
        .then((res) => {
          router.push('/dashboard');
          close();   
        })
        .catch((error) => {
          console.log(error);
          setIsFailed(true);
          alert(error)
        });
    } else {
      alert("please fill image");
    }
    setIsCreated(true);
    setIsShow(false)
  };
  // handle show form
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleShowForm = (e: any) => {
      if (e.target.id == "form-create") {
        setIsShow(false);
        handlerUpdateStatus();
      }
    };
    document.addEventListener("click", handleShowForm);
    return () => {
      document.removeEventListener("click", handleShowForm);
    };
  }, []);
  // handle open form
  const handleOpenForm = (e: any) => {
    setIsShow(true);
  }
  return (
    <section>
      <div className="mx-auto">
      </div>
      <section
        id="form-create"
        className={`fixed bg-black/50 w-full h-[100vh] z-20 top-0 left-0 ${
            isUpdated ? "block" : "hidden"
        }`}
      >
        <form
          onSubmit={handleSumit}
          className={`top-[50%] left-[50%] transition translate-x-[-50%] translate-y-[-90%] fixed  z-[100]  rounded md:w-1/4 border p-2 bg-white`}
          method="POST"
        >
          <div>
            <h1 className="text-center text-lg">Update</h1>
          </div>
          <div className="mt-4 row-span-1 grid grid-cols-2 gap-1">
            {/* title */}
            <input
            className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
              id="title"
              name="title"
              type="text"
              value={`${film.title}`}
              onChange={handleInputs}
              placeholder="title"
            />
            {/* director  */}
            <input
              className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
              id="director"
              value={`${film.director}`}
              name="director"
              type="text"
              onChange={handleInputs}
              placeholder="director"
            />
          </div>
          {/* released date */}
          <div className="mt-4 row-span-1 ">
            <input
              className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
              id="released"
              name="released"
              value={`${ film.released}`}

              type="date"
              onChange={handleInputs}
              placeholder="released"
            />
          </div>
          {/* // upload image */}
          <div className="mt-4 row-span-1 ">
            <input type="file"  onChange={handleUploadImageToClient} />
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="w-full py-1 rounded-sm text-white text-sm bg-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default FormEditFilmCom;
