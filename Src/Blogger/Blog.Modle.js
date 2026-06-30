import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [5, "Title must be at least 5 characters"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },

    imgurl: {
    type: String,
    required: [true, "Image is required"],
},

    auther: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
      minlength: [2, "Author name must be at least 2 characters"],
    },

    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [20, "Content must be at least 20 characters"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      enum: {
        values: [
          "Technology",
          "Programming",
          "Education",
          "Health",
          "Business",
          "Sports",
          "LifeStyle",
          "Other",
        ],
        message: "Invalid category",
      },
    },
   user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
    }
  },
  {
    timestamps: true,
  },
);
blogSchema.index({title:1 , category :1})

export const Blog = mongoose.model("Blog", blogSchema);
