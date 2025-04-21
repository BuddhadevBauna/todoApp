import "dotenv/config";
import express from "express";
import { connectDB } from "./utils/db.js";
import statusRoute from "./routes/status-router.js";

const app = express();

app.use(express.json());

app.use('/status', statusRoute);

const startServer = async () => {
    await connectDB();
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server running on port ${port}...`);
    });
}
startServer();
