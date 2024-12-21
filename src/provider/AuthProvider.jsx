import React, { createContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(false)

    // email registration
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update name
    const setProfileData = (updateData)=>{
      return  updateProfile(auth.currentUser, updateData)
    }

    // logout 
    const userLogout = ()=>{
        signOut(auth)
        .then(()=>{})
    }

    // on state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [user, setUser])

    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        setProfileData,
        userLogout
    }

console.log(user)
    return (
        <AuthContext.Provider value={authInfo}
        >{children}</AuthContext.Provider>
    );
};

export default AuthProvider;