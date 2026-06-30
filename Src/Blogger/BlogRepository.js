
import { Blog } from "./Blog.Modle.js";

export class BlogRepository {
  static async addblog(mydt) {
    console.log('blogRepositury in console and', mydt);
    
    try{

      const newBlog = new Blog(mydt);
         const result = await newBlog.save();
       return  result

    } catch(err){
         console.log('error in Blogrepo',err);
         throw err;
        
    };    
    }
  static async getallblog() {
     try{
      const alldata = await Blog.find() ; 
    return alldata;
  
    } catch(err){
           return {
         success: false,
        message: " there is some error ",
        
    };  
  }
}

   static async updatedt(id) {


   }


  static async deleteBlog(product_id, user_id) {
  try {

    const deletedBlog =
      await Blog.findOneAndDelete({
        _id: product_id,
        user: user_id
      });

    if (!deletedBlog) {
      throw new Error(
        "Blog not found or unauthorized"
      );
    }

    return deletedBlog;

  } catch (err) {
    throw err;
  }
}
}
