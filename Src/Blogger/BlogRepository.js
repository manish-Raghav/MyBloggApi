import { getDB } from "../Config/confi.js";

export class BlogRepository {
  static async addblog(mydt) {
    const db = getDB();
    const collection = db.collection("UserBlog");

    const us = collection.insertOne(mydt);
    return us;
  }

  static async getallblog() {
    const db = getDB();
    const collection = db.collection("UserBlog");

    const alldata = await collection.find({}).toArray();

    return alldata;
  }

  // static updatedt() {}

  // static deletedt(id) {
  //   const deldt = Blogdt.filter((val, ind) => val.id !== id);
  //   Blogdt = deldt;
  //   return Blogdt;
  // }
}
