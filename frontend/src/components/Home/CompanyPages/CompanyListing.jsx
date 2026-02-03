// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// const CompanyListing = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
  
    

//   useEffect(() => {
    
//     const fetchCompanies = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3001/auth/getCompanies"
//         );
//         console.log(res.data);
//         setCompanies(res.data.data);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="mt-32 px-4">
//         <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
//           Ongoing Drives
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500 text-lg">Loading...</p>
//         ) : (
//           <div className="flex flex-wrap justify-center gap-8">
//             {companies.map((company) => (
//               <div
//                 key={company._id}
//                 className="w-[300px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
//               >
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-blue-600 mb-2">
//                     {company.companyname}
//                   </h3>

//                   <p className="text-gray-600 mb-1">
//                     <span className="font-medium">Profile:</span>{" "}
//                     {company.jobprofile}
//                   </p>

//                   <p className="text-gray-600 mb-1">
//                     <span className="font-medium">CTC:</span>{" "}
//                     {company.ctc} LPA
//                   </p>

//                   <p className="text-gray-600">
//                     <span className="font-medium">Interview Date:</span>{" "}
//                     {company.doi}
//                   </p>
//                 </div>

//                 <div className="flex justify-center pb-6">
//                   <Link
//                     to={`/companypage/${company._id}`}
//                     className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition transform hover:-translate-y-1 shadow-md"
//                   >
//                     Show Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default CompanyListing;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// const CompanyListing = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await axios.get("http://localhost:3001/auth/getCompanies");
//         console.log(res.data);
//         setCompanies(res.data.data || []);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
//             Ongoing Drives
//             <span className="block mt-2 text-emerald-300 text-5xl sm:text-6xl font-black">
//               Find Your Opportunity
//             </span>
//           </h1>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="relative w-16 h-16">
//                 <div className="absolute inset-0 border-4 border-emerald-300/30 rounded-full animate-pulse"></div>
//                 <div className="absolute inset-2 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin"></div>
//               </div>
//               <p className="ml-6 text-lg text-zinc-600 dark:text-zinc-400">
//                 Loading placement drives...
//               </p>
//             </div>
//           ) : companies.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-xl text-zinc-500 dark:text-zinc-400">
//                 No ongoing drives at the moment.
//               </p>
//               <p className="mt-3 text-zinc-400 dark:text-zinc-500">
//                 Check back soon — new opportunities are added regularly!
//               </p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//               {companies.map((company) => (
//                 <div
//                   key={company._id}
//                   className="group bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 overflow-hidden shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <div className="p-6 pb-4">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl">
//                         {company.companyname?.charAt(0) || "?"}
//                       </div>
//                       <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-300 transition-colors">
//                         {company.companyname}
//                       </h3>
//                     </div>

//                     <div className="space-y-3 text-sm">
//                       <p className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
//                         <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[80px]">
//                           Profile:
//                         </span>
//                         {company.jobprofile || "Not specified"}
//                       </p>

//                       <p className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
//                         <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[80px]">
//                           CTC:
//                         </span>
//                         {company.ctc ? `${company.ctc} LPA` : "Confidential"}
//                       </p>

//                       <p className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
//                         <span className="font-medium text-emerald-600 dark:text-emerald-400 min-w-[80px]">
//                           Date:
//                         </span>
//                         <time className="font-medium">
//                           {company.doi
//                             ? new Date(company.doi).toLocaleDateString("en-IN", {
//                                 day: "numeric",
//                                 month: "short",
//                                 year: "numeric",
//                               })
//                             : "TBA"}
//                         </time>
//                       </p>
//                     </div>
//                   </div>

//                   <div className="px-6 pb-6 pt-2">
//                     <Link
//                       to={`/companypage/${company._id}`}
//                       className="block w-full py-3 px-6 text-center font-semibold rounded-xl bg-emerald-300 text-zinc-900 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5"
//                     >
//                       View Details →
//                     </Link>
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
// };

// export default CompanyListing;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../HomeComponents/Navbar.jsx";
import Footer from "../HomeComponents/Footer.jsx";
import api_endpoints from '../../../utils/data.js';

const CompanyListing = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 3;

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${api_endpoints}/getCompanies`);
        setCompanies(res.data.data || []);
        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching companies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  // Pagination logic
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(companies.length / companiesPerPage);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-100 mb-12">
            Ongoing Drives
            <span className="block mt-2 text-emerald-300 text-5xl sm:text-6xl font-black">
              Find Your Opportunity
            </span>
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-emerald-300/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="ml-6 text-lg text-zinc-600 dark:text-zinc-400">
                Loading placement drives...
              </p>
            </div>
          ) : companies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-zinc-500 dark:text-zinc-400">
                No ongoing drives at the moment.
              </p>
            </div>
          ) : (
            <>
              {/* Company Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentCompanies.map((company) => (
                  <div
                    key={company._id}
                    className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xl shadow-sm">
                          {company.companyname?.charAt(0) || "?"}
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {company.companyname}
                        </h3>
                      </div>

                      {/* White background section for profile, CTC, date */}
                      <div className="bg-white dark:bg-zinc-800/70 rounded-xl p-5 space-y-3 text-sm border border-zinc-100 dark:border-zinc-700/50">
                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400 min-w-[90px]">
                            Profile:
                          </span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                            {company.jobprofile || "Not specified"}
                          </span>
                        </p>

                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400 min-w-[90px]">
                            CTC:
                          </span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                            {company.ctc ? `${company.ctc} LPA` : "Confidential"}
                          </span>
                        </p>

                        <p className="flex items-center gap-2">
                          <span className="font-semibold text-emerald-700 dark:text-emerald-400 min-w-[90px]">
                            Date:
                          </span>
                          <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                            {company.doi
                              ? new Date(company.doi).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })
                              : "TBA"}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <Link
                        to={`/companypage/${company._id}`}
                        className="block w-full py-3 text-center font-semibold rounded-xl bg-emerald-300 text-zinc-900 hover:bg-emerald-400 hover:shadow-md transition-all duration-300"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {Math.ceil(companies.length / companiesPerPage) > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-5 py-2.5 rounded-lg border text-sm disabled:opacity-50 bg-amber-50  hover:bg-emerald-50 dark:hover:bg-zinc-800"
                  >
                    Prev
                  </button>

                  {[...Array(Math.ceil(companies.length / companiesPerPage))].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium min-w-[40px] transition-colors
                        ${currentPage === i + 1
                          ? "bg-emerald-300 text-zinc-900 shadow-sm"
                          : "border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"}`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === Math.ceil(companies.length / companiesPerPage)}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-5 py-2.5 rounded-lg border text-sm disabled:opacity-50 bg-white   hover:bg-emerald-50 dark:hover:bg-zinc-800"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CompanyListing;