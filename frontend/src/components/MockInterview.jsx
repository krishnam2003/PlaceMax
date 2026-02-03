// import { useState, useEffect, useRef } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import {INTERVIEW_SYSTEM_PROMPT} from '../lib/geminiPrompt';


// const API_KEY = "AIzaSyBSLWop1v5URVw68mjQn8FApXeU8W8Ojsc";
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({
//   model: "gemini-2.5-flash",          // or gemini-2.5-pro if available
//   generationConfig: { temperature: 0.7, maxOutputTokens: 800 },
//   systemInstruction: INTERVIEW_SYSTEM_PROMPT,
// });

// type Message = { role: 'user' | 'assistant'; content: string };

// export default function MockInterview() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [interviewActive, setInterviewActive] = useState(false);
//   const [jobRole, setJobRole] = useState('Frontend Developer');
//   const [techStack, setTechStack] = useState('React, TypeScript, Next.js');
//   const [experience, setExperience] = useState('2–4 years');
//   const chatRef = useRef<HTMLDivElement>(null);

//   // Start interview
//   const startInterview = async () => {
//     setInterviewActive(true);
//     setMessages([]);
//     setIsLoading(true);

//     const initialPrompt = `
// Start a mock interview now.
// Job role: ${jobRole}
// Tech stack: ${techStack}
// Experience level: ${experience} years.
// Begin with a short welcome + your first question.
//     `;

//     try {
//       const chat = model.startChat({ history: [] });
//       const result = await chat.sendMessage(initialPrompt);
//       const text = result.response.text();

//       setMessages([{ role: 'assistant', content: text }]);
//     } catch (err) {
//       console.error(err);
//       setMessages([{ role: 'assistant', content: 'Error starting interview. Check console.' }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Send user answer
//   const sendMessage = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMsg = { role: 'user' as const, content: input };
//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const chat = model.startChat({
//         history: messages.map(m => ({
//           role: m.role === 'user' ? 'user' : 'model',
//           parts: [{ text: m.content }],
//         })),
//       });

//       const result = await chat.sendMessage(input);
//       let text = result.response.text();

//       // Check if interview ended (JSON mode)
//       if (text.includes('"action": "end_interview"')) {
//         try {
//           const json = JSON.parse(text);
//           text = `Interview ended!\n\nScore: ${json.overall_score}/10\n\nStrengths:\n${json.strengths.join('\n- ')}\n\nWeaknesses:\n${json.weaknesses.join('\n- ')}\n\nFeedback:\n${json.detailed_feedback}\n\nTips:\n${json.improvement_tips.join('\n- ')}`;
//         } catch {}
//       }

//       setMessages(prev => [...prev, { role: 'assistant', content: text }]);
//     } catch (err: any) {
//       console.error(err);
//       setMessages(prev => [...prev, { role: 'assistant', content: 'Error: ' + (err?.message || 'Unknown') }] );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Auto-scroll
//   useEffect(() => {
//     if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
//   }, [messages]);

//   if (!interviewActive) {
//     return (
//       <div className="p-6 max-w-2xl mx-auto">
//         <h1 className="text-2xl font-bold mb-6">AI Mock Interview</h1>
//         <div className="space-y-4">
//           <input value={jobRole} onChange={e => setJobRole(e.target.value)} placeholder="Job role (e.g. Full Stack Developer)" className="border p-2 w-full" />
//           <input value={techStack} onChange={e => setTechStack(e.target.value)} placeholder="Tech stack" className="border p-2 w-full" />
//           <input value={experience} onChange={e => setExperience(e.target.value)} placeholder="Experience level" className="border p-2 w-full" />
//           <button onClick={startInterview} className="bg-blue-600 text-white px-6 py-3 rounded">Start Interview</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
//       <div ref={chatRef} className="flex-1 overflow-y-auto border p-4 mb-4 space-y-4">
//         {messages.map((m, i) => (
//           <div key={i} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'}`}>
//             <strong>{m.role === 'user' ? 'You' : 'Interviewer'}:</strong> {m.content}
//           </div>
//         ))}
//         {isLoading && <div className="text-gray-500">Interviewer is thinking...</div>}
//       </div>

//       <div className="flex gap-2">
//         <input
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === 'Enter' && sendMessage()}
//           placeholder="Type your answer..."
//           className="flex-1 border p-3 rounded"
//           disabled={isLoading}
//         />
//         <button onClick={sendMessage} disabled={isLoading} className="bg-green-600 text-white px-6 py-3 rounded">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


// src/components/MockInterview.jsx
// import { useState, useEffect, useRef } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// // ────────────────────────────────────────────────
// // System Prompt (the "brain" of the interviewer)
// // ────────────────────────────────────────────────
// const INTERVIEW_SYSTEM_PROMPT = `
// You are a strict, professional, senior interviewer with 15+ years of experience.
// You conduct realistic technical / behavioral mock interviews.

// Rules you MUST follow:
// - Ask ONE question at a time. Wait for the user's full answer.
// - Do NOT give feedback, hints, or commentary until the interview ends.
// - Use realistic follow-up questions if the answer is incomplete, vague or wrong.
// - Cover technical questions, behavioral questions, and problem-solving.
// - Keep tone professional, encouraging but challenging.
// - After 8–12 questions (decide based on depth), end the interview.
// - When you decide to end: Output ONLY valid JSON and nothing else (no extra text):

// {
//   "action": "end_interview",
//   "overall_score": 8.5,
//   "strengths": ["Clear explanation of closures", "Good system design intuition"],
//   "weaknesses": ["Missed race condition explanation", "Answers too short"],
//   "detailed_feedback": "You showed strong fundamentals in ... but need improvement in ...",
//   "improvement_tips": ["Practice explaining concurrency better", "Use STAR method for behavioral questions"]
// }

// Until the end, respond ONLY with your next question (or very short clarifying follow-up if absolutely needed).
// Do NOT say things like "good answer", "that's correct", "let's move on" during the interview.
// `;

// // ────────────────────────────────────────────────
// // Main Component
// // ────────────────────────────────────────────────
// export default function MockInterview() {
//   const [jobRole, setJobRole] = useState('Frontend Developer');
//   const [techStack, setTechStack] = useState('React, TypeScript, Next.js');
//   const [experience, setExperience] = useState('2–4 years');

//   const [interviewActive, setInterviewActive] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const [chatSession, setChatSession] = useState(null);

//   const chatRef = useRef(null);

//   // Get API key from environment (Vite exposes VITE_ variables)
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

//   // Safety check
//   if (!API_KEY) {
//     console.error(
//       'Missing Gemini API key!\n' +
//       'Add this line to your .env.local file:\n' +
//       'VITE_GEMINI_API_KEY=AIzaSyYourRealKeyHerexxxxxxxxxxxxxxxxxxxx'
//     );
//   }

//   const genAI = new GoogleGenerativeAI(API_KEY || 'dummy-key-for-build-only');

//   const model = genAI.getGenerativeModel({
//     model: 'gemini-2.5-flash', // or gemini-1.5-pro / gemini-2.0-flash if available
//     generationConfig: {
//       temperature: 0.7,
//       maxOutputTokens: 1000,
//     },
//     systemInstruction: INTERVIEW_SYSTEM_PROMPT,
//   });

//   // ────────────────────────────────────────────────
//   // Start the interview
//   // ────────────────────────────────────────────────
//   const startInterview = async () => {
//     if (!API_KEY) {
//       alert('API key missing. Check console and .env.local file.');
//       return;
//     }

//     setInterviewActive(true);
//     setMessages([]);
//     setIsLoading(true);

//     try {
//       const initialUserPrompt = `
// Start a mock interview right now.

// Job role:       ${jobRole}
// Tech stack:     ${techStack}
// Experience:     ${experience} years

// Begin with a short welcome message + your FIRST question.
//       `;

//       // Create persistent chat session (very important!)
//       const newChat = model.startChat(); // empty history = correct

//       // Send first user message (the setup prompt)
//       const result = await newChat.sendMessage(initialUserPrompt);
//       const text = result.response.text();

//       setMessages([{ role: 'assistant', content: text }]);
//       setChatSession(newChat);
//     } catch (err) {
//       console.error('Start error:', err);
//       setMessages([
//         { role: 'assistant', content: `Error starting interview:\n${err.message || err}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ────────────────────────────────────────────────
//   // Send user answer
//   // ────────────────────────────────────────────────
//   const sendMessage = async () => {
//     if (!input.trim() || isLoading || !chatSession) return;

//     const userMessage = { role: 'user', content: input.trim() };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const result = await chatSession.sendMessage(input.trim());
//       let text = result.response.text();

//       // Detect end-of-interview JSON response
//       if (text.includes('"action": "end_interview"')) {
//         try {
//           const json = JSON.parse(text);
//           text = `
// **Interview Ended!**

// **Score:** ${json.overall_score} / 10

// **Strengths:**
// ${json.strengths.map((s) => `- ${s}`).join('\n')}

// **Weaknesses:**
// ${json.weaknesses.map((w) => `- ${w}`).join('\n')}

// **Detailed Feedback:**
// ${json.detailed_feedback}

// **Improvement Tips:**
// ${json.improvement_tips.map((t) => `- ${t}`).join('\n')}
//           `;
//         } catch (e) {
//           // fallback if JSON is broken
//           text = '[End of interview detected — formatting failed]';
//         }
//       }

//       setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
//     } catch (err) {
//       console.error('Send error:', err);
//       setMessages((prev) => [
//         ...prev,
//         { role: 'assistant', content: `Error: ${err.message || 'Unknown error'}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Auto-scroll to bottom
//   useEffect(() => {
//     if (chatRef.current) {
//       chatRef.current.scrollTop = chatRef.current.scrollHeight;
//     }
//   }, [messages]);

//   // ────────────────────────────────────────────────
//   // Render
//   // ────────────────────────────────────────────────
//   if (!interviewActive) {
//     return (
//       <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
//         <h1>AI Mock Interview</h1>
//         <p>Powered by Google Gemini</p>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
//           <label>
//             Job Role:
//             <input
//               value={jobRole}
//               onChange={(e) => setJobRole(e.target.value)}
//               placeholder="e.g. Full Stack Developer"
//               style={{ width: '100%', padding: '10px', marginTop: '6px' }}
//             />
//           </label>

//           <label>
//             Tech Stack:
//             <input
//               value={techStack}
//               onChange={(e) => setTechStack(e.target.value)}
//               placeholder="React, Node.js, PostgreSQL"
//               style={{ width: '100%', padding: '10px', marginTop: '6px' }}
//             />
//           </label>

//           <label>
//             Experience Level:
//             <input
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//               placeholder="0–2 years / 3–5 years / etc."
//               style={{ width: '100%', padding: '10px', marginTop: '6px' }}
//             />
//           </label>

//           <button
//             onClick={startInterview}
//             disabled={isLoading}
//             style={{
//               padding: '14px 28px',
//               fontSize: '16px',
//               backgroundColor: '#2563eb',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               cursor: 'pointer',
//               marginTop: '16px',
//             }}
//           >
//             Start Interview
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', height: '100vh', display: 'flex', flexDirection: 'column', padding: '16px' }}>
//       <h2 style={{ margin: '0 0 16px 0' }}>Mock Interview — {jobRole}</h2>

//       <div
//         ref={chatRef}
//         style={{
//           flex: 1,
//           overflowY: 'auto',
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           padding: '16px',
//           marginBottom: '16px',
//           backgroundColor: '#f9fafb',
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               marginBottom: '16px',
//               padding: '12px 16px',
//               borderRadius: '12px',
//               maxWidth: '80%',
//               backgroundColor: msg.role === 'user' ? '#dbeafe' : '#f3f4f6',
//               alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
//               marginLeft: msg.role === 'user' ? 'auto' : '0',
//             }}
//           >
//             <strong>{msg.role === 'user' ? 'You' : 'Interviewer'}:</strong>
//             <div style={{ whiteSpace: 'pre-wrap', marginTop: '4px' }}>{msg.content}</div>
//           </div>
//         ))}

//         {isLoading && (
//           <div style={{ color: '#6b7280', fontStyle: 'italic' }}>
//             Interviewer is thinking...
//           </div>
//         )}
//       </div>

//       <div style={{ display: 'flex', gap: '12px' }}>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' && !e.shiftKey) {
//               e.preventDefault();
//               sendMessage();
//             }
//           }}
//           placeholder="Type your answer here..."
//           disabled={isLoading}
//           style={{
//             flex: 1,
//             padding: '12px',
//             fontSize: '16px',
//             border: '1px solid #d1d5db',
//             borderRadius: '6px',
//           }}
//         />
//         <button
//           onClick={sendMessage}
//           disabled={isLoading || !input.trim()}
//           style={{
//             padding: '12px 24px',
//             backgroundColor: '#10b981',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//           }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }





// import { useState, useRef, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// /* ──────────────────────────────────────────────── */
// /* System Prompt                                   */
// /* ──────────────────────────────────────────────── */
// const INTERVIEW_SYSTEM_PROMPT = `
// You are a strict, professional, senior interviewer with 15+ years of experience.
// You conduct realistic technical / behavioral mock interviews.

// Rules you MUST follow:
// - Ask ONE question at a time. Wait for the user's full answer.
// - Do NOT give feedback, hints, or commentary until the interview ends.
// - Use realistic follow-up questions if the answer is incomplete, vague or wrong.
// - Cover technical questions, behavioral questions, and problem-solving.
// - Keep tone professional, encouraging but challenging.
// - After 8–12 questions (decide based on depth), end the interview.
// - When you decide to end: Output ONLY valid JSON and nothing else.
// `;

// export default function MockInterview() {
//   const [jobRole, setJobRole] = useState("Frontend Developer");
//   const [techStack, setTechStack] = useState("React, JavaScript, Tailwind");
//   const [experience, setExperience] = useState("2–4 years");

//   const [interviewActive, setInterviewActive] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatSession, setChatSession] = useState(null);

//   const chatRef = useRef(null);

//   /* ──────────────────────────────────────────────── */
//   /* Start Interview (fetch key on click)             */
//   /* ──────────────────────────────────────────────── */
//   const startInterview = async () => {
//     setInterviewActive(true);
//     setMessages([]);
//     setIsLoading(true);

//     try {
//       // 🔐 Fetch Gemini key from backend
//       const keyRes = await fetch("http://localhost:3001/auth/gemini-key");
//       const keyData = await keyRes.json();

//       if (!keyData.geminiKey) {
//         throw new Error("Gemini API key not received from backend");
//       }

//       const genAI = new GoogleGenerativeAI(keyData.geminiKey);

//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.5-flash",
//         systemInstruction: INTERVIEW_SYSTEM_PROMPT,
//         generationConfig: {
//           temperature: 0.7,
//           maxOutputTokens: 1000,
//         },
//       });

//       const prompt = `
// Start a mock interview.

// Job Role: ${jobRole}
// Tech Stack: ${techStack}
// Experience: ${experience}

// Begin with a short welcome + first question.
//       `;

//       const chat = model.startChat();
//       const res = await chat.sendMessage(prompt);

//       setMessages([{ role: "assistant", content: res.response.text() }]);
//       setChatSession(chat);
//     } catch (err) {
//       setMessages([
//         { role: "assistant", content: `Error: ${err.message}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Send Answer                                     */
//   /* ──────────────────────────────────────────────── */
//   const sendMessage = async () => {
//     if (!input.trim() || isLoading || !chatSession) return;

//     const userInput = input.trim();
//     setMessages((m) => [...m, { role: "user", content: userInput }]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const res = await chatSession.sendMessage(userInput);
//       let text = res.response.text();

//       // Detect interview end
//       if (text.includes('"action": "end_interview"')) {
//         const json = JSON.parse(text);
//         text = `
// Interview Ended!

// Score: ${json.overall_score}/10

// Strengths:
// ${json.strengths.map((s) => `- ${s}`).join("\n")}

// Weaknesses:
// ${json.weaknesses.map((w) => `- ${w}`).join("\n")}

// Feedback:
// ${json.detailed_feedback}

// Tips:
// ${json.improvement_tips.map((t) => `- ${t}`).join("\n")}
//         `;
//       }

//       setMessages((m) => [...m, { role: "assistant", content: text }]);
//     } catch (err) {
//       setMessages((m) => [
//         ...m,
//         { role: "assistant", content: `Error: ${err.message}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* Auto scroll */
//   useEffect(() => {
//     chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
//   }, [messages]);

//   /* ──────────────────────────────────────────────── */
//   /* UI                                              */
//   /* ──────────────────────────────────────────────── */
//   if (!interviewActive) {
//     return (
//       <div className="max-w-xl mx-auto mt-12 p-6">
//         <h1 className="text-3xl font-bold mb-2">AI Mock Interview</h1>
//         <p className="text-gray-500 mb-8">Powered by Google Gemini</p>

//         <div className="space-y-4">
//           <input
//             className="w-full p-3 border rounded"
//             value={jobRole}
//             onChange={(e) => setJobRole(e.target.value)}
//             placeholder="Job Role"
//           />
//           <input
//             className="w-full p-3 border rounded"
//             value={techStack}
//             onChange={(e) => setTechStack(e.target.value)}
//             placeholder="Tech Stack"
//           />
//           <input
//             className="w-full p-3 border rounded"
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             placeholder="Experience"
//           />

//           <button
//             onClick={startInterview}
//             disabled={isLoading}
//             className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
//           >
//             Start Interview
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto h-screen flex flex-col p-4">
//       <h2 className="text-xl font-semibold mb-4">
//         Mock Interview — {jobRole}
//       </h2>

//       <div
//         ref={chatRef}
//         className="flex-1 overflow-y-auto bg-gray-50 border rounded p-4 space-y-4"
//       >
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`max-w-[75%] p-3 rounded-lg ${
//               msg.role === "user"
//                 ? "bg-blue-100 ml-auto"
//                 : "bg-gray-200"
//             }`}
//           >
//             <strong>{msg.role === "user" ? "You" : "Interviewer"}:</strong>
//             <div className="whitespace-pre-wrap mt-1">{msg.content}</div>
//           </div>
//         ))}

