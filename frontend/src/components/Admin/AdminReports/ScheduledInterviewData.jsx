// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminHome from "../AdminHome.jsx";
// import Footer from "../AdminReusableComponents/AdminFooter.js";
// import '../Admin-CSS/ScheduledInterviewData.css';

// function ScheduledInterviewData() {
//   const [companyData, setCompanyData] = useState([]);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/auth/companyApplicants');
//         setCompanyData(response.data);
//       } catch (error) {
//         console.error('Error fetching company data:', error);
//       }
//     };

//     fetchCompanyData();
//   }, []);


//   const handleUpdatePlacementStatus = async (userId, companyId, status) => {
//     try {
//       const response = await axios.post('http://localhost:3001/auth/updatePlacementStatus', {
//         userId,
//         companyId,
//         status
//       });

//       console.log(response.data);
//       alert(response.data.message); // Display response message in alert
//     } catch (error) {
//       console.error('Error updating placement status:', error.response.data.message);
//       alert(error.response.data.message); // Display error message in alert
//     }
//   };

//   return (
//     <>
//       <AdminHome/>
//       <h1 className='page-heading' style={{marginTop:"150px"}}>Company-wise Student Applications</h1>
//       <div className="split">
//         <div className="right">
//           <div className="table-wrapper">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Company Name</th>
//                   <th>Student Name</th>
//                   <th>Email</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {companyData.map((company, index) => (
                 
                  

//                   <React.Fragment key={index}>
//                     {company.applicants.map((applicant, appIndex) => (
                      
//                       <tr key={appIndex}>
//                         <td>{company.companyName}</td>
//                         <td>{applicant.name}</td>
//                         <td>{applicant.email}</td>
//                         <td>
                     
//                           <button  className="btn btn-sm btn-primary" style={{ backgroundColor: 'green', color: 'white', width: '130px' }} onClick={() => handleUpdatePlacementStatus(applicant.userId, company.companyId, 'Placed')}>Interview Cleared</button>
//                           <button  className="btn btn-sm btn-primary" style={{ backgroundColor: '#EF0107', color: 'white', width: '130px' }} onClick={() => handleUpdatePlacementStatus(applicant.userId, company.companyId, 'Unplaced')}>Interview Failed</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default ScheduledInterviewData;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import AdminNav from "../AdminReusableComponents/AdminNav.jsx";

// function ScheduledInterviewData() {
//   const navigate = useNavigate();

//   const [companyData, setCompanyData] = useState([]);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/auth/companyApplicants"
//         );
//         setCompanyData(response.data || []);
//       } catch (error) {
//         console.error("Error fetching company data:", error);
//       }
//     };

//     fetchCompanyData();
//   }, []);

//   const handleUpdatePlacementStatus = async (userId, companyId, status) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/auth/updatePlacementStatus",
//         { userId, companyId, status }
//       );

//       alert(response.data.message);

//       // Optional: refresh data after update
//       // fetchCompanyData();
//     } catch (error) {
//       alert(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <>
//       <AdminNav />

//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <div className="text-center mb-10">
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//               Company-wise Applications
//             </h1>
//             <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
//               Review applicants • Update interview results • Track placements
//             </p>
//           </div>

//           {companyData.length === 0 ? (
//             <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl p-12 text-center">
//               <div className="text-6xl mb-6">📭</div>
//               <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
//                 No applications found
//               </h3>
//               <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
//                 When students start applying to companies, their details will appear here.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-10">
//               {companyData.map((company, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden"
//                 >
//                   {/* Company Header */}
//                   <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-5 text-white">
//                     <h2 className="text-xl sm:text-2xl font-bold">
//                       {company.companyName}
//                     </h2>
//                     <p className="text-emerald-100 mt-1 opacity-90">
//                       {company.applicants?.length || 0} student
//                       {company.applicants?.length !== 1 ? "s" : ""} applied
//                     </p>
//                   </div>

//                   {/* Applicants Table */}
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
//                       <thead className="bg-zinc-50 dark:bg-zinc-800/50">
//                         <tr>
//                           <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                             Student Name
//                           </th>
//                           <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                             Email
//                           </th>
//                           <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                             Action
//                           </th>
//                         </tr>
//                       </thead>

//                       <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
//                         {company.applicants?.length > 0 ? (
//                           company.applicants.map((applicant, appIndex) => (
//                             <tr
//                               key={appIndex}
//                               className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
//                             >
//                               <td className="px-6 py-4 whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100">
//                                 {applicant.name || "—"}
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
//                                 {applicant.email || "—"}
//                               </td>
//                               <td className="px-6 py-4 whitespace-nowrap text-center">
//                                 <div className="flex items-center justify-center gap-3">
//                                   <button
//                                     onClick={() =>
//                                       handleUpdatePlacementStatus(
//                                         applicant.userId,
//                                         company.companyId,
//                                         "Placed"
//                                       )
//                                     }
//                                     className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
//                                   >
//                                     <span>✓</span> Cleared
//                                   </button>

