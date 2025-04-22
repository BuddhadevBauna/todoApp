import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/context/auth-context";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ task, setTasks }) => {
    const { _id, title } = task;
    const [status, setStatus] = useState(task?.status);
    const { token } = useAuth();

    const handleStatusChange = async () => {
        try {
            const newStatus = status === "complete" ? "incomplete" : "complete";
            const url = `${import.meta.env.VITE_API_BASE_URL}/todos/${_id}`;
            const response = await axios.patch(url, { status: newStatus }, {
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
        <li className="flex items-center justify-between bg-gray-100 rounded-md p-3 mb-2 shadow-sm hover:bg-gray-200 transition">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={status === "complete"}
                    onChange={() => handleStatusChange()}
                    className="w-5 h-5 cursor-pointer"
                />
                <p className={`text-gray-800 ${status === "complete" ? "line-through text-gray-400" : ""}`}>
                    {title}
                </p>
            </div>
            <button onClick={() => handleDeleteTask()} className="text-red-500 hover:text-red-700 transition cursor-pointer">
                <i><FaTrashAlt /></i>
            </button>
        </li>
    );
}

export default TodoItem;