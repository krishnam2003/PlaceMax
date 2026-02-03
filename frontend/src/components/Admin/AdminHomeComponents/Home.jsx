// import React from "react";

// import AdminNav from '../AdminReusableComponents/AdminNav'

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 pt-20">
//       <AdminNav />

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
//           {/* Background Image */}
//           <img
            
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover opacity-10"
//           />

//           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-10">
//             {/* Text Section */}
//             <div>
//               <h1 className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6">
//                 Welcome, Admin 👋
//               </h1>

//               <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
//                 Welcome to your Placement Management System Admin Interface.
//                 Effortlessly manage company details, monitor interview reports,
//                 and oversee placement data. This dashboard is designed to help
//                 you make faster, smarter decisions with ease.
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow">
//                   View Reports
//                 </button>
//                 <button className="bg-white border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
//                   Manage Companies
//                 </button>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="flex justify-center">
//               <img
                
//                 alt="Admin Dashboard"
//                 className="w-full max-w-md drop-shadow-xl"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
//           <StatCard title="Companies" value="Manage" />
//           <StatCard title="Interviews" value="Reports" />
//           <StatCard title="Placements" value="Analytics" />
//         </div>
//       </div>
//     </div>
//   );
// };

// /* Small Reusable Card */
// const StatCard = ({ title, value }) => (
//   <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
//     <h3 className="text-gray-500 font-medium">{title}</h3>
//     <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
//   </div>
// );

// export default Home;

import React from "react";
import AdminNav from "../AdminReusableComponents/AdminNav";
import image2 from "../../../assets/image2.jpg"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Welcome Hero Card */}
        <div className="relative bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 shadow-xl overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(52,211,153,0.05),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(52,211,153,0.04),transparent_35%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-12">
            {/* Left - Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                Welcome back, <span className="text-emerald-300">Admin</span> 👋
              </h1>

              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                Manage company drives, review interview experiences, track placement statistics,
                and make informed decisions — all from one powerful admin dashboard.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-7 py-3.5 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300 transform hover:-translate-y-0.5">
                  View Reports
                </button>
                <button className="px-7 py-3.5 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl hover:border-emerald-300 hover:text-emerald-300 transition-all duration-300">
                  Manage Companies
                </button>
              </div>
            </div>

            {/* Right - Visual / Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-300/10 border border-zinc-200/70 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                  {/* Replace src with your preferred admin-themed illustration */}
                  <img
                    src={image2}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-300/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action / Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
          <StatCard title="Companies" value="Manage Drives" accent="emerald" />
          <StatCard title="Interviews" value="Review Reports" accent="amber" />
          <StatCard title="Placements" value="View Analytics" accent="rose" />
        </div>
      </div>
    </div>
  );
};

/* Enhanced Stat Card */
const StatCard = ({ title, value, accent = "emerald" }) => {
  const accentStyles = {
    emerald: "text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-300",
    amber: "text-amber-600 dark:text-amber-400 group-hover:text-amber-300",
    rose: "text-rose-600 dark:text-rose-400 group-hover:text-rose-300",
  };

  return (
    <div className="group bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-7 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 cursor-pointer">
      <h3 className="text-lg font-semibold text-zinc-600 dark:text-zinc-400 mb-2 group-hover:text-emerald-300 transition-colors">
        {title}
      </h3>
      <p className={`text-3xl font-bold ${accentStyles[accent]} transition-colors`}>
        {value}
      </p>
    </div>
  );
};

export default Home;