import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import api_endpoints from '../../../utils/data.js';
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";

function InterviewExperienceDelete() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch interviews
  const fetchInterviews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${api_endpoints}/fetchinterviewexperience`,
        { withCredentials: true }
      );

      if (Array.isArray(res.data.data)) {
        setInterviews(res.data.data);
      } else {
        setInterviews([]);
      }
    } catch (error) {
      console.error("Error fetching interview experiences:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

  // Delete interview experience
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this interview experience?")) {
      return;
    }

    try {
      await axios.delete(
        `${api_endpoints}/delete-interview/${id}`,
        { withCredentials: true }
      );

      // Remove from UI instantly
      setInterviews((prev) => prev.filter((item) => item._id !== id));
      alert("Interview experience deleted successfully");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete experience. Please try again.");
    }
  };

  // Difficulty & Result badge styles
  const getDifficultyClasses = (level) => {
    const map = {
      easy: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
      difficult: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    };
    return map[level?.toLowerCase()] || "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
  };

  const getResultClasses = (result) => {
    const map = {
      successful: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      fail: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
    };
    return map[result?.toLowerCase()] || "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
  };

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                Interview Experiences
              </h1>
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
                Real stories shared by students — learn from their journeys
              </p>
            </div>

          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-emerald-300/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <span className="ml-4 text-lg text-zinc-600 dark:text-zinc-400">
                Loading experiences...
              </span>
            </div>
          )}

          {/* Empty State */}
          {!loading && interviews.length === 0 && (
            <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-12 text-center shadow-md">
              <div className="text-7xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                No Experiences Shared Yet
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                Be the first to help your juniors — your story can guide many students toward success!
              </p>
              <Link
                to="/addexperience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Share Your Interview Experience
              </Link>
            </div>
          )}

          {/* Interview Cards */}
          {!loading && interviews.length > 0 && (
            <div className="space-y-6">
              {interviews.map((interview) => (
                <div
                  key={interview._id}
                  className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 lg:p-8">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl font-bold shadow-sm">
                          {interview.username?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                            {interview.username}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                            {interview.position} • {interview.companyName}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getDifficultyClasses(interview.interviewLevel)}`}>
                          {interview.interviewLevel || "Unknown"}
                        </span>

                        <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${getResultClasses(interview.result)}`}>
                          {interview.result || "Unknown"}
                        </span>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(interview._id)}
                          className="px-4 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-800/60 rounded-full text-sm font-medium transition-all duration-200"
                          title="Delete this experience"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    {/* Experience Text */}
                    <div>
                      <h5 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                        Interview Experience
                      </h5>
                      <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-5 text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                        {interview.experience || "No description provided"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InterviewExperienceDelete;



