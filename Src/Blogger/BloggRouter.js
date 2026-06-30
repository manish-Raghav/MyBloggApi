import express from "express";
import Bloggcontroller from "./Bloggcontroller.js";
import { uplodimg } from "../Middleware/Imageupload.midlleware.js";
import jwttoken from "../Middleware/Authentication.js";

const Blogroute = express.Router();
const obj = new Bloggcontroller();
Blogroute.post("/"  ,jwttoken, uplodimg.single("imgurl"), obj.Pushdata.bind(obj));
Blogroute.get("/", obj.getAlldata.bind(obj));
Blogroute.delete("/:id",jwttoken, obj.deleteBlog.bind(obj));
// route.delete("/", obj.DeleteBlog.bind(obj));

export default Blogroute;
