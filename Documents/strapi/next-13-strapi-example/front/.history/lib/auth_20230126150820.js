import Cookies from "js-cookie";
import { Router } from "next/router";
// store user in cookie session

export const setToken  = (data)=>{
    if(typeof window == 'underfined'){
        return;
    }

    Cookies.set('id',data.user.id);
    Cookies.set('username',data.user.username);
    Cookies.set('jwt',data.jwt);
    if(Cookies.get('username')){
        window.location.reload('http://localhost:3000/');
    }
}
// remove user from cookie session
export const unSetToken =()=>{
    if(typeof window == 'underfined'){
        return ;

    }
    Cookies.remove('id');
    Cookies.remove('jwt');
    Cookies.remove('username');
    window.location.reload('http://localhost:3000/');

} 

export const getUserFromLocalCookies =()=>{

    return Cookies.get('username');
}


export const getIFromLocalCookies =()=>{

    return Cookies.get('id');
}
export const getJWTFromLocalCookies =()=>{

    return Cookies.get('jwt');
}

