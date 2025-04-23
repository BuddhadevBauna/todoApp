import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/context/auth-context.jsx";
import TodoItem from "../../components/TodoItem.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const TodoList = () => {
    const { isLoadingUserData, isLogIn, token } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [isTasksLoading, setTasksLoading] = useState(true);
    const [newTask, setNewTask] = useState("");

    const getTodos = async () => {
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/todos`;
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response?.status >= 200 && response?.status <= 300) {
                toast.success(response?.data?.message);
                setTasks(response?.data?.todos);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        } finally {
            setTasksLoading(false);
        }
    }

    useEffect(() => {
        if (isLogIn) {
            getTodos();
        }
    }, [isLogIn]);

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const url = `${import.meta.env.VITE_API_BASE_URL}/todos`;
            const response = await axios.post(url, { title: newTask }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response?.status >= 200 && response?.status <= 300) {
                setNewTask("");
                toast.success(response?.data?.message);
                const newTask = response?.data?.todo;
                setTasks((preveValue) => ([
                    newTask,
                    ...preveValue
                ]));
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    if (isTasksLoading) return <p>Loading...</p>;
    return (
        <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-none sm:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">To-Do List</h2>
            <form onSubmit={handleAddTask} className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    minLength={5}
                    maxLength={50}
                    placeholder="Enter your task..."
                    className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                >Add</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        setTasks={setTasks}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;