import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "../components/Footer.jsx";

const Root = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;