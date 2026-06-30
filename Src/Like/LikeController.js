import { LikeRepo } from "./LikeRepo.js";

export class LikeController{
    async addlike(req,res){

        try{
          const blog_id = req.params.blogid;
          const user_id =req.id;
        const respolike = await LikeRepo.postLike(blog_id,user_id)
          res.status(201).json({
          success: true,
         data: result,
       });
        } catch (err) {
       res.status(400).json({
      success: false,
      message: err.message,
    });
  }
        
          
    }


     async unlike(req,res){
            try{
           const blog_id = req.params.blogid;
           const user_id =req.id;
           const result = await LikeRepo.removelike(blog_id ,user_id)
         res.status(201).json({
          success: true,
         data: result,
       });
        } catch (err) {
         res.status(400).json({
         success: false,
         message: err.message,
         });

        }

     }
}