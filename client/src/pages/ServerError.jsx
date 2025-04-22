import React from "react";

const ServerError = () => {
    const retry = () => {
        window.location.reload();
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
            <h1 className="text-5xl font-extrabold text-red-600 mb-4">500 - Server Error</h1>
            <p className="text-gray-700 text-center max-w-md mb-8">
                We're unable to connect to the server at the moment. Please try again later.
            </p>
            <button
                onClick={retry}
                className="bg-red-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-700 transition cursor-pointer"
            >
                Retry
            </button>
        </div>
    );
}

export default ServerError;