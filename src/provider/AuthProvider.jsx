import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // console.log(user);

    // log in with google 
    const googleLogIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider)
    }
    // github log in 
    const gitHubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // forget password 
    const forgetsPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (usersData) => {
        return updateProfile(auth.currentUser, usersData)
    }
    const logOutUser = () => {
        setLoader(true);
        return signOut(auth)
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setLoader(false);
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        createUser,
        logOutUser,
        loginUser,
        loader,
        updateUserProfile,
        googleLogIn,
        gitHubLogin,
        forgetsPassword
    }
    return <AuthContex value={authData}>{children}</AuthContex>

};

export default AuthProvider;