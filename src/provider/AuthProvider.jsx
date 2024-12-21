import React, { createContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import toast from 'react-hot-toast';



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
                setLoading(false)
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
            userLogout,
            handleGoogle
        }

        console.log(user)
        return (
            <AuthContext.Provider value={authInfo}
            >{children}</AuthContext.Provider>
        );
    };

    export default AuthProvider;