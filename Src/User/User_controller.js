import jwt from "jsonwebtoken";
import Usermodule from "./User_Module.js";
import UserRepository from "./Use_Repository.js";

export default class Usercontroller {
  Signup(req, res) {
    console.log("user sinup check", req.body);

    const { name, email, password } = req.body;
    const nw = new Usermodule(name, email, password);
    const resrepo = UserRepository.Signnup(nw);
    if (!resrepo) {
      return res
        .status(400)
        .json({ status: "unsucssesfull", msg: "Data did not upload" });
    }
    res.status(200).json({ status: "sucssesfull", msg: resrepo });
  }

  Signin(req, res) {
    const { email, password } = req.body;
    const logdt = UserRepository.Signin(email, password);

    console.log("signin in repositorry sihnin: ", logdt);

    if (!logdt) {
      return res
        .status(401)
        .json({ status: "unsucssesfull", msg: "Unathorized" });
    }
    const token = jwt.sign({ userEmail: logdt.email }, "manish1234raghav", {
      expiresIn: "1h",
    });

    res.status(201).json({ status: "sucssesfull", msg: token });
  }
}
