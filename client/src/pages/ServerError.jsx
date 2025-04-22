import React from "react";
import { useNavigate } from "react-router";

const ServerError = () => {
    const navigate = useNavigate();
    const retry = () => {
        navigate('/');
    }

    return (
        <div className="server-error">
            <h1>500 - Server Error</h1>
            <p>We're unable to connect to the server at the moment. Please try again later.</p>
            <button onClick={retry}>Retry</button>
        </div>
    );
}

export default ServerError;