import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    status: {type: String, enum: ['complete', 'incomplete'], default: 'incomplete'}
});

const Todo = new mongoose.model('Todo', todoSchema);
export default Todo;