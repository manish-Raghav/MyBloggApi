 import express from 'express'

import jwttoken from '../Middleware/Authentication.js';
import { LikeController } from './LikeController.js';

 const LikeRouter = express.Router()
 const likecontrol = new LikeController()
 LikeRouter.post("/",jwttoken,likecontrol.addlike)
 LikeRouter.delete(
  "/:blogid",
  jwttoken,
  likecontrol.unlike
);


export default LikeRouter
 