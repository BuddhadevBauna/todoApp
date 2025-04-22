import React from "react";
import { useAuth } from "../store/context/auth-context.jsx";

const ProtectedRoot = ({ children }) => {
    const { isLogIn, isLoadingUserData } = useAuth();

    if (isLoadingUserData) return <p>Loading...</p>;
    if (!isLogIn) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
                <p className="text-xl font-semibold text-red-600 mb-4">
                    You must be logged in to access this page.
                </p>
            </div>
        )
    };
    return children;
}

export default ProtectedRoot;