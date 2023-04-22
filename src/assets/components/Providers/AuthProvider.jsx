import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app)
export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
    // const user = { displayName: "Md.Mosarof" }
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUserNew = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginHandler = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut = () => {
        return signOut(auth);
    }

    //observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        //stop observing while unmounting
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUserNew,
        loginHandler,
        logOut,
        loading
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;