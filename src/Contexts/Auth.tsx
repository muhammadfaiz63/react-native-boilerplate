import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';


const AuthContext = createContext({});

function AuthProvider(props) {
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(false);

    const signIn = useCallback(async (email, password) => {
        try {

        } catch (error) {
            return error
        }

    }, []);

    const signOut = useCallback(() => {

    }, []);


    return (
        <AuthContext.Provider value={{ token, signIn, signOut, loading }} {...props} />
    );
}

const useAuth = () => useContext(AuthContext);

export const AuthContexts = {
    AuthProvider, useAuth
}

export default AuthContexts
