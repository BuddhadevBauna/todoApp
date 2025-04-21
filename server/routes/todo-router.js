import express from "express";
import verifyJWTToken from "../middlewares/verify-jwt-token-middleware.js";
import getTodos from "../controllers/todos/getTodos-controller.js";
import validate from "../middlewares/validate-user-provided-data-middleware.js";
import { createTodoSchema, updateTodoSchema } from "../validators/todo-validator.js";
import addTodo from "../controllers/todos/addTodo-controller.js";
import updateTodoStatus from "../controllers/todos/updateTodoStatus-controller.js";
import deleteTodo from "../controllers/todos/deleteTodo-controller.js";

const router = express.Router();

router.route('/').get(verifyJWTToken, getTodos);
router.route('/').post(verifyJWTToken, validate(createTodoSchema), addTodo);
router.route('/:id').patch(verifyJWTToken, validate(updateTodoSchema), updateTodoStatus);
router.route('/:id').delete(verifyJWTToken, deleteTodo);

export default router;