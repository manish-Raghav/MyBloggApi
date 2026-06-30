import express from "express";


import { CommentController } from "./comment.controller.js";
import jwttoken from "../Middleware/Authentication.js";
 
const Commentrouter = express.Router();
   const commentobj = new CommentController()
Commentrouter.post(
  "/:blogId",
  jwttoken,
  commentobj.addComment
);

Commentrouter.get(
  "/:blogId",
  commentobj.getcomment
);

export default Commentrouter;