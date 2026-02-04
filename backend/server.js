import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import cookieParser from "cookie-parser";
//import { UserRouter } from "./routes/user.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import path from "path";

const app = express();
dotenv.config();
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true

}))
app.use(cookieParser())
app.use(express.json());

const _dirname = path.resolve();

app.use("/auth/gemini-key", (req, res) => {
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Gemini key not configured" });
  }

  res.json({
    geminiKey: process.env.GEMINI_API_KEY,
  });
});

app.use("/auth", authRoutes);
app.use("/auth", userRoutes);
app.use("/auth", companyRoutes);
app.use("/auth", interviewRoutes);
app.use("/auth", adminRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.use((req, res) => {
    res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});

//app.use("/auth", UserRouter);
mongoose.connect(process.env.MONGO_URI);
app.listen(process.env.PORT || 3000 , () => {
  console.log(`Server is running`);
});