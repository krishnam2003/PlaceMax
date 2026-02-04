import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { User } from "../models/user.js";

/* REGISTER */
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      contactNumber,
      sapId,
      rollNo,
      gender,
      dob,
      tenthPercentage,
      tenthSchool,
      twelfthPercentage,
      twelfthCollege,
      graduationCollege,
      graduationCGPA,
      stream,
      sixthSemesterCGPA,
    } = req.body;

    // 1️⃣ Required field validation
    if (!name || !email || !password || !contactNumber) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    // 2️⃣ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      contactNumber,
      sapId,
      rollNo,
      gender,
      dob,
      tenthPercentage,
      tenthSchool,
      twelfthPercentage,
      twelfthCollege,
      graduationCollege,
      graduationCGPA,
      stream,
      sixthSemesterCGPA,
      isAdmin: false, // security
    });

    // 5️⃣ Save user
    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


/* LOGIN */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    //console.log("Invalid User");
    return res.json("Invalid User");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    //console.log("Password Incorrect");
    return res.json("Password Incorrect");
  }

  // if (user.isAdmin === "1") {
  //   console.log("User is admin");
  // }

  const token = jwt.sign(
    { _id: user._id, username: user.username },
    process.env.KEY,
    { expiresIn: "1h" }
  );

  // res.cookie("token", token, { httpOnly: true, maxAge: 300000 });
  res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: true, // true in production (HTTPS)
      maxAge: 60 * 60 * 1000,
    });

  return res.json(user.isAdmin === "1" ? "Admin" : "Success");
};



/* LOGOUT */
export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax", // or "none" if using cross-site
    secure: false    // true in production (HTTPS)
  });

  res.status(200).json({ message: "Logged out successfully" });
};

/* FORGOT PASSWORD */
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not registered" });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    var mailOptions = {
      from: "baghelkrishnam54@gmail.com",
      to: email,
      subject: "Reset Password Link",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ status: true, message: "Error sending the email" });
      } else {
        return res.json({ status: true, message: "Email Sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

/* RESET PASSWORD */
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;

    const hashPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });

    return res.json({ status: true, message: "Updated Password Successfully" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ status: false, message: "Invalid Token" });
  }
};
