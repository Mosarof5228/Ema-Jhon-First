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

    const createUserNew = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginHandler = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut = () => {
        return signOut(auth);
    }

    //observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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
        logOut
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