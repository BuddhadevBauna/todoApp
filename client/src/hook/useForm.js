import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAuth } from "../store/context/auth-context.jsx";

const useForm = (initialState, requestedMethod, url, formType) => {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: requestedMethod.toLowerCase(),
                url: url,
                data: values,
                headers: {
                    'Content-Type': "application/json"
                }
            });
            if(response.status >= 200 && response.status <= 300) {
                toast.success(response?.data?.message);
                setValues(initialState);
                if(formType === "register") {
                    navigate('/account/login');
                } else if(formType === "login") {
                    storeTokenInLS(response?.data?.token);
                    navigate('/');
                }
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return { values, handleChange, handleSubmit };
}

export default useForm;