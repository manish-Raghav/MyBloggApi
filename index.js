import express from "express";
import route from "./Src/Blogger/BloggRouter.js";
import userroutet from "./Src/User/User_Router.js";
import jwttoken from "./Src/Middleware/Authentication.js";
import { Mongoconnect } from "./Src/Config/confi.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/user", userroutet);
server.use("/api/blogg", jwttoken, route);

server.listen(3000, () => {
  console.log("server is running on 3000");
  Mongoconnect();
});
