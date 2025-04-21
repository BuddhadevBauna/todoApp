import Todo from "../../models/todo-model.js";

const addTodo = async (req, res) => {
    try {
        const {title} = req.body;
        const userId = req.user.id

        const newTodo = new Todo({userId, title});
        await newTodo.save();

        return res.status(201).json({ message: "Task added successfully", todo: newTodo });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
}

export default addTodo;