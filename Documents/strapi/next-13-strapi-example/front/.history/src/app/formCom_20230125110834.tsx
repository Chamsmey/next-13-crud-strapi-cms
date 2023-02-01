
'use client'

import { fetcher } from "lib/api";
import { useState } from "react";

const FormCom = () => {

    const [user, setUser] = useState({
        identifier:'',
        password:''
    })
    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        const user  = fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`
            ,
            {
                method:'POST',
                    header:{
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify({
                        identifier: user.identifier,
                        password: user.password
                    })
            }
            )
    }
    return (  

        <form action="handleSubmit">

            <label htmlFor="username">
                <input id='username' type="text" placeholder="your name" />
            </label>
            <label htmlFor="password">
                <input id="password" type="password" placeholder="password" />
            </label>
            <button type="submit">Login</button>
        </form>

    );
}
 
export default FormCom;