import { LikeModel } from "./LikeSchema.js";

  
export class LikeRepo {
    static async postLike(user_id,blog_id,){
   
          const exstinglike=   await LikeModel.findOne({user_id,blog_id})
          if(exstinglike){
            throw new Error("Already Liked")
          }

          return await LikeModel.create(
            {user_id,blog_id}
          )
   }
    static async removelike(user_id ,blog_id){
        const exsitlike =  await LikeModel.findOne(
            {user_id ,blog_id}
          )
          if(!exsitlike){
             throw new Error("User Did'nt like")
          }
        return await LikeModel.findOneAndDelete({user_id,blog_id});
    }
       
    
}