//         {isLoading && (
//           <p className="italic text-gray-500">
//             Interviewer is thinking…
//           </p>
//         )}
//       </div>

//       <div className="flex gap-3 mt-4">
//         <input
//           className="flex-1 p-3 border rounded"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type your answer..."
//         />
//         <button
//           onClick={sendMessage}
//           disabled={isLoading}
//           className="bg-emerald-500 text-white px-6 rounded hover:bg-emerald-600"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }




// import React, { useState, useRef, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Navbar from "../components/Home/HomeComponents/Navbar.jsx";

// /* ──────────────────────────────────────────────── */
// /* System Prompt                                   */
// /* ──────────────────────────────────────────────── */
// const INTERVIEW_SYSTEM_PROMPT = `
// You are a strict, professional, senior interviewer with 15+ years of experience.
// You conduct realistic technical / behavioral mock interviews.

// Rules you MUST follow:
// - Ask ONE question at a time. Wait for the user's full answer.
// - Do NOT give feedback, hints, or commentary until the interview ends.
// - Use realistic follow-up questions if the answer is incomplete, vague or wrong.
// - Cover technical questions, behavioral questions, and problem-solving.
// - Keep tone professional, encouraging but challenging.
// - After 8–12 questions (decide based on depth), end the interview.
// - When you decide to end: Output ONLY valid JSON and nothing else.
// `;

