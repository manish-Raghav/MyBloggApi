import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/BloggDB";

export const mongooseConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Mongoose connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};