import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No Token",
      });
    }

    const decoded = jwt.verify(token, process.env.KEY);
    req.user = decoded; // ✅ attach user
    next();
  } catch (err) {
    return res.status(401).json({
      status: false,
      message: "Invalid Token",
    });
  }
};
