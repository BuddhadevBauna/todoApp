import mongoose from "mongoose";
import Todo from "../../models/todo-model.js";

const updateTodoStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const userId = req.user.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Task ID." });
        }

        const updatedTodo = await Todo.findOneAndUpdate(
            {_id: id, userId},
            {status},
            {new: true}
        );
        if (!updatedTodo) return res.status(404).json({ message: "Task not found" });
        
        return res.status(200).json({ message: `Task mark as ${status}.`, todo: updatedTodo });
    } catch (error) {
        return res.status(500).json({ message: "Server error." });
    }
}

export default updateTodoStatus;