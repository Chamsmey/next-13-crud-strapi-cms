import { useContext, useEffect,useState } from "react";
import { createContext } from "vm";
import { getUserFromLocalCookies } from "./auth";

let userState;

// to apply this user to etire application
const User = createContext({user:null, loading:false});


// wrap user provider to all paths 

export const userProvider = ({value,children}) =>{
    const {user } = value;
    useEffect(()=>{

        if(!userState && user ){
            userState = user;
        }

    },[])
// children are all components or path of the page
    return <User.Provider value={value} children={children}></User.Provider>
} 
// useUser is custom hook

export const useUser = ()=> useContext(User);

// to grab or catch the user if exists
export const useFetchUser = ()=>{
        const [user, setUser] = useState({
            user:userState||null,
            loading:userState===undefined
        });

        useEffect(()=>{
            if(userState!==undefined){return}
            let isMounted = true;

            // get user from local cookies
            const user = getUserFromLocalCookies();
            if(isMounted ) {
                setUser({user,loading:false})
            }
            return ()=>{
                isMounted = false;
            }
        },[])

    return user
}


