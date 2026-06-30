import CommentRepository from "./comment.Repo.js";



export class CommentController {

  async addComment(req, res) {
    try {

      const userId = req.id;
      const blogId = req.params.blogId;

      const { comment } = req.body;

      const data = {
        comment,
        user: userId,
        blog: blogId
      };

      const result =
        await CommentRepository.addComment(data);

      return res.status(201).json({
        success: true,
        data: result
      });

    } catch (err) {

      return res.status(400).json({
        success: false,
        message: err.message 
      });

    }
  }

  async getcomment(req,res){

    try{
        const blog_Id = req.params.blogId;
       const result = await CommentRepository.getcomment(blog_Id);
       return res.status(201).json({
        success: true,
        data: result
      });
    } catch(err){
       return res.status(400).json({
        success: false,
        message: err.message 
      });
    }
    
  }


}

export default new CommentController();