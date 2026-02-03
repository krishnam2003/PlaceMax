// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getCompanies, deleteCompany } from "../../../redux/companySlice.jsx";
// import AdminHome from "../AdminHome.js";
// import Footer from "../AdminReusableComponents/AdminFooter.js";
// import interviewimg from '../Assets/company.png'
// import "../Admin-CSS/Companycrud.css";
// function Companycrud() {

//   const navigate=useNavigate()
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (res.data.status) {
//       } else {
//         navigate("/");
//       }
//     });
//   }, []);
//   const dispatch = useDispatch();
//   const companies = useSelector((state) => state.companies.companies);
//   const handleDelete = (id) => {
//     axios
//       .delete("http://localhost:3001/auth/deletecompany/" + id)
//       .then((res) => {
//         dispatch(deleteCompany({ id }));
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3001/auth/getCompanies"
//         );
//         dispatch(getCompanies(response.data));
//         console.log(response);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <>
//     <AdminHome />
// <h2 className="header-title">Companies</h2> {/* Add custom class */}
// <div className="container-fluid h-100">
//   <div className="row h-100 justify-content-center align-items-start"> {/* Adjust align-items to start */}
//     {/* Image column */}
//     <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ height: 'fit-content' }}> {/* Change height to fit-content */}
//       <img src={interviewimg} alt="Your Image" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '100%' }} />
//     </div>

//     {/* Table column */}
//     <div className="col-lg-8 d-flex justify-content-center align-items-center custom-border"> {/* Add custom-border class */}
//       <div className="bg-white rounded p-4">
//         <Link to="/add-companies" className="btn btn-success btn-sm mb-3 btn-add">
//           Add +
//         </Link>
//         <table className="table table-bordered table-hover">
//           {/* Table headers */}
//           <thead className="bg-purple text-white">
//             <tr>
//               <th>Name</th>
//               <th>Profile</th>
//               <th>Package</th>
//               <th>Interview Date</th>
//               <th>Branch</th>
//               <th>10th %</th>
//               <th>12th %</th>
//               <th>Graduation CGPA</th>
//               <th>6th Semester CGPA</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
          
//           <tbody>
//           {companies.map((company) => {
//               return (
//                 <tr>
//                   <td>{company.companyname}</td>
//                   <td>{company.jobprofile}</td>
//                   <td>{company.ctc}</td>
//                   <td>{company.doi}</td>
//                   <td>
//                     {company.eligibilityCriteria
//                       ? company.eligibilityCriteria.join(", ")
//                       : ""}
//                   </td>
//                   <td>{company.tenthPercentage}</td>
//                   <td>{company.twelfthPercentage}</td>
//                   <td>{company.graduationCGPA}</td>
//                   <td>{company.sixthSemesterCGPA}</td>
//                   <td>
//                     <Link
//                       to={`/updatecompany/${company.id}`}
//                       className="btn btn-sm btn-success"
//                     >
//                       Update
//                     </Link>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleDelete(company.id)}
//                       className="btn btn-sm btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>

// <Footer />

//     </>
//   );
// }

// export default Companycrud;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import AdminNav from "../AdminReusableComponents/AdminNav";

// function Companycrud() {
//   const navigate = useNavigate();
//   const [companies, setCompanies] = useState([]);

//   // Verify admin
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) navigate("/");
//     });
//   }, [navigate]);

//   // Fetch companies
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3001/auth/getCompanies"
//         );

//         // 🔥 SAFE NORMALIZATION
//         const data = Array.isArray(res.data?.data)
//           ? res.data.data
//           : res.data.companies || [];

//         setCompanies(data);
//       } catch (err) {
//         console.error(err);
//         setCompanies([]); // fallback
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // Delete company
//   const handleDelete = async (_id) => {
//     try {
//       await axios.delete(
//         `http://localhost:3001/auth/deletecompany/${_id}`
//       );
//       setCompanies((prev) => prev.filter((c) => c._id !== _id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <AdminNav />

//       <h2 className="text-3xl font-bold text-center mt-36 mb-8">
//         Companies
//       </h2>

//       <div className="px-6 overflow-x-auto">
//         <Link to="/add-companies" className="btn btn-success btn-sm mb-3 btn-add">
//           Add +
//         </Link>
//         <table className="min-w-full border text-sm">
//           <thead className="bg-purple-700 text-white">
//             <tr>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Profile</th>
//               <th className="border p-2">Package</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Array.isArray(companies) && companies.length > 0 ? (
//               companies.map((company) => (
//                 <tr key={company._id} className="text-center">
//                   <td className="border p-2">{company.companyname}</td>
//                   <td className="border p-2">{company.jobprofile}</td>
//                   <td className="border p-2">{company.ctc}</td>
//                   <td className="border p-2 flex gap-2 justify-center">
//                     <Link
//                       to={`/updatecompany/${company._id}`}
//                       className="bg-blue-600 text-white px-3 py-1 rounded text-xs"
//                     >
//                       Update
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(company._id)}
//                       className="bg-red-600 text-white px-3 py-1 rounded text-xs"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="text-center p-4">
//                   No companies found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Companycrud;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import AdminNav from "../AdminReusableComponents/AdminNav";

