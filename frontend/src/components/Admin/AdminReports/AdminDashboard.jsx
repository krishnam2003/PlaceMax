// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminNav from '../AdminReusableComponents/AdminNav.jsx';
// // import Footer from "../AdminReusableComponents/AdminFooter.js";

// function ScheduledInterviewData() {
//   const [companyData, setCompanyData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/auth/companyApplicants"
//         );
//         setCompanyData(response.data || []);
//       } catch (error) {
//         console.error("Error fetching company data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanyData();
//   }, []);

//   const handleUpdatePlacementStatus = async (
//     userId,
//     companyId,
//     status
//   ) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/auth/updatePlacementStatus",
//         {
//           userId,
//           companyId,
//           status,
//         }
//       );

//       alert(response.data.message);
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Update failed");
//     }
//   };

//   return (
//     <>
//       <AdminNav />

//       <div className="min-h-screen bg-gray-50 pt-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Page Heading */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-extrabold text-gray-900">
//               Company-wise Student Applications
//             </h1>
//             <p className="text-gray-600 mt-2">
//               Review applicants and update placement status
//             </p>
//           </div>

//           {/* Loading State */}
//           {loading && (
//             <div className="text-center py-20 text-gray-500">
//               Loading applications...
//             </div>
//           )}

//           {/* Empty State */}
//           {!loading && companyData.length === 0 && (
//             <div className="bg-white rounded-xl shadow border p-10 text-center">
//               <p className="text-gray-600">
//                 No company applications found.
//               </p>
//             </div>
//           )}

//           {/* Table */}
//           {!loading && companyData.length > 0 && (
//             <div className="overflow-x-auto bg-white rounded-xl shadow border">
//               <table className="min-w-full border-collapse">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                       Company Name
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                       Student Name
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                       Email
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y">
//                   {companyData.map((company, index) => (
//                     <React.Fragment key={index}>
//                       {company.applicants.map((applicant, appIndex) => (
//                         <tr
//                           key={appIndex}
//                           className="hover:bg-gray-50 transition"
//                         >
//                           <td className="px-6 py-4 text-gray-900 font-medium">
//                             {company.companyName}
//                           </td>
//                           <td className="px-6 py-4 text-gray-700">
//                             {applicant.name}
//                           </td>
//                           <td className="px-6 py-4 text-gray-600">
//                             {applicant.email}
//                           </td>
//                           <td className="px-6 py-4">
//                             <div className="flex flex-wrap gap-3">
//                               <button
//                                 onClick={() =>
//                                   handleUpdatePlacementStatus(
//                                     applicant.userId,
//                                     company.companyId,
//                                     "Placed"
//                                   )
//                                 }
//                                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                               >
//                                 Interview Cleared
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   handleUpdatePlacementStatus(
//                                     applicant.userId,
//                                     company.companyId,
//                                     "Unplaced"
//                                   )
//                                 }
//                                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                               >
//                                 Interview Failed
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>

     
//     </>
//   );
// }

// export default ScheduledInterviewData;









// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import * as XLSX from "xlsx";
// import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
// // import Footer from "../AdminReusableComponents/AdminFooter.js";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   const [users, setUsers] = useState([]);
//   const [originalUsers, setOriginalUsers] = useState([]);
//   const [selectedProgram, setSelectedProgram] = useState("");
//   const [filters, setFilters] = useState({
//     tenthPercentage: "",
//     twelfthPercentage: "",
//     graduationCGPA: "",
//     placementStatus: "",
//   });

//   // 🔐 Verify admin
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) navigate("/");
//     });
//   }, [navigate]);

//   // 📥 Fetch users
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/getUsers").then((res) => {
//       setUsers(res.data.data || []);
//       setOriginalUsers(res.data.data || []);
//     });
//   }, []);

