import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/", loginUser);
router.post("/logout", logoutUser);
router.post("/forgotpassword", forgotPassword);
router.post("/resetPassword/:token", resetPassword);

export default router;
