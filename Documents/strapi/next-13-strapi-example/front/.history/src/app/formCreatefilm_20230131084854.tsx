'use client'

import { useEffect, useState } from "react";
import axios from 'axios';

const FormCreateFilmCom = () => {
  const [film, setFilm] = useState({
    title:'',
    director:'',
    poster:'',
    released:''
  });
  const [isCreate, setIsCreated] = useState(false);
  const [isFailed, setIsFailed]= useState(false)
  const [image, setImage] = useState(null);
  const handleInputs = (e:any)=>{
        setFilm({...film, [e.target.name]:e.target.value})
      console.log('input name '  , e.target.files);
  }
  const handleUploadImageToClient = (e:any)=>{
    if(e.target.files && e.target.files[0]){
      const tmpImage = e.target.files[0];
      setImage(tmpImage)
    }
  }
  /// function handleUploadImage
  const handleSumit = async(e:any)=>{
    e.preventDefault();
    if(image){
      axios(
       {
          url:`http://localhost:1337/api/films`,
        
        method: 'POST',
        data:JSON.stringify({
          'data':{
              title:film.title,
              director:film.director,
              released:film.released
          }
        }),
        headers:{
          'Content-Type': 'application/json',
          Authorization:'bareer'
        }
 
        }
      ).then(res=>{
        return res.data.data.id;
        console.log(res)
      })
      .then(refId=>{
        // create image obj
        const formData = new FormData();
        formData.append('files',image);
        formData.append('ref','api:film.film');
        formData.append('refId',refId);
        formData.append('field','poster');
        // sent image file to server to store
        return axios(
          {
          url:`http://localhost:1337/api/upload/`,
          method: 'POST',
          data:formData
         ,
          headers:{
            'Content-Type':'multipart/form-data'
          }
          }
        )
      })
      .then(res=>{
        setIsCreated(true);
        close()
      })
      .catch(error=>{
        console.log(error);
        setIsFailed(true);
      })
    }else{
      alert(
        'please fill image'
      )
    }
  }
  // handle show form
  const [isShow, setIsShow] = useState(false);

  useEffect(() =>{
    const handleShowForm =(e:any)=>{
      if(e.target.id!='form-create'){
        alert('it is not a form')
      }
    };
    document.addEventListener('click',handleShowForm);
    return ()=>{
      document.removeEventListener('click',handleShowForm);
    } 
  },[])

    return ( 

      <section>
        <div className="mx-auto">
          <div className="w-1/3  mx-auto flex justify-end">
          <button className="bg-blue-500 rounded px-2 py-1 text-white">Create post</button>
          </div>
        </div>
        <section className="fixed bg-white/10 w-full h-[100vh] z-[1000]">


        <form onSubmit={handleSumit} id='form-create'  className={`top-[50%] left-[50%] transition translate-x-[-50%] translate-y-[-90%] fixed  z-[100]  rounded md:w-1/4 border p-2 bg-white`} method="POST">
        <div>
        <h1 className="text-center text-lg">Film</h1>
      </div>
      <div className="mt-4 row-span-1 grid grid-cols-2 gap-1">
        {/* title */}
        <input
          className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          id="title"
          
          name="title"
          type="text"
          onChange={handleInputs}
          placeholder="title"
          />
        {/* director  */}
        <input
          className="block px-1 py-2 rounded-sm w-full flex-1 outline outline-1 outline-offset-0 outline-gray-300 sm:text-sm focus:outline-indigo-500 bg-white/10 backdrop-blur-sm"
          id="director"
          
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
          type="date"
          onChange={handleInputs}
          placeholder="released"
          />
      </div>

      {/* // upload image */}
      <div className="mt-4 row-span-1 ">
        <input type="file" 
         onChange={
           handleUploadImageToClient
          }
          />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          className="w-full py-1 rounded-sm text-white text-sm bg-indigo-600"
          
          >
          Submit
        </button>
      </div>
      </form>
      </section>
      </section>
     
     );
    }
    
    export default FormCreateFilmCom;