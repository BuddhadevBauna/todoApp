import "dotenv/config";
import express from "express";
import { connectDB } from "./utils/db.js";
import statusRoute from "./routes/status-router.js";
import authRoute from "./routes/auth-router.js";
import error from "./middlewares/error-middleware.js";
import todoRoute from "./routes/todo-router.js";

const app = express();

app.use(express.json());

app.use('/status', statusRoute);
app.use('/auth', authRoute);
app.use('/todos', todoRoute);

app.use(error);

const startServer = async () => {
    await connectDB();
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server running on port ${port}...`);
    });
}
startServer();
