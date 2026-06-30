

import { BlogRepository } from "./BlogRepository.js";

class Bloggcontroller {
  async Pushdata(req,res){
      // console.log("Blogger push data",req.id);
      
      try{
        const {title,auther,content,category}=req.body;
        const imgurl=req.file?.filename;

        const blogData={
            title,
            imgurl,
            auther,
            content,
            category,
             user: req.id
        };

        const result=await BlogRepository.addblog(blogData);

        return res.status(201).json({
            success:true,
            data:result
        });

    }
    catch(err){

        return res.status(400).json({
            success:false,
            message:err.message
        });

    }

}

  async getAlldata(req, res) {
    const alldt = await BlogRepository.getallblog();
    // console.log("all blog data is here you to just check", alldt);

    res.status(200).json({ status: "sucessesfull", msg: alldt });
  }



  

  async deleteBlog(req, res) {

  try {
      console.log('welcome to deleteBlog--->');
      
     const blogid =req.params.id;
      const userid = req.id;
     
    
    const result = await BlogRepository.deleteBlog(blogid,userid);
     console.log('welcome to deleteBlog--->',result);
    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: result
    });

  } catch (err) {

    return res.status(404).json({
      success: false,
      message: err.message
    });

  }

}
}

export default Bloggcontroller;
