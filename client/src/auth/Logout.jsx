import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../store/context/auth-context";

const Logout = () => {
    const { removeTokenFromLS } = useAuth();

    useEffect(() => {
        removeTokenFromLS();
    }, []);

    return <Navigate to={'/account/login'} replace></Navigate>;
}

export default Logout;