// export default function MockInterview() {
//   const [jobRole, setJobRole] = useState("Frontend Developer");
//   const [techStack, setTechStack] = useState("React, JavaScript, Tailwind");
//   const [experience, setExperience] = useState("2–4 years");

//   const [interviewActive, setInterviewActive] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatSession, setChatSession] = useState(null);

//   const chatRef = useRef(null);

//   const resetInterview = () => {
//     setInterviewActive(false);
//     setMessages([]);
//     setInput("");
//     setChatSession(null);
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Start Interview                                 */
//   /* ──────────────────────────────────────────────── */
//   const startInterview = async () => {
//     setInterviewActive(true);
//     setMessages([]);
//     setIsLoading(true);

//     try {
//       const keyRes = await fetch("http://localhost:3001/auth/gemini-key");
//       const keyData = await keyRes.json();

//       if (!keyData.geminiKey) {
//         throw new Error("Gemini API key not received from backend");
//       }

//       const genAI = new GoogleGenerativeAI(keyData.geminiKey);

//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.5-flash",
//         systemInstruction: INTERVIEW_SYSTEM_PROMPT,
//         generationConfig: {
//           temperature: 0.7,
//           maxOutputTokens: 1000,
//         },
//       });

//       const prompt = `
// Start a mock interview.