//                                   <button
//                                     onClick={() =>
//                                       handleUpdatePlacementStatus(
//                                         applicant.userId,
//                                         company.companyId,
//                                         "Unplaced"
//                                       )
//                                     }
//                                     className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
//                                   >
//                                     <span>✗</span> Failed
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         ) : (
//                           <tr>
//                             <td
//                               colSpan="3"
//                               className="px-6 py-10 text-center text-zinc-500 dark:text-zinc-400"
//                             >
//                               No applicants for this company yet
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
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

// export default ScheduledInterviewData;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
import api_endpoints from '../../../utils/data.js';


function ScheduledInterviewData() {
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState([]);

  // Pagination per company
  const [currentPages, setCurrentPages] = useState({}); // object: companyIndex → currentPage

  const applicantsPerPage = 8;

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(
          `${api_endpoints}/companyApplicants`
        );
        const data = response.data || [];
        setCompanyData(data);

        // Initialize pagination for each company
        const initialPages = {};
        data.forEach((_, index) => {
          initialPages[index] = 1;
        });
        setCurrentPages(initialPages);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    fetchCompanyData();
  }, []);

  const handleUpdatePlacementStatus = async (userId, companyId, status) => {
    try {
      const response = await axios.post(
        `${api_endpoints}/updatePlacementStatus`,
        { userId, companyId, status }
      );

      alert(response.data.message);

      // Optional: refresh data after update
      // fetchCompanyData();
    } catch (error) {
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  // Get paginated applicants for a specific company
  const getCurrentApplicants = (companyIndex) => {
    const company = companyData[companyIndex];
    if (!company?.applicants) return [];

    const page = currentPages[companyIndex] || 1;
    const start = (page - 1) * applicantsPerPage;
    return company.applicants.slice(start, start + applicantsPerPage);
  };

  // Get total pages for a company
  const getTotalPages = (companyIndex) => {
    const applicants = companyData[companyIndex]?.applicants || [];
    return Math.ceil(applicants.length / applicantsPerPage);
  };

  // Change page for a specific company
  const changePage = (companyIndex, newPage) => {
    setCurrentPages((prev) => ({
      ...prev,
      [companyIndex]: newPage,
    }));
  };

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Company-wise Applications
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Review applicants • Update interview results • Track placements
            </p>
          </div>

          {companyData.length === 0 ? (
            <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl p-12 text-center">
              <div className="text-6xl mb-6">📭</div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                No applications found
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                When students start applying to companies, their details will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {companyData.map((company, index) => {
                const currentApplicants = getCurrentApplicants(index);
                const totalPages = getTotalPages(index);
                const currentPage = currentPages[index] || 1;

                return (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden"
                  >
                    {/* Company Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-5 text-white">
                      <h2 className="text-xl sm:text-2xl font-bold">
                        {company.companyName}
                      </h2>
                      <p className="text-emerald-100 mt-1 opacity-90">
                        {company.applicants?.length || 0} student
                        {company.applicants?.length !== 1 ? "s" : ""} applied
                      </p>
                    </div>

                    {/* Applicants Table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                        <thead className="bg-zinc-50 dark:bg-zinc-800/50">
                          <tr>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                              Student Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                          {currentApplicants.length > 0 ? (
                            currentApplicants.map((applicant, appIndex) => (
                              <tr
                                key={appIndex}
                                className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                              >
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100">
                                  {applicant.name || "—"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                                  {applicant.email || "—"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                  <div className="flex items-center justify-center gap-3">
                                    <button
                                      onClick={() =>
                                        handleUpdatePlacementStatus(
                                          applicant.userId,
                                          company.companyId,
                                          "Placed"
                                        )
                                      }
                                      className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
                                    >
                                      <span>✓</span> Cleared
                                    </button>

                                    <button
                                      onClick={() =>
                                        handleUpdatePlacementStatus(
                                          applicant.userId,
                                          company.companyId,
                                          "Unplaced"
                                        )
                                      }
                                      className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5"
                                    >
                                      <span>✗</span> Failed
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td
                                colSpan="3"
                                className="px-6 py-10 text-center text-zinc-500 dark:text-zinc-400"
                              >
                                No applicants for this company yet
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination for this company */}
                    {totalPages > 1 && (
                      <div className="flex flex-wrap justify-center items-center gap-2 py-6 border-t border-zinc-200 dark:border-zinc-700">
                        <button
                          disabled={currentPage === 1}
                          onClick={() => changePage(index, currentPage - 1)}
                          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                            currentPage === 1
                              ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
                              : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
                          }`}
                        >
                          Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => {
                          const pageNum = i + 1;
                          return (
                            <button
                              key={pageNum}
                              onClick={() => changePage(index, pageNum)}
                              className={`px-4 py-2 rounded-lg font-medium min-w-[44px] transition-colors ${
                                currentPage === pageNum
                                  ? "bg-emerald-300 text-zinc-900 shadow-sm font-semibold"
                                  : "border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}

                        <button
                          disabled={currentPage === totalPages}
                          onClick={() => changePage(index, currentPage + 1)}
                          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                            currentPage === totalPages
                              ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
                              : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    )}

                    {/* Showing count for this company */}
                    {company.applicants?.length > 0 && (
                      <div className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-right border-t border-zinc-200 dark:border-zinc-700">
                        Showing {currentApplicants.length} of {company.applicants.length} applicants
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ScheduledInterviewData;