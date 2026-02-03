import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 flex items-center justify-center px-4 py-12 md:py-16">
      <div className="max-w-4xl w-full bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl shadow-xl border border-zinc-200/70 dark:border-zinc-700/60 overflow-hidden">
        {/* Optional subtle accent bar at top */}
        <div className="h-1.5 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300" />

        <div className="p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
            About Us
            <span className="block mt-2 text-emerald-300 text-5xl md:text-6xl font-black">
              Our Mission
            </span>
          </h1>

          <div className="space-y-6 md:space-y-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              Welcome to our platform! This project is built using modern web
              technologies like{" "}
              <span className="font-semibold text-emerald-300">React</span>,{" "}
              <span className="font-semibold text-emerald-300">Node.js</span>,
              and{" "}
              <span className="font-semibold text-emerald-300">MongoDB</span>.
            </p>

            <p>
              Our goal is to create a fast, secure, and user-friendly application
              that helps users easily register, log in, and access features with
              proper authentication — all while delivering a seamless experience.
            </p>

            <p>
              We are continuously improving the platform by adding new features,
              optimizing performance, enhancing accessibility, and focusing on
              delivering real value to every user.
            </p>
          </div>

          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-300 text-zinc-900 font-semibold text-lg rounded-xl hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-300/30 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 transition-all duration-300 border border-emerald-400/40">
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Optional footer-like note or team hint */}
          <div className="mt-12 pt-8 border-t border-zinc-200/70 dark:border-zinc-700/50 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Built with ❤️ in Bhopal • Continuously evolving since 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;