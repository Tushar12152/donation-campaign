import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "./firebase/Firebase.config";
 

 export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)

   const register=(email,password)=>{
    setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }
   const logIn=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
   }
   const logout=()=>{
    setLoader(true)
    return signOut(auth)
   }

   useEffect(()=>{

         const unSubscribe=onAuthStateChanged(auth,(user)=>{
                    setUser(user)
                    setLoader(false)
         })

         return ()=>{
            unSubscribe()
         }
   },[])
//    console.log(28,user)


    const authorization={
           register,
           logIn,
           user,
           logout,
           loader,


    }
    return (
        <AuthContext.Provider value={authorization}>
                 {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node.isRequired
}
export default AuthProvider;