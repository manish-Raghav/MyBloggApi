
import { User } from "./User.schema.js";
// import Usermodule from "./User_Module.js";
import bcrypt from 'bcrypt'
export default class UserRepository {
  static async Signnup(dt) {
     try {
     

      const user = await User.findOne({ email: dt.email });
      if (user) {
        throw new Error("User already exists");
       
      }
     
     const hashpass = await bcrypt.hash(dt.password,8);

       dt.password = hashpass;
      const newuser = new User(dt);
      const result = await newuser.save();
      return {
        
        user: result,
      };
    } catch (err) {
      console.log(err);

      return {
        success: false,
        message: "Something went wrong",
      };
    }
  }

  static async Signin(email, password) {
    // console.log(" Sign in repository to dt", email, password);

    try {
    
      const user = await User.findOne({ email });
        console.log(" Sign in repository userdata", user);

      if (!user) {
        //  throw new Error("User not found");
        return;
      }
     const isMatch = await bcrypt.compare(password, user.password);
         
    if (!isMatch) {
        // throw new Error("Invalid Password");
        return 
    }
      

      return user
    } catch (err) {
      console.log(err);
        return
      // return {
      //   success: false,
      //   message: "Something went wrong",
      // };
    }
  }
}
