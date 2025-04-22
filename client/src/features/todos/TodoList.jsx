import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/context/auth-context.jsx";
import TodoItem from "../../components/TodoItem.jsx";
import axios from "axios";
import { toast } from "react-toastify";

const TodoList = () => {
    const { isLogIn, token } = useAuth();
    const [tasks, setTasks] = useState([]);
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
        }
    }

    useEffect(() => {
        if (isLogIn) {
            getTodos();
        }
    }, [isLogIn]);

    const handleAddTask = async () => {
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
    }

    if(!isLogIn) return <p>You must be logged in to access this page.</p>;
    return (
        <div>
            <h2>To-Do List</h2>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter your task..."
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
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