// Job Role: ${jobRole}
// Tech Stack: ${techStack}
// Experience: ${experience}

// Begin with a short welcome + first question.
//       `;

//       const chat = model.startChat();
//       const res = await chat.sendMessage(prompt);

//       setMessages([{ role: "assistant", content: res.response.text() }]);
//       setChatSession(chat);
//     } catch (err) {
//       setMessages([
//         { role: "assistant", content: `Error: ${err.message}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Send Answer                                     */
//   /* ──────────────────────────────────────────────── */
//   const sendMessage = async () => {
//     if (!input.trim() || isLoading || !chatSession) return;

//     const userInput = input.trim();
//     setMessages((m) => [...m, { role: "user", content: userInput }]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const res = await chatSession.sendMessage(userInput);
//       let text = res.response.text();

//       if (text.includes('"action": "end_interview"')) {
//         let json;
//         try {
//           json = JSON.parse(text);
//         } catch {
//           json = { overall_score: "?", strengths: [], weaknesses: [], detailed_feedback: "", improvement_tips: [] };
//         }
//         text = `
// **Interview Ended!**

// **Score:** ${json.overall_score || "?"} / 10

// **Strengths:**
// ${(json.strengths || []).map(s => `- ${s}`).join("\n") || "- None recorded"}

// **Weaknesses:**
// ${(json.weaknesses || []).map(w => `- ${w}`).join("\n") || "- None recorded"}

