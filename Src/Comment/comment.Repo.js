import { commentmodel } from "./comment.schema.js";



export class CommentRepository {

  static async addComment(data) {

    try {

      const newComment = new commentmodel(data);

      return await newComment.save();

    } catch (err) {
      throw err;
    }
  }


   static async getdata(blog_Id){
           const dt = await commentmodel.find({blog_Id}).populate("user","name,email")
           return dt;
   }
}

export default CommentRepository;