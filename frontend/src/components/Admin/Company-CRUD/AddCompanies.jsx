// import { useState } from "react";
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../Admin-CSS/AddCompanies.css";
// import AdminHome from "../AdminHome.js";
// import Footer from "../AdminReusableComponents/AdminFooter.js";
// import AddCompany from '../Assets/AddCompany.png'
// function AddCompanies() {
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (res.data.status) {
//       } else {
//         navigate("/");
//       }
//     });
//   }, []);
//   const [companyname, setCompanyName] = useState("");
//   const [jobprofile, setJobProfile] = useState("");
//   const [jobdescription, setJobDescription] = useState("");
//   const [website, setWebsite] = useState("");
//   const [ctc, setCtc] = useState("");
//   const [doi, setDoi] = useState("");
//   const [tenthPercentage, setTenthPercentage] = useState("");
//   const [twelfthPercentage, setTwelfthPercentage] = useState("");
//   const [sixthSemesterCGPA, setSixthSemesterCGPA] = useState("");
//   const [graduationCGPA, setGraduationCGPA] = useState("");
//   const [branches, setBranches] = useState([]);

//   const navigate = useNavigate();
//   const handleBranchChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setBranches((prevBranches) => [...prevBranches, value]);
//     } else {
//       setBranches((prevBranches) =>
//         prevBranches.filter((branch) => branch !== value)
//       );
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !companyname ||
//       !jobprofile ||
//       !jobdescription ||
//       !website ||
//       !doi ||
//       !tenthPercentage ||
//       !ctc ||
//       !twelfthPercentage
//     ) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const CompanyData = {
//       companyname,
//       jobprofile,
//       jobdescription,
//       website,
//       ctc,
//       doi,
//       eligibilityCriteria: branches,
//       tenthPercentage,
//       twelfthPercentage,
//       graduationCGPA,
//       sixthSemesterCGPA,
//     };

//     axios
//       .post("http://localhost:3001/auth/add-companies", CompanyData)
//       .then((result) => {
//         console.log(result);
//         navigate("/companies");
//       })
//       .catch((err) => {
//         console.error("Error submitting data:", err);
//       });
//   };

//   return (
//     <>
//   <AdminHome/>
//   <h1 style={{marginTop:'90px',color: 'navy'}}>Add Companies</h1>
//   <div className="container-fluid h-100">
//   <div className="row h-100 justify-content-center align-items-start"> {/* Adjust align-items to start */}
//     {/* Image column */}
//     <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{ minHeight: '400px', marginTop:'120px'}}> {/* Change height to fit-content */}
//       <img src={AddCompany} alt="Add Company Image" className="img-fluid" style={{ maxWidth: '120%', maxHeight: '120%',marginLeft:'100px' }} />
//     </div>

//     {/* Table column */}
//     <div className="col-lg-8 d-flex justify-content-center align-items-center custom-border"> {/* Add custom-border class */}
//   <div className="form-container">
//   <div className="card" style={{maxWidth:"100vh",width:"900%"}}>
//     <form onSubmit={handleSubmit}>
//     <div className="row">
//       <table className="table">
//         <tbody>
//           <tr>
//             <td>
//               <div className="form-group">
//                 <label htmlFor="name">Company Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="form-control"
//                   placeholder="Company Name"
//                   onChange={(e) => setCompanyName(e.target.value)}
//                 />
//               </div>
            
//               <div className="form-group">
//                 <label htmlFor="jobprofile">Job Profile</label>
//                 <input
//                   type="text"
//                   id="jobprofile"
//                   className="form-control"
//                   placeholder="Job Profile"
//                   onChange={(e) => setJobProfile(e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div className="form-group">
//                 <label htmlFor="jobdescription">Job Description</label>
//                 <textarea
//                   id="jobdescription"
//                   className="form-control textarea"
//                   placeholder="Job Description"
//                   onChange={(e) => setJobDescription(e.target.value)}
//                 />
//               </div>
            
//               <div className="form-group">
//                 <label htmlFor="website">Company Website</label>
//                 <input
//                   type="website"
//                   id="website"
//                   className="form-control"
//                   placeholder="Company Website"
//                   onChange={(e) => setWebsite(e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <div className="form-group">
//                 <label htmlFor="ctc">Offered CTC</label>
//                 <input
//                   type="number"
//                   id="ctc"
//                   className="form-control"
//                   placeholder="Offered CTC"
//                   onChange={(e) => setCtc(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="interviewdate">Interview Date</label>
//                 <input
//                   type="date"
//                   id="interviewdate"
//                   className="form-control"
//                   onChange={(e) => setDoi(e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <h4 className="mb-3">Eligibility Criteria</h4>
//               <div className="form-group">
//                 <label htmlFor="MCA">
//                   <input
//                     type="checkbox"
//                     id="MCA"
//                     value="MCA"
//                     onChange={handleBranchChange}
//                   />
//                   MCA
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-IT">
//                   <input
//                     type="checkbox"
//                     id="BTECH-IT"
//                     value="BTECH-IT"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-IT
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-CS">
//                   <input
//                     type="checkbox"
//                     id="BTECH-CS"
//                     value="BTECH-CS"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-CS
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-CYBERSECURITY">
//                   <input
//                     type="checkbox"
//                     id="BTECH-CYBERSECURITY"
//                     value="BTECH-CYBERSECURITY"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-Cybersecurity
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-DATA SCIENCE">
//                   <input
//                     type="checkbox"
//                     id="BTECH-DATA SCIENCE"
//                     value="BTECH-DATA SCIENCE"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-Data Science
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-INTEGRATED">
//                   <input
//                     type="checkbox"
//                     id="BTECH-INTEGRATED"
//                     value="BTECH-INTEGRATED"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-Integrated
//                 </label>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="BTECH-MECHATRONICS">
//                   <input
//                     type="checkbox"
//                     id="BTECH-MECHATRONICS"
//                     value="BTECH-MECHATRONICS"
//                     onChange={handleBranchChange}
//                   />
//                   Btech-Mechatronics
//                 </label>
//               </div>
            
//               <div className="form-group">
//                 <label htmlFor="tenthPercentage">10th Percentage</label>
//                 <input
//                   type="number"
//                   id="tenthPercentage"
//                   className="form-control"
//                   placeholder="10th Percentage"
//                   step="0.01"
//                   onChange={(e) => setTenthPercentage(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="twelfthPercentage">12th Percentage</label>
//                 <input
//                   type="number"
//                   id="twelfthPercentage"
//                   className="form-control"
//                   placeholder="12th Percentage"
//                   step="0.01"
//                   onChange={(e) => setTwelfthPercentage(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="graduationCGPA">Graduation CGPA</label>
//                 <input
//                   type="number"
//                   id="graduationCGPA"
//                   className="form-control"
//                   placeholder="Graduation CGPA"
//                   step="0.01"
//                   onChange={(e) => setGraduationCGPA(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="sixthSemesterCGPA">6th Semester CGPA</label>
//                 <input
//                   type="number"
//                   id="sixthSemesterCGPA"
//                   className="form-control"
//                   placeholder="6th Semester CGPA"
//                   step="0.01"
//                   onChange={(e) => setSixthSemesterCGPA(e.target.value)}
//                 />
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       </div>
//       <div className="text-center">
//         <input type="submit" value="Submit" className="btn btn-primary" />
//       </div>
//     </form>
//   </div>
// </div>
// </div>
// </div>
// </div>
  
//   <Footer/>
// </>

//   );
// }

// export default AddCompanies;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AdminNav from "../AdminReusableComponents/AdminNav";
// // import AddCompanyImg from "../Assets/AddCompany.png";

// function AddCompanies() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     companyname: "",
//     jobprofile: "",
//     jobdescription: "",
//     website: "",
//     ctc: "",
//     doi: "",
//     eligibilityCriteria: [],
//     tenthPercentage: "",
//     twelfthPercentage: "",
//     graduationCGPA: "",
//     sixthSemesterCGPA: "",
//   });

//   // 🔐 Verify admin
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) navigate("/");
//     });
//   }, [navigate]);