//   // 📤 Download Excel
//  const handleDownload = () => {
//   const exportUsers = users.map((u) => ({
//     name: u.name,
//     email: u.email,
//     contactNumber: u.contactNumber,
//     sapId: u.sapId,
//     rollNo: u.rollNo,
//     gender: u.gender,
//     dob: u.dob,
//     tenthPercentage: u.tenthPercentage,
//     twelfthPercentage: u.twelfthPercentage,
//     graduationCGPA: u.graduationCGPA,
//     stream: u.stream,
//     placementStatus: u.placementStatus,
//     companyPlaced: u.companyPlaced,
//   }));

//   const worksheet = XLSX.utils.json_to_sheet(exportUsers, { defval: "" });
//   const workbook = XLSX.utils.book_new();

//   XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
//   XLSX.writeFile(workbook, "users_data.xlsx");
// };


//   // 🔍 Apply filters
//   const applyFilters = () => {
//     const filtered = originalUsers.filter((user) => {
//       return (
//         (!filters.tenthPercentage ||
//           user.tenthPercentage >= filters.tenthPercentage) &&
//         (!filters.twelfthPercentage ||
//           user.twelfthPercentage >= filters.twelfthPercentage) &&
//         (!filters.graduationCGPA ||
//           user.graduationCGPA >= filters.graduationCGPA) &&
//         (!selectedProgram || user.stream === selectedProgram) &&
//         (!filters.placementStatus ||
//           user.placementStatus === filters.placementStatus)
//       );
//     });

//     setUsers(filtered);
//   };

//   // 🔄 Reset
//   const resetFilters = () => {
//     setFilters({
//       tenthPercentage: "",
//       twelfthPercentage: "",
//       graduationCGPA: "",
//       placementStatus: "",
//     });
//     setSelectedProgram("");
//     setUsers(originalUsers);
//   };

//   return (
//     <>
//       <AdminNav />

//       <div className="mt-36 max-w-7xl mx-auto px-6">
//         {/* 🧠 HEADER */}
//         <h1 className="text-4xl font-extrabold text-center text-gray-900">
//           User Reports
//         </h1>
//         <p className="text-center text-gray-500 mt-2">
//           Filter, analyze and export student data
//         </p>

//         {/* 🎛 FILTER CARD */}
//         <div className="bg-white shadow-xl rounded-2xl p-6 mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           <input
//             type="number"
//             placeholder="10th % ≥"
//             value={filters.tenthPercentage}
//             onChange={(e) =>
//               setFilters({ ...filters, tenthPercentage: e.target.value })
//             }
//             className="border rounded-lg px-4 py-2"
//           />

//           <input
//             type="number"
//             placeholder="12th % ≥"
//             value={filters.twelfthPercentage}
//             onChange={(e) =>
//               setFilters({ ...filters, twelfthPercentage: e.target.value })
//             }
//             className="border rounded-lg px-4 py-2"
//           />

//           <input
//             type="number"
//             placeholder="Graduation CGPA ≥"
//             value={filters.graduationCGPA}
//             onChange={(e) =>
//               setFilters({ ...filters, graduationCGPA: e.target.value })
//             }
//             className="border rounded-lg px-4 py-2"
//           />

//           <select
//             value={selectedProgram}
//             onChange={(e) => setSelectedProgram(e.target.value)}
//             className="border rounded-lg px-4 py-2"
//           >
//             <option value="">Select Program</option>
//             <option value="MCA">MCA</option>
//             <option value="Btech-CS">Btech-CS</option>
//             <option value="Btech-IT">Btech-IT</option>
//             <option value="Btech-Data Science">Btech-Data Science</option>
//             <option value="Btech-Cybersecurity">Btech-Cybersecurity</option>
//           </select>

//           <select
//             value={filters.placementStatus}
//             onChange={(e) =>
//               setFilters({ ...filters, placementStatus: e.target.value })
//             }
//             className="border rounded-lg px-4 py-2"
//           >
//             <option value="">Placement Status</option>
//             <option value="Placed">Placed</option>
//             <option value="Unplaced">Unplaced</option>
//           </select>

