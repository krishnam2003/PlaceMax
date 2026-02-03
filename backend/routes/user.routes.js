import express from "express";
import {
  verifyAuth,
  getCurrentUser,
  applyCompany,
  scheduledInterviews,
  placementStatus,
} from "../controllers/user.controllers.js";
import { verifyUser } from "../middlewares/verifyUser.js";


const router = express.Router();

router.get("/verify", verifyUser, verifyAuth);
router.get("/currentUser", verifyUser, getCurrentUser);
router.post("/applyCompany/:userId/:companyId", applyCompany);
router.get("/scheduledInterviews/:userId", scheduledInterviews);
router.get("/placementStatus/:userId", placementStatus);

export default router;
