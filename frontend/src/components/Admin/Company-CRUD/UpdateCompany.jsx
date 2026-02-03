// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { updateCompany } from "../../../redux/companySlice.jsx";
// import AdminHome from "../AdminHome.js";
// import Footer from "../AdminReusableComponents/AdminFooter.js"; 
// import exampleImage from "../Assets/UpdateImage.png"; 
// import "../Admin-CSS/UpdateCompany.css";


// function UpdateCompany() {
//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (res.data.status) {
//       } else {
//         navigate("/");
//       }
//     });
//   }, []);
//   const companies = useSelector((state) => state.companies.companies);
//   const { id } = useParams();
//   const company = companies.find((c) => c.id === id);
//   const [companyname, setCompanyName] = useState(company.companyname);
//   const [jobprofile, setJobProfile] = useState(company.jobprofile);
//   const [ctc, setCtc] = useState(company.ctc);
//   const [doi, setDoi] = useState(company.doi);
//   const [tenthPercentage, setTenthPercentage] = useState(
//     company.tenthPercentage
//   );
//   const [twelfthPercentage, setTwelfthPercentage] = useState(
//     company.twelfthPercentage
//   );
//   const [sixthSemesterCGPA, setSixthSemesterCGPA] = useState(
//     company.graduationCGPA
//   );
//   const [graduationCGPA, setGraduationCGPA] = useState(
//     company.sixthSemesterCGPA
//   );

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const CompanyData = {
//       companyname,
//       jobprofile,
//       ctc,
//       doi,
//       tenthPercentage,
//       twelfthPercentage,
//       graduationCGPA,
//       sixthSemesterCGPA,
//     };

//     axios
//       .put("http://localhost:3001/auth/updatecompany/" + id, CompanyData)
//       .then((result) => {
//         dispatch(
//           updateCompany({
//             id: id,
//             companyname,
//             jobprofile,
//             ctc,
//             doi,
//             tenthPercentage,
//             twelfthPercentage,
//             graduationCGPA,
//             sixthSemesterCGPA,
//           })
//         );

//         navigate("/companies");
//       })
//       .catch((err) => {
//         console.error("Error submitting data:", err);
//       });
//   };

//   return (
//     <>
//       <AdminHome />
//       <h1 style={{ marginTop: "90px", color: "navy" }}>
//         Update Companies Data
//       </h1>
//       <div className="container-fluid h-100">
//         <div className="row h-100 justify-content-center align-items-start">
//           {/* Image column */}
//           <div
//             className="col-lg-4 d-flex justify-content-center align-items-center"
//             style={{ minHeight: "400px", marginTop: "90px" }}
//           >
//             <img
//               src={exampleImage}
//               alt="Add Company Image"
//               className="img-fluid"
//               style={{
//                 maxWidth: "120%",
//                 maxHeight: "120%",
//                 marginLeft: "100px",
//               }}
//             />
//           </div>

//           {/* Form column */}
//           <div className="col-lg-8 d-flex justify-content-center align-items-center custom-border">
//             <div className="form-container">
//               <div className="card" style={{maxWidth:"100vh",width:"900%"}}>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="name">Company Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="form-control"
//                       placeholder="Company Name"
//                       value={companyname}
//                       onChange={(e) => setCompanyName(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="jobprofile">Job Profile</label>
//                     <input
//                       type="text"
//                       id="jobprofile"
//                       className="form-control"
//                       placeholder="Job Profile"
//                       value={jobprofile}
//                       onChange={(e) => setJobProfile(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="ctc">Offered CTC</label>
//                     <input
//                       type="number"
//                       id="ctc"
//                       value={ctc}
//                       className="form-control"
//                       placeholder="Offered CTC"
//                       onChange={(e) => setCtc(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="interviewdate">Interview Date</label>
//                     <input
//                       type="date"
//                       id="interviewdate"
//                       value={doi}
//                       className="form-control"
//                       onChange={(e) => setDoi(e.target.value)}
//                     />
//                   </div>
//                   <h1>Eligibility Criteria</h1>

//                   <div className="form-group">
//                     <label htmlFor="tenthPercentage">10th Percentage</label>
//                     <input
//                       type="number"
//                       id="tenthPercentage"
//                       className="form-control"
//                       placeholder="10th Percentage"
//                       step="0.01"
//                       value={tenthPercentage}
//                       onChange={(e) => setTenthPercentage(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="twelfthPercentage">12th Percentage</label>
//                     <input
//                       type="number"
//                       id="twelfthPercentage"
//                       className="form-control"
//                       placeholder="12th Percentage"
//                       step="0.01"
//                       value={twelfthPercentage}
//                       onChange={(e) => setTwelfthPercentage(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="graduationCGPA">Graduation CGPA</label>
//                     <input
//                       type="number"
//                       id="graduationCGPA"
//                       className="form-control"
//                       placeholder="Graduation CGPA"
//                       step="0.01"
//                       value={graduationCGPA}
//                       onChange={(e) => setGraduationCGPA(e.target.value)}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="sixthSemesterCGPA">6th Semester CGPA</label>
//                     <input
//                       type="number"
//                       id="sixthSemesterCGPA"
//                       className="form-control"
//                       value={sixthSemesterCGPA}
//                       placeholder="6th Semester CGPA"
//                       step="0.01"
//                       onChange={(e) => setSixthSemesterCGPA(e.target.value)}
//                     />
//                   </div>

//                   <input
//                     type="submit"
//                     value="Update"
//                     className="btn btn-primary"
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default UpdateCompany;








import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../../redux/companySlice.jsx";
import AdminNav from "../AdminReusableComponents/AdminNav.jsx";
import Footer from "../AdminReusableComponents/AdminFooter.jsx";
import image from "../../../assets/image.png";
import api_endpoints from '../../../utils/data.js';


function UpdateCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const companies = useSelector((state) => state.companies.companies);
  const company = companies.find((c) => c._id === id) || {}; // Note: using _id

  const [formData, setFormData] = useState({
    companyname: company.companyname || "",
    jobprofile: company.jobprofile || "",
    ctc: company.ctc || "",
    doi: company.doi ? new Date(company.doi).toISOString().split("T")[0] : "",
    tenthPercentage: company.tenthPercentage || "",
    twelfthPercentage: company.twelfthPercentage || "",
    graduationCGPA: company.graduationCGPA || "",
    sixthSemesterCGPA: company.sixthSemesterCGPA || "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const requiredFields = ["companyname", "jobprofile", "ctc", "doi"];
    const missing = requiredFields.find(field => !formData[field]?.toString().trim());

    if (missing) {
      setError(`Please fill "${missing.replace(/([A-Z])/g, ' $1').toLowerCase()}"`);
      return;
    }

    setSubmitting(true);

    try {
      const payload = { ...formData };

      await axios.put(
        `${api_endpoints}/updatecompany/${id}`,
        payload
      );

      dispatch(updateCompany({ id, ...payload }));
      alert("Company updated successfully!");
      navigate("/companies");
    } catch (err) {
      console.error("Update failed:", err);
      setError(err.response?.data?.message || "Failed to update company");
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
              Update Company
            </h1>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Edit placement drive details and eligibility criteria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-300/10 border border-zinc-200/70 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  {/* Replace with your actual image path */}
                  <img
                    src={image} // ← your original image
                    alt="Update company illustration"
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
                  <Input
                    label="Company Name *"
                    name="companyname"
                    value={formData.companyname}
                    onChange={handleChange}
                  />
                  <Input
                    label="Job Profile *"
                    name="jobprofile"
                    value={formData.jobprofile}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Offered CTC (LPA) *"
                    name="ctc"
                    type="number"
                    value={formData.ctc}
                    onChange={handleChange}
                    placeholder="e.g. 12"
                  />
                  <Input
                    label="Interview Date *"
                    name="doi"
                    type="date"
                    value={formData.doi}
                    onChange={handleChange}
                  />
                </div>

                {/* Eligibility Section */}
                <div className="pt-4">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    Eligibility Criteria
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      label="10th Percentage *"
                      name="tenthPercentage"
                      type="number"
                      step="0.01"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                    />
                    <Input
                      label="12th Percentage *"
                      name="twelfthPercentage"
                      type="number"
                      step="0.01"
                      value={formData.twelfthPercentage}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <Input
                      label="Graduation CGPA"
                      name="graduationCGPA"
                      type="number"
                      step="0.01"
                      value={formData.graduationCGPA}
                      onChange={handleChange}
                    />
                    <Input
                      label="6th Semester CGPA"
                      name="sixthSemesterCGPA"
                      type="number"
                      step="0.01"
                      value={formData.sixthSemesterCGPA}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 mt-8
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
                      Updating...
                    </>
                  ) : (
                    "Update Company"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// Reusable Input Component
const Input = ({ label, name, type = "text", value, onChange, ...props }) => (
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

export default UpdateCompany;