import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../Components/Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User inside state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { user, setUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;