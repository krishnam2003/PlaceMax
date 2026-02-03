import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/HomeComponents/Footer.jsx"; // optional - add if desired
import api_endpoints from '../../utils/data.js';

const API = `${api_endpoints}`;

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repass: "",
    contactNumber: "",
    sapId: "",
    rollNo: "",
    gender: "",
    dob: "",
    tenthPercentage: "",
    tenthSchool: "",
    twelfthPercentage: "",
    twelfthCollege: "",
    graduationCollege: "",
    graduationCGPA: "",
    sixthSemesterCGPA: "",
    stream: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (error) setError("");
  };

  const handleStreamChange = (e) => {
    setFormData({
      ...formData,
      stream: e.target.value,
      graduationCGPA: "",
      sixthSemesterCGPA: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.repass) {
      setError("Passwords do not match");
      return;
    }

    if (
      !formData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
      )
    ) {
      setError(
        "Password must contain at least 8 characters, including uppercase, lowercase, number & special character"
      );
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      contactNumber: formData.contactNumber,
      sapId: formData.sapId,
      rollNo: formData.rollNo,
      gender: formData.gender,
      dob: formData.dob,
      tenthPercentage: formData.tenthPercentage,
      tenthSchool: formData.tenthSchool,
      twelfthPercentage: formData.twelfthPercentage,
      twelfthCollege: formData.twelfthCollege,
      graduationCollege: formData.graduationCollege,
      stream: formData.stream,
      graduationCGPA: formData.stream === "MCA" ? formData.graduationCGPA : null,
      sixthSemesterCGPA:
        formData.stream !== "MCA" ? formData.sixthSemesterCGPA : null,
    };

    setSubmitting(true);

    try {
      await axios.post(`${api_endpoints}/register`, payload);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl">
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                  PlaceX
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  Create your student profile
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Info - 2 columns on larger screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      placeholder="XYZ"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@vitbhopal.ac.in"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      placeholder="9876543xxx"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Gender
                    </label>
                    <select
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Academic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      APAAR ID
                    </label>
                    <input
                      id="sapId"
                      placeholder="APAAR ID"
                      value={formData.sapId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div> */}

                  <div className="relative group">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      APAAR ID
                    </label>

                    <input
                      id="sapId"
                      placeholder="APAAR ID"
                      value={formData.sapId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />

                    {/* Hover notification */}
                    <div className="pointer-events-none absolute -top-5 left-6 rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Please enter your APAAR ID last 3 digits
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Roll Number
                    </label>
                    <input
                      id="rollNo"
                      placeholder="Roll No"
                      value={formData.rollNo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      10th Percentage
                    </label>
                    <input
                      id="tenthPercentage"
                      placeholder="e.g. 92.4"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      10th School
                    </label>
                    <input
                      id="tenthSchool"
                      placeholder="School Name"
                      value={formData.tenthSchool}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      12th Percentage
                    </label>
                    <input
                      id="twelfthPercentage"
                      placeholder="e.g. 88.6"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      12th College / Board
                    </label>
                    <input
                      id="twelfthCollege"
                      placeholder="College / Board Name"
                      value={formData.twelfthCollege}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Stream & CGPA */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Stream
                    </label>
                    <select
                      id="stream"
                      value={formData.stream}
                      onChange={handleStreamChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                      required
                    >
                      <option value="">Select Stream</option>
                      <option value="MCA">MCA</option>
                      <option value="Btech-CS">BTech CS</option>
                      <option value="Btech-IT">BTech IT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Graduation College
                    </label>
                    <input
                      id="graduationCollege"
                      placeholder="College Name"
                      value={formData.graduationCollege}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  {formData.stream === "MCA" ? (
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Graduation CGPA
                      </label>
                      <input
                        id="graduationCGPA"
                        placeholder="e.g. 8.7"
                        value={formData.graduationCGPA}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                        required
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        6th Semester CGPA
                      </label>
                      <input
                        id="sixthSemesterCGPA"
                        placeholder="e.g. 8.4"
                        value={formData.sixthSemesterCGPA}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Passwords */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Confirm Password
                    </label>
                    <input
                      id="repass"
                      type="password"
                      placeholder="••••••••"
                      value={formData.repass}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 mt-8
                    ${
                      submitting
                        ? "bg-zinc-400 text-zinc-700 cursor-not-allowed"
                        : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 hover:-translate-y-0.5 active:scale-[0.98]"
                    }`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                        />
                      </svg>
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer /> {/* Uncomment if you want footer on registration page */}
    </div>
  );
}

export default Registration;