//           <button
//             onClick={applyFilters}
//             className="bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700"
//           >
//             Apply Filters
//           </button>

//           <button
//             onClick={resetFilters}
//             className="bg-gray-200 rounded-lg py-2 hover:bg-gray-300"
//           >
//             Reset
//           </button>

//           <button
//             onClick={handleDownload}
//             className="bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
//           >
//             Download Excel
//           </button>
//         </div>

//         {/* 📊 TABLE */}
//         <div className="mt-10 overflow-x-auto bg-white shadow-xl rounded-2xl">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 {[
//                   "Name",
//                   "Email",
//                   "SAP ID",
//                   "Roll No",
//                   "10th %",
//                   "12th %",
//                   "Grad CGPA",
//                   "Stream",
//                   "Status",
//                   "Company",
//                 ].map((h) => (
//                   <th key={h} className="px-4 py-3 text-left font-semibold">
//                     {h}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody className="divide-y">
//               {users.map((user) => (
//                 <tr key={user._id} className="hover:bg-gray-50">
//                   <td className="px-4 py-2">{user.name}</td>
//                   <td className="px-4 py-2">{user.email}</td>
//                   <td className="px-4 py-2">{user.sapId}</td>
//                   <td className="px-4 py-2">{user.rollNo}</td>
//                   <td className="px-4 py-2">{user.tenthPercentage}</td>
//                   <td className="px-4 py-2">{user.twelfthPercentage}</td>
//                   <td className="px-4 py-2">{user.graduationCGPA}</td>
//                   <td className="px-4 py-2">{user.stream}</td>
//                   <td className="px-4 py-2">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         user.placementStatus === "Placed"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {user.placementStatus}
//                     </span>
//                   </td>
//                   <td className="px-4 py-2">{user.companyPlaced}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

      
//     </>
//   );
// }

// export default AdminDashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as XLSX from "xlsx";
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
import api_endpoints from '../../../utils/data.js';

function AdminDashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [filters, setFilters] = useState({
    tenthPercentage: "",
    twelfthPercentage: "",
    graduationCGPA: "",
    placementStatus: "",
  });

  // Verify admin access
  useEffect(() => {
    axios.get(`${api_endpoints}/verify`).then((res) => {
      if (!res.data.status) navigate("/");
    });
  }, [navigate]);

  // Fetch users and filter out placement officers / admins
  useEffect(() => {
    axios.get(`${api_endpoints}/getUsers`).then((res) => {
      const allUsers = res.data.data || [];

      const filteredUsers = allUsers.filter((user) => {
        // Exclude placement officers by name
        if (user.name && user.name.toLowerCase().includes("placement officer")) {
          return false;
        }
        // Exclude by email keyword
        if (user.email && user.email.toLowerCase().includes("placement@college.com")) {
          return false;
        }
        // Exclude admin role if exists
        if (user.role === "admin") return false;
        return true;
      });

      setUsers(filteredUsers);
      setOriginalUsers(filteredUsers);
    }).catch((err) => {
      console.error("Failed to load users:", err);
    });
  }, []);

  // Export filtered data to Excel
  const handleDownload = () => {
    const exportData = users.map((u) => ({
      Name: u.name || "-",
      Email: u.email || "-",
      "Contact Number": u.contactNumber || "-",
      "SAP ID": u.sapId || "-",
      "Roll No": u.rollNo || "-",
      Gender: u.gender || "-",
      DOB: u.dob ? new Date(u.dob).toLocaleDateString("en-IN") : "-",
      "10th %": u.tenthPercentage || "-",
      "10th School": u.tenthSchool || "-",
      "12th %": u.twelfthPercentage || "-",
      "12th College": u.twelfthCollege || "-",
      "Graduation College": u.graduationCollege || "-",
      Stream: u.stream || "-",
      "Grad CGPA": u.graduationCGPA || "-",
      "6th Sem CGPA": u.sixthSemesterCGPA || "-",
      "Placement Status": u.placementStatus || "Unplaced",
      "Company Placed": u.companyPlaced || "-",
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, `PlaceX_Students_${new Date().toISOString().slice(0,10)}.xlsx`);
  };

  // Apply filters
  const applyFilters = () => {
    const filtered = originalUsers.filter((user) => {
      return (
        (!filters.tenthPercentage || Number(user.tenthPercentage) >= Number(filters.tenthPercentage)) &&
        (!filters.twelfthPercentage || Number(user.twelfthPercentage) >= Number(filters.twelfthPercentage)) &&
        (!filters.graduationCGPA || Number(user.graduationCGPA || 0) >= Number(filters.graduationCGPA)) &&
        (!selectedProgram || user.stream === selectedProgram) &&
        (!filters.placementStatus || user.placementStatus === filters.placementStatus)
      );
    });
    setUsers(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      tenthPercentage: "",
      twelfthPercentage: "",
      graduationCGPA: "",
      placementStatus: "",
    });
    setSelectedProgram("");
    setUsers(originalUsers);
  };

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Student Reports
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Filter • Analyze • Export student placement data
            </p>
          </div>

          {/* Filters Panel */}
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl p-6 lg:p-8 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  10th % ≥
                </label>
                <input
                  type="number"
                  placeholder="e.g. 80"
                  value={filters.tenthPercentage}
                  onChange={(e) => setFilters({ ...filters, tenthPercentage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  12th % ≥
                </label>
                <input
                  type="number"
                  placeholder="e.g. 75"
                  value={filters.twelfthPercentage}
                  onChange={(e) => setFilters({ ...filters, twelfthPercentage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Grad CGPA ≥
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 7.5"
                  value={filters.graduationCGPA}
                  onChange={(e) => setFilters({ ...filters, graduationCGPA: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                >
                  <option value="">All Programs</option>
                  <option value="MCA">MCA</option>
                  <option value="Btech-CS">BTech CS</option>
                  <option value="Btech-IT">BTech IT</option>
                  <option value="Btech-Data Science">BTech Data Science</option>
                  <option value="Btech-Cybersecurity">BTech Cybersecurity</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Placement Status
                </label>
                <select
                  value={filters.placementStatus}
                  onChange={(e) => setFilters({ ...filters, placementStatus: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all appearance-none"
                >
                  <option value="">All Status</option>
                  <option value="Placed">Placed</option>
                  <option value="Unplaced">Unplaced</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-end">
              <button
                onClick={applyFilters}
                className="px-7 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300"
              >
                Apply Filters
              </button>

              <button
                onClick={resetFilters}
                className="px-7 py-3 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl transition-all duration-300"
              >
                Reset
              </button>

              <button
                onClick={handleDownload}
                className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Download Excel
              </button>
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                <thead className="bg-zinc-100/80 dark:bg-zinc-800/80">
                  <tr>
                    {[
                      "Name", "Email", "SAP ID", "Roll No",
                      "10th %", "12th %", "Grad / 6th CGPA", "Stream",
                      "Status", "Company"
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-4 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="px-6 py-16 text-center text-zinc-500 dark:text-zinc-400 text-lg">
                        No students found matching the current filters
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr
                        key={user._id}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <td className="px-4 py-4 whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100">
                          {user.name || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.email || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.sapId || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.rollNo || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.tenthPercentage || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.twelfthPercentage || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.graduationCGPA || user.sixthSemesterCGPA || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.stream || "-"}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
                              ${user.placementStatus === "Placed"
                                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                                : "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300"}`}
                          >
                            {user.placementStatus || "Unplaced"}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {user.companyPlaced || "-"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {users.length > 0 && (
              <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-700 text-sm text-zinc-500 dark:text-zinc-400 text-right">
                Showing {users.length} of {originalUsers.length} eligible students
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;