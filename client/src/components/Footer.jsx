import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center h-10 fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center">
            <p className="text-sm">
                <span>&copy; {new Date().getFullYear()}</span>
                <span className="font-semibold"> Todo App. All rights reserved.</span>
            </p>
        </footer>
    );
}

export default Footer;