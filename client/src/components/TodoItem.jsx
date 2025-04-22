import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/context/auth-context";

const TodoItem = ({ task, setTasks }) => {
    const { _id, title } = task;
    const [status, setStatus] = useState(task?.status);
    const {token} = useAuth();

    const handleStatusChange = async () => {
        try {
            const newStatus = status === "complete" ? "incomplete" : "complete";
            const url = `${import.meta.env.VITE_API_BASE_URL}/todos/${_id}`;
            const response = await axios.patch(url, {status: newStatus}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response?.status >= 200 && response?.status <= 300) {
                toast.success(response?.data?.message);
                setStatus(response?.data?.todo?.status);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const handleDeleteTask = async () => {
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/todos/${_id}`;
            const response = await axios.delete(url, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response?.status >= 200 && response?.status <= 300) {
                toast.success(response?.data?.message);
                setTasks((prevTasks) => prevTasks.filter(task => task._id !== _id));
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={status === "complete"}
                onChange={() => handleStatusChange()}
            />
            <p>{title}</p>
            <button onClick={() => handleDeleteTask()}>Delete</button>
        </li>
    );
}

export default TodoItem;