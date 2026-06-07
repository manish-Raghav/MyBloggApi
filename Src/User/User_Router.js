import express from "express";
import Usercontroller from "./User_controller.js";
const objuser = new Usercontroller();
const userroutet = express.Router();
// userroutet.get("/", );

userroutet.post("/signup", objuser.Signup.bind(objuser));
userroutet.post("/signin", objuser.Signin);

export default userroutet;
