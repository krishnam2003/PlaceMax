// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function AdminNav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // clear auth data here if needed
//     // localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <>
//       <nav className="fixed top-0 w-full z-50 bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link
//               to="/admin"
//               className="text-2xl font-extrabold text-blue-600"
//             >
//               PlaceX
//             </Link>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-6">
//               <NavItem to="/admin" label="Home" />
//               <NavItem to="/admindashboard" label="Reports" />
//               <NavItem to="/companies" label="Manage Companies" />
//               <NavItem to="/scheduledinterviewdata" label="Interview Reports" />

//               <button
//                 onClick={handleLogout}
//                 className="text-red-600 hover:text-red-700 font-medium"
//               >
//                 Logout
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-white border-t shadow-sm">
//             <div className="flex flex-col p-4 space-y-3">
//               <MobileNavItem to="/admin" label="Home" />
//               <MobileNavItem to="/admindashboard" label="Reports" />
//               <MobileNavItem to="/companies" label="Manage Companies" />
//               <MobileNavItem
//                 to="/scheduledinterviewdata"
//                 label="Interview Reports"
//               />

//               <button
//                 onClick={handleLogout}
//                 className="text-left text-red-600 font-medium hover:bg-red-50 px-3 py-2 rounded-md"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Spacer so content doesn't go under navbar */}
//       <div className="h-16" />
//     </>
//   );
// }

// /* Reusable Nav Items */
// const NavItem = ({ to, label }) => (
//   <Link
//     to={to}
//     className="text-gray-700 hover:text-blue-600 font-medium transition"
//   >
//     {label}
//   </Link>
// );

// const MobileNavItem = ({ to, label }) => (
//   <Link
//     to={to}
//     className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
//   >
//     {label}
//   </Link>
// );

// export default AdminNav;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../../Login/Logout.jsx";

function AdminNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = useLogout();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/admin"
              className="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent"
            >
              PlaceX Admin
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <NavItem to="/admin" label="Dashboard" />
              <NavItem to="/admindashboard" label="Reports" />
              <NavItem to="/companies" label="Companies" />
              <NavItem to="/scheduledinterviewdata" label="Interviews" />
              <NavItem to="/interviewexperiencedelete" label="Manage Experience" />
             

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/40 text-rose-700 dark:text-rose-300 font-medium hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all duration-200"
              >
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-zinc-700 dark:text-zinc-300 focus:outline-none p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7 transition-transform duration-300"
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
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200/50 dark:border-zinc-800/50 shadow-lg">
            <div className="px-6 py-6 flex flex-col gap-4 font-medium text-zinc-700 dark:text-zinc-300">
              <MobileNavItem to="/admin" label="Dashboard" />
              <MobileNavItem to="/admindashboard" label="Reports" />
              <MobileNavItem to="/companies" label="Companies" />
              <MobileNavItem to="/scheduledinterviewdata" label="Interviews" />
              <MobileNavItem to="/interviewexperiencedelete" label="Manage Experience" />
              

              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="mt-2 px-6 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-medium hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-all border border-rose-200 dark:border-rose-800/40"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

/* Reusable Nav Items */
const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 transition-colors duration-200 font-medium"
  >
    {label}
  </Link>
);

const MobileNavItem = ({ to, label }) => (
  <Link
    to={to}
    className="block px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-emerald-300 transition-colors duration-200"
    onClick={() => setMenuOpen(false)}
  >
    {label}
  </Link>
);

export default AdminNav;