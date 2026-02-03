// import React, { useState } from "react";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function FaqPage() {
//   const [activeTab, setActiveTab] = useState(1);
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   /* ================= DATA ================= */

//   const leetCodeQuestions = [
//     { question: "Two Sum", answer: "Use a hash map to store visited numbers and check complements." },
//     { question: "Reverse Integer", answer: "Extract digits using modulo and rebuild the number carefully." },
//     { question: "Palindrome Number", answer: "Reverse the number or convert it to string and compare." },
//   ];

//   const behavioralInterviewQuestions = [
//     { question: "Tell me about yourself", answer: "Brief intro, skills, and career goals relevant to the role." },
//     { question: "Greatest strengths", answer: "Mention strengths with real examples." },
//   ];

//   const technicalQuestions = [
//     {
//       question: "Difference between abstract class and interface?",
//       answer:
//         "Abstract classes can have method implementations; interfaces define contracts. Java supports multiple interfaces but only one abstract class.",
//     },
//     {
//       question: "What is Big-O notation?",
//       answer:
//         "Big-O measures algorithm efficiency and scalability with input size.",
//     },
//   ];

//   const renderAccordion = (questions) =>
//     questions.map((q, index) => (
//       <div
//         key={index}
//         className="border rounded-lg mb-4 bg-white shadow-sm"
//       >
//         <button
//           onClick={() => toggleAccordion(index)}
//           className="w-full text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 flex justify-between items-center"
//         >
//           <span>
//             Q{index + 1}. {q.question}
//           </span>
//           <span>{openIndex === index ? "−" : "+"}</span>
//         </button>

//         {openIndex === index && (
//           <div className="px-5 pb-4 text-gray-600">
//             {q.answer}
//           </div>
//         )}
//       </div>
//     ));

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-50 pt-28 px-4">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//             Frequently Asked Questions
//           </h1>

//           {/* Tabs */}
//           <div className="flex justify-center gap-4 mb-8 flex-wrap">
//             {[
//               { id: 1, label: "Coding" },
//               { id: 2, label: "Behavioral" },
//               { id: 3, label: "Technical" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.id);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-6 py-2 rounded-full font-medium transition
//                   ${
//                     activeTab === tab.id
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white border text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div>
//             {activeTab === 1 && renderAccordion(leetCodeQuestions)}
//             {activeTab === 2 && renderAccordion(behavioralInterviewQuestions)}
//             {activeTab === 3 && renderAccordion(technicalQuestions)}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default FaqPage;








// import React, { useState } from "react";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function FaqPage() {
//   const [activeTab, setActiveTab] = useState(1);
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   /* ================= DATA ================= */

