import Todo from "../../models/todo-model.js";

const getTodos = async (req, res) => {
    try {
        const userId = req.user.id;

        const todos = await Todo.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json({todos});
    } catch (error) {
        return res.status(500).json({ message: "Server error." });
    }
}

export default getTodos;