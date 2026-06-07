import jwt from "jsonwebtoken";
const jwttoken = (req, res, next) => {
  console.log("Headers:", req.headers);

  const token = req.headers.authorization;

  console.log("Token:", token);

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const payload = jwt.verify(token, "manish1234raghav");
    console.log("Payload:", payload);
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);
    return res.status(401).send("Unauthorized");
  }
};

export default jwttoken;
