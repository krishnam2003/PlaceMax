import { Interview } from "../models/Experience.js";

/* ADD INTERVIEW */
export const addInterview = async (req, res) => {
  try {
    const {
      username,
      companyName,
      position,
      experience,
      interviewLevel,
      result,
    } = req.body;

    const newInterview = new Interview({
      username,
      companyName,
      position,
      experience,
      interviewLevel,
      result,
    });

    await newInterview.save();

    return res.json({ message: "Interview experience added successfully" });
  } catch (error) {
    console.error("Error adding interview experience:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/* FETCH INTERVIEWS */
export const fetchInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json({ data: interviews });
  } catch (error) {
    console.error("Fetch interviews error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/* DELETE INTERVIEW */
export const deleteInterview = async (req, res) => {
  try {
    const deleted = await Interview.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Interview not found" });

    res.json({ message: "Interview deleted successfully" });
  } catch (error) {
    console.error("Delete interview error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
