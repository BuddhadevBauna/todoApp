import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import statusRoute from "./routes/status-router.js";
import authRoute from "./routes/auth-router.js";
import error from "./middlewares/error-middleware.js";
import todoRoute from "./routes/todo-router.js";

const app = express();

app.use(express.json());
const allowedOrigins = (process.env.CLIENT_ORIGINS || 'http://localhost:5173').split(',');
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET, POST, PATCH, PUT, DELETE"
}));

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
