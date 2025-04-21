import mongoose from "mongoose";

let isDBConnected = false;
const connectDB = async (req, res) => {
    const URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(URI);
        isDBConnected = true;
        console.log("Database Connection Successful...");
    } catch (error) {
        isDBConnected = false;
        console.log("Database Connection Unsuccessful...", error);
    }
}

export {connectDB, isDBConnected};