//   const leetCodeQuestions = [
//     {
//       question: "Two Sum",
//       link: "https://leetcode.com/problems/two-sum/",
//       answer:
//         "Use a hash map to store visited numbers and check complements. [Practice here](https://leetcode.com/problems/two-sum/).",
//     },
//     {
//       question: "Reverse Integer",
//       link: "https://leetcode.com/problems/reverse-integer/",
//       answer:
//         "Extract digits using modulo and rebuild the number carefully. [Practice here](https://leetcode.com/problems/reverse-integer/).",
//     },
//     {
//       question: "Palindrome Number",
//       link: "https://leetcode.com/problems/palindrome-number/",
//       answer:
//         "Reverse the number or convert it to string and compare. [Practice here](https://leetcode.com/problems/palindrome-number/).",
//     },
//     {
//       question: "Longest Substring Without Repeating Characters",
//       link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
//       answer:
//         "Use sliding window technique with a hash map to track characters. [Practice here](https://leetcode.com/problems/longest-substring-without-repeating-characters/).",
//     },
//     {
//       question: "Valid Parentheses",
//       link: "https://leetcode.com/problems/valid-parentheses/",
//       answer:
//         "Use a stack to match opening and closing brackets. [Practice here](https://leetcode.com/problems/valid-parentheses/).",
//     },
//     {
//       question: "Merge Two Sorted Lists",
//       link: "https://leetcode.com/problems/merge-two-sorted-lists/",
//       answer:
//         "Use pointers to merge lists in one pass. [Practice here](https://leetcode.com/problems/merge-two-sorted-lists/).",
//     },
//     {
//       question: "Maximum Subarray",
//       link: "https://leetcode.com/problems/maximum-subarray/",
//       answer:
//         "Use Kadane's algorithm to find max sum in O(n). [Practice here](https://leetcode.com/problems/maximum-subarray/).",
//     },
//     {
//       question: "Climbing Stairs",
//       link: "https://leetcode.com/problems/climbing-stairs/",
//       answer:
//         "Use dynamic programming to store ways to reach each step. [Practice here](https://leetcode.com/problems/climbing-stairs/).",
//     },
//     {
//       question: "Best Time to Buy and Sell Stock",
//       link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
//       answer:
//         "Track minimum price and max profit while iterating. [Practice here](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/).",
//     },
//     {
//       question: "Linked List Cycle",
//       link: "https://leetcode.com/problems/linked-list-cycle/",
//       answer:
//         "Use slow and fast pointers to detect a cycle. [Practice here](https://leetcode.com/problems/linked-list-cycle/).",
//     },
//   ];

//   const behavioralInterviewQuestions = [
//     {
//       question: "Tell me about yourself",
//       answer:
//         "Brief intro, skills, and career goals relevant to the role.",
//     },
//     {
//       question: "Greatest strengths",
//       answer: "Mention strengths with real examples.",
//     },
//   ];

//   const technicalQuestions = [
//     {
//       question: "Difference between abstract class and interface?",
//       answer:
//         "Abstract classes can have method implementations; interfaces define contracts. Java supports multiple interfaces but only one abstract class.",
//     },
//     {
//       question: "What is Big-O notation?",
//       answer:
//         "Big-O measures algorithm efficiency and scalability with input size.",
//     },
//   ];

//   const renderAccordion = (questions) =>
//     questions.map((q, index) => (
//       <div
//         key={index}
//         className="border rounded-lg mb-4 bg-white shadow-sm"
//       >
//         <button
//           onClick={() => toggleAccordion(index)}
//           className="w-full text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 flex justify-between items-center"
//         >
//           <span>
//             Q{index + 1}. {q.question}
//           </span>
//           <span>{openIndex === index ? "−" : "+"}</span>
//         </button>

//         {openIndex === index && (
//           <div className="px-5 pb-4 text-gray-600">
//             <p className="mb-2">{q.answer}</p>
//             {q.link && (
//               <a
//                 href={q.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Practice on LeetCode
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     ));

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-50 pt-28 px-4">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//             Frequently Asked Questions
//           </h1>

//           {/* Tabs */}
//           <div className="flex justify-center gap-4 mb-8 flex-wrap">
//             {[
//               { id: 1, label: "Coding" },
//               { id: 2, label: "Behavioral" },
//               { id: 3, label: "Technical" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.id);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-6 py-2 rounded-full font-medium transition
//                   ${
//                     activeTab === tab.id
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white border text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div>
//             {activeTab === 1 && renderAccordion(leetCodeQuestions)}
//             {activeTab === 2 && renderAccordion(behavioralInterviewQuestions)}
//             {activeTab === 3 && renderAccordion(technicalQuestions)}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default FaqPage;









// import React, { useState } from "react";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function FaqPage() {
//   const [activeTab, setActiveTab] = useState(1);
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   /* ================= DATA ================= */