//   // 🧠 Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 🧠 Handle checkbox change
//   const handleBranchChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       eligibilityCriteria: checked
//         ? [...prev.eligibilityCriteria, value]
//         : prev.eligibilityCriteria.filter((b) => b !== value),
//     }));
//   };

//   // 🚀 Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       companyname,
//       jobprofile,
//       jobdescription,
//       website,
//       ctc,
//       doi,
//       tenthPercentage,
//       twelfthPercentage,
//     } = formData;

//     if (
//       !companyname ||
//       !jobprofile ||
//       !jobdescription ||
//       !website ||
//       !ctc ||
//       !doi ||
//       !tenthPercentage ||
//       !twelfthPercentage
//     ) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:3001/auth/add-companies",
//         formData
//       );
//       navigate("/companies");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to add company");
//     }
//   };

//   return (
//     <>
//       <AdminNav />

//       <div className="min-h-screen pt-36 px-6">
//         <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
//           Add Company
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

//           {/* IMAGE */}
//           <div className="flex justify-center">
//             <img
              
//               alt="Add Company"
//               className="max-w-md w-full"
//             />
//           </div>

//           {/* FORM */}
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white shadow-xl rounded-xl p-6 space-y-4"
//           >
//             <Input label="Company Name" name="companyname" onChange={handleChange} />
//             <Input label="Job Profile" name="jobprofile" onChange={handleChange} />

