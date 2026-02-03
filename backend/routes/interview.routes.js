import express from "express";
import {
  addInterview,
  fetchInterviews,
  deleteInterview,
} from "../controllers/interview.controllers.js";

const router = express.Router();

router.post("/add-interview", addInterview);
router.get("/fetchinterviewexperience", fetchInterviews);
router.delete("/delete-interview/:id", deleteInterview);

export default router;
