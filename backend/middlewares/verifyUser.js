import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No Token" });
    }
    jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json({ status: false, message: "Invalid Token" });
  }
};
