// import React from "react";
// import "../Admin-CSS/Footer.css"; // Assuming you have a separate CSS file for the Footer component

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <div className="footer-wrapper">
//         <div className="footer-section-one">
//             <h1 style={{textAlign:"center",marginLeft:"80px",fontSize:"3em"}}>PlaceX</h1>
//           </div>
          

//     <div class="footer-wrapper">
//   <div class="footer-section-two">
//     <div class="founders-section">
//       <h3>Founders</h3>
//       <ul>
//         <li>Jash Mehta</li>
//         <li>Priyanshi Mehta</li>
//         <li>Masrita Mangalarapu</li>
//       </ul>
//     </div>
//   </div>
//   <div className="footer-section-columns">
//   <div class="founders-section-2">
//           <h3>Contact Us</h3>
//           <ul>
//         <li>yash23@nmims.in</li>
//         <li>ashley12@nmims.in</li>
//         <li>lina56@nmims.in</li>
//       </ul>
//       </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;





const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              PlaceX
            </h1>
            <p className="mt-4 text-zinc-500 text-sm md:text-base text-center md:text-left max-w-xs">
              Empowering the next generation of talent at VIT Bhopal through seamless placement management.
            </p>
          </div>

          {/* Founders */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Founder
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-emerald-300/60 rounded-full"></span>
            </h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-center gap-2 justify-center md:justify-start hover:text-emerald-300 transition-colors duration-200">
                <span className="w-2 h-2 bg-emerald-300 rounded-full"></span>
                Krishnam Singh
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500 italic">
              VIT Bhopal University • Bhopal, Madhya Pradesh
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-emerald-300/60 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:krishnam.23bce@vitbhopal.ac.in"
                  className="text-zinc-400 hover:text-emerald-300 transition-colors duration-200 flex items-center gap-2 justify-center md:justify-start"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  krishnam.23bce@vitbhopal.ac.in
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-zinc-500 hover:text-emerald-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.29 1.82c-.34 0-.68-.02-1.02-.06A12.06 12.06 0 0 0 16.5 20c7.53 0 11.66-6.24 11.66-11.66 0-.18-.01-.35-.02-.52.8-.58 1.49-1.3 2.04-2.13z"/>
                </svg>
              </a>
              <a href="#" className="text-zinc-500 hover:text-emerald-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.3.51-2.55 2-2.55 1.47 0 1.97 1.38 1.97 2.55v4.93h2.79z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} <span className="text-emerald-300 font-medium">PlaceX</span>. 
            Crafted with passion in Bhopal, India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;