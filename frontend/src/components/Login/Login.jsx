import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Home/HomeComponents/Footer.jsx"; // optional - add if you want footer here
import api_endpoints from '../../utils/data.js';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Email and password are required");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${api_endpoints}`,
        { email, password }
      );

      if (res.data === "Success") {
        navigate("/home");
      } else if (res.data === "Admin") {
        navigate("/admin");
      } else if (res.data === "Password Incorrect") {
        setErrorMessage("Incorrect password");
      } else {
        setErrorMessage("Invalid credentials");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
            <div className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                  PlaceX
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Sign in to your account
                </p>
              </div>

              {errorMessage && (
                <div className="mb-6 p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/50 rounded-xl text-rose-700 dark:text-rose-300 text-center text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
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
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-emerald-300 focus:ring-2 focus:ring-emerald-300/30 outline-none transition-all duration-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      isLoading
                        ? "bg-zinc-400 text-zinc-700 cursor-not-allowed"
                        : "bg-emerald-300 hover:bg-emerald-400 text-zinc-900 hover:shadow-lg hover:shadow-emerald-300/30 hover:-translate-y-0.5 active:scale-[0.98]"
                    }`}
                >
                  {isLoading ? (
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
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Links */}
              <div className="mt-8 flex flex-col gap-3 text-center text-sm">
                <button
                  onClick={() => navigate("/register")}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  Don't have an account? Create one
                </button>

                <button
                  onClick={() => navigate("/forgotpassword")}
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-300 transition-colors"
                >
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>

          {/* Optional subtle footer text */}
          <p className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} PlaceX • Made with ❤️ in Bhopal
          </p>
        </div>
      </div>

      <Footer /> {/* Uncomment if you want footer here */}
    </div>
  );
}

export default Login;