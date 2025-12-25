import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    console.log(user);
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
        createUser
    }
    return <AuthContex value={authData}>{children}</AuthContex>

};

export default AuthProvider;