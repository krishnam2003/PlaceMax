// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";


// function ScheduledInterview() {
//   const navigate = useNavigate();

//   const [currentUser, setCurrentUser] = useState(null);
//   const [scheduledInterviews, setScheduledInterviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= AUTH CHECK ================= */
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/verify", { withCredentials: true })
//       .then((res) => {
//         if (!res.data.status) {
//           navigate("/login");
//         }
//       })
//       .catch(() => navigate("/"));

//     axios
//       .get("http://localhost:3001/auth/currentUser", {
//         withCredentials: true,
//       })
//       .then((res) => setCurrentUser(res.data.user))
//       .catch(console.error);
//   }, []);

//   /* ================= FETCH INTERVIEWS ================= */
//   useEffect(() => {
//     if (!currentUser?._id) return;

//     const fetchScheduledInterviews = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3001/auth/scheduledInterviews/${currentUser._id}`,
//           { withCredentials: true }
//         );

//         // ✅ safe fallback
//         setScheduledInterviews(res.data.scheduledInterviews || []);
//       } catch (err) {
//         console.error("Interview fetch error:", err);
//         setScheduledInterviews([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScheduledInterviews();
//   }, [currentUser]);

//   return (
//     <>
//       <Navbar />

//       {/* TITLE */}
//       <h1 className="mt-36 text-center text-4xl font-bold text-blue-900">
//         Scheduled Interviews
//       </h1>

//       {/* MAIN SECTION */}
//       <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 min-h-screen">
        
//         {/* LEFT IMAGE */}
//         <div className="lg:w-1/2 flex justify-center items-center">
//           <img
            
//             alt="Scheduled Interview"
//             className="w-[450px] h-[450px] object-contain rounded-xl shadow-lg"
//           />
//         </div>

//         {/* RIGHT LIST */}
//         <div className="lg:w-1/2">
//           {loading ? (
//             <p className="text-center text-lg text-gray-500">
//               Loading interviews...
//             </p>
//           ) : scheduledInterviews.length === 0 ? (
//             <p className="text-center text-lg text-gray-500 mt-12">
//               No interviews scheduled yet
//             </p>
//           ) : (
//             <div className="space-y-6 mt-8">
//               {scheduledInterviews.map((interview, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
//                 >
//                   <p className="text-xl text-gray-800">
//                     <span className="font-semibold text-blue-600">
//                       Company:
//                     </span>{" "}
//                     {interview.companyName}
//                   </p>

//                   <p className="text-xl text-gray-600 mt-2">
//                     <span className="font-semibold text-blue-600">
//                       Interview Date:
//                     </span>{" "}
//                     {interview.interviewDate}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default ScheduledInterview;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function ScheduledInterview() {
//   const navigate = useNavigate();

//   const [currentUser, setCurrentUser] = useState(null);
//   const [scheduledInterviews, setScheduledInterviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= AUTH CHECK ================= */
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/verify", { withCredentials: true })
//       .then((res) => {
//         if (!res.data.status) {
//           navigate("/login");
//         }
//       })
//       .catch(() => navigate("/"));

//     axios
//       .get("http://localhost:3001/auth/currentUser", {
//         withCredentials: true,
//       })
//       .then((res) => setCurrentUser(res.data.user))
//       .catch(console.error);
//   }, []);

//   /* ================= FETCH INTERVIEWS ================= */
//   useEffect(() => {
//     if (!currentUser?._id) return;

//     const fetchScheduledInterviews = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3001/auth/scheduledInterviews/${currentUser._id}`,
//           { withCredentials: true }
//         );

//         setScheduledInterviews(res.data.scheduledInterviews || []);
//       } catch (err) {
//         console.error("Interview fetch error:", err);
//         setScheduledInterviews([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchScheduledInterviews();
//   }, [currentUser]);

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//               Scheduled Interviews
//             </h1>
//             <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
//               Stay prepared — your upcoming opportunities
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
//             {/* Left - Visual / Illustration */}
//             <div className="hidden lg:flex justify-center items-center sticky top-28">
//               <div className="relative">
//                 <div className="w-[420px] h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-300/10 border border-zinc-200/70 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
//                   {/* Replace src with your actual illustration or use placeholder */}
//                   <img
//                     src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                     alt="Scheduled interview illustration"
//                     className="w-full h-full object-cover opacity-90"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-emerald-300/10 via-transparent to-transparent pointer-events-none" />
//                 </div>
//               </div>
//             </div>

//             {/* Right - Interview List */}
//             <div className="space-y-6">
//               {loading ? (
//                 <div className="flex flex-col items-center justify-center py-20">
//                   <div className="relative w-16 h-16 mb-6">
//                     <div className="absolute inset-0 border-4 border-emerald-300/30 rounded-full animate-pulse"></div>
//                     <div className="absolute inset-2 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin"></div>
//                   </div>
//                   <p className="text-lg text-zinc-600 dark:text-zinc-400">
//                     Loading your scheduled interviews...
//                   </p>
//                 </div>
//               ) : scheduledInterviews.length === 0 ? (
//                 <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-10 text-center shadow-md">
//                   <div className="text-6xl mb-6">📅</div>
//                   <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-3">
//                     No interviews scheduled yet
//                   </h3>
//                   <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
//                     Once you apply and get shortlisted, your interview details will appear here.
//                   </p>
//                   <button
//                     onClick={() => navigate("/companylisting")}
//                     className="mt-6 px-6 py-3 bg-emerald-300 text-zinc-900 font-semibold rounded-xl hover:bg-emerald-400 transition-all shadow-sm hover:shadow-md"
//                   >
//                     Browse Companies
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-5">
//                   {scheduledInterviews.map((interview, index) => (
//                     <div
//                       key={index}
//                       className="group bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-6 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300"
//                     >
//                       <div className="flex items-start gap-4">
//                         <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-2xl font-bold">
//                           {interview.companyName?.charAt(0) || "C"}
//                         </div>