//             <div>
//               <label className="block text-sm font-medium">Job Description</label>
//               <textarea
//                 name="jobdescription"
//                 onChange={handleChange}
//                 className="w-full border rounded-md p-2 mt-1"
//               />
//             </div>

//             <Input label="Company Website" name="website" onChange={handleChange} />
//             <Input label="CTC" name="ctc" type="number" onChange={handleChange} />
//             <Input label="Interview Date" name="doi" type="date" onChange={handleChange} />

//             {/* ELIGIBILITY */}
//             <div>
//               <p className="font-semibold mb-2">Eligibility Criteria</p>
//               <div className="grid grid-cols-2 gap-2 text-sm">
//                 {[
//                   "MCA",
//                   "BTECH-IT",
//                   "BTECH-CS",
//                   "BTECH-CYBERSECURITY",
//                   "BTECH-DATA SCIENCE",
//                   "BTECH-INTEGRATED",
//                   "BTECH-MECHATRONICS",
//                 ].map((branch) => (
//                   <label key={branch} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       value={branch}
//                       onChange={handleBranchChange}
//                     />
//                     {branch}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <Input label="10th Percentage" name="tenthPercentage" type="number" onChange={handleChange} />
//             <Input label="12th Percentage" name="twelfthPercentage" type="number" onChange={handleChange} />
//             <Input label="Graduation CGPA" name="graduationCGPA" type="number" onChange={handleChange} />
//             <Input label="6th Semester CGPA" name="sixthSemesterCGPA" type="number" onChange={handleChange} />

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// // 🔹 Reusable input component
// const Input = ({ label, name, type = "text", onChange }) => (
//   <div>
//     <label className="block text-sm font-medium">{label}</label>
//     <input
//       type={type}
//       name={name}
//       onChange={onChange}
//       className="w-full border rounded-md p-2 mt-1"
//     />
//   </div>
// );

// export default AddCompanies;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
import api_endpoints from '../../../utils/data.js';

