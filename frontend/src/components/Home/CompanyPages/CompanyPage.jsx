// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../HomeComponents/Navbar.jsx";
// import Footer from "../HomeComponents/Footer.jsx";

// function CompanyPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [companies, setCompanies] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);

//   /* ================= FETCH COMPANIES ================= */
//   const fetchCompanies = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3001/auth/getCompanies/${id}`,
//         { withCredentials: true }
//       );

//       console.log("Company API response:", res.data);

//       // ✅ handle all backend formats
//       if (Array.isArray(res.data)) {
//         setCompanies(res.data);
//       } else if (Array.isArray(res.data.companies)) {
//         setCompanies(res.data.companies);
//       } else if (res.data.data && typeof res.data.data === "object") {
//         setCompanies([res.data.data]); // wrap single company
//       } else {
//         setCompanies([]);
//       }
//     } catch (err) {
//       console.error("Fetch companies error:", err);
//       setCompanies([]);
//     }
//   };

//   /* ================= AUTH & USER ================= */
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/verify", { withCredentials: true })
//       .then((res) => {
//         if (!res.data.status) navigate("/login");
//       })
//       .catch(() => navigate("/login"));

//     axios
//       .get("http://localhost:3001/auth/currentUser", {
//         withCredentials: true,
//       })
//       .then((res) => setCurrentUser(res.data.user))
//       .catch(console.error);

//     fetchCompanies();
//   }, [id]);

//   /* ================= CHECK APPLIED ================= */
//   const hasApplied = (companyId) => {
//     return currentUser?.appliedCompanies?.includes(companyId);
//   };

//   /* ================= APPLY ================= */
//   const handleApply = async (companyId) => {
//     if (!currentUser?._id) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `http://localhost:3001/auth/applyCompany/${currentUser._id}/${companyId}`,
//         {},
//         { withCredentials: true }
//       );

//       alert(res.data.message);

//       // ✅ update UI immediately
//       setCurrentUser((prev) => ({
//         ...prev,
//         appliedCompanies: [...(prev.appliedCompanies || []), companyId],
//       }));

//       navigate("/scheduledInterview");
//     } catch (err) {
//       console.error("Apply error:", err.response || err);
//       alert(err.response?.data?.message || "Server error");
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       {/* TITLE */}
//       <h1 className="mt-36 text-center text-4xl font-bold text-blue-900">
//         Apply Jobs
//       </h1>

//       {/* MAIN SECTION */}
//       <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
//         {/* LEFT IMAGE */}
//         <div className="lg:w-1/2 flex justify-center">
//           <img
//             alt="Apply Jobs"
//             className="w-[500px] h-[500px] rounded-xl shadow-lg"
//           />
//         </div>

//         {/* COMPANY CARDS */}
//         <div className="lg:w-1/2 space-y-8">
//           {Array.isArray(companies) && companies.length > 0 ? (
//             companies.map((company) => (
//               <div
//                 key={company._id}
//                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
//               >
//                 <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//                   {company.companyname}
//                 </h2>

//                 <div className="space-y-3 text-lg text-gray-700">
//                   <p>
//                     <span className="font-semibold">CTC:</span>{" "}
//                     {company.ctc} LPA
//                   </p>
//                   <p>
//                     <span className="font-semibold">Interview Date:</span>{" "}
//                     {company.doi}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Job Description:</span>{" "}
//                     {company.jobdescription}
//                   </p>

//                   <div>
//                     <p className="font-semibold">Eligibility:</p>
//                     <p>10th: {company.tenthPercentage}%</p>
//                     <p>12th: {company.twelfthPercentage}%</p>
//                     <p>Graduation CGPA: {company.graduationCGPA}</p>
//                     <p>6th Sem CGPA: {company.sixthSemesterCGPA}</p>
//                   </div>
//                 </div>

//                 {/* APPLY BUTTON */}
//                 <div className="mt-6 text-center">
//                   <button
//                     onClick={() => handleApply(company._id)}
//                     disabled={hasApplied(company._id)}
//                     className={`px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition
//                       ${
//                         hasApplied(company._id)
//                           ? "bg-gray-400 cursor-not-allowed text-white"
//                           : "bg-blue-900 hover:bg-blue-800 text-white"
//                       }
//                     `}
//                   >
//                     {hasApplied(company._id) ? "Applied" : "Apply Now"}
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 text-lg">
//               No companies available
//             </p>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default CompanyPage;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar.jsx";
import Footer from "../HomeComponents/Footer.jsx";
import api_endpoints from '../../../utils/data.js';

function CompanyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [companies, setCompanies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  /* ================= FETCH COMPANIES ================= */
  const fetchCompanies = async () => {
    try {
      const res = await axios.get(
        `${api_endpoints}/getCompanies/${id}`,
        { withCredentials: true }
      );

      console.log("Company API response:", res.data);

      if (Array.isArray(res.data)) {
        setCompanies(res.data);
      } else if (Array.isArray(res.data.companies)) {
        setCompanies(res.data.companies);
      } else if (res.data.data && typeof res.data.data === "object") {
        setCompanies([res.data.data]);
      } else {
        setCompanies([]);
      }
    } catch (err) {
      console.error("Fetch companies error:", err);
      setCompanies([]);
    }
  };

  /* ================= AUTH & USER ================= */
  useEffect(() => {
    axios
      .get(`${api_endpoints}/auth/verify`, { withCredentials: true })
      .then((res) => {
        if (!res.data.status) navigate("/login");
      })
      .catch(() => navigate("/login"));

    axios
      .get(`${api_endpoints}/auth/currentUser`, {
        withCredentials: true,
      })
      .then((res) => setCurrentUser(res.data.user))
      .catch(console.error);

    fetchCompanies();
  }, [id]);

  /* ================= CHECK APPLIED ================= */
  const hasApplied = (companyId) => {
    return currentUser?.appliedCompanies?.includes(companyId);
  };

  /* ================= APPLY ================= */
  const handleApply = async (companyId) => {
    if (!currentUser?._id) {
      alert("Please login first");
      return;
    }

    try {
      const res = await axios.post(
        `${api_endpoints}/applyCompany/${currentUser._id}/${companyId}`,
        {},
        { withCredentials: true }
      );

      alert(res.data.message);

      setCurrentUser((prev) => ({
        ...prev,
        appliedCompanies: [...(prev.appliedCompanies || []), companyId],
      }));

      navigate("/scheduledInterview");
    } catch (err) {
      console.error("Apply error:", err.response || err);
      alert(err.response?.data?.message || "Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
            Apply Now
          </h1>
          <p className="text-center text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            Review eligibility and submit your application
          </p>

          {companies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-500 dark:text-zinc-400">
                Company details not available
              </p>
              <p className="mt-3 text-zinc-400 dark:text-zinc-500">
                Please try again later or contact support
              </p>
            </div>
          ) : (
            companies.map((company) => (
              <div
                key={company._id}
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - Visual / Hero Section */}
                  <div className="relative bg-gradient-to-br from-emerald-50 to-zinc-50 dark:from-emerald-950/30 dark:to-zinc-900/50 p-8 lg:p-12 flex items-center justify-center min-h-[400px] lg:min-h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-5xl font-bold shadow-md">
                        {company.companyname?.charAt(0) || "?"}
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-3">
                        {company.companyname}
                      </h2>

                      <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium">
                        {company.jobprofile || "Full-time Opportunity"}
                      </p>
                    </div>

                    {/* Optional decorative elements */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
                    </div>
                  </div>

                  {/* Right - Details & Apply */}
                  <div className="p-8 lg:p-12 space-y-8">
                    <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                            CTC
                          </p>
                          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                            {company.ctc ? `${company.ctc} LPA` : "Confidential"}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                            Interview Date
                          </p>
                          <p className="text-xl font-medium">
                            {company.doi
                              ? new Date(company.doi).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "To Be Announced"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                          Website
                        </p>
                        {company.website ? (
                          <a
                            href={
                              company.website.startsWith("http")
                                ? company.website
                                : `https://${company.website}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="leading-relaxed text-emerald-600 dark:text-emerald-400 underline hover:text-emerald-700"
                          >
                            {company.website}
                          </a>
                        ) : (
                          <p>Official Website is not available.</p>
                        )}
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-2">
                          Job Description
                        </p>
                        <p className="leading-relaxed">
                          {company.jobdescription ||
                            "Detailed job description will be provided during the recruitment process."}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-3">
                          Eligibility Criteria
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">10th:</span>{" "}
                            {company.tenthPercentage}%
                          </div>
                          <div>
                            <span className="font-medium">12th:</span>{" "}
                            {company.twelfthPercentage}%
                          </div>
                          <div>
                            <span className="font-medium">Graduation CGPA:</span>{" "}
                            {company.graduationCGPA || "N/A"}
                          </div>
                          <div>
                            <span className="font-medium">6th Sem CGPA:</span>{" "}
                            {company.sixthSemesterCGPA || "N/A"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
                      <button
                        onClick={() => handleApply(company._id)}
                        disabled={hasApplied(company._id)}
                        className={`w-full py-4 px-8 rounded-xl text-lg font-semibold shadow-md transition-all duration-300
                          ${
                            hasApplied(company._id)
                              ? "bg-zinc-300 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-400 cursor-not-allowed"
                              : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 active:scale-[0.98]"
                          }`}
                      >
                        {hasApplied(company._id) ? "Already Applied ✓" : "Apply Now"}
                      </button>

                      {hasApplied(company._id) && (
                        <p className="mt-3 text-center text-sm text-emerald-600 dark:text-emerald-400">
                          You've successfully applied! Check Scheduled Interviews.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompanyPage;

