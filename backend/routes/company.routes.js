import express from "express";
import {
  addCompany,
  getCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} from "../controllers/company.controllers.js";

const router = express.Router();

router.post("/add-companies", addCompany);
router.get("/getCompanies", getCompanies);
router.get("/getCompanies/:id", getCompanyById);
router.put("/updatecompany/:id", updateCompanyById);
router.delete("/deletecompany/:id", deleteCompanyById);

export default router;
