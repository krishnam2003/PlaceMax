// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// import Navbar from "./Navbar.jsx";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const [currentUser, setCurrentUser] = useState(null);
//   const [placementStatus, setPlacementStatus] = useState(null);

//   useEffect(() => {
//     axios.get("http://localhost:3001/auth/verify").then((res) => {
//       if (!res.data.status) {
//         navigate("/login");
//       }
//     });

//     axios
//       .get("http://localhost:3001/auth/currentUser")
//       .then((res) => {
//         setCurrentUser(res.data.user);
//         fetchPlacementStatus(res.data.user._id);
//       })
//       .catch((err) => {
//         console.error("Error fetching current user:", err);
//       });
//   }, []);

//   const fetchPlacementStatus = async (userId) => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3001/auth/placementStatus/${userId}`
//       );
//       setPlacementStatus(res.data);
//     } catch (error) {
//       console.error("Error fetching placement status:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="relative pt-24">
//         {/* Background Image */}
//         <img
          
//           alt="background"
//           className="absolute inset-0 w-full h-full object-cover opacity-10"
//         />

//         <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//           {/* Text Section */}
//           <div className="space-y-6">
//             {currentUser && (
//               <>
//                 <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-900">
//                   Welcome, {currentUser.name}
//                 </h1>

//                 {placementStatus?.status === "Placed" && (
//                   <div className="inline-block px-6 py-3 rounded-lg bg-green-100 text-green-700 font-semibold text-lg hover:bg-green-200 transition cursor-pointer">
//                     🎉 Congratulations! You are placed at{" "}
//                     <span className="font-bold">
//                       {placementStatus.companyName}
//                     </span>
//                   </div>
//                 )}
//               </>
//             )}

//             <p className="text-gray-600 text-lg leading-relaxed">
//               Welcome to your <span className="font-semibold">Placement
//               Management System</span>.  
//               Explore career opportunities, company profiles, and upcoming
//               interviews. Manage your profile, upload resumes, and track
//               application progress seamlessly.
//             </p>
//           </div>

//           {/* Image Section */}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import  image1  from '../assets/image1.jpg';
import api_endpoints from '../../../utils/data.js';

import Navbar from "./Navbar.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [placementStatus, setPlacementStatus] = useState(null);

  useEffect(() => {
    axios.get(`${api_endpoints}/verify`).then((res) => {
      if (!res.data.status) {
        navigate("/login");
      }
    });

    axios
      .get(`${api_endpoints}/currentUser`)
      .then((res) => {
        setCurrentUser(res.data.user);
        fetchPlacementStatus(res.data.user._id);
      })
      .catch((err) => {
        console.error("Error fetching current user:", err);
      });
  }, []);

  const fetchPlacementStatus = async (userId) => {
    try {
      const res = await axios.get(
        `${api_endpoints}/placementStatus/${userId}`
      );
      setPlacementStatus(res.data);
    } catch (error) {
      console.error("Error fetching placement status:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <Navbar />

      <div className="relative pt-20 pb-16 md:pt-28">
        {/* Optional subtle background pattern or overlay - can remove if not wanted */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(52,211,153,0.06),transparent_25%),radial-gradient(circle_at_85%_30%,rgba(52,211,153,0.04),transparent_35%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8 lg:space-y-10">
              {currentUser && (
                <>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Welcome back,{" "}
                    <span className="text-emerald-300">{currentUser.name}</span>
                  </h1>

                  {placementStatus?.status === "Placed" && (
                    <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-200 font-medium text-lg shadow-sm hover:shadow-md hover:bg-emerald-100/70 dark:hover:bg-emerald-900/40 transition-all duration-300">
                      <span className="text-2xl">🎉</span>
                      Congratulations! You are placed at{" "}
                      <span className="font-bold text-emerald-600 dark:text-emerald-300">
                        {placementStatus.companyName}
                      </span>
                    </div>
                  )}
                </>
              )}

              <p className="text-lg sm:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-2xl">
                Your personal{" "}
                <span className="font-semibold text-emerald-300">
                  Placement Management System
                </span>
                . Discover exciting career opportunities, explore company
                profiles, prepare for upcoming interviews, manage your profile,
                upload resumes, and track every application — all in one place.
              </p>

              {/* Optional quick actions - can remove if not needed */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 rounded-xl bg-emerald-300 text-zinc-900 font-semibold hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300">
                  Update Profile
                </button>
                <button className="px-6 py-3 rounded-xl border border-zinc-400/60 text-zinc-700 dark:text-zinc-300 hover:border-emerald-300 hover:text-emerald-300 transition-colors duration-300">
                  View Opportunities
                </button>
              </div>
            </div>

            {/* Right - Hero Image / Illustration (add your image or keep placeholder) */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-300/10 border border-zinc-200/80 dark:border-zinc-700/60 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-800 dark:to-zinc-900">
                {/* You can replace src with your actual hero image */}
                <img
                  src="https://img.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg?t=st=1769920009~exp=1769923609~hmac=79c98f9781fffe578bfca5bde97f1a49b98f48064ca0b62d6bce348bd64d33b8" // or use a placeholder like https://images.unsplash.com/photo-...
                  alt="Career growth illustration"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Optional overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-300/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;