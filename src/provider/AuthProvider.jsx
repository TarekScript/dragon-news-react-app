import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        createUser,
        logOutUser,
        loginUser
    }
    return <AuthContex value={authData}>{children}</AuthContex>

};

export default AuthProvider;