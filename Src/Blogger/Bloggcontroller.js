import { BlogModule } from "./BlogModule.js";
import { BlogRepository } from "./BlogRepository.js";

class Bloggcontroller {
  async Pushdata(req, res) {
    console.log("this is controller", req.body);

    const { title, auther, contant, category } = req.body;
    const imgurl = req.file?.filename || "";
    // const id = Bloggdt.length + 1;
    const newdata = new BlogModule(title, imgurl, auther, contant, category);
    const resdt = await BlogRepository.addblog(newdata);
    res.status(201).json({ status: "sucessesfull", msg: resdt });
  }

  async getAlldata(req, res) {
    const alldt = await BlogRepository.getallblog();
    console.log("all blog data is here you to just check", alldt);

    res.status(200).json({ status: "sucessesfull", msg: alldt });
  }

  // DeleteBlog(req, res) {
  //   const id = req.query.id;
  //   console.log("hey i am manish gatting id", id);

  //   const respdt = BlogRepository.deletedt(id);
  //   res.status(303).json({ status: "sucessesfull", msg: respdt });
  // }
}

export default Bloggcontroller;
