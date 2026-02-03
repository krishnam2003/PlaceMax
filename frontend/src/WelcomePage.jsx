// // WelcomePage.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Register from '../src/components/Registration/Register.jsx';
// import Login from '../src/components/Login/Login.jsx';

// const WelcomePage = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setShowRegister(false);
//   };

//   const handleRegisterClick = () => {
//     setShowRegister(true);
//     setShowLogin(false);
//   };

//   const handleCloseForms = () => {
//     setShowLogin(false);
//     setShowRegister(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <div className="text-2xl font-bold text-indigo-600">PortalPro</div>
//             </div>
//             <div className="flex space-x-4">
//               <button
//                 onClick={handleLoginClick}
//                 className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition duration-150"
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={handleRegisterClick}
//                 className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition duration-150"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center p-4">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Welcome Message */}
//           <div className="mb-12">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//               Welcome to Our Portal
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//               Discover amazing features and connect with our community. Join us today and experience the future.
//             </p>
            
//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={handleLoginClick}
//                 className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-lg hover:shadow-xl"
//               >
//                 Get Started - Login
//               </button>
//               <button
//                 onClick={handleRegisterClick}
//                 className="px-8 py-3 bg-white text-indigo-600 text-lg font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition duration-150 shadow-lg hover:shadow-xl"
//               >
//                 Create Account
//               </button>
//             </div>
//           </div>

//           {/* Features Grid */}
//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-indigo-600 text-2xl">🚀</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Fast & Secure</h3>
//               <p className="text-gray-600">Lightning-fast performance with enterprise-grade security</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-indigo-600 text-2xl">✨</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Use</h3>
//               <p className="text-gray-600">Intuitive interface designed for everyone</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
//                 <span className="text-indigo-600 text-2xl">🔒</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Private</h3>
//               <p className="text-gray-600">Your data is protected with advanced encryption</p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div>
//                 <div className="text-3xl font-bold text-indigo-600">10K+</div>
//                 <div className="text-gray-600">Active Users</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-indigo-600">99.9%</div>
//                 <div className="text-gray-600">Uptime</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-indigo-600">24/7</div>
//                 <div className="text-gray-600">Support</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-indigo-600">4.9★</div>
//                 <div className="text-gray-600">Rating</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Overlay Forms */}
//       {(showLogin || showRegister) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 {showLogin ? 'Welcome Back' : 'Join Us Today'}
//               </h2>
//               <button
//                 onClick={handleCloseForms}
//                 className="text-gray-400 hover:text-gray-600 text-2xl"
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="p-6">
//               {showLogin ? <Login /> : <Register/>}
              
//               <div className="mt-6 text-center">
//                 <button
//                   onClick={() => {
//                     if (showLogin) {
//                       handleRegisterClick();
//                     } else {
//                       handleLoginClick();
//                     }
//                   }}
//                   className="text-indigo-600 hover:text-indigo-800 font-medium"
//                 >
//                   {showLogin 
//                     ? "Don't have an account? Sign up" 
//                     : "Already have an account? Sign in"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-white border-t">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="text-center text-gray-600">
//             <p>© 2024 PortalPro. All rights reserved.</p>
//             <p className="mt-2 text-sm">Secure your digital experience with us</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default WelcomePage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../src/components/Home/HomeComponents/Footer.jsx";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex flex-col">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent tracking-tight">
              PlaceX
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/login')}
                className="px-5 py-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-300 dark:hover:text-emerald-300 font-medium transition-colors duration-200"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2.5 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-300/20 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
            Welcome to <span className="text-emerald-300">PlaceX</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Your smart platform for placement preparation, company drives, interview experiences, and career growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button
              onClick={() => navigate('/register')}
              className="px-8 py-4 bg-emerald-300 hover:bg-emerald-400 text-zinc-900 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-emerald-300/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started – It's Free
            </button>

            <button
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-lg rounded-xl border-2 border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300 transition-all duration-300"
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-sm border-t border-zinc-200/70 dark:border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-12">
            Why Choose PlaceX?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Real-time Drives",
                desc: "Stay updated with ongoing placement drives and upcoming opportunities",
              },
              {
                icon: "📝",
                title: "Interview Experiences",
                desc: "Learn from real candidates — questions, difficulty, tips & outcomes",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Your profile, applications and data protected with best practices",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-8 shadow-md hover:shadow-xl hover:shadow-emerald-300/10 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-center leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WelcomePage;