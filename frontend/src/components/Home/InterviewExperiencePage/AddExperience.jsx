// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function AddExperience() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     companyName: "",
//     position: "",
//     experience: "",
//     interviewLevel: "",
//     result: "",
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/verify", { withCredentials: true })
//       .then((res) => {
//         if (!res.data.status) {
//           navigate("/interviewexperience");
//         }
//       });
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:3001/auth/add-interview",
//         formData,
//         { withCredentials: true }
//       );

//       alert("Added your interview experience");
//       navigate("/home");

//       setFormData({
//         username: "",
//         companyName: "",
//         position: "",
//         experience: "",
//         interviewLevel: "",
//         result: "",
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Error submitting your interview experience");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="max-w-xl mx-auto mt-24 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
//           Add Interview Experience
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Username */}
//           <div>
//             <label className="block mb-1 font-medium">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Company Name */}
//           <div>
//             <label className="block mb-1 font-medium">Company Name</label>
//             <input
//               type="text"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Position */}
//           <div>
//             <label className="block mb-1 font-medium">Position</label>
//             <input
//               type="text"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-1 font-medium">
//               Interview Experience
//             </label>
//             <textarea
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               rows="4"
//               required
//               className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Describe your interview experience..."
//             ></textarea>
//           </div>

//           {/* Interview Level */}
//           <div>
//             <label className="block mb-1 font-medium">Interview Level</label>
//             <select
//               name="interviewLevel"
//               value={formData.interviewLevel}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Interview Level</option>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="difficult">Difficult</option>
//             </select>
//           </div>

//           {/* Result */}
//           <div>
//             <label className="block mb-1 font-medium">Result</label>
//             <select
//               name="result"
//               value={formData.result}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Result</option>
//               <option value="Successful">Successful</option>
//               <option value="Fail">Fail</option>
//               <option value="Pending">Pending</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default AddExperience;












import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";
import api_endpoints from '../../../utils/data.js';

function AddExperience() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    position: "",
    experience: "",
    interviewLevel: "",
    result: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get(`${api_endpoints}/verify`, { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          navigate("/interviewexperience");
        }
      })
      .catch(() => navigate("/interviewexperience"));
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.username.trim()) return "Username is required";
    if (!formData.companyName.trim()) return "Company name is required";
    if (!formData.position.trim()) return "Position is required";
    if (formData.experience.trim().length < 20)
      return "Experience must be at least 20 characters long";
    if (!formData.interviewLevel) return "Please select interview difficulty";
    if (!formData.result) return "Please select result";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(
        `${api_endpoints}/add-interview`,
        formData,
        { withCredentials: true }
      );

      alert("Thank you! Your interview experience has been added.");
      navigate("/interviewexperience");
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        err.response?.data?.message ||
          "Failed to submit. Please try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">
                Share Your Interview Experience
              </h2>
              <p className="text-center text-zinc-600 dark:text-zinc-400 mb-10">
                Help your peers prepare better — your story matters!
              </p>

              {error && (
                <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name / Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                    placeholder="e.g. Krishnam Singh"
                  />
                </div>

                {/* Company & Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      placeholder="e.g. Google, TCS, Amazon"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Position / Role
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      placeholder="e.g. Software Engineer, SDE-1"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Interview Experience
                  </label>
                  <textarea
                    name="experience"
                    rows={6}
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Describe the rounds, questions asked, difficulty, tips, your feelings... Be as detailed as possible."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all resize-none"
                  />
                </div>

                {/* Level & Result */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Interview Difficulty
                    </label>
                    <select
                      name="interviewLevel"
                      value={formData.interviewLevel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                    >
                      <option value="">Select difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="difficult">Difficult</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Final Result
                    </label>
                    <select
                      name="result"
                      value={formData.result}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                    >
                      <option value="">Select outcome</option>
                      <option value="Successful">Selected / Offer</option>
                      <option value="Fail">Not Selected</option>
                      <option value="Pending">Still Pending</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      submitting
                        ? "bg-zinc-400 text-zinc-700 cursor-not-allowed"
                        : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 hover:-translate-y-0.5 active:scale-[0.98]"
                    }`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Experience"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddExperience;