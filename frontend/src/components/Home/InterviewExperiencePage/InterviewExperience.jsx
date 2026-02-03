



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar.jsx";
import api_endpoints from '../../../utils/data.js';

function InterviewExperience() {
  const [interviews, setInterviews] = useState([]);

  const fetchInterviews = async () => {
    try {
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
    }
  };

  useEffect(() => {
    fetchInterviews();
  }, []);

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
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                Interview Experiences
              </h1>
              <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
                Real stories from candidates — difficulty, outcomes, and key learnings
              </p>
            </div>

            <Link
              to="/addexperience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Share Your Experience
            </Link>
          </div>

          {interviews.length === 0 ? (
            <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-12 text-center shadow-md">
              <div className="text-6xl mb-6">📖</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                No Experiences Shared Yet
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                Be the first to help your peers prepare better — your story can make a real difference!
              </p>
              <Link
                to="/addexperience"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Share Your Interview Experience
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {interviews.map((interview) => (
                <div
                  key={interview._id}
                  className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 lg:p-7">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 mb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl font-bold shadow-sm">
                          {interview.username?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-300 transition-colors">
                            {interview.username}
                          </h4>
                          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                            {interview.position} • {interview.companyName}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyClasses(interview.interviewLevel)}`}>
                          {interview.interviewLevel || "Unknown"}
                        </span>

                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getResultClasses(interview.result)}`}>
                          {interview.result || "Unknown"}
                        </span>
                      </div>
                    </div>

                    {/* Experience Content */}
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

export default InterviewExperience;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function InterviewExperience() {
//   const [interviews, setInterviews] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchInterviews = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3001/auth/fetchinterviewexperience",
//         { withCredentials: true }
//       );

//       if (Array.isArray(res.data.data)) {
//         setInterviews(res.data.data);
//       } else {
//         setInterviews([]);
//       }
//     } catch (error) {
//       console.error("Error fetching interview experiences:", error);
//       setInterviews([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInterviews();
//   }, []);

//   const getLevelBadge = (level) => {
//     const map = {
//       easy: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
//       medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
//       difficult: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
//     };

//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-sm font-medium ${
//           map[level?.toLowerCase()] ||
//           "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
//         }`}
//       >
//         {level || "Unknown"}
//       </span>
//     );
//   };

//   const getResultBadge = (result) => {
//     const map = {
//       successful: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
//       fail: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
//       pending: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
//     };

//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-sm font-medium ${
//           map[result?.toLowerCase()] ||
//           "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
//         }`}
//       >
//         {result || "Unknown"}
//       </span>
//     );
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
//         <div className="max-w-5xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
//             <div>
//               <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//                 Interview Experiences
//               </h1>
//               <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
//                 Real stories shared by candidates — difficulty levels, outcomes, and valuable lessons to help you prepare better.
//               </p>
//             </div>

//             <Link to="/addexperience">
//               <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5">
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                 </svg>
//                 Share Your Experience
//               </button>
//             </Link>
//           </div>

//           {/* Loading */}
//           {loading && (
//             <div className="flex flex-col items-center justify-center py-24">
//               <div className="relative w-16 h-16 mb-6">
//                 <div className="absolute inset-0 border-4 border-emerald-300/30 rounded-full animate-pulse" />
//                 <div className="absolute inset-2 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin" />
//               </div>
//               <p className="text-lg text-zinc-600 dark:text-zinc-400">
//                 Loading community experiences...
//               </p>
//             </div>
//           )}

//           {/* Empty State */}
//           {!loading && interviews.length === 0 && (
//             <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-12 text-center shadow-md">
//               <div className="text-6xl mb-6">📖</div>
//               <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
//                 No experiences shared yet
//               </h3>
//               <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
//                 Be the first to help your peers — your story can guide many students toward success!
//               </p>
//               <Link to="/addexperience">
//                 <button className="px-7 py-3.5 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all">
//                   Share Your Interview Experience
//                 </button>
//               </Link>
//             </div>
//           )}

//           {/* Experiences */}
//           {!loading && interviews.length > 0 && (
//             <div className="space-y-7">
//               {interviews.map((interview) => (
//                 <div
//                   key={interview._id}
//                   className="group bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 overflow-hidden"
//                 >
//                   <div className="p-6 lg:p-7">
//                     {/* Header */}
//                     <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5 mb-6">
//                       <div className="flex items-start gap-4">
//                         <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl font-bold shadow-sm">
//                           {interview.username?.charAt(0)?.toUpperCase() || "U"}
//                         </div>
//                         <div>
//                           <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-300 transition-colors">
//                             {interview.username}
//                           </h4>
//                           <p className="text-zinc-600 dark:text-zinc-400 mt-1">
//                             {interview.position} • {interview.companyName}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex flex-wrap gap-2">
//                         {getLevelBadge(interview.interviewLevel)}
//                         {getResultBadge(interview.result)}
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div>
//                       <h5 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
//                         Interview Experience
//                       </h5>

//                       <div
//                         className={`bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-5 text-zinc-700 dark:text-zinc-300 whitespace-pre-line leading-relaxed transition-all duration-400 ${
//                           expandedId === interview._id
//                             ? "max-h-[2000px]"
//                             : "max-h-48 overflow-hidden relative"
//                         }`}
//                       >
//                         {interview.experience}

//                         {expandedId !== interview._id && interview.experience?.length > 300 && (
//                           <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-50 to-transparent dark:from-zinc-800/50 pointer-events-none" />
//                         )}
//                       </div>

//                       {interview.experience?.length > 300 && (
//                         <button
//                           onClick={() =>
//                             setExpandedId(expandedId === interview._id ? null : interview._id)
//                           }
//                           className="mt-3 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors"
//                         >
//                           {expandedId === interview._id ? "Show less ▲" : "Read more ▼"}
//                         </button>
//                       )}
//                     </div>

//                     {/* Footer */}
//                     <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-700 flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
//                       <span>
//                         {new Date(interview.createdAt || Date.now()).toLocaleDateString("en-IN", {
//                           day: "numeric",
//                           month: "short",
//                           year: "numeric",
//                         })}
//                       </span>
//                       <span className="italic">Shared by community member</span>
//                     </div>
//                   </div>
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

// export default InterviewExperience;














// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar";

// function InterviewExperience() {
//   const [interviews, setInterviews] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchInterviews = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3001/auth/fetchinterviewexperience",
//         { withCredentials: true }
//       );

//       if (Array.isArray(res.data.data)) {
//         setInterviews(res.data.data);
//       } else {
//         setInterviews([]);
//       }
//     } catch (error) {
//       console.error("Error fetching interview experiences:", error);
//       setInterviews([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInterviews();
//   }, []);

//   const getLevelBadge = (level) => {
//     const map = {
//       easy: "bg-green-100 text-green-800",
//       medium: "bg-yellow-100 text-yellow-800",
//       difficult: "bg-red-100 text-red-800",
//     };

//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-sm font-medium ${
//           map[level?.toLowerCase()] || "bg-gray-100 text-gray-700"
//         }`}
//       >
//         {level}
//       </span>
//     );
//   };

//   const getResultBadge = (result) => {
//     const map = {
//       successful: "bg-green-100 text-green-800",
//       fail: "bg-red-100 text-red-800",
//       pending: "bg-gray-100 text-gray-700",
//     };

//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-sm font-medium ${
//           map[result?.toLowerCase()] || "bg-gray-100 text-gray-700"
//         }`}
//       >
//         {result}
//       </span>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//         <br/><br/>
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-5xl mx-auto px-4 py-10">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//             <div>
//               <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//                 Interview Experiences
//               </h1>
//               <p className="text-gray-600 mt-2 max-w-xl">
//                 Honest interview stories from real candidates — levels, outcomes,
//                 and lessons learned.
//               </p>
//             </div>

//             <Link to="/addexperience">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition shadow hover:shadow-lg">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 4v16m8-8H4"
//                   />
//                 </svg>
//                 Share Experience
//               </button>
//             </Link>
//           </div>

//           {/* Loading State */}
//           {loading && (
//             <div className="text-center text-gray-500 py-20">
//               Loading interview experiences...
//             </div>
//           )}

//           {/* Empty State */}
//           {!loading && interviews.length === 0 && (
//             <div className="text-center py-20 bg-white rounded-xl shadow border">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No interview stories yet
//               </h3>
//               <p className="text-gray-500 mb-6 max-w-md mx-auto">
//                 Your experience could help thousands of candidates prepare
//                 better.
//               </p>
//               <Link to="/addexperience">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium">
//                   Share Your Experience
//                 </button>
//               </Link>
//             </div>
//           )}

//           {/* Interview Cards */}
//           {!loading && interviews.length > 0 && (
//             <div className="grid gap-6">
//               {interviews.map((interview) => (
//                 <div
//                   key={interview._id}
//                   className="bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="p-6">
//                     {/* Card Header */}
//                     <div className="flex flex-col lg:flex-row justify-between gap-4">
//                       <div className="flex gap-4 items-start">
//                         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
//                           {interview.username?.charAt(0)?.toUpperCase() || "U"}
//                         </div>

//                         <div>
//                           <h4 className="font-semibold text-gray-900">
//                             {interview.username}
//                           </h4>
//                           <p className="text-sm text-gray-500">
//                             {interview.position} @ {interview.companyName}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex gap-2 flex-wrap">
//                         {getLevelBadge(interview.interviewLevel)}
//                         {getResultBadge(interview.result)}
//                       </div>
//                     </div>

//                     {/* Experience */}
//                     <div className="mt-6 border-t pt-6">
//                       <h5 className="font-semibold text-gray-900 mb-3">
//                         Interview Experience
//                       </h5>

//                       <div
//                         className={`bg-gray-50 rounded-lg p-4 text-gray-700 whitespace-pre-line transition-all duration-300 ${
//                           expandedId === interview._id
//                             ? "max-h-[1000px]"
//                             : "max-h-32 overflow-hidden"
//                         }`}
//                       >
//                         {interview.experience}
//                       </div>

//                       {interview.experience?.length > 200 && (
//                         <button
//                           onClick={() =>
//                             setExpandedId(
//                               expandedId === interview._id
//                                 ? null
//                                 : interview._id
//                             )
//                           }
//                           className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
//                         >
//                           {expandedId === interview._id
//                             ? "Show less ▲"
//                             : "Read more ▼"}
//                         </button>
//                       )}
//                     </div>

//                     {/* Footer */}
//                     <div className="mt-6 pt-4 border-t flex justify-between text-sm text-gray-500">
//                       <span>
//                         {new Date(
//                           interview.createdAt || Date.now()
//                         ).toLocaleDateString()}
//                       </span>
//                       <span className="italic">Community shared</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default InterviewExperience;












// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar";

// function InterviewExperience() {
//   const [interviews, setInterviews] = useState([]);

//   const fetchInterviews = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3001/auth/fetchinterviewexperience",
//         { withCredentials: true }
//       );

//       if (Array.isArray(res.data.data)) {
//         setInterviews(res.data.data);
//       } else {
//         setInterviews([]);
//       }
//     } catch (error) {
//       console.error("Error fetching interview experiences:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInterviews();
//   }, []);

//   const getLevelBadge = (level) => {
//     const config = {
//       easy: { bg: "bg-green-100", text: "text-green-800", label: "Easy" },
//       medium: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Medium" },
//       difficult: { bg: "bg-red-100", text: "text-red-800", label: "Difficult" },
//       default: { bg: "bg-gray-100", text: "text-gray-800", label: level }
//     };
    
//     const style = config[level?.toLowerCase()] || config.default;
//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-medium ${style.bg} ${style.text}`}>
//         {style.label}
//       </span>
//     );
//   };

//   const getResultBadge = (result) => {
//     const isSuccess = result?.toLowerCase() === "successful";
//     return (
//       <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//         isSuccess 
//           ? "bg-green-100 text-green-800" 
//           : "bg-red-100 text-red-800"
//       }`}>
//         {result}
//       </span>
//     );
//   };

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 py-8">
//           {/* Header */}
//           <div className="mb-4">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//               <div>
//                 <h1 className="text-3xl font-bold text-gray-900">
//                   Interview Experiences
//                 </h1>
//                 <p className="text-gray-600 mt-2">
//                   Real experiences shared by candidates
//                 </p>
//               </div>
              
//               <Link to="/addexperience">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition duration-200 shadow-sm hover:shadow-md">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                   </svg>
//                   Share Your Experience
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {/* Content */}
//           {interviews.length === 0 ? (
//             <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
//               <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No experiences yet</h3>
//               <p className="text-gray-500 mb-6">Be the first to share your interview experience!</p>
//               <Link to="/addexperience">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium">
//                   Share Experience
//                 </button>
//               </Link>
//             </div>
//           ) : (
//             <div className="grid gap-6">
//               {interviews.map((interview) => (
//                 <div key={interview._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden">
//                   <div className="p-6">
//                     {/* Header */}
//                     <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-2">
//                           <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                             <span className="text-blue-600 font-semibold">
//                               {interview.username?.charAt(0)?.toUpperCase() || 'U'}
//                             </span>
//                           </div>
//                           <div>
//                             <h4 className="font-medium text-gray-900">{interview.username}</h4>
//                             <p className="text-sm text-gray-500">Shared experience</p>
//                           </div>
//                         </div>
                        
//                         <h3 className="text-xl font-bold text-gray-900 mb-1">
//                           {interview.position}
//                         </h3>
//                         <p className="text-lg text-gray-700 font-medium">
//                           {interview.companyName}
//                         </p>
//                       </div>
                      
//                       <div className="flex flex-wrap gap-2">
//                         {getLevelBadge(interview.interviewLevel)}
//                         {getResultBadge(interview.result)}
//                       </div>
//                     </div>

//                     {/* Experience Content */}
//                     <div className="mt-6 pt-6 border-t border-gray-100">
//                       <h4 className="font-medium text-gray-900 mb-3">Interview Experience</h4>
//                       <div className="text-gray-700 whitespace-pre-line bg-gray-50 rounded-lg p-4">
//                         {interview.experience}
//                       </div>
//                     </div>

//                     {/* Footer */}
//                     <div className="mt-6 pt-6 border-t border-gray-100">
//                       <div className="flex items-center justify-between text-sm text-gray-500">
//                         <div className="flex items-center gap-4">
//                           <span className="flex items-center gap-1">
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                             </svg>
//                             {new Date(interview.createdAt || Date.now()).toLocaleDateString()}
//                           </span>
//                         </div>
//                         <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
//                           Read more
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default InterviewExperience;































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar.jsx";

// function InterviewExperience() {
//   const [interviews, setInterviews] = useState([]);

//   const fetchInterviews = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3001/auth/fetchinterviewexperience",
//         { withCredentials: true }
//       );

//       // SAFETY CHECK
//       if (Array.isArray(res.data.data)) {
//         setInterviews(res.data.data);
//       } else {
//         setInterviews([]);
//       }
//     } catch (error) {
//       console.error("Error fetching interview experiences:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInterviews();
//   }, []);

//   const getDifficultyClasses = (level) => {
//     switch (level) {
//       case "easy":
//         return "bg-green-600";
//       case "medium":
//         return "bg-yellow-500";
//       case "difficult":
//         return "bg-red-600";
//       default:
//         return "bg-gray-500";
//     }
//   };

//   const getResultClasses = (result) => {
//     return result === "Successful" ? "bg-green-600" : "bg-red-600";
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-100 px-4 py-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-3xl font-bold text-gray-800">
//               Interview Experiences
//             </h2>

//             <Link to="/addexperience">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                 + Add Interview Experience
//               </button>
//             </Link>
//           </div>

//           {interviews.length === 0 ? (
//             <p className="text-center text-gray-500">
//               No interview experiences found.
//             </p>
//           ) : (
//             <ul className="space-y-6">
//               {interviews.map((interview) => (
//                 <li
//                   key={interview._id}
//                   className="bg-white rounded-lg shadow-md p-6"
//                 >
//                   <div className="flex flex-col md:flex-row justify-between gap-4">
//                     <div>
//                       <h3 className="text-blue-600 font-semibold">
//                         Posted by: {interview.username}
//                       </h3>
//                       <h3 className="text-lg font-bold text-gray-800">
//                         Company: {interview.companyName}
//                       </h3>
//                       <p className="text-gray-600 text-lg">
//                         Position: {interview.position}
//                       </p>
//                     </div>

//                     <div className="flex gap-2 items-center">
//                       <span
//                         className={`text-white px-3 py-1 rounded-md text-sm capitalize ${getDifficultyClasses(
//                           interview.interviewLevel
//                         )}`}
//                       >
//                         {interview.interviewLevel}
//                       </span>

//                       <span
//                         className={`text-white px-3 py-1 rounded-md text-sm ${getResultClasses(
//                           interview.result
//                         )}`}
//                       >
//                         {interview.result}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="mt-4 text-gray-700 whitespace-pre-line">
//                     {interview.experience}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default InterviewExperience;