// function Companycrud() {
//   const navigate = useNavigate();
//   const [companies, setCompanies] = useState([]);

//   // 🔐 Verify admin
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) navigate("/");
//     });
//   }, [navigate]);

//   // 📦 Fetch companies
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await axios.get("http://localhost:3001/auth/getCompanies");

//         const data = Array.isArray(res.data?.data)
//           ? res.data.data
//           : res.data.companies || [];

//         setCompanies(data);
//       } catch (err) {
//         console.error(err);
//         setCompanies([]);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // ❌ Delete company
//   const handleDelete = async (_id) => {
//     if (!window.confirm("Are you sure you want to delete this company?")) return;

//     try {
//       await axios.delete(
//         `http://localhost:3001/auth/deletecompany/${_id}`
//       );
//       setCompanies((prev) => prev.filter((c) => c._id !== _id));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <>
//       <AdminNav />

//       {/* 🌈 HEADER */}
//       <div className="mt-32 mb-8 text-center">
//         <h2 className="text-4xl font-extrabold text-gray-900">
//           Company Management
//         </h2>
//         <p className="text-gray-500 mt-2">
//           Manage company listings and placement opportunities
//         </p>
//       </div>

//       {/* 🧾 CARD */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

//           {/* ➕ ADD BUTTON */}
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-semibold text-gray-800">
//               Registered Companies
//             </h3>

//             <Link
//               to="/add-companies"
//               className="bg-gradient-to-r from-green-600 to-emerald-500 
//                          text-white px-5 py-2 rounded-lg text-sm font-medium 
//                          hover:scale-105 transition transform shadow"
//             >
//               + Add Company
//             </Link>
//           </div>

//           {/* 📊 TABLE */}
//           <div className="overflow-x-auto rounded-lg">
//             <table className="min-w-full text-sm">
//               <thead className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white sticky top-0">
//                 <tr>
//                   <th className="px-4 py-3 text-left">Company</th>
//                   <th className="px-4 py-3 text-left">Job Profile</th>
//                   <th className="px-4 py-3 text-left">CTC (LPA)</th>
//                   <th className="px-4 py-3 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y">
//                 {companies.length > 0 ? (
//                   companies.map((company) => (
//                     <tr
//                       key={company._id}
//                       className="hover:bg-gray-50 transition"
//                     >
//                       <td className="px-4 py-3 font-medium text-gray-900">
//                         {company.companyname}
//                       </td>
//                       <td className="px-4 py-3 text-gray-700">
//                         {company.jobprofile}
//                       </td>
//                       <td className="px-4 py-3 text-gray-700">
//                         ₹ {company.ctc} LPA
//                       </td>
//                       <td className="px-4 py-3">
//                         <div className="flex gap-2 justify-center">
//                           <Link
//                             to={`/updatecompany/${company._id}`}
//                             className="bg-blue-600 hover:bg-blue-700 text-white 
//                                        px-3 py-1.5 rounded-md text-xs font-medium"
//                           >
//                             Update
//                           </Link>
//                           <button
//                             onClick={() => handleDelete(company._id)}
//                             className="bg-red-600 hover:bg-red-700 text-white 
//                                        px-3 py-1.5 rounded-md text-xs font-medium"
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td
//                       colSpan="4"
//                       className="text-center py-10 text-gray-500"
//                     >
//                       No companies found 🚫
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Companycrud;







// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import AdminNav from "../AdminReusableComponents/AdminNav.jsx";

// function Companycrud() {
//   const navigate = useNavigate();
//   const [companies, setCompanies] = useState([]);

//   // Verify admin access
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) navigate("/");
//     });
//   }, [navigate]);

//   // Fetch all companies
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await axios.get("http://localhost:3001/auth/getCompanies");
//         const data = Array.isArray(res.data?.data)
//           ? res.data.data
//           : res.data.companies || [];
//         setCompanies(data);
//       } catch (err) {
//         console.error("Failed to load companies:", err);
//         setCompanies([]);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // Delete company
//   const handleDelete = async (_id) => {
//     if (!window.confirm("Are you sure you want to delete this company? This action cannot be undone.")) return;

