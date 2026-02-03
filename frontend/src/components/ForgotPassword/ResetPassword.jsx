// import React, { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// function ResetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const navigate = useNavigate();
//   const { token } = useParams();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (!password.trim()) {
//       setErrorMessage("Please enter your new password");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     // Optional: basic password strength check
//     if (password.length < 8) {
//       setErrorMessage("Password must be at least 8 characters long");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const response = await axios.post(
//         `http://localhost:3001/auth/resetPassword/${token}`,
//         { password }
//       );

//       if (response.data.status) {
//         alert("Password reset successful! Please login with your new password.");
//         navigate("/login");
//       }
//     } catch (err) {
//       setErrorMessage(
//         err.response?.data?.message ||
//         "Failed to reset password. The link may have expired."
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
//                 Set your new password
//               </p>
//             </div>

//             {errorMessage && (
//               <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
//                 {errorMessage}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* New Password */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
//                 >
//                   New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Enter your new password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
//                   required
//                   autoComplete="new-password"
//                 />
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label
//                   htmlFor="confirmPassword"
//                   className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
//                 >
//                   Confirm New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   placeholder="Confirm your new password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
//                   required
//                   autoComplete="new-password"
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
//                     Resetting...
//                   </>
//                 ) : (
//                   "Reset Password"
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

// export default ResetPassword;




import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; // or use heroicons/react or any icon library
import api_endpoints from '../../utils/data.js';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { token } = useParams();

  // Password strength calculation
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { strength: "empty", percentage: 0, color: "" };
    if (pwd.length < 6) return { strength: "Weak", percentage: 33, color: "bg-red-500" };
    if (pwd.length < 10 && !/[A-Z]/.test(pwd) && !/[0-9]/.test(pwd))
      return { strength: "Medium", percentage: 66, color: "bg-yellow-500" };
    return { strength: "Strong", percentage: 100, color: "bg-emerald-500" };
  };

  const passwordStrength = getPasswordStrength(password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!password.trim()) {
      setErrorMessage("Please enter your new password");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${api_endpoints}/resetPassword/${token}`,
        { password },
        { withCredentials: true } // if you're using cookies/sessions
      );

      if (response.data.status) {
        toast.success("Password reset successful! Please login.", {
          duration: 4000,
          position: "top-center",
        });
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      const message = err.response?.data?.message || "Failed to reset password";

      // Better handling for common token errors
      if (message.toLowerCase().includes("invalid") || message.toLowerCase().includes("expired")) {
        setErrorMessage("This reset link is invalid or has expired. Please request a new one.");
      } else {
        setErrorMessage(message);
      }

      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center px-4 py-12">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md">
        <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                PlaceX
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Set your new password
              </p>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center font-medium">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* New Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200 pr-11"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Password Strength Bar */}
                {password && (
                  <div className="mt-2">
                    <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{ width: `${passwordStrength.percentage}%` }}
                      />
                    </div>
                    <p
                      className={`mt-1.5 text-xs font-medium ${
                        passwordStrength.strength === "Strong"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : passwordStrength.strength === "Medium"
                          ? "text-yellow-600 dark:text-yellow-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      Password strength: {passwordStrength.strength}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200 pr-11"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
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
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
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

        <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} PlaceX • Made with ❤️ in Bhopal
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;