// **Feedback:**
// ${json.detailed_feedback || "No feedback provided"}

// **Improvement Tips:**
// ${(json.improvement_tips || []).map(t => `- ${t}`).join("\n") || "- None provided"}
//         `;
//       }

//       setMessages((m) => [...m, { role: "assistant", content: text }]);
//     } catch (err) {
//       setMessages((m) => [...m, { role: "assistant", content: `Error: ${err.message}` }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
//   }, [messages]);

//   if (!interviewActive) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-16">
//           <div className="max-w-5xl mx-auto px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//                 AI Mock Interview
//               </h1>
//               <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
//                 Practice with a senior interviewer powered by Google Gemini
//               </p>
//             </div>

//             <div className="max-w-md mx-auto space-y-5">
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={jobRole}
//                 onChange={(e) => setJobRole(e.target.value)}
//                 placeholder="Job Role (e.g. Frontend Developer)"
//               />
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={techStack}
//                 onChange={(e) => setTechStack(e.target.value)}
//                 placeholder="Tech Stack (e.g. React, Tailwind, TS)"
//               />
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 placeholder="Experience (e.g. 2–4 years)"
//               />

//               <button
//                 onClick={startInterview}
//                 disabled={isLoading}
//                 className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? "Starting Interview..." : "Start Interview"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 pt-20 pb-16">
//         <div className="max-w-5xl mx-auto px-6 lg:px-8">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//               Mock Interview — {jobRole}
//             </h2>
//             <button
//               onClick={resetInterview}
//               className="px-5 py-2.5 bg-zinc-200/70 hover:bg-zinc-300 dark:bg-zinc-800/70 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium rounded-xl transition-all duration-200"
//             >
//               New Interview
//             </button>
//           </div>

