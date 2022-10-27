import React from 'react';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../Components/Firebase/firebase.config';
import { useState } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)
    const authInfo = { user, setUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;