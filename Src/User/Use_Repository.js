import { getDB } from "../Config/confi.js";
import Usermodule from "./User_Module.js";

export default class UserRepository {
  static async Signnup(dt) {
    console.log("from repository to dt", dt);

    try {
      const db = getDB();
      const collection = db.collection("User");

      const user = await collection.findOne({ email: dt.email });
      if (user) {
        return {
          success: false,
          message: "User already exists",
        };
      }
      const result = await collection.insertOne(dt);
      return {
        success: true,
        message: "Signup successful",
        user: result.insertedId,
      };
    } catch (err) {
      console.log(err);

      return {
        success: false,
        message: "Something went wrong",
      };
    }
  }

  static async Signin(email, password) {
    console.log(" Sign in repository to dt", email, password);

    try {
      const db = getDB();
      const collection = db.collection("User");

      const user = await collection.find({ email: email });

      if (!user) {
        return {
          success: false,
          message: "User not found",
        };
      }

      if (user.password != password) {
        return {
          success: false,
          message: "Invalid password",
        };
      }

      return {
        success: true,
        message: "Login successful",
        user,
      };
    } catch (err) {
      console.log(err);

      return {
        success: false,
        message: "Something went wrong",
      };
    }
  }
}
