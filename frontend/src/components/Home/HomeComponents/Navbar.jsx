// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // if using JWT
    

//     navigate("/");
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/home" className="text-2xl font-bold text-indigo-600">
//           PlaceX
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 font-medium text-gray-700">
//           <Link to="/home" className="hover:text-indigo-600">
//             Home
//           </Link>
//           <Link to="/companylisting" className="hover:text-indigo-600">
//             Company Listing
//           </Link>
//           <Link to="/scheduledInterview" className="hover:text-indigo-600">
//             Scheduled Interviews
//           </Link>
//           <Link to="/faq" className="hover:text-indigo-600">
//             FAQ
//           </Link>
//           <Link to="/interviewexperience" className="hover:text-indigo-600">
//             Interview Experience
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="text-red-600 hover:text-red-700"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-3">
//           <Link to="/home" onClick={() => setMenuOpen(false)}>
//             Home
//           </Link>
//           <Link to="/companylisting" onClick={() => setMenuOpen(false)}>
//             Company Listing
//           </Link>
//           <Link to="/scheduledInterview" onClick={() => setMenuOpen(false)}>
//             Scheduled Interviews
//           </Link>
//           <Link to="/faq" onClick={() => setMenuOpen(false)}>
//             FAQ
//           </Link>
//           <Link to="/interviewexperience" onClick={() => setMenuOpen(false)}>
//             Interview Experience
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="text-red-600 block"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLogout from "../../Login/Logout.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = useLogout();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm border-b border-white/10 dark:border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with gradient */}
        <Link
          to="/home"
          className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent"
        >
          PlaceX
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/home"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/companylisting"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            Company Listing
          </Link>
          <Link
            to="/scheduledInterview"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            Scheduled Interviews
          </Link>
          <Link
            to="/faq"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            FAQ
          </Link>
          <Link
            to="/interviewexperience"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            Interview Experience
          </Link>
          <Link
            to="/mock-interview"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200"
          >
            AI Interview 
          </Link>
          

          <button
            onClick={handleLogout}
            className="px-5 py-2 rounded-lg bg-emerald-300/10 dark:bg-emerald-950/30 border border-emerald-300/30 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-300/20 dark:hover:bg-emerald-900/40 hover:shadow-sm transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-700 dark:text-zinc-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Slide down with glass effect */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-lg`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 font-medium text-zinc-700 dark:text-zinc-300">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/companylisting"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            Company Listing
          </Link>
          <Link
            to="/scheduledInterview"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            Scheduled Interviews
          </Link>
          <Link
            to="/faq"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/interviewexperience"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            Interview Experience
          </Link>

          <Link
            to="/mock-interview"
            onClick={() => setMenuOpen(false)}
            className="hover:text-emerald-300 transition-colors"
          >
            AI Interview 
          </Link>

          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="mt-2 px-6 py-3 rounded-xl bg-emerald-300 text-zinc-900 font-medium hover:bg-emerald-400 transition-all shadow-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;