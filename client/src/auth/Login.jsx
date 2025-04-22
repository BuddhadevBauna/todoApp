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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <hr />
            <div>
                <p>
                    <span>Don't have an account?</span>
                    <span><Link to={'/account/register'}>Register</Link></span>
                </p>
            </div>
        </div>
    );
}

export default Login;