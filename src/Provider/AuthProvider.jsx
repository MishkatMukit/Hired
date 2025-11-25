import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    // console.log("from auth privider", user)
    const [loading, setLoading] = useState(true)
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const googleSignIn = () => { return signInWithPopup(auth, googleProvider) }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        // setUser(null)
        setLoading(true)
        return signOut(auth)
    }
    const updateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }
    useEffect(() => {
        const unplug = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unplug();
        }

    }, [user])

    const authInfo = {
        registerUser,
        loginUser,
        setUser,
        user,
        logoutUser,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
        isModalOpen,
        setIsModalOpen
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;