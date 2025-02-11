import React, { createContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import toast from 'react-hot-toast';
import axios from 'axios';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // email registration
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update name
    const setProfileData = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    // google 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                toast.error(error.massage)
            })
        }
        // logout 
        const userLogout = () => {
            setLoading(true)
            signOut(auth)
                .then(() => { })
        }


        // on state
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)

                if(currentUser?.email){
                    const user = {email: currentUser.email}
                     axios.post("https://assignment-11-server-neon-eta.vercel.app/jwt", user, {withCredentials: true})
                     .then((data)=>{
                        setLoading(false)
                    })
                }
                else{
                    axios.post("https://assignment-11-server-neon-eta.vercel.app/logout", {}, {withCredentials: true})
                     .then((res)=>{
                         setLoading(false)
                    })
                }

            })
            return () => {
                unsubscribe()
            }
        }, [setUser])

        const authInfo = {
            user,
            setUser,
            createUser,
            signInUser,
            setProfileData,
            userLogout,
            handleGoogle,
            loading
        }
        return (
            <AuthContext.Provider value={authInfo}
            >{children}</AuthContext.Provider>
        );
    };

    export default AuthProvider;