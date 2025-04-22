import React from "react";
import { useAuth } from "../store/context/auth-context.jsx";

const ProtectedRoot = ({children}) => {
    const { isLogIn, isLoadingUserData } = useAuth();
    
    if(isLoadingUserData) return <p>Loading...</p>;
    if(!isLogIn) return <p>You must be logged in to access this page.</p>;
    return children;
}

export default ProtectedRoot;