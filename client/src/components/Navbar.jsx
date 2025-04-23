import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaHome, FaUserPlus } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuth } from "../store/context/auth-context";

const Navbar = () => {
    const { isLogIn, isLoadingUserData, loginUserData } = useAuth();
    const [showRegisterTooltip, setShowRegisterTooltip] = useState(false);
    const [showLogoutTooltip, setShowLogoutTooltip] = useState(false);

    useEffect(() => {
        setShowRegisterTooltip(false);
        setShowLogoutTooltip(false);
    }, [isLogIn]);

    if (isLoadingUserData) return <p>Loading...</p>;
    return (
        <nav className="bg-blue-600 text-white px-5 sm:px-10 py-5 flex items-center justify-between shadow-md">
            <h1 className="text-lg font-bold whitespace-nowrap">Todo App</h1>
            <ul className="flex gap-0 sm:gap-2 text-lg">
                {!isLogIn ? (
                    <li
                        className="relative"
                        onMouseOver={() => setShowRegisterTooltip(true)}
                        onMouseLeave={() => setShowRegisterTooltip(false)}
                    >
                        <div className={`hover:bg-white hover:text-blue-600 rounded transition ${showRegisterTooltip ? "bg-white text-blue-600" : "text-white"}`}>
                            <Link to={"/account/login"} className="w-full px-2.5 py-0.5 flex items-center gap-1 cursor-pointer">
                                <i><FaUserPlus /></i>
                                <p>Login</p>
                            </Link>
                        </div>
                        {showRegisterTooltip && (
                            <div
                                className="absolute top-full left-1/2 -translate-x-1/2 bg-blue-50 text-blue-700 px-3 py-2 text-sm rounded z-10 whitespace-nowrap text-center cursor-pointer"
                                onMouseOver={() => setShowRegisterTooltip(true)}
                                onMouseLeave={() => setShowRegisterTooltip(false)}
                            >
                                <p className="mb-1">Don't have an account?</p>
                                <Link to={"/account/register"} className="text-blue-600 hover:bg-blue-600 hover:text-white font-medium px-1.5 py-0.5">Register</Link>
                            </div>
                        )}
                    </li>
                ) : (
                    <li
                        className="relative"
                        onMouseOver={() => setShowLogoutTooltip(true)}
                        onMouseLeave={() => setShowLogoutTooltip(false)}
                    >
                        <div className={`hover:bg-white hover:text-blue-600 px-2.5 py-0.5 rounded transition flex items-center gap-1 cursor-pointer ${showLogoutTooltip ? "bg-white text-blue-600" : "text-white"}`}>
                            <i><FaUserPlus /></i>
                            <p className="whitespace-nowrap">{loginUserData?.userData?.userName}</p>
                        </div>
                        {showLogoutTooltip && (
                            <Link
                                to={"/account/logout"}
                                className="absolute top-full left-1/2 -translate-x-1/2 bg-blue-50 text-blue-700 px-3 py-2 rounded z-10 whitespace-nowrap text-md flex items-center justify-center gap-2 cursor-pointer"
                                onMouseOver={() => setShowLogoutTooltip(true)}
                                onMouseLeave={() => setShowLogoutTooltip(false)}
                            >
                                <i className="rotate-270"><RiLogoutCircleRLine /></i>
                                <p>Logout</p>
                            </Link>
                        )}
                    </li>
                )}
                <li className="hover:bg-white hover:text-blue-600 active:bg-white active:text-blue-600 text-white rounded transition">
                    <Link to={"/"} className="w-full px-2.5 py-0.5 flex items-center gap-1 cursor-pointer">
                        <i><FaHome /></i>
                        <p>Home</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