//   const leetCodeQuestions = [
//     {
//       question: "Two Sum",
//       link: "https://leetcode.com/problems/two-sum/",
//       answer:
//         "Use a hash map to store visited numbers and check complements.",
//     },
//     {
//       question: "Reverse Integer",
//       link: "https://leetcode.com/problems/reverse-integer/",
//       answer:
//         "Extract digits using modulo and rebuild the number carefully.",
//     },
//     {
//       question: "Palindrome Number",
//       link: "https://leetcode.com/problems/palindrome-number/",
//       answer:
//         "Reverse the number or convert it to string and compare.",
//     },
//     {
//       question: "Longest Substring Without Repeating Characters",
//       link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
//       answer:
//         "Use sliding window technique with a hash map to track characters.",
//     },
//     {
//       question: "Valid Parentheses",
//       link: "https://leetcode.com/problems/valid-parentheses/",
//       answer:
//         "Use a stack to match opening and closing brackets.",
//     },
//     {
//       question: "Merge Two Sorted Lists",
//       link: "https://leetcode.com/problems/merge-two-sorted-lists/",
//       answer:
//         "Use pointers to merge lists in one pass.",
//     },
//     {
//       question: "Maximum Subarray",
//       link: "https://leetcode.com/problems/maximum-subarray/",
//       answer:
//         "Use Kadane's algorithm to find max sum in O(n).",
//     },
//     {
//       question: "Climbing Stairs",
//       link: "https://leetcode.com/problems/climbing-stairs/",
//       answer:
//         "Use dynamic programming to store ways to reach each step.",
//     },
//     {
//       question: "Best Time to Buy and Sell Stock",
//       link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
//       answer:
//         "Track minimum price and max profit while iterating.",
//     },
//     {
//       question: "Linked List Cycle",
//       link: "https://leetcode.com/problems/linked-list-cycle/",
//       answer:
//         "Use slow and fast pointers to detect a cycle.",
//     },
//   ];

//   const behavioralInterviewQuestions = [
//     {
//       question: "Tell me about yourself",
//       answer:
//         "Brief intro, skills, and career goals relevant to the role.",
//     },
//     {
//       question: "Greatest strengths",
//       answer: "Mention strengths with real examples.",
//     },
//   ];

//   const technicalQuestions = [
//     {
//       question: "Difference between abstract class and interface?",
//       answer:
//         "Abstract classes can have method implementations; interfaces define contracts. Java supports multiple interfaces but only one abstract class.",
//     },
//     {
//       question: "What is Big-O notation?",
//       answer:
//         "Big-O measures algorithm efficiency and scalability with input size.",
//     },
//   ];

//   /* ================= ACCORDION ================= */

//   const renderAccordion = (questions) =>
//     questions.map((q, index) => (
//       <div
//         key={index}
//         className="border rounded-lg mb-4 bg-white shadow-sm"
//       >
//         <button
//           onClick={() => toggleAccordion(index)}
//           className="w-full text-left px-5 py-4 font-medium text-gray-800 hover:bg-gray-100 flex justify-between items-center"
//         >
//           <span>
//             Q{index + 1}. {q.question}
//           </span>
//           <span>{openIndex === index ? "−" : "+"}</span>
//         </button>

//         {openIndex === index && (
//           <div className="px-5 pb-4 text-gray-600 flex flex-col gap-2">
//             <p>{q.answer}</p>
//             {q.link && (
//               <a
//                 href={q.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
//               >
//                 View Solution / Practice
//               </a>
//             )}
//           </div>
//         )}
//       </div>
//     ));

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-50 pt-28 px-4">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
//             Frequently Asked Questions
//           </h1>

//           {/* Tabs */}
//           <div className="flex justify-center gap-4 mb-8 flex-wrap">
//             {[
//               { id: 1, label: "Coding" },
//               { id: 2, label: "Behavioral" },
//               { id: 3, label: "Technical" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.id);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-6 py-2 rounded-full font-medium transition
//                   ${
//                     activeTab === tab.id
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white border text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div>
//             {activeTab === 1 && renderAccordion(leetCodeQuestions)}
//             {activeTab === 2 && renderAccordion(behavioralInterviewQuestions)}
//             {activeTab === 3 && renderAccordion(technicalQuestions)}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default FaqPage;