function AddCompanies() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyname: "",
    jobprofile: "",
    jobdescription: "",
    website: "",
    ctc: "",
    doi: "",
    eligibilityCriteria: [],
    tenthPercentage: "",
    twelfthPercentage: "",
    graduationCGPA: "",
    sixthSemesterCGPA: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Verify admin
  useEffect(() => {
    axios.get(`${api_endpoints}/verify`).then((res) => {
      if (!res.data.status) navigate("/");
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleBranchChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      eligibilityCriteria: checked
        ? [...prev.eligibilityCriteria, value]
        : prev.eligibilityCriteria.filter((b) => b !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const requiredFields = [
      "companyname", "jobprofile", "jobdescription",
      "website", "ctc", "doi", "tenthPercentage", "twelfthPercentage"
    ];

    const missing = requiredFields.find(field => !formData[field]?.toString().trim());
    if (missing) {
      setError(`Please fill "${missing.replace(/([A-Z])/g, ' $1').toLowerCase()}"`);
      return;
    }

    if (formData.eligibilityCriteria.length === 0) {
      setError("Please select at least one eligible branch");
      return;
    }

    setSubmitting(true);

    try {
      await axios.post(`${api_endpoints}/add-companies`, formData);
      alert("Company added successfully!");
      navigate("/companies");
    } catch (err) {
      console.error("Add company failed:", err);
      setError(err.response?.data?.message || "Failed to add company. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AdminNav />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Add New Company
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Create a new placement drive opportunity for students
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-300/10 border border-zinc-200/70 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  {/* Replace with your actual AddCompany.png or use a placeholder */}
                  <img
                    src="https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416730.jpg?t=st=1769926038~exp=1769929638~hmac=5582a70da2a19eadb6df0672a1d8841de1546a4036278693f397617e3b4feaf2" // ← your original image path
                    alt="Add new company illustration"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-300/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl p-6 lg:p-10">
              {error && (
                <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Company Name *" name="companyname" onChange={handleChange} value={formData.companyname} />
                  <Input label="Job Profile *" name="jobprofile" onChange={handleChange} value={formData.jobprofile} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Job Description *
                  </label>
                  <textarea
                    name="jobdescription"
                    value={formData.jobdescription}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe responsibilities, requirements, selection process..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Company Website *" name="website" onChange={handleChange} value={formData.website} placeholder="https://example.com" />
                  <Input label="CTC (LPA) *" name="ctc" type="number" onChange={handleChange} value={formData.ctc} placeholder="e.g. 12" />
                </div>

                <Input label="Interview Date *" name="doi" type="date" onChange={handleChange} value={formData.doi} />

                {/* Eligibility Branches */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Eligible Branches *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                    {[
                      "MCA",
                      "BTECH-IT",
                      "BTECH-CS",
                      "BTECH-CYBERSECURITY",
                      "BTECH-DATA SCIENCE",
                      "BTECH-INTEGRATED",
                      "BTECH-MECHATRONICS",
                    ].map((branch) => (
                      <label
                        key={branch}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={branch}
                          checked={formData.eligibilityCriteria.includes(branch)}
                          onChange={handleBranchChange}
                          className="w-4 h-4 text-emerald-600 border-zinc-300 rounded focus:ring-emerald-500"
                        />
                        <span className="text-zinc-700 dark:text-zinc-300">{branch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Eligibility Percentages */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="10th Percentage *" name="tenthPercentage" type="number" step="0.01" onChange={handleChange} value={formData.tenthPercentage} />
                  <Input label="12th Percentage *" name="twelfthPercentage" type="number" step="0.01" onChange={handleChange} value={formData.twelfthPercentage} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="Graduation CGPA" name="graduationCGPA" type="number" step="0.01" onChange={handleChange} value={formData.graduationCGPA} />
                  <Input label="6th Semester CGPA" name="sixthSemesterCGPA" type="number" step="0.01" onChange={handleChange} value={formData.sixthSemesterCGPA} />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 mt-6
                    ${submitting
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
                      Adding Company...
                    </>
                  ) : (
                    "Add Company"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable Input Component
const Input = ({ label, name, type = "text", onChange, value, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all"
      {...props}
    />
  </div>
);

export default AddCompanies;