import express from "express";
import Bloggcontroller from "./Bloggcontroller.js";
import { uplodimg } from "../Middleware/Imageupload.midlleware.js";

const route = express.Router();
const obj = new Bloggcontroller();
route.post("/", uplodimg.single("imgurl"), obj.Pushdata.bind(obj));
route.get("/", obj.getAlldata.bind(obj));
// route.delete("/", obj.DeleteBlog.bind(obj));

export default route;
