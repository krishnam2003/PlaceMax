import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import { Company } from "../models/Company.js";

/* VERIFY USER */
export const verifyAuth = (req, res) => {
  try {
    return res.json({
      status: true,
      message: "Authorized",
      user: req.user, // ✅ frontend can trust this
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};


/* CURRENT USER */
export const getCurrentUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.KEY);

    const user = await User.findById(decoded._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (error) {
    console.error("Current user error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/* APPLY COMPANY */
export const applyCompany = async (req, res) => {
  try {
    const { userId, companyId } = req.params;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.appliedCompanies.includes(companyId)) {
      return res.status(400).json({ message: "Already applied" });
    }

    user.appliedCompanies.push(companyId);
    await user.save();

    res.json({ message: "Company applied successfully" });
  } catch (error) {
    console.error("Apply company error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/* SCHEDULED INTERVIEWS */
export const scheduledInterviews = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const companies = await Company.find({
      _id: { $in: user.appliedCompanies },
    });

    const data = companies.map((c) => ({
      companyName: c.companyname,
      interviewDate: c.doi,
    }));

    res.json({ scheduledInterviews: data });
  } catch (error) {
    console.error("Scheduled interview error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/* PLACEMENT STATUS */
export const placementStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      status: user.placementStatus,
      companyName: user.companyPlaced,
    });
  } catch (error) {
    console.error("Placement status error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
