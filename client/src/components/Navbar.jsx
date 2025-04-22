import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <h1>Todo App</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/account/login'}>Login</Link></li>
                <li><Link to={'/account/register'}>Register</Link></li>
                <li><Link to={'/account/logout'}>Logout</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;