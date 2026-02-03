// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// function ForgetPassword() {
//   const [email, setEmail] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!email.trim()) {
//       setErrorMessage("Please enter your email");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/auth/forgotpassword",
//         { email }
//       );

//       if (response.data.status) {
//         alert("Check your email for the password reset link");
//         navigate("/");
//       }
//     } catch (err) {
//       setErrorMessage(
//         err.response?.data?.message ||
//         "Something went wrong. Please try again."
//       );
//       console.error(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-md">
//         {/* Card */}
//         <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
//           <div className="p-8 lg:p-10">
//             <div className="text-center mb-8">
//               <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-2">
//                 PlaceX
//               </h1>
//               <p className="text-lg text-zinc-600 dark:text-zinc-400">
//                 Reset your password
//               </p>
//             </div>

//             {errorMessage && (
//               <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
//                   required
//                   autoComplete="email"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2
//                   ${
//                     isSubmitting
//                       ? "bg-zinc-400 text-zinc-700 cursor-not-allowed"
//                       : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 hover:-translate-y-0.5 active:scale-[0.98]"
//                   }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                         fill="none"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
//                       />
//                     </svg>
//                     Sending reset link...
//                   </>
//                 ) : (
//                   "Send Reset Link"
//                 )}
//               </button>
//             </form>

//             <div className="mt-8 text-center text-sm">
//               <p className="text-zinc-600 dark:text-zinc-400">
//                 Remembered your password?{" "}
//                 <Link
//                   to="/login"
//                   className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
//                 >
//                   Sign in
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Optional subtle footer text */}
//         <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
//           © {new Date().getFullYear()} PlaceX • Made with ❤️ in Bhopal
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ForgetPassword;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api_endpoints from '../../utils/data.js';

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // ← new state for modal

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Please enter your email");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${api_endpoints}/forgotpassword`,
        { email }
      );

      if (response.data.status) {
        setShowSuccessModal(true); // ← show modal instead of alert
        // We DON'T navigate immediately — let user read/acknowledge first
      }
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      setErrorMessage(msg);
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/"); // or "/login" — whichever makes more sense
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                PlaceX
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Reset your password
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
                  required
                  autoComplete="email"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2
                  ${
                    isSubmitting
                      ? "bg-zinc-400 text-zinc-700 cursor-not-allowed"
                      : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 hover:-translate-y-0.5 active:scale-[0.98]"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                      />
                    </svg>
                    Sending reset link...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <div className="mt-8 text-center text-sm">
              <p className="text-zinc-600 dark:text-zinc-400">
                Remembered your password?{" "}
                <Link
                  to="/login"
                  className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} PlaceX
        </p>
      </div>

      {/* ── Success Modal ──────────────────────────────────────── */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />

          {/* Modal content */}
          <div className="relative z-10 w-full max-w-sm bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden transform transition-all scale-100">
            <div className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                Reset Link Sent!
              </h3>

              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Check your email (including spam/junk folder) for the password reset link.
              </p>

              <button
                onClick={handleCloseModal}
                className="w-full py-3.5 px-6 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-emerald-300/30 active:scale-[0.98]"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;