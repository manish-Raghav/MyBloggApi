import express from "express";
import Blogroute from "./Src/Blogger/BloggRouter.js";
import userroutet from "./Src/User/User_Router.js";
import jwttoken from "./Src/Middleware/Authentication.js";
import { mongooseConnect } from "./Src/Config/Mongoseconfig.js";
import Commentrouter from "./Src/Comment/commentRouter.js";
import LikeRouter from "./Src/Like/LikeRouter.js";


const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/user", userroutet);
server.use("/api/blogg", Blogroute);
 server.use("/api/comment",Commentrouter);
 server.use("/api/Like",LikeRouter);

server.listen(3000, async() => {
  console.log("server is running on 3000");
mongooseConnect()
});
