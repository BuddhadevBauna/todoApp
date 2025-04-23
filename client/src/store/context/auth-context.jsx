import axios from "axios";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('jwtToken'));
    const [isLogIn, setLogIn] = useState(false);
    const [isLoadingUserData, setIsLoadingUserData] = useState(true);
    const [loginUserData, setLoginUserData] = useState(null);

    const storeTokenInLS = (token) => {
        setToken(token);
        setIsLoadingUserData(true);
        localStorage.setItem('jwtToken', token);
    };

    const removeTokenFromLS = () => {
        setToken(null);
        setIsLoadingUserData(true);
        localStorage.removeItem('jwtToken');
    }

    const fetchLoggedinUserData = useCallback(async () => {
        if(token) {
            try {
                const url = `${import.meta.env.VITE_API_BASE_URL}/auth/user`;
                const response = await axios.get(url, {
                    headers: { Authorization : `Bearer ${token}`}
                });
                if (response?.status >= 200 && response?.status <= 300) {
                    setLogIn(true);
                    setLoginUserData(response.data);
                }
            } catch (error) {
                setLogIn(false);
                setLoginUserData(null);
            } finally {
                setIsLoadingUserData(false);
            }
        } else {
            setLogIn(false);
            setLoginUserData(null);
            setIsLoadingUserData(false);
        }
    }, [token]);

    useEffect(() => {
        fetchLoggedinUserData();
    }, [token]);

    return (
        <AuthContext.Provider value={{
            token, isLogIn, isLoadingUserData, loginUserData, storeTokenInLS, removeTokenFromLS
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);