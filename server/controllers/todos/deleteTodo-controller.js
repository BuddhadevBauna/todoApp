import mongoose from "mongoose";
import Todo from "../../models/todo-model.js";

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Task ID." });
        }

        const deletedTodo = await Todo.findOneAndDelete({_id: id, userId});

        if (!deletedTodo) return res.status(404).json({ message: "Task not found." });
        return res.status(200).json({ message: "Task deleted successfully", todo: deletedTodo });
    } catch (error) {
        res.status(500).json({ message: "Server error." });
    }
}

export default deleteTodo;