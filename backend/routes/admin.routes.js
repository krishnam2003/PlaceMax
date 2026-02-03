import express from "express";
import {
  getUsers,
  companyApplicants,
  updatePlacementStatus,
} from "../controllers/admin.controllers.js";

const router = express.Router();

router.get("/getUsers", getUsers);
router.get("/companyApplicants", companyApplicants);
router.post("/updatePlacementStatus", updatePlacementStatus);

export default router;
