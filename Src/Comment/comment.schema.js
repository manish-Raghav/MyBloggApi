import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
   comment: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 500
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const commentmodel = mongoose.model("commnet",CommentSchema)