// import React, { useState } from "react";
// import Navbar from "../HomeComponents/Navbar";
// import Footer from "../HomeComponents/Footer";

// function FaqPage() {
//   const [activeTab, setActiveTab] = useState(1);
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   /* ================= DATA ================= */

//   const leetCodeQuestions = [
//     {
//       question: "Two Sum",
//       link: "https://leetcode.com/problems/two-sum/",
//       answer:
//         "Use a hash map to store visited numbers and check complements.",
//     },
//     {
//       question: "Reverse Integer",
//       link: "https://leetcode.com/problems/reverse-integer/",
//       answer:
//         "Extract digits using modulo and rebuild the number carefully.",
//     },
//     {
//       question: "Palindrome Number",
//       link: "https://leetcode.com/problems/palindrome-number/",
//       answer:
//         "Reverse the number or convert it to string and compare.",
//     },
//     {
//       question: "Longest Substring Without Repeating Characters",
//       link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
//       answer:
//         "Use sliding window technique with a hash map to track characters.",
//     },
//     {
//       question: "Valid Parentheses",
//       link: "https://leetcode.com/problems/valid-parentheses/",
//       answer:
//         "Use a stack to match opening and closing brackets.",
//     },
//     {
//       question: "Merge Two Sorted Lists",
//       link: "https://leetcode.com/problems/merge-two-sorted-lists/",
//       answer:
//         "Use pointers to merge lists in one pass.",
//     },
//     {
//       question: "Maximum Subarray",
//       link: "https://leetcode.com/problems/maximum-subarray/",
//       answer:
//         "Use Kadane's algorithm to find max sum in O(n).",
//     },
//     {
//       question: "Climbing Stairs",
//       link: "https://leetcode.com/problems/climbing-stairs/",
//       answer:
//         "Use dynamic programming to store ways to reach each step.",
//     },
//     {
//       question: "Best Time to Buy and Sell Stock",
//       link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
//       answer:
//         "Track minimum price and max profit while iterating.",
//     },
//     {
//       question: "Linked List Cycle",
//       link: "https://leetcode.com/problems/linked-list-cycle/",
//       answer:
//         "Use slow and fast pointers to detect a cycle.",
//     },
//   ];

//   const behavioralInterviewQuestions = [
//     {
//       question: "Tell me about yourself",
//       answer:
//         "Brief intro, skills, and career goals relevant to the role.",
//     },
//     {
//       question: "Greatest strengths",
//       answer: "Mention strengths with real examples.",
//     },
//   ];

//   const technicalQuestions = [
//     {
//       question: "Difference between abstract class and interface?",
//       answer:
//         "Abstract classes can have method implementations; interfaces define contracts. Java supports multiple interfaces but only one abstract class.",
//     },
//     {
//       question: "What is Big-O notation?",
//       answer:
//         "Big-O measures algorithm efficiency and scalability with input size.",
//     },
//   ];

//   /* ================= ACCORDION ================= */

//   const renderAccordion = (questions) =>
//     questions.map((q, index) => (
//       <div
//         key={index}
//         className={`group rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 overflow-hidden bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 ${
//           openIndex === index ? "shadow-lg shadow-emerald-300/10" : ""
//         }`}
//       >
//         <button
//           onClick={() => toggleAccordion(index)}
//           className="w-full text-left px-6 py-5 font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors flex justify-between items-center"
//         >
//           <div className="flex items-center gap-3">
//             <span className="text-emerald-300 font-bold text-lg">
//               Q{index + 1}.
//             </span>
//             <span className="text-lg">{q.question}</span>
//           </div>
//           <span className="text-2xl font-light text-zinc-400 group-hover:text-emerald-300 transition-colors">
//             {openIndex === index ? "−" : "+"}
//           </span>
//         </button>