//           {/* Chat Area */}
//           <div
//             ref={chatRef}
//             className="flex-1 backdrop-blur-md bg-white/30 dark:bg-zinc-900/30 rounded-2xl border border-zinc-200/40 dark:border-zinc-700/40 shadow-lg p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-280px)]"
//           >
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-xl p-5 rounded-2xl ${
//                     msg.role === "user"
//                       ? "bg-emerald-600 text-white"
//                       : "bg-white/70 dark:bg-zinc-800/60 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-700/50"
//                   } shadow-sm`}
//                 >
//                   <div className="font-semibold text-sm opacity-90 mb-1">
//                     {msg.role === "user" ? "You" : "Interviewer"}
//                   </div>
//                   <div className="whitespace-pre-line leading-relaxed">
//                     {msg.content}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {isLoading && (
//               <div className="text-zinc-600 dark:text-zinc-400 italic">
//                 Interviewer is thinking…
//               </div>
//             )}
//           </div>

//           {/* Input Area */}
//           <div className="mt-6 flex gap-3">
//             <input
//               className="flex-1 p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
//               placeholder="Type your answer here..."
//               disabled={isLoading}
//             />
//             <button
//               onClick={sendMessage}
//               disabled={isLoading}
//               className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:cursor-not-allowed"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }











// import React, { useEffect, useState, useRef } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import Navbar from "../components/Home/HomeComponents/Navbar.jsx";
// import toast, { Toaster } from "react-hot-toast";

// /* ──────────────────────────────────────────────── */
// /* Speech Recognition Setup */
// /* ──────────────────────────────────────────────── */
// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;

// /* ──────────────────────────────────────────────── */
// /* System Prompt */
// /* ──────────────────────────────────────────────── */
// const INTERVIEW_SYSTEM_PROMPT = `
// You are a strict, professional, senior interviewer with 15+ years of experience.
// You conduct realistic technical / behavioral mock interviews.
// Rules you MUST follow:
// - Ask ONE question at a time. Wait for the user's full answer.
// - Do NOT give feedback, hints, or commentary until the interview ends.
// - Use realistic follow-up questions if the answer is incomplete, vague or wrong.
// - Cover technical questions, behavioral questions, and problem-solving.
// - Keep tone professional, encouraging but challenging.
// - After 8–12 questions (decide based on depth), end the interview.
// - When you decide to end: Output ONLY valid JSON and nothing else.
// `;

// export default function MockInterview() {
//   const [jobRole, setJobRole] = useState("Frontend Developer");
//   const [techStack, setTechStack] = useState("React, JavaScript, Tailwind");
//   const [experience, setExperience] = useState("2–4 years");
//   const [interviewActive, setInterviewActive] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [chatSession, setChatSession] = useState(null);

//   /* Voice State */
//   const [isRecording, setIsRecording] = useState(false);
//   const recognitionRef = useRef(null);
//   const chatRef = useRef(null);

//   const resetInterview = () => {
//     setInterviewActive(false);
//     setMessages([]);
//     setInput("");
//     setChatSession(null);
//     setIsRecording(false);
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Voice Input Toggle */
//   /* ──────────────────────────────────────────────── */
//   const toggleVoiceInput = () => {
//     if (!SpeechRecognition) {
//       toast.error("Speech Recognition not supported in this browser");
//       return;
//     }

//     if (!recognitionRef.current) {
//       const recognition = new SpeechRecognition();
//       recognition.lang = "en-US";
//       recognition.interimResults = false;
//       recognition.continuous = false;

//       recognition.onresult = (event) => {
//         const transcript = event.results[0][0].transcript;
//         setInput((prev) => (prev ? prev + " " + transcript : transcript));
//       };

//       recognition.onend = () => setIsRecording(false);
//       recognition.onerror = () => setIsRecording(false);

//       recognitionRef.current = recognition;
//     }

//     if (!isRecording) {
//       recognitionRef.current.start();
//       setIsRecording(true);
//     } else {
//       recognitionRef.current.stop();
//       setIsRecording(false);
//     }
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Start Interview */
//   /* ──────────────────────────────────────────────── */
//   const startInterview = async () => {
//     setInterviewActive(true);
//     setMessages([]);
//     setIsLoading(true);

//     try {
//       const keyRes = await fetch("http://localhost:3001/auth/gemini-key");
//       const keyData = await keyRes.json();

//       if (!keyData.geminiKey) {
//         throw new Error("Gemini API key not received from backend");
//       }

//       const genAI = new GoogleGenerativeAI(keyData.geminiKey);
//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.5-flash",
//         systemInstruction: INTERVIEW_SYSTEM_PROMPT,
//         generationConfig: {
//           temperature: 0.7,
//           maxOutputTokens: 1000,
//         },
//       });

//       const prompt = `
// Start a mock interview.
// Job Role: ${jobRole}
// Tech Stack: ${techStack}
// Experience: ${experience}
// Begin with a short welcome + first question.
//       `;

//       const chat = model.startChat();
//       const res = await chat.sendMessage(prompt);

//       setMessages([{ role: "assistant", content: res.response.text() }]);
//       setChatSession(chat);
//     } catch (err) {
//       toast.error(`Error starting interview: ${err.message}`);
//       setMessages([{ role: "assistant", content: `Error: ${err.message}` }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* ──────────────────────────────────────────────── */
//   /* Send Answer */
//   /* ──────────────────────────────────────────────── */
//   const sendMessage = async () => {
//     if (!input.trim() || isLoading || !chatSession) return;

//     const userInput = input.trim();
//     setMessages((m) => [...m, { role: "user", content: userInput }]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const res = await chatSession.sendMessage(userInput);
//       let text = res.response.text();

//       // Handle interview end (JSON output)
//       if (text.includes('"action": "end_interview"')) {
//         let json;
//         try {
//           json = JSON.parse(text);
//         } catch {
//           json = {};
//         }

//         text = `
// **Interview Ended!**
// **Score:** ${json.overall_score || "?"} / 10
// **Strengths:**
// ${(json.strengths || []).map((s) => `- ${s}`).join("\n") || "- None"}
// **Weaknesses:**
// ${(json.weaknesses || []).map((w) => `- ${w}`).join("\n") || "- None"}
// **Feedback:**
// ${json.detailed_feedback || "No feedback provided"}
// **Improvement Tips:**
// ${(json.improvement_tips || []).map((t) => `- ${t}`).join("\n") || "- None"}
//         `;

//         toast.success("Mock interview completed!", {
//           duration: 6000,
//           position: "top-center",
//         });
//       }

//       setMessages((m) => [...m, { role: "assistant", content: text }]);
//     } catch (err) {
//       toast.error(`Error: ${err.message}`);
//       setMessages((m) => [
//         ...m,
//         { role: "assistant", content: `Error: ${err.message}` },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   /* Auto-scroll to bottom on new messages */
//   const prevMessagesLength = useRef(messages.length);

//   useEffect(() => {
//     if (messages.length > prevMessagesLength.current) {
//       chatRef.current?.scrollTo({
//         top: chatRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//     prevMessagesLength.current = messages.length;
//   }, [messages]);

//   /* ──────────────────────────────────────────────── */
//   /* UI */
//   /* ──────────────────────────────────────────────── */
//   if (!interviewActive) {
//     return (
//       <>
//         <Navbar />
//         <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
//           <div className="w-full max-w-lg px-6">
//             <div className="text-center mb-10">
//               <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">
//                 AI Mock Interview
//               </h1>
//               <p className="text-lg text-zinc-600 dark:text-zinc-400">
//                 Practice real interviews with Google Gemini
//               </p>
//             </div>

//             <div className="space-y-5">
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={jobRole}
//                 onChange={(e) => setJobRole(e.target.value)}
//                 placeholder="Job Role (e.g. Frontend Developer)"
//               />
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={techStack}
//                 onChange={(e) => setTechStack(e.target.value)}
//                 placeholder="Tech Stack (e.g. React, Tailwind, TypeScript)"
//               />
//               <input
//                 className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 placeholder="Experience Level (e.g. 2–4 years)"
//               />

//               <button
//                 onClick={startInterview}
//                 disabled={isLoading}
//                 className={`w-full py-4 text-xl font-bold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105
//                   ${isLoading 
//                     ? "bg-zinc-400 text-zinc-600 cursor-not-allowed" 
//                     : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}
//               >
//                 {isLoading ? "Starting Interview..." : "Start Mock Interview"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />

//       <Toaster position="top-center" />

//       <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
//         <div className="max-w-5xl mx-auto">
//           {/* Header */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//             <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
//               Mock Interview Session
//             </h1>
//             <button
//               onClick={resetInterview}
//               className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition duration-200 shadow-sm hover:shadow-md"
//             >
//               End & Reset
//             </button>
//           </div>

//           {/* Chat Area */}
//           <div
//             ref={chatRef}
//             className="max-h-[65vh] overflow-y-auto space-y-5 mb-8 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-6 shadow-inner"
//           >
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex ${
//                   msg.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[85%] p-4 rounded-2xl shadow-sm
//                     ${msg.role === "user"
//                       ? "bg-emerald-100 dark:bg-emerald-900/50 text-zinc-900 dark:text-white"
//                       : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"}`}
//                 >
//                   <strong className="block mb-1.5 text-base">
//                     {msg.role === "user" ? "You" : "Interviewer"}
//                   </strong>
//                   <div className="whitespace-pre-line leading-relaxed text-[15px]">
//                     {msg.content}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-zinc-100 dark:bg-zinc-800 px-5 py-3 rounded-2xl">
//                   <div className="flex space-x-2">
//                     <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
//                     <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
//                     <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Input Area */}
//           <div className="flex flex-col sm:flex-row gap-3 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-4 shadow-md">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
//               placeholder="Type your answer... (Shift + Enter for new line)"
//               className="flex-1 p-4 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 resize-none"
//               rows={1}
//               disabled={isLoading}
//             />

//             <div className="flex gap-3 sm:gap-4">
//               <button
//                 onClick={toggleVoiceInput}
//                 className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-sm
//                   ${isRecording
//                     ? "bg-red-600 text-white animate-pulse shadow-lg"
//                     : "bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"}`}
//                 disabled={isLoading}
//               >
//                 {isRecording ? "Stop Recording" : "Voice Input"}
//               </button>

//               <button
//                 onClick={sendMessage}
//                 disabled={isLoading || !input.trim()}
//                 className={`px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed ${
//                   isLoading ? "animate-pulse" : ""
//                 }`}
//               >
//                 {isLoading ? "Sending..." : "Send Answer"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useEffect, useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../components/Home/HomeComponents/Navbar.jsx";
import toast, { Toaster } from "react-hot-toast";
import api_endpoints from '../utils/data.js';

/* ──────────────────────────────────────────────── */
/* Speech Recognition & Synthesis Setup */
/* ──────────────────────────────────────────────── */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

/* ──────────────────────────────────────────────── */
/* System Prompt */
/* ──────────────────────────────────────────────── */
const INTERVIEW_SYSTEM_PROMPT = `
You are a strict, professional, senior interviewer with 15+ years of experience.
You conduct realistic technical / behavioral mock interviews.
Rules you MUST follow:
- Ask ONE question at a time. Wait for the user's full answer.
- Do NOT give feedback, hints, or commentary until the interview ends.
- Use realistic follow-up questions if the answer is incomplete, vague or wrong.
- Cover technical questions, behavioral questions, and problem-solving.
- Keep tone professional, encouraging but challenging.
- After 8–12 questions (decide based on depth), end the interview.
- When you decide to end: Output ONLY valid JSON and nothing else.
`;

export default function MockInterview() {
  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [techStack, setTechStack] = useState("React, JavaScript, Tailwind");
  const [experience, setExperience] = useState("2–4 years");
  const [interviewActive, setInterviewActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState(null);

  /* Voice State */
  const [isRecording, setIsRecording] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(true); // Toggle for interviewer voice
  const recognitionRef = useRef(null);
  const chatRef = useRef(null);

  const resetInterview = () => {
    setInterviewActive(false);
    setMessages([]);
    setInput("");
    setChatSession(null);
    setIsRecording(false);
    if (synth.speaking) synth.cancel(); // Stop any ongoing speech
  };

  /* ──────────────────────────────────────────────── */
  /* Voice Input Toggle (User speaking) */
  /* ──────────────────────────────────────────────── */
  const toggleVoiceInput = () => {
    if (!SpeechRecognition) {
      toast.error("Speech Recognition not supported in this browser");
      return;
    }

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput((prev) => (prev ? prev + " " + transcript : transcript));
      };

      recognition.onend = () => setIsRecording(false);
      recognition.onerror = () => setIsRecording(false);

      recognitionRef.current = recognition;
    }

    if (!isRecording) {
      recognitionRef.current.start();
      setIsRecording(true);
    } else {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  /* ──────────────────────────────────────────────── */
  /* Auto-speak Interviewer messages */
  /* ──────────────────────────────────────────────── */
  const speak = (text) => {
    if (!autoSpeak || !synth) return;

    // Cancel any ongoing speech
    if (synth.speaking) synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95; // slightly slower for clarity
    utterance.pitch = 1.0;
    utterance.volume = 0.9;

    // Choose a natural-sounding voice if available
    const voices = synth.getVoices();
    const naturalVoice = voices.find(
      (v) => v.name.includes("Google") || v.name.includes("Microsoft")
    ) || voices[0];
    if (naturalVoice) utterance.voice = naturalVoice;

    synth.speak(utterance);
  };

  /* ──────────────────────────────────────────────── */
  /* Start Interview */
  /* ──────────────────────────────────────────────── */
  const startInterview = async () => {
    setInterviewActive(true);
    setMessages([]);
    setIsLoading(true);

    try {
      const keyRes = await fetch(`${api_endpoints}/gemini-key`);
      const keyData = await keyRes.json();

      if (!keyData.geminiKey) {
        throw new Error("Gemini API key not received from backend");
      }

      const genAI = new GoogleGenerativeAI(keyData.geminiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        systemInstruction: INTERVIEW_SYSTEM_PROMPT,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1000,
        },
      });

      const prompt = `
Start a mock interview.
Job Role: ${jobRole}
Tech Stack: ${techStack}
Experience: ${experience}
Begin with a short welcome + first question.
      `;

      const chat = model.startChat();
      const res = await chat.sendMessage(prompt);

      const firstMessage = res.response.text();
      setMessages([{ role: "assistant", content: firstMessage }]);
      setChatSession(chat);

      // Speak the first message
      speak(firstMessage);
    } catch (err) {
      toast.error(`Error starting interview: ${err.message}`);
      setMessages([{ role: "assistant", content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  /* ──────────────────────────────────────────────── */
  /* Send Answer */
  /* ──────────────────────────────────────────────── */
  const sendMessage = async () => {
    if (!input.trim() || isLoading || !chatSession) return;

    const userInput = input.trim();
    setMessages((m) => [...m, { role: "user", content: userInput }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await chatSession.sendMessage(userInput);
      let text = res.response.text();

      // Handle interview end (JSON output)
      if (text.includes('"action": "end_interview"')) {
        let json;
        try {
          json = JSON.parse(text);
        } catch {
          json = {};
        }

        text = `
**Interview Ended!**
**Score:** ${json.overall_score || "?"} / 10
**Strengths:**
${(json.strengths || []).map((s) => `- ${s}`).join("\n") || "- None"}
**Weaknesses:**
${(json.weaknesses || []).map((w) => `- ${w}`).join("\n") || "- None"}
**Feedback:**
${json.detailed_feedback || "No feedback provided"}
**Improvement Tips:**
${(json.improvement_tips || []).map((t) => `- ${t}`).join("\n") || "- None"}
        `;

        toast.success("Mock interview completed!", {
          duration: 6000,
          position: "top-center",
        });
      }

      setMessages((m) => [...m, { role: "assistant", content: text }]);

      // Speak the interviewer's response
      speak(text);
    } catch (err) {
      toast.error(`Error: ${err.message}`);
      setMessages((m) => [
        ...m,
        { role: "assistant", content: `Error: ${err.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /* Auto-scroll to bottom on new messages */
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    if (messages.length > prevMessagesLength.current) {
      chatRef.current?.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    prevMessagesLength.current = messages.length;
  }, [messages]);

  /* ──────────────────────────────────────────────── */
  /* UI */
  /* ──────────────────────────────────────────────── */
  if (!interviewActive) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
          <div className="w-full max-w-lg px-6">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4">
                AI Mock Interview
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Practice real interviews with Google Gemini
              </p>
            </div>

            <div className="space-y-5">
              <input
                className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                placeholder="Job Role (e.g. Frontend Developer)"
              />
              <input
                className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
                placeholder="Tech Stack (e.g. React, Tailwind, TypeScript)"
              />
              <input
                className="w-full p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200/70 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Experience Level (e.g. 2–4 years)"
              />

              <button
                onClick={startInterview}
                disabled={isLoading}
                className={`w-full py-4 text-xl font-bold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105
                  ${isLoading 
                    ? "bg-zinc-400 text-zinc-600 cursor-not-allowed" 
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"}`}
              >
                {isLoading ? "Starting Interview..." : "Start Mock Interview"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Toaster position="top-center" />

      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              Mock Interview Session
            </h1>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoSpeak}
                  onChange={(e) => setAutoSpeak(e.target.checked)}
                  className="w-5 h-5 accent-emerald-600"
                />
                <span className="text-zinc-700 dark:text-zinc-300">
                  Auto-speak interviewer
                </span>
              </label>

              <button
                onClick={resetInterview}
                className="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-medium transition duration-200 shadow-sm hover:shadow-md"
              >
                End & Reset
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div
            ref={chatRef}
            className="max-h-[65vh] overflow-y-auto space-y-5 mb-8 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-6 shadow-inner"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl shadow-sm
                    ${msg.role === "user"
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-zinc-900 dark:text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"}`}
                >
                  <strong className="block mb-1.5 text-base">
                    {msg.role === "user" ? "You" : "Interviewer"}
                  </strong>
                  <div className="whitespace-pre-line leading-relaxed text-[15px]">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 dark:bg-zinc-800 px-5 py-3 rounded-2xl">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2.5 h-2.5 bg-zinc-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex flex-col sm:flex-row gap-3 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-sm rounded-2xl border border-zinc-200/70 dark:border-zinc-700/60 p-4 shadow-md">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
              placeholder="Type your answer... (Shift + Enter for new line)"
              className="flex-1 p-4 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 resize-none"
              rows={1}
              disabled={isLoading}
            />

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={toggleVoiceInput}
                className={`px-6 py-4 rounded-xl font-medium transition-all duration-300 shadow-sm
                  ${isRecording
                    ? "bg-red-600 text-white animate-pulse shadow-lg"
                    : "bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"}`}
                disabled={isLoading}
              >
                {isRecording ? "Stop Recording" : "Voice Input"}
              </button>

              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className={`px-8 py-4 bg-emerald-600 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isLoading ? "animate-pulse" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Answer"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}