//     try {
//       await axios.delete(`http://localhost:3001/auth/deletecompany/${_id}`);
//       setCompanies((prev) => prev.filter((c) => c._id !== _id));
//       alert("Company deleted successfully");
//     } catch (err) {
//       console.error("Delete failed:", err);
//       alert("Failed to delete company. Please try again.");
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
//               Manage Companies
//             </h1>
//             <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
//               Add, update, or remove company placement drives
//             </p>
//           </div>

//           {/* Main Card */}
//           <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
//             {/* Header with Add Button */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 lg:p-8 border-b border-zinc-200 dark:border-zinc-700">
//               <div>
//                 <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
//                   Registered Companies
//                 </h2>
//                 <p className="text-zinc-600 dark:text-zinc-400 mt-1">
//                   {companies.length} active placement opportunities
//                 </p>
//               </div>

//               <Link
//                 to="/add-companies"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                 </svg>
//                 Add New Company
//               </Link>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
//                 <thead className="bg-zinc-50/80 dark:bg-zinc-800/80">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                       Company Name
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                       Job Profile
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                       CTC (LPA)
//                     </th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>

//                 <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
//                   {companies.length === 0 ? (
//                     <tr>
//                       <td colSpan={4} className="px-6 py-16 text-center text-zinc-500 dark:text-zinc-400 text-lg">
//                         No companies registered yet
//                       </td>
//                     </tr>
//                   ) : (
//                     companies.map((company) => (
//                       <tr
//                         key={company._id}
//                         className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
//                       >
//                         <td className="px-6 py-4 whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100">
//                           {company.companyname || "—"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
//                           {company.jobprofile || "—"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
//                           {company.ctc ? `₹ ${company.ctc} LPA` : "Confidential"}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-center">
//                           <div className="flex items-center justify-center gap-3">
//                             <Link
//                               to={`/updatecompany/${company._id}`}
//                               className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//                             >
//                               Update
//                             </Link>

//                             <button
//                               onClick={() => handleDelete(company._id)}
//                               className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {companies.length > 0 && (
//               <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-700 text-sm text-zinc-500 dark:text-zinc-400 text-right">
//                 Showing {companies.length} company listing{companies.length !== 1 ? "s" : ""}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Companycrud;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
import api_endpoints from '../../../utils/data.js'

function Companycrud() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 6;

  // Verify admin access
  useEffect(() => {
    axios.get(`${api_endpoints}/verify`).then((res) => {
      if (!res.data.status) navigate("/");
    });
  }, [navigate]);

  // Fetch all companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${api_endpoints}/getCompanies`);
        const data = Array.isArray(res.data?.data)
          ? res.data.data
          : res.data.companies || [];
        setCompanies(data);
        setCurrentPage(1); // Reset to page 1 on new data
      } catch (err) {
        console.error("Failed to load companies:", err);
        setCompanies([]);
      }
    };
    fetchCompanies();
  }, []);

  // Delete company
  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this company? This action cannot be undone.")) return;

    try {
      await axios.delete(`${api_endpoints}/deletecompany/${_id}`);
      setCompanies((prev) => prev.filter((c) => c._id !== _id));
      alert("Company deleted successfully");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete company. Please try again.");
    }
  };

  // Pagination logic
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = companies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(companies.length / companiesPerPage);

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Manage Companies
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Add, update, or remove company placement drives
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
            {/* Header with Add Button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 lg:p-8 border-b border-zinc-200 dark:border-zinc-700">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  Registered Companies
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                  {companies.length} active placement opportunities
                </p>
              </div>

              <Link
                to="/add-companies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add New Company
              </Link>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
                <thead className="bg-zinc-50/80 dark:bg-zinc-800/80">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      Company Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      Job Profile
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      CTC (LPA)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700 bg-white dark:bg-zinc-900">
                  {currentCompanies.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-16 text-center text-zinc-500 dark:text-zinc-400 text-lg">
                        No companies found on this page
                      </td>
                    </tr>
                  ) : (
                    currentCompanies.map((company) => (
                      <tr
                        key={company._id}
                        className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-zinc-900 dark:text-zinc-100">
                          {company.companyname || "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {company.jobprofile || "—"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-600 dark:text-zinc-300">
                          {company.ctc ? `₹ ${company.ctc} LPA` : "Confidential"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center gap-3">
                            <Link
                              to={`/updatecompany/${company._id}`}
                              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                            >
                              Update
                            </Link>

                            <button
                              onClick={() => handleDelete(company._id)}
                              className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 py-6 border-t border-zinc-200 dark:border-zinc-700">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
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
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2.5 rounded-lg font-medium min-w-[44px] transition-colors ${
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
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                    currentPage === totalPages
                      ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
                      : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
                  }`}
                >
                  Next
                </button>
              </div>
            )}

            {/* Showing count */}
            {companies.length > 0 && (
              <div className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-right">
                Showing {currentCompanies.length} of {companies.length} companies
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Companycrud;