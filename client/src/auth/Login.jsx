import React from "react";
import { Link } from "react-router";
import useForm from "../hook/useForm.js";

const Login = () => {
    const initialState = { email: "", password: "" };
    const requestedMethod = "POST";
    const url = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
    const formType = "login";
    const { values, handleChange, handleSubmit } = useForm(initialState, requestedMethod, url, formType);

    return (
        <div className="w-full max-w-md mx-auto mt-10 mb-20 p-4 bg-white rounded-lg shadow-none sm:shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 text-gray-700 font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        minLength={4}
                        maxLength={25}
                        autoComplete="off"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white mt-2 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">Login</button>
            </form>
            <hr className="my-6 border-t-2 border-dotted border-gray-300" />
            <div>
                <p className="flex items-center justify-center gap-2">
                    <span>Don't have an account?</span>
                    <span><Link to={'/account/register'} className="text-blue-600 hover:underline font-semibold">Register</Link></span>
                </p>
            </div>
        </div>
    );
}

export default Login;