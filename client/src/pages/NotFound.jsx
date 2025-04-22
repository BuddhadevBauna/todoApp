import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center px-4">
            <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
                Go Home
            </Link>
        </div>
    );
}

export default NotFound;