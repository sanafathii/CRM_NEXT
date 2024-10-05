import mongoose from "mongoose";

export default async function connectDB(params) {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect(process.env.URI_DB);
        console.log("Connected to DB!!");
    } catch (error) {
        console.log(error);
    }
}