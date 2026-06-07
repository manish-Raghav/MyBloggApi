import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/BloggDB";
let myclient;

export const Mongoconnect = async () => {
  try {
    const clientInstant = await MongoClient.connect(url);
    myclient = clientInstant;
    console.log("Data connected successfully");
  } catch (err) {
    console.log("Mongo Error:", err);
  }
};

export const getDB = () => {
  // if (!myclient) {
  //   throw new Error("MongoDB not connected. Call Mongoconnect() first.");
  // }

  return myclient.db();
};