//         <div
//           className={`overflow-hidden transition-all duration-400 ease-in-out ${
//             openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="px-6 pb-6 pt-2 text-zinc-600 dark:text-zinc-300 leading-relaxed">
//             <p>{q.answer}</p>

//             {q.link && (
//               <a
//                 href={q.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-emerald-300/10 hover:bg-emerald-300/20 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-300/30 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 font-medium rounded-lg transition-all duration-200"
//               >
//                 Practice on LeetCode →
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     ));

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
//         <div className="max-w-5xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//               Frequently Asked Questions
//             </h1>
//             <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
//               Prepare better for your placement interviews
//             </p>
//           </div>

//           {/* Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {[
//               { id: 1, label: "Coding (LeetCode)" },
//               { id: 2, label: "Behavioral" },
//               { id: 3, label: "Technical (CS Fundamentals)" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => {
//                   setActiveTab(tab.id);
//                   setOpenIndex(null);
//                 }}
//                 className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-sm
//                   ${
//                     activeTab === tab.id
//                       ? "bg-emerald-300 text-zinc-900 shadow-emerald-300/20 hover:shadow-emerald-300/30"
//                       : "bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-300/50 hover:text-emerald-300"
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div className="space-y-4">
//             {activeTab === 1 && renderAccordion(leetCodeQuestions)}
//             {activeTab === 2 && renderAccordion(behavioralInterviewQuestions)}
//             {activeTab === 3 && renderAccordion(technicalQuestions)}
//           </div>

//           {/* Optional help footer */}
//           <div className="mt-16 text-center text-zinc-500 dark:text-zinc-400 text-sm">
//             <p>
//               Need more questions or mock interviews?{" "}
//               <a
//                 href="mailto:krishnam.23bce@vitbhopal.ac.in"
//                 className="text-emerald-300 hover:underline"
//               >
//                 Contact us
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default FaqPage;

import React, { useState } from "react";
import Navbar from "../HomeComponents/Navbar";
import Footer from "../HomeComponents/Footer";

function FaqPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const QUESTIONS_PER_PAGE = 3;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  /* ================= DATA ================= */
  const leetCodeQuestions = [
    { question: "Two Sum", link: "https://leetcode.com/problems/two-sum/", answer: "Use a hashmap to store visited values." },
    { question: "Reverse Integer", link: "https://leetcode.com/problems/reverse-integer/", answer: "Extract digits and rebuild carefully." },
    { question: "Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/", answer: "Reverse or compare digits." },
    { question: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", answer: "Sliding window with hashmap." },
    { question: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", answer: "Use stack to validate brackets." },
    { question: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", answer: "Two pointers approach." },
    { question: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", answer: "Kadane’s Algorithm." },
    { question: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", answer: "Dynamic programming." },
    { question: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", answer: "Track min price and profit." },
    { question: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", answer: "Fast and slow pointers." },
  ];

  const behavioralInterviewQuestions = [
    { question: "Tell me about yourself", answer: "Brief intro, skills, and career goals." },
    { question: "What are your strengths?", answer: "Mention strengths with examples." },
    { question: "What is your weakness?", answer: "Mention weakness and improvement." },
    { question: "Why should we hire you?", answer: "Match skills with role." },
    { question: "Describe a challenge you faced", answer: "Explain problem, action, result." },
    { question: "How do you handle pressure?", answer: "Show calmness and planning." },
    { question: "Teamwork experience", answer: "Highlight collaboration." },
    { question: "Conflict in team?", answer: "Show communication and resolution." },
    { question: "Failure experience", answer: "Focus on learning." },
    { question: "What motivates you?", answer: "Learning, growth, challenges." },
    { question: "Leadership experience", answer: "Show initiative and impact." },
    { question: "Where do you see yourself in 5 years?", answer: "Career growth aligned with company." },
  ];

  const technicalQuestions = [
    { question: "What is Big-O notation?", answer: "Measures time/space complexity." },
    { question: "Difference between process and thread", answer: "Threads share memory, processes don’t." },
    { question: "What is deadlock?", answer: "Processes waiting indefinitely for resources." },
    { question: "Explain ACID properties", answer: "Atomicity, Consistency, Isolation, Durability." },
    { question: "What is normalization?", answer: "Reduces redundancy in DB." },
    { question: "What is indexing?", answer: "Improves DB query speed." },
    { question: "Difference between stack and heap", answer: "Stack is fast; heap is dynamic." },
    { question: "What is REST API?", answer: "Stateless client-server architecture." },
    { question: "HTTP vs HTTPS", answer: "HTTPS is secure using TLS." },
    { question: "What is polymorphism?", answer: "Objects take multiple forms." },
    { question: "What is virtualization?", answer: "Multiple OS on one machine." },
    { question: "Difference between abstract class & interface", answer: "Interface defines contract; abstract class has implementations." },
  ];

  /* ================= PAGINATION ================= */
  const getCurrentQuestions = () => {
    const questions = 
      activeTab === 1 ? leetCodeQuestions :
      activeTab === 2 ? behavioralInterviewQuestions :
      technicalQuestions;

    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    return questions.slice(start, start + QUESTIONS_PER_PAGE);
  };

  const totalPages = () => {
    const questions = 
      activeTab === 1 ? leetCodeQuestions :
      activeTab === 2 ? behavioralInterviewQuestions :
      technicalQuestions;
    return Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setOpenIndex(null);
  };

  const renderPagination = () => {
    const total = totalPages();
    if (total <= 1) return null;

    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(total, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300 transition"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="start-ellipsis" className="px-2 py-2">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-4 py-2 rounded-lg font-medium min-w-[40px] transition-colors ${
            currentPage === i
              ? "bg-emerald-300 text-zinc-900 shadow-sm font-semibold"
              : "border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < total) {
      if (endPage < total - 1) {
        pages.push(<span key="end-ellipsis" className="px-2 py-2">...</span>);
      }
      pages.push(
        <button
          key={total}
          onClick={() => paginate(total)}
          className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300 transition"
        >
          {total}
        </button>
      );
    }

    return (
      <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
            currentPage === 1
              ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
              : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
          }`}
        >
          Prev
        </button>

        {pages}

        <button
          disabled={currentPage === total}
          onClick={() => paginate(currentPage + 1)}
          className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
            currentPage === total
              ? "bg-zinc-200 text-zinc-500 cursor-not-allowed dark:bg-zinc-800 dark:text-zinc-600"
              : "bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:border-emerald-300 hover:text-emerald-300"
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  /* ================= ACCORDION ================= */
  const renderAccordion = (questions) =>
    questions.map((q, index) => (
      <div
        key={index}
        className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
      >
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full px-6 py-5 flex justify-between items-center text-left text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
        >
          <span className="font-medium text-lg">{q.question}</span>
          <span className="text-2xl font-light text-zinc-400 group-hover:text-emerald-300 transition-colors">
            {openIndex === index ? "−" : "+"}
          </span>
        </button>

        {openIndex === index && (
          <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>{q.answer}</p>
            {q.link && (
              <a
                href={q.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-emerald-300/10 hover:bg-emerald-300/20 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-300/30 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 font-medium rounded-lg transition-all duration-200"
              >
                Practice on LeetCode →
              </a>
            )}
          </div>
        )}
      </div>
    ));

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Prepare better for your placement interviews
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 1, label: "Coding (LeetCode)" },
              { id: 2, label: "Behavioral" },
              { id: 3, label: "CS Fundamentals" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(1);
                  setOpenIndex(null);
                }}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 shadow-sm
                  ${
                    activeTab === tab.id
                      ? "bg-emerald-300 text-zinc-900 shadow-emerald-300/20 hover:shadow-emerald-300/30"
                      : "bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-300/50 hover:text-emerald-300"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {renderAccordion(getCurrentQuestions())}
          </div>

          {/* Pagination */}
          {renderPagination()}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FaqPage;