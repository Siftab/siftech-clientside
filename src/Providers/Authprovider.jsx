import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from '../../firebase.config';
const Authprovider = ({children}) => {
    const [user,SetUser]=useState({});
    
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    const GoogleSignUp=()=>{
        const Provider =new GoogleAuthProvider();
        return signInWithPopup(auth,Provider)
        
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                console.log(currentUser)
                // if(currentUser){
                    SetUser(currentUser);
                // }
            
            setLoading(false);
           
        });
        return ()=>unsubscribe();
    },[user])





    const info={
        user,
        createUser,
        logInUser,
        GoogleSignUp,
        logOut,
        loading,
        SetUser
      
    }
    return (
        <AuthContext.Provider value={info}>
            {
             children
            }
        </AuthContext.Provider>
    );
};

export default Authprovider;