//                         <div className="flex-1">
//                           <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-300 transition-colors">
//                             {interview.companyName}
//                           </h3>

//                           <div className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
//                             <p className="flex items-center gap-2">
//                               <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[110px]">
//                                 Interview Date:
//                               </span>
//                               <time className="font-medium">
//                                 {interview.interviewDate
//                                   ? new Date(interview.interviewDate).toLocaleDateString("en-IN", {
//                                       weekday: "long",
//                                       day: "numeric",
//                                       month: "long",
//                                       year: "numeric",
//                                     })
//                                   : "Date not specified"}
//                               </time>
//                             </p>

//                             {/* Add more fields if available in your backend response */}
//                             {/* <p className="flex items-center gap-2">
//                               <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[110px]">
//                                 Time:
//                               </span>
//                               {interview.interviewTime || "TBA"}
//                             </p> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default ScheduledInterview;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";
import api_endpoints from '../../../utils/data.js';

function ScheduledInterview() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [scheduledInterviews, setScheduledInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const interviewsPerPage = 3;

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    axios
      .get(`${api_endpoints}/verify`, { withCredentials: true })
      .then((res) => {
        if (!res.data.status) {
          navigate("/login");
        }
      })
      .catch(() => navigate("/"));

    axios
      .get(`${api_endpoints}/currentUser`, {
        withCredentials: true,
      })
      .then((res) => setCurrentUser(res.data.user))
      .catch(console.error);
  }, [navigate]);

  /* ================= FETCH INTERVIEWS ================= */
  useEffect(() => {
    if (!currentUser?._id) return;

    const fetchScheduledInterviews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${api_endpoints}/scheduledInterviews/${currentUser._id}`,
          { withCredentials: true }
        );

        setScheduledInterviews(res.data.scheduledInterviews || []);
      } catch (err) {
        console.error("Interview fetch error:", err);
        setScheduledInterviews([]);
        toast.error("Failed to load scheduled interviews", {
          position: "top-center",
          duration: 4000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchScheduledInterviews();
  }, [currentUser]);

  // Reset page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [scheduledInterviews]);

  /* ================= PAGINATION LOGIC ================= */
  const indexOfLastInterview = currentPage * interviewsPerPage;
  const indexOfFirstInterview = indexOfLastInterview - interviewsPerPage;
  const currentInterviews = scheduledInterviews.slice(
    indexOfFirstInterview,
    indexOfLastInterview
  );
  const totalPages = Math.ceil(scheduledInterviews.length / interviewsPerPage);

  return (
    <>
      <Navbar />

      {/* Toast Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          marginTop: "5rem", // offset to avoid overlap with fixed navbar
        }}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: "12px",
            background: "#333",
            color: "#fff",
            maxWidth: "450px",
            fontSize: "16px",
            padding: "16px 24px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          },
          success: {
            style: {
              background: "#10b981",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "white",
            },
          },
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Scheduled Interviews
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Stay prepared — your upcoming opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Illustration */}
            <div className="hidden lg:flex justify-center items-center sticky top-28">
              <div className="relative">
                <div className="w-[420px] h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/70 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                    alt="Interview illustration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {loading ? (
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/80 dark:bg-zinc-900/70 rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-6 shadow-md animate-pulse"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-200 dark:bg-zinc-700" />
                        <div className="flex-1 space-y-3">
                          <div className="h-6 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
                          <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-1/2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : scheduledInterviews.length === 0 ? (
                <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-10 text-center shadow-md">
                  <div className="text-6xl mb-6">📅</div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                    No interviews scheduled yet
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                    Once you apply and get shortlisted, your interview details will appear here.
                  </p>
                  <button
                    onClick={() => navigate("/companylisting")}
                    className="mt-6 px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    Browse Companies
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-5">
                    {currentInterviews.map((interview, index) => (
                      <div
                        key={index}
                        className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-6 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-2xl font-bold">
                            {interview.companyName?.charAt(0) || "C"}
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                              {interview.companyName}
                            </h3>

                            <div className="mt-3 space-y-2 text-zinc-700 dark:text-zinc-300">
                              <p className="flex items-center gap-2">
                                <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[110px]">
                                  Interview Date:
                                </span>
                                <time className="font-medium">
                                  {interview.interviewDate
                                    ? new Date(interview.interviewDate).toLocaleDateString("en-IN", {
                                        weekday: "long",
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                      })
                                    : "Date not specified"}
                                </time>
                              </p>

                              {/* Add more fields if available in your backend response */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-colors
                          ${currentPage === 1
                            ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
                            : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"}`}
                      >
                        Previous
                      </button>

                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`px-4 py-2.5 rounded-lg font-medium min-w-[44px] transition-colors
                              ${currentPage === pageNum
                                ? "bg-emerald-300 text-zinc-900 shadow-sm font-semibold"
                                : "border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"}`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}

                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        className={`px-6 py-2.5 rounded-lg font-medium transition-colors
                          ${currentPage === totalPages
                            ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
                            : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"}`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ScheduledInterview;