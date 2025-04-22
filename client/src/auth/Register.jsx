import React from "react";
import { Link } from "react-router";
import useForm from "../hook/useForm.js";

const Register = () => {
    const initialState = { userName: "", email: "", password: "" };
    const requestedMethod = "POST";
    const url = `${import.meta.env.VITE_API_BASE_URL}/auth/register`;
    const formType = "register";
    const { values, handleChange, handleSubmit } = useForm(initialState, requestedMethod, url, formType);

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={values.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
            <hr />
            <div>
                <p>
                    <span>Already have an account?</span>
                    <span><Link to={'/account/login'}>Login</Link></span>
                </p>
            </div>
        </div>
    );
}

export default Register;