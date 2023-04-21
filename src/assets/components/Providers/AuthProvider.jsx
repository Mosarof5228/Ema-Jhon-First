import React from 'react';
import { createContext } from 'react';

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
    const user = { displayName: "Md.Mosarof" }
    const authInfo = {
        user,
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