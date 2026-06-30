import mongoose from "mongoose";

const LikeSchema =new mongoose.Schema({
   user:{
     type:mongoose.Schema.Types.ObjectId,
     ref: "User",
     required: true
   },
   blog:{
     type:mongoose.Schema.Types.ObjectId,
     ref: "Blog",
     required: true
   }

})

LikeSchema.index({user:1,blog:1},{unique:true})

export const LikeModel = mongoose.model("likeDb",LikeSchema)