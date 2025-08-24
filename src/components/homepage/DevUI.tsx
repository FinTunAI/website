
// 'use client';
 
// import React, { useState, useRef, useEffect } from 'react';
// import { Code, Database, Bug, Cpu, Layers, Cloud, Shield } from 'lucide-react'; // you can choose any set
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
// import { Button } from "@/components/ui/button";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
// //
// // Your slides data
// //
// const slides = [
//   {
//     id: 1,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "migrate music repo to Python",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message: "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
//       avatar: "D",
//     },
//   },
//   {
//     id: 2,
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "D",
//       hasChart: true,
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
//     gradient: "from-blue-600 to-blue-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "D",
//     },
//   },
// ];
 
// //
// // Sticky header text
// //
 
// gsap.registerPlugin(ScrollTrigger);
// export function StackedText({ containerRef }) {
//   const textRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef?.current || !textRef.current) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         textRef.current,
//         { opacity: 1 },
//         {
//           opacity: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top center',
//             end: 'bottom center',
//             scrub: true,
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, [containerRef]);

//   return (
//     <h1
//       ref={textRef}
//       className="
//         sticky top-40   
//         text-4xl md:text-6xl  text-center text-black/90
//          pointer-events-none max-w-xl mx-auto
//       "
//     >
//       Able to work
// with hundreds of tools
//     </h1>
//   );
// }

// function GridCards({ triggerRef, revealed }) {
//   const icons = [
//     <Code className="w-12 h-12" />,
//     <Database className="w-12 h-12" />,
//     <Bug className="w-12 h-12" />,
//     <Cpu className="w-12 h-12" />,
//     <Layers className="w-12 h-12" />,
//     <Cloud className="w-12 h-12" />,
//     <Shield className="w-12 h-12" />,
//   ];
//    const containerRef = useRef(null);
//   return (
//     <div  ref={containerRef} className="relative z-10 pt-40 min-h-[120vh] bg-white">
//      <StackedText containerRef={containerRef} />
//       <div className="grid grid-cols-7 items-start pt-32 px-4 gap-2 relative">
//         {Array.from({ length: 7 }).map((_, colIdx) => {
//           const isSwapColumn = colIdx === 2 || colIdx === 3 || colIdx === 4;
 
//           return (
//             <div
//               key={colIdx}
//               className={`relative flex flex-col gap-2 ${
//                 [2, 4].includes(colIdx)
//                   ? 'mt-100'
//                   : [1, 5].includes(colIdx)
//                   ? 'mt-60'
//                   : [3].includes(colIdx)
//                   ? 'mt-94'
//                   : ''
//               }`}
//             >
//               {isSwapColumn ? (
//                 <>
//                   <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {icons[colIdx]}
//                   </div>
//                   {!revealed && (
//                     <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
//                       bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                       {icons[colIdx]}
//                     </div>
//                   )}
//                   {colIdx === 3 && (
//                     <div ref={triggerRef} className="h-[50px] bg-transparent" />
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {icons[colIdx]}
//                   </div>
//                   <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {icons[colIdx]}
//                   </div>
//                   <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {icons[colIdx]}
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
 
// //
// // The overlay with 2 modes: blank scroll-expanding vs interactive slider
// //
// function StackedOverlay({ revealed }) {
//   const { scrollYProgress } = useScroll();
//   const [pastThreshold, setPastThreshold] = useState(false);
//   const [hovered, setHovered] = useState(null);
 
//   useEffect(() => {
//     return scrollYProgress.onChange((v) => {
//       setPastThreshold(v > 0.7);
//     });
//   }, [scrollYProgress]);
 
//   // Scroll-driven transforms for the basic overlay
//   const animatedWidth = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['30vw', '30vw', '80vw', '90vw'])
// const animatedHeight = useTransform(
//   scrollYProgress,
//   [0.2, 0.8],
//   ['30vh', '50vh']
// );
//   const sideWidth = useTransform(scrollYProgress, [0.2, 0.8], ['200px', '20vw']);
//   const centerWidth = useTransform(scrollYProgress, [0.2, 0.8], ['200px', '80vw']);
//   const sideHeight = useTransform(scrollYProgress, [0.2, 0.8], ['30vh', '50vh']);
//   const centerHeight = useTransform(scrollYProgress, [0.2, 0.8], ['30vh', '50vh']);
 
//   return (
//     <AnimatePresence>
//       {revealed && (
//           <div className="relative bg-white" style={{ height: '150vh' }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 30 }}
//           transition={{ duration: 0.4, ease: 'easeOut' }}
//             style={{
//     width: animatedWidth,
//     height: animatedHeight,
//   }}
//           className="sticky  top-40 left-0 right-0 z-50 flex justify-center mx-auto gap-2 md:gap-4 lg:gap-6 pointer-events-auto"
//         >
//           {pastThreshold ? (
//             slides.map((slide, index) => {
//               const isHovered = hovered === index || (hovered === null && index === 1);
 
//               return (
//                 <div
//                   key={slide.id}
//                   className={`
//                     bg-gradient-to-r ${slide.gradient}
//                     rounded-2xl
//                     transition-all duration-500 ease-in-out
//                     cursor-pointer
//                     overflow-hidden
//                     flex-shrink-0
//                     flex flex-col
//                     ${isHovered ? "flex-[3]" : "flex-[1]"}
//                   `}
//                   onMouseEnter={() => setHovered(index)}
//                   onMouseLeave={() => setHovered(null)}
//                 >
//                   {isHovered ? (
//                     <div className="p-6 flex flex-col justify-between h-full">
//                       <div>
//                         <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
//                         <ul className="space-y-1">
//                           {slide.items.map((item, i) => (
//                             <li key={i} className="text-white/90 text-base flex items-center space-x-2">
//                               <span className="w-2 h-2 bg-white rounded-full inline-block" />
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
 
//                       <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
//                         <div className="flex items-center justify-between mb-2">
//                           <h3 className="font-medium text-sm text-gray-900">
//                             {slide.placeholder.title}
//                           </h3>
//                         </div>
 
//                         <div className="space-y-2">
//                           <div className="flex items-start space-x-2">
//                             <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                               {slide.placeholder.avatar}
//                             </div>
//                             <div className="flex-1">
//                               <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                                 <span>{slide.placeholder.user}</span>
//                                 <span>{slide.placeholder.time}</span>
//                               </div>
//                               <p className="text-sm text-gray-700 leading-relaxed">
//                                 {slide.placeholder.message}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                         <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm">
//                           Start a new conversation with Devin
//                         </Button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center h-full">
//                       <h2 className="text-white text-lg font-light px-2 text-center">
//                         {slide.title}
//                       </h2>
//                     </div>
//                   )}
//                 </div>
//               )
//             })
//           ) : (
//             <>
//              <>
//   <motion.div
//     style={{ width: sideWidth, height: sideHeight }}
//     className="group flex items-center justify-center border border-white rounded-md shadow-lg
//       bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//   >
//     <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//   </motion.div>
 
//   <motion.div
//     style={{ width: centerWidth, height: centerHeight }}
//     className="group flex items-center justify-center border border-white rounded-md shadow-lg
//       bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//   >
//     <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//   </motion.div>
 
//   <motion.div
//     style={{ width: sideWidth, height: sideHeight }}
//     className="group flex items-center justify-center border border-white rounded-md shadow-lg
//       bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//   >
//     <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//   </motion.div>
// </>
 
//             </>
//           )}
//         </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
// }
 
// //
// // Main Page
// //
// export default function DevinUIPreview() {
//   const [revealed, setRevealed] = useState(false);
//   const triggerRef = useRef(null);
 
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!triggerRef.current) return;
//       const triggerTop = triggerRef.current.getBoundingClientRect().top;
//       const triggerGlobalTop = window.scrollY + triggerTop;
 
//       if (window.scrollY + window.innerHeight / 2 > triggerGlobalTop) {
//         setRevealed(true);
//       } else {
//         setRevealed(false);
//       }
//     };
 
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
 
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
 
//   return (
//     <>
//     <div className="relative bg-white ">
//       <GridCards triggerRef={triggerRef} revealed={revealed} />
//       <StackedOverlay revealed={revealed} />
//     </div>
 
//     </>
//   );
// }
 

// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Code, Database, Bug, Cpu, Layers, Cloud, Shield } from "lucide-react"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useMemo } from 'react';

// // Reordered slides data to match the requested order
// const slides = [
//   {
//     id: 1,
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "N",
//       hasChart: true,
//     },
//   },
//   {
//     id: 2,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-purple-500 to-blue-400",
//     placeholder: {
//       title: "migrate music repo to Python",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message:
//         "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
//       avatar: "D",
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
//     gradient: "from-blue-600 to-indigo-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "N",
//     },
//   },
// ]

// // Sticky header text
// gsap.registerPlugin(ScrollTrigger)

// export function StackedText({ containerRef }) {
//   const textRef = useRef(null)

//   useEffect(() => {
//     if (!containerRef?.current || !textRef.current) return

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         textRef.current,
//         { opacity: 1 },
//         {
//           opacity: 0,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//           },
//         },
//       )
//     })

//     return () => ctx.revert()
//   }, [containerRef])

//   return (
//     <h1
//       ref={textRef}
//       className="
//         sticky top-40 
//         text-4xl md:text-6xl text-center text-black/90 
//         pointer-events-none max-w-xl mx-auto
//       "
//     >
//       Tools we work with
//     </h1>
//   )
// }

// function GridCards({ triggerRef, revealed }) {
//   const imageUrls = [
//   "images/ibm.png",
//   "images/microsoft.png", 
//   "images/oracle.png",
//   "images/react.png",
//   "images/SAP.png",
//   "images/Sun_Microsystems.png",
//   "images/typescript.png",
// ];


//   const icons = imageUrls.map((url, index) => (
//   <img 
//     key={index} 
//     src={url} 
//     alt={`Icon ${index + 1}`} 
//     className="w-12 h-12 object-contain" 
//   />
// ));
// const shuffledIcons = useMemo(() => {
//   const shuffled = [...icons];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }, []); 

//   const containerRef = useRef(null)

//   return (
//     <div ref={containerRef} className="relative z-10 pt-40 min-h-[120vh] bg-white">
//       <StackedText containerRef={containerRef} />
//       <div className="grid grid-cols-7 items-start pt-32 px-4 gap-2 relative">
//         {Array.from({ length: 7 }).map((_, colIdx) => {
//           const isSwapColumn = colIdx === 2 || colIdx === 3 || colIdx === 4
//           return (
           
//             <div
//   key={colIdx}
//   className={`relative flex flex-col gap-2 ${
//     [2, 4].includes(colIdx)
//       ? "mt-100"
//       : [1, 5].includes(colIdx)
//       ? "mt-60"
//       : [3].includes(colIdx)
//       ? "mt-94"
//       : ""
//   }`}
// >
//   {isSwapColumn ? (
//     <>
//       <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//         {shuffledIcons[colIdx]}
//       </div>
//       {!revealed && (
//         <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//           {shuffledIcons[(colIdx + 1) % shuffledIcons.length]}
//         </div>
//       )}
//       {colIdx === 3 && <div ref={triggerRef} className="h-[50px] bg-transparent" />}
//     </>
//   ) : (
//     <>
//       <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//         {shuffledIcons[colIdx]}
//       </div>
//       <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//         {shuffledIcons[(colIdx + 2) % shuffledIcons.length]}
//       </div>
//       <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//         {shuffledIcons[(colIdx + 3) % shuffledIcons.length]}
//       </div>
//     </>
//   )}
// </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// // The overlay with 2 modes: blank scroll-expanding vs interactive slider
// function StackedOverlay({ revealed }) {
//   const { scrollYProgress } = useScroll()
//   const [pastThreshold, setPastThreshold] = useState(false)
//   const [hovered, setHovered] = useState(null)

//   useEffect(() => {
//     return scrollYProgress.onChange((v) => {
//       setPastThreshold(v > 0.7)
//     })
//   }, [scrollYProgress])

//   // Scroll-driven transforms for the basic overlay
//   const animatedWidth = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["30vw", "30vw", "80vw", "90vw"])
//   const animatedHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"])
//   const sideWidth = useTransform(scrollYProgress, [0.2, 0.8], ["200px", "20vw"])
//   const centerWidth = useTransform(scrollYProgress, [0.2, 0.8], ["200px", "80vw"])
//   const sideHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"])
//   const centerHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"])

//   return (
//     <AnimatePresence>
//       {revealed && (
//         <div className="relative bg-white" style={{ height: "150vh" }}>
//           <motion.div
//             initial={{ opacity: 0, y: -200, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -200, scale: 0.8 }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//               type: "spring",
//               stiffness: 100,
//               damping: 15,
//             }}
//             style={{
//               width: animatedWidth,
//               height: animatedHeight,
//             }}
//             className=" top-80 left-0 right-0 z-50 flex justify-center mx-auto gap-2 md:gap-4 lg:gap-6 pointer-events-auto"
//           >
//             {/* sticky class removed todo */}
//             {pastThreshold ? (
//               slides.map((slide, index) => {
//                 // Default to center card (index 1) being expanded
//                 const isHovered = hovered === index || (hovered === null && index === 1)
//                 return (
//                   <motion.div
//                     key={slide.id}
//                     initial={{ opacity: 0, y: -100, scale: 0.9 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{
//                       delay: index * 0.1,
//                       duration: 0.6,
//                       ease: "easeOut",
//                       type: "spring",
//                       stiffness: 120,
//                       damping: 20,
//                     }}
//                     className={`
//                       bg-gradient-to-r ${slide.gradient}
//                       rounded-2xl
//                       transition-all duration-500 ease-in-out
//                       cursor-pointer
//                       overflow-hidden
//                       flex-shrink-0
//                       flex flex-col
//                       ${isHovered ? "flex-[3]" : "flex-[1]"}
//                     `}
//                     onMouseEnter={() => setHovered(index)}
//                     onMouseLeave={() => setHovered(null)}
//                   >
//                     {isHovered ? (
//                       <div className="p-6 flex flex-col justify-between h-full">
//                         <div>
//                           <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
//                           <ul className="space-y-1">
//                             {slide.items.map((item, i) => (
//                               <li key={i} className="text-white/90 text-base flex items-center space-x-2">
//                                 <span className="w-2 h-2 bg-white rounded-full inline-block" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                           </div>
//                           <div className="space-y-2">
//                             <div className="flex items-start space-x-2">
//                               <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                                 {slide.placeholder.avatar}
//                               </div>
//                               <div className="flex-1">
//                                 <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                                   <span>{slide.placeholder.user}</span>
//                                   <span>{slide.placeholder.time}</span>
//                                 </div>
//                                 <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
//                               </div>
//                             </div>
//                           </div>
//                           <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm">
//                             Start a new conversation with Devin
//                           </Button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-center h-full">
//                         <h2 className="text-white text-lg font-light px-2 text-center">{slide.title}</h2>
//                       </div>
//                     )}
//                   </motion.div>
//                 )
//               })
//             ) : (
//               <>
//                 <motion.div
//                   style={{ width: sideWidth, height: sideHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   style={{ width: centerWidth, height: centerHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   style={{ width: sideWidth, height: sideHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg
//                     bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//               </>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main Page
// export default function DevinUIPreview() {
//   const [revealed, setRevealed] = useState(false)
//   const triggerRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!triggerRef.current) return

//       const triggerTop = triggerRef.current.getBoundingClientRect().top
//       const triggerGlobalTop = window.scrollY + triggerTop

//       if (window.scrollY + window.innerHeight / 2 > triggerGlobalTop) {
//         setRevealed(true)
//       } else {
//         setRevealed(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     handleScroll()

//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <>
//       <section data-nav-theme="white" id="devui"  className="relative bg-white">
//         <GridCards triggerRef={triggerRef} revealed={revealed} />
//         <StackedOverlay revealed={revealed} />
//       </section>
//     </>
//   )
// }


// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Code, Database, Bug, Cpu, Layers, Cloud, Shield } from "lucide-react"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { useMemo } from 'react';

// // Reordered slides data to match the requested order
// const slides = [
//   {
//     id: 1,
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "N",
//       hasChart: true,
//     },
//   },
//   {
//     id: 2,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-purple-500 to-blue-400",
//     placeholder: {
//       title: "migrate music repo to Python",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message:
//         "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
//       avatar: "D",
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
//     gradient: "from-blue-600 to-indigo-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "N",
//     },
//   },
// ]

// // Sticky header text
// export function StackedText({ containerRef }) {
//   const textRef = useRef(null)

//   return (
//     <h1
//       ref={textRef}
//       className="
//         sticky top-20 md:top-40 
//         text-2xl md:text-4xl lg:text-6xl text-center text-black/90 
//         pointer-events-none max-w-xl mx-auto px-4
//       "
//     >
//       Tools we work with
//     </h1>
//   )
// }
// // sales force text stack
// function GridCards({ triggerRef, revealed }) {
//   // const imageUrls = [
//   //   "images/ibm.png",
//   //   "images/microsoft.png", 
//   //   "images/oracle.png",
//   //   "images/react.png",
//   //   "images/SAP.png",
//   //   "images/Sun_Microsystems.png",
//   //   "images/typescript.png",
//   // ];
//   const labels = [
//   "Salesforce CRM",
//   "Sales Cloud",
//   "Service Cloud",
//   "Marketing Cloud",
//   "Commerce Cloud",
//   "Experience Cloud",
//   "Financial Services Cloud",
//   "Health Cloud",
//   "Einstein AI",
//   "Tableau",
//   "MuleSoft",
//   "Slack",
//   "Flow",
//   "Apex",
//   "Lightning Web Components",
//   "AppExchange",
//   "Data Cloud",
//   "OmniStudio",
// ];


//   const icons = imageUrls.map((url, index) => (
//     <img 
//       key={index} 
//       src={url} 
//       alt={`Icon ${index + 1}`} 
//       className="w-8 h-8 md:w-12 md:h-12 object-contain" 
//     />
//   ));

//   const shuffledIcons = useMemo(() => {
//     const shuffled = [...icons];
//     for (let i = shuffled.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//     }
//     return shuffled;
//   }, []); 

//   const containerRef = useRef(null)
// "use client";
// import React, { useState, useRef, useEffect, useMemo } from "react";
// import { Code, Bug, Cpu } from "lucide-react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { Button } from "@/components/ui/button";

// // Sticky header text
// export function StackedText({ containerRef }) {
//   const textRef = useRef(null);
//   return (
//     <h1
//       ref={textRef}
//       className="
//         sticky top-20 md:top-40 
//         text-2xl md:text-4xl lg:text-6xl text-center text-black/90 
//         pointer-events-none max-w-xl mx-auto px-4
//       "
//     >
//       Tools we work with
//     </h1>
//   );
// }

// // GridCards with Salesforce labels
// function GridCards({ triggerRef, revealed }) {
//   const containerRef = useRef(null);
//   const labels = [
//    "Salesforce CRM",
//   "Sales Cloud",
//   "Service Cloud",
//   "Marketing Cloud",
//   "Commerce Cloud",
//   "Experience Cloud",
//   "Financial Services Cloud",
//   "Health Cloud",
//   "Einstein AI",
//   "Tableau",
//   "MuleSoft",
//   "Slack",
//   "Flow",
//   "Apex",
//   "Lightning Web Components",
//   "AppExchange",
//   "Data Cloud",
//   "OmniStudio"
//   ];

//    const icons = labels.map((label, i) =>
//     <div key={i} className="text-center text-sm md:text-base font-semibold text-gray-700 px-2">
//       {label}
//     </div>
//   );

//   const shuffledIcons = useMemo(() => {
//     const arr = [...icons];
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1))
//       ;[arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//     return arr
//   }, [])

//   return (
//     <div
//       ref={containerRef}
//       className="relative z-10 pt-20 md:pt-40 min-h-[80vh] md:min-h-[120vh] bg-white"
//     >
//       <StackedText containerRef={containerRef} />

//       {/* Mobile Grid */}
//       <div className="block md:hidden grid grid-cols-3 items-start pt-16 px-4 gap-2 relative">
//         {[0, 1, 2].map((colIdx) => (
//           <div key={colIdx} className="relative flex flex-col gap-2">
//             {shuffledIcons.slice(colIdx * 6, (colIdx + 1) * 6).map((icon, idx) => (
//               <div
//                 key={idx}
//                 className="h-[100px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//               >
//                 {icon}
//               </div>
//             ))}
//             {colIdx === 1 && <div ref={triggerRef} className="h-[50px] bg-transparent" />}
//           </div>
//         ))}
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-7 items-start pt-32 px-4 gap-2 relative">
//         {Array.from({ length: 7 }).map((_, colIdx) => {
//           const isSwap = colIdx === 2 || colIdx === 3 || colIdx === 4;
//           return (
//             <div
//               key={colIdx}
//               className={`relative flex flex-col gap-2 ${
//                 colIdx === 2 || colIdx === 4
//                   ? "mt-100"
//                   : colIdx === 1 || colIdx === 5
//                   ? "mt-60"
//                   : colIdx === 3
//                   ? "mt-94"
//                   : ""
//               }`}
//             >
//               {isSwap ? (
//                 <>
//                   <div className="h-[150px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {shuffledIcons[colIdx]}
//                   </div>
//                   {!revealed && (
//                     <div className="h-[300px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                       {shuffledIcons[(colIdx + 1) % shuffledIcons.length]}
//                     </div>
//                   )}
//                   {colIdx === 3 && <div ref={triggerRef} className="h-[50px] bg-transparent" />}
//                 </>
//               ) : (
//                 <>
//                   <div className="h-[300px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {shuffledIcons[colIdx]}
//                   </div>
//                   <div className="h-[150px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {shuffledIcons[(colIdx + 2) % shuffledIcons.length]}
//                   </div>
//                   <div className="h-[300px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                     {shuffledIcons[(colIdx + 3) % shuffledIcons.length]}
//                   </div>
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // ---------- Slider Data ----------
// const slides = [
//   {
//     id: 1,
//     title: "Data Engineering + Analysis",
//     items: [
//       "Data warehouse migrations",
//       "ETL development",
//       "Data cleaning and preprocessing",
//     ],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "N",
//       hasChart: true,
//     },
//   },
//   {
//     id: 2,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-purple-500 to-blue-400",
//     placeholder: {
//       title: "migrate music repo to Python",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message:
//         "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
//       avatar: "D",
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
//     gradient: "from-blue-600 to-indigo-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message:
//         "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "N",
//     },
//   },
// ];

// // Mob slider under grid
// function MobileVerticalSlider({ revealed }) {
//   if (!revealed) return null;
//   return (
//     <div className="block md:hidden relative bg-white pb-20">
//       <div className="space-y-4 px-4">
//         {slides.map((slide, idx) => (
//           <motion.div
//             key={slide.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.2, duration: 0.6 }}
//             className={`bg-gradient-to-r ${slide.gradient} rounded-2xl overflow-hidden transition-all duration-300`}
//           >
//             <div className="p-6">
//               <h2 className="text-xl font-light text-white mb-4">{slide.title}</h2>
//               <ul className="space-y-2 mb-6">
//                 {slide.items.map((item, i) => (
//                   <li key={i} className="text-white/90 text-sm flex items-center space-x-2">
//                     <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="bg-white rounded-lg shadow-lg p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-2">
//                     <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                       {slide.placeholder.avatar}
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                         <span>{slide.placeholder.user}</span>
//                         <span>{slide.placeholder.time}</span>
//                       </div>
//                       <p className="text-sm text-gray-700 leading-relaxed">
//                         {slide.placeholder.message}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                   Start conversation with nCoder.ai
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function DesktopOverlay({ revealed }) {
//   const { scrollYProgress } = useScroll();
//   const [pastThreshold, setPastThreshold] = useState(false);
//   const [hovered, setHovered] = useState(null);

//   useEffect(() => scrollYProgress.onChange((v) => setPastThreshold(v > 0.7)), [scrollYProgress]);

//   const animatedWidth = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["30vw", "30vw", "80vw", "90vw"]);
//   const animatedHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"]);
//   const sideWidth = useTransform(scrollYProgress, [0.2, 0.8], ["200px", "20vw"]);
//   const centerWidth = useTransform(scrollYProgress, [0.2, 0.8], ["200px", "80vw"]);
//   const sideHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"]);
//   const centerHeight = useTransform(scrollYProgress, [0.2, 0.8], ["30vh", "50vh"]);

//   return (
//     <AnimatePresence>
//       {revealed && (
//         <div className="hidden md:block relative bg-white" style={{ height: "150vh" }}>
//           <motion.div
//             initial={{ opacity: 0, y: -200, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -200, scale: 0.8 }}
//             transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100, damping: 15 }}
//             style={{ width: animatedWidth, height: animatedHeight }}
//             className="top-80 left-0 right-0 z-50 flex justify-center mx-auto gap-2 md:gap-4 lg:gap-6 pointer-events-auto"
//           >
//             {pastThreshold ? (
//               slides.map((slide, idx) => {
//                 const isHovered = hovered === idx || (hovered === null && idx === 1);
//                 return (
//                   <motion.div
//                     key={slide.id}
//                     initial={{ opacity: 0, y: -100, scale: 0.9 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     transition={{
//                       delay: idx * 0.1,
//                       duration: 0.6,
//                       ease: "easeOut",
//                       type: "spring",
//                       stiffness: 120,
//                       damping: 20,
//                     }}
//                     className={`bg-gradient-to-r ${slide.gradient} rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0 flex flex-col ${
//                       isHovered ? "flex-[3]" : "flex-[1]"
//                     }`}
//                     onMouseEnter={() => setHovered(idx)}
//                     onMouseLeave={() => setHovered(null)}
//                   >
//                     {isHovered ? (
//                       <div className="p-6 flex flex-col justify-between h-full">
//                         <div>
//                           <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
//                           <ul className="space-y-1">
//                             {slide.items.map((item, i) => (
//                               <li key={i} className="text-white/90 text-base flex items-center space-x-2">
//                                 <span className="w-2 h-2 bg-white rounded-full inline-block" />
//                                 <span>{item}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                         <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
//                           <div className="flex items-center justify-between mb-2">
//                             <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                           </div>
//                           <div className="space-y-2">
//                             <div className="flex items-start space-x-2">
//                               <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                                 {slide.placeholder.avatar}
//                               </div>
//                               <div className="flex-1">
//                                 <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                                   <span>{slide.placeholder.user}</span>
//                                   <span>{slide.placeholder.time}</span>
//                                 </div>
//                                 <p className="text-sm text-gray-700 leading-relaxed">
//                                   {slide.placeholder.message}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                             Start conversation with nCoder.ai
//                           </Button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex items-center justify-center h-full">
//                         <h2 className="text-white text-lg font-light px-2 text-center">{slide.title}</h2>
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })
//             ) : (
//               <>
//                 <motion.div
//                   style={{ width: sideWidth, height: sideHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   style={{ width: centerWidth, height: centerHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   style={{ width: sideWidth, height: sideHeight }}
//                   className="group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//               </>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Main Page Component
// export function MobileResponsiveDevinUI() {
//   const [revealed, setRevealed] = useState(false);
//   const triggerRef = useRef(null);

//   useEffect(() => {
//     const handler = () => {
//       if (!triggerRef.current) return;
//       const top = window.scrollY + triggerRef.current.getBoundingClientRect().top;
//       setRevealed(window.scrollY + window.innerHeight / 2 > top);
//     };
//     window.addEventListener("scroll", handler, { passive: true });
//     handler();
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   return (
//     <section data-nav-theme="white" id="devui" className="relative bg-white">
//       <GridCards triggerRef={triggerRef} revealed={revealed} />
//       <MobileVerticalSlider revealed={revealed} />
//       <DesktopOverlay revealed={revealed} />
//     </section>
//   );
// }


// "use client"

// import { useState, useRef, useEffect, useMemo } from "react"
// import { Code, Bug, Cpu } from "lucide-react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"

// // Sticky header text
// export function StackedText({ containerRef }) {
//   const textRef = useRef(null)

//   return (
//     <h1
//       ref={textRef}
//       className="
//         sticky top-20 md:top-40 
//         text-2xl md:text-4xl lg:text-6xl text-center text-black/90 
//         pointer-events-none max-w-xl mx-auto px-4
//       "
//     >
//       Our Domain Expertise
//     </h1>
//   )
// }

// // GridCards with Salesforce labels
// function GridCards({ triggerRef, revealed }) {
//   const containerRef = useRef(null)

//   const labels = [
//     "List Apex",
//     "Lightning Web Components",
//     "Service Cloud",
//     "Marketing Cloud",
//     "Commerce Cloud",
//     "Experience Cloud",
//     "Financial Services Cloud",
//     "Health Cloud",
//     "Einstein AI",
//     "Tableau",
//     "MuleSoft",
//     "Slack",
//     "Flow",
//     "Apex",
//     "Lightning Web Components",
//     "AppExchange",
//     "Data Cloud",
//     "OmniStudio",
//   ]

//   const shuffledLabels = useMemo(() => {
//     const arr = [...labels]
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1))
//       ;[arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//     return arr
//   }, [])

//   // Create cards without repetition
//   const createCard = (label, index) => (
//     <div
//       key={`${label}-${index}`}
//       className="h-[100px] md:h-[150px] group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//     >
//       <div className="text-center text-xs md:text-sm font-semibold text-gray-700 group-hover:text-white px-2 transition-colors duration-500">
//         {label}
//       </div>
//     </div>
//   )

//   return (
//     <div ref={containerRef} className="relative z-10 pt-20 md:pt-40 min-h-[80vh] md:min-h-[120vh] bg-white pb-20">
//       <StackedText containerRef={containerRef} />

//       {/* Mobile Grid */}
//       <div className="block md:hidden grid grid-cols-3 items-start pt-16 px-2 gap-1 relative w-full">
//         {[0, 1, 2].map((colIdx) => (
//           <div key={colIdx} className="relative flex flex-col gap-2">
//             {shuffledLabels
//               .slice(colIdx * 6, (colIdx + 1) * 6)
//               .map((label, idx) => createCard(label, `mobile-${colIdx}-${idx}`))}
//             {colIdx === 1 && <div ref={triggerRef} className="h-[50px] bg-transparent" />}
//           </div>
//         ))}
//       </div>

//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-7 items-start pt-32 px-2 gap-1 relative w-full">
//         {Array.from({ length: 7 }).map((_, colIdx) => {
//           const startIdx = colIdx * 2
//           const endIdx = Math.min(startIdx + 3, shuffledLabels.length)
//           const columnLabels = shuffledLabels.slice(startIdx, endIdx)

//           // Add padding to ensure we have enough cards
//           while (columnLabels.length < 3) {
//             columnLabels.push(shuffledLabels[columnLabels.length % shuffledLabels.length])
//           }

//           return (
//             <div
//               key={colIdx}
//               className={`relative flex flex-col gap-2 ${
//                 colIdx === 2 || colIdx === 4
//                   ? "mt-24"
//                   : colIdx === 1 || colIdx === 5
//                     ? "mt-16"
//                     : colIdx === 3
//                       ? "mt-20"
//                       : ""
//               }`}
//             >
//               {columnLabels.map((label, idx) => {
//                 const height = idx === 1 ? "h-[200px]" : "h-[150px]"
//                 return (
//                   <div
//                     key={`desktop-${colIdx}-${idx}`}
//                     className={`${height} group flex items-center justify-center text-center border border-white rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500`}
//                   >
//                     <div className="text-center text-sm font-semibold text-gray-700 group-hover:text-white px-2 transition-colors duration-500">
//                       {label}
//                     </div>
//                   </div>
//                 )
//               })}
//               {colIdx === 3 && <div ref={triggerRef} className="h-[50px] bg-transparent" />}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// // ---------- Slider Data ----------
// const slides = [
//   {
//     id: 1,
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "N",
//       hasChart: true,
//     },
//   },
//   {
//     id: 2,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-purple-500 to-blue-400",
//     placeholder: {
//       title: "Migrate Apex Trigger Frameworks to an Efficient Asynchronous Model",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message:
//         "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
//       avatar: "D",
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
//     gradient: "from-blue-600 to-indigo-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "N",
//     },
//   },
// ]

// // Mobile slider under grid
// function MobileVerticalSlider({ revealed }) {
//   if (!revealed) return null

//   return (
//     <div className="block md:hidden relative bg-white pb-20 z-20">
//       <div className="space-y-4 px-4">
//         {slides.map((slide, idx) => (
//           <motion.div
//             key={slide.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.2, duration: 0.6 }}
//             className={`bg-gradient-to-r ${slide.gradient} rounded-2xl overflow-hidden transition-all duration-300`}
//           >
//             <div className="p-6">
//               <h2 className="text-xl font-light text-white mb-4">{slide.title}</h2>
//               <ul className="space-y-2 mb-6">
//                 {slide.items.map((item, i) => (
//                   <li key={i} className="text-white/90 text-sm flex items-center space-x-2">
//                     <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="bg-white rounded-lg shadow-lg p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-2">
//                     <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                       {slide.placeholder.avatar}
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                         <span>{slide.placeholder.user}</span>
//                         <span>{slide.placeholder.time}</span>
//                       </div>
//                       <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                   Start conversation with nCoder.ai
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function DesktopOverlay({ revealed, scrollProgress }) {
//   const [hovered, setHovered] = useState(null)

//   // Show slides when revealed and scrolled enough
//   const showSlides = revealed && scrollProgress > 0.3

//   return (
//     <AnimatePresence>
//       {revealed && (
//         <div className="hidden md:block relative bg-white pb-20 min-h-screen">
//           <div className="sticky top-20 left-0 right-0 z-30 flex justify-center mx-auto gap-2 md:gap-4 lg:gap-6 pointer-events-auto h-[60vh]">
//             {showSlides ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="flex gap-4 w-full max-w-6xl"
//               >
//                 {slides.map((slide, idx) => {
//                   const isHovered = hovered === idx || (hovered === null && idx === 1)
//                   return (
//                     <motion.div
//                       key={slide.id}
//                       initial={{ opacity: 0, y: -50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{
//                         delay: idx * 0.1,
//                         duration: 0.6,
//                         ease: "easeOut",
//                       }}
//                       className={`bg-gradient-to-r ${slide.gradient} rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0 flex flex-col ${
//                         isHovered ? "flex-[3]" : "flex-[1]"
//                       } min-h-[400px]`}
//                       onMouseEnter={() => setHovered(idx)}
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       {isHovered ? (
//                         <div className="p-6 flex flex-col justify-between h-full">
//                           <div>
//                             <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
//                             <ul className="space-y-1">
//                               {slide.items.map((item, i) => (
//                                 <li key={i} className="text-white/90 text-base flex items-center space-x-2">
//                                   <span className="w-2 h-2 bg-white rounded-full inline-block" />
//                                   <span>{item}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
//                             <div className="flex items-center justify-between mb-2">
//                               <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                             </div>
//                             <div className="space-y-2">
//                               <div className="flex items-start space-x-2">
//                                 <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                                   {slide.placeholder.avatar}
//                                 </div>
//                                 <div className="flex-1">
//                                   <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                                     <span>{slide.placeholder.user}</span>
//                                     <span>{slide.placeholder.time}</span>
//                                   </div>
//                                   <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                               Start conversation with nCoder.ai
//                             </Button>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center h-full">
//                           <h2 className="text-white text-lg font-light px-2 text-center">{slide.title}</h2>
//                         </div>
//                       )}
//                     </motion.div>
//                   )
//                 })}
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="flex gap-4 justify-center items-center"
//               >
//                 <div className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                   <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </div>
//                 <div className="w-64 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                   <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </div>
//                 <div className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
//                   <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main Page Component
// export function MobileResponsiveDevinUI() {
//   const [revealed, setRevealed] = useState(false)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const triggerRef = useRef(null)

//   useEffect(() => {
//     const handler = () => {
//       if (!triggerRef.current) return

//       const rect = triggerRef.current.getBoundingClientRect()
//       const windowHeight = window.innerHeight
//       const documentHeight = document.documentElement.scrollHeight
//       const scrollTop = window.scrollY

//       // Calculate scroll progress
//       const progress = scrollTop / (documentHeight - windowHeight)
//       setScrollProgress(progress)

//       // Check if trigger is revealed
//       const triggerTop = scrollTop + rect.top
//       const isRevealed = scrollTop + windowHeight / 2 > triggerTop
//       setRevealed(isRevealed)
//     }

//     window.addEventListener("scroll", handler, { passive: true })
//     handler()
//     return () => window.removeEventListener("scroll", handler)
//   }, [])

//   return (
//     <section data-nav-theme="white" id="devui" className="relative bg-white">
//       <GridCards triggerRef={triggerRef} revealed={revealed} />
//       <MobileVerticalSlider revealed={revealed} />
//       <DesktopOverlay revealed={revealed} scrollProgress={scrollProgress} />
//     </section>
//   )
// }

// "use client"

// import { useState, useRef, useEffect, useMemo } from "react"
// import { Code, Bug, Cpu } from 'lucide-react'
// import { motion, AnimatePresence } from "framer-motion"
// import { Button } from "@/components/ui/button"

// // Sticky header text
// export function StackedText({ isVisible }: { isVisible: boolean }) {
//   return (
//     <motion.h1
//       initial={{ opacity: 1, y: 0 }}
//       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="
//         sticky top-20 md:top-40
//         text-2xl md:text-4xl lg:text-6xl text-center text-black/90
//         pointer-events-none max-w-xl mx-auto px-4 z-30 {/* Added z-30 here */}
//       "
//     >
//       Our Domain Expertise
//     </motion.h1>
//   )
// }

// // Labels for the 7 columns
// const columnLabels = [
//   "Custom Code & Logic",
//   "Data & Integration",
//   "Low-Code & Automation",
//   "Core Cloud Products",
//   "LLMs",
//   "Fine-tuning",
//   "Agentic Framework",
// ]

// // Cards content per column
// const cardsPerColumn: Record<string, string[]> = {
//   "Custom Code & Logic": ["Apex", "Lightning Web Components", "Aura Components", "Visualforce"],
//   "Data & Integration": ["MuleSoft", "Tableau", "Data Cloud", "Salesforce Connect"],
//   "Low-Code & Automation": ["Flow", "OmniStudio", "Einstein AI", "Process Builder"],
//   "Core Cloud Products": ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud"],
//   "LLMs": ["OpenAI", "Claude", "Gemini", "Olama"],
//   "Fine-tuning": ["RLHF", "Evaluation", "Custom Training", "Prompt Engineering"],
//   "Agentic Framework": ["In-built Agents", "Build Agents", "Automation Scripts", "Bot Framework"],
// }

// function GridCards({ triggerRef, revealed }: { triggerRef: React.RefObject<HTMLDivElement>; revealed: boolean }) {
//   return (
//     <div ref={triggerRef} className="relative z-10 pt-20 md:pt-40 min-h-[80vh] md:min-h-[120vh] bg-black pb-20">
//       {/* Desktop Grid */}
//       <div className="hidden md:grid grid-cols-7 gap-4 px-6 pt-16">
//         {columnLabels.map((label, colIdx) => (
//           <div key={label} className="flex flex-col gap-4">
//             <h3 className="text-center font-semibold text-lg mb-2">{label}</h3>
//             {cardsPerColumn[label].map((cardText, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={revealed ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: revealed ? (colIdx * 0.05 + idx * 0.03) : 0, duration: 0.5 }}
//                 whileHover={{ scale: 1.03, y: -5 }}
//                 className="h-[120px] flex items-center justify-center text-center border border-gray-300 rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500 cursor-pointer"
//               >
//                 <span className="text-gray-700 font-medium group-hover:text-white px-2">{cardText}</span>
//               </motion.div>
//             ))}
//           </div>
//         ))}
//       </div>
//       {/* Mobile Grid */}
//       <div className="block md:hidden grid grid-cols-2 gap-4 px-4 pt-12">
//         {columnLabels.map((label, colIdx) => (
//           <div key={label} className="flex flex-col gap-2">
//             <h3 className="text-center font-semibold text-base mb-1">{label}</h3>
//             {cardsPerColumn[label].map((cardText, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={revealed ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: revealed ? (colIdx * 0.05 + idx * 0.03) : 0, duration: 0.5 }}
//                 whileHover={{ scale: 1.03, y: -5 }}
//                 className="h-[80px] flex items-center justify-center text-center border border-gray-300 rounded-md shadow-sm bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500 cursor-pointer"
//               >
//                 <span className="text-gray-700 font-medium group-hover:text-white px-2">{cardText}</span>
//               </motion.div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // Slides for the slider below the grid
// const slides = [
//   {
//     id: 1,
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "nCoder.ai",
//       time: "Aug 21, 2024, 7:01 AM",
//       message: "I have completed the requested visualizations",
//       avatar: "N",
//     },
//   },
//   {
//     id: 2,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
//     gradient: "from-purple-500 to-blue-400",
//     placeholder: {
//       title: "Migrate Apex Trigger Frameworks",
//       user: "Dev",
//       time: "Aug 15, 2024, 4:01 PM",
//       message: "Migrate music generation repo from Java 8 to Python 3.11",
//       avatar: "D",
//     },
//   },
//   {
//     id: 3,
//     title: "Bugs + Backlog Work",
//     items: ["Ticket resolution", "CI/CD", "Backlog PR creation"],
//     gradient: "from-blue-600 to-indigo-400",
//     placeholder: {
//       title: "Invalid auto-triage link",
//       user: "nCoder.ai",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Investigating invalid auto-triage link and exceptions.",
//       avatar: "N",
//     },
//   },
// ]

// function MobileVerticalSlider({ revealed }: { revealed: boolean }) {
//   if (!revealed) return null
//   return (
//     <div className="block md:hidden relative bg-black pb-20 z-20">
//       <div className="space-y-4 px-4">
//         {slides.map((slide, idx) => (
//           <motion.div
//             key={slide.id}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: idx * 0.2, duration: 0.6 }}
//             className={`bg-gradient-to-r ${slide.gradient} rounded-2xl overflow-hidden transition-all duration-300`}
//           >
//             <div className="p-6">
//               <h2 className="text-xl font-light text-white mb-4">{slide.title}</h2>
//               <ul className="space-y-2 mb-6">
//                 {slide.items.map((item, i) => (
//                   <li key={i} className="text-white/90 text-sm flex items-center space-x-2">
//                     <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//               <div className="bg-white rounded-lg shadow-lg p-4">
//                 <div className="flex items-center justify-between mb-3">
//                   <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-2">
//                     <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                       {slide.placeholder.avatar}
//                     </div>
//                     <div className="flex-1">
//                       <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                         <span>{slide.placeholder.user}</span>
//                         <span>{slide.placeholder.time}</span>
//                       </div>
//                       <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                   Start conversation with nCoder.ai
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// function DesktopOverlay({ revealed, scrollProgress }: { revealed: boolean; scrollProgress: number }) {
//   const [hovered, setHovered] = useState<number | null>(null)
//   const showSlides = revealed && scrollProgress > 0.3

//   return (
//     <AnimatePresence>
//       {revealed && (
//         <div className="hidden md:block relative bg-black pb-20 min-h-screen">
//           <div className="sticky top-20 left-0 right-0 z-30 flex justify-center mx-auto gap-4 pointer-events-auto h-[60vh] max-w-6xl">
//             {showSlides ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="flex gap-4 w-full"
//               >
//                 {slides.map((slide, idx) => {
//                   const isHovered = hovered === idx || (hovered === null && idx === 1)
//                   return (
//                     <motion.div
//                       key={slide.id}
//                       initial={{ opacity: 0, y: -50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: idx * 0.1, duration: 0.6 }}
//                       className={`bg-gradient-to-r ${slide.gradient} rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0 flex flex-col ${
//                         isHovered ? "flex-[3]" : "flex-[1]"
//                       } min-h-[400px]`}
//                       onMouseEnter={() => setHovered(idx)}
//                       onMouseLeave={() => setHovered(null)}
//                     >
//                       {isHovered ? (
//                         <div className="p-6 flex flex-col justify-between h-full">
//                           <div>
//                             <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
//                             <ul className="space-y-1">
//                               {slide.items.map((item, i) => (
//                                 <li key={i} className="text-white/90 text-base flex items-center space-x-2">
//                                   <span className="w-2 h-2 bg-white rounded-full inline-block" />
//                                   <span>{item}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                           <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
//                             <div className="flex items-center justify-between mb-2">
//                               <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
//                             </div>
//                             <div className="space-y-2">
//                               <div className="flex items-start space-x-2">
//                                 <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
//                                   {slide.placeholder.avatar}
//                                 </div>
//                                 <div className="flex-1">
//                                   <div className="text-xs text-gray-500 mb-1 flex space-x-2">
//                                     <span>{slide.placeholder.user}</span>
//                                     <span>{slide.placeholder.time}</span>
//                                   </div>
//                                   <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
//                               Start conversation with nCoder.ai
//                             </Button>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center h-full">
//                           <h2 className="text-white text-lg font-light px-2 text-center">{slide.title}</h2>
//                         </div>
//                       )}
//                     </motion.div>
//                   )
//                 })}
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="flex gap-4 justify-center items-center"
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.1, duration: 0.5 }}
//                   className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                   className="w-64 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
//                 >
//                   <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
//                 </motion.div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
// }

// // Main Page Component
// export function MobileResponsiveDevinUI() {
//   const [revealed, setRevealed] = useState(false) // For card animations
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true) // For text visibility
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const triggerRef = useRef<HTMLDivElement>(null) // Ref for GridCards section

//   useEffect(() => {
//     const handler = () => {
//       if (!triggerRef.current) return

//       const rect = triggerRef.current.getBoundingClientRect()
//       const windowHeight = window.innerHeight
//       const documentHeight = document.documentElement.scrollHeight
//       const scrollTop = window.scrollY

//       // Calculate scroll progress for the entire document
//       const progress = scrollTop / (documentHeight - windowHeight)
//       setScrollProgress(progress)

//       // Logic for card animations (when GridCards section is in view)
//       const triggerTopAbsolute = scrollTop + rect.top;
//       const isCardsRevealed = scrollTop + windowHeight / 2 > triggerTopAbsolute;
//       setRevealed(isCardsRevealed);

//       // Logic for header text visibility
//       // The stickyTextOffset corresponds to the 'top-20' (80px) or 'top-40' (160px) of the sticky header.
//       const stickyTextOffset = window.innerWidth < 768 ? 80 : 160;
//       // The header should be visible if the top of the GridCards is below the sticky header's position.
//       const shouldHeaderBeVisible = rect.top > stickyTextOffset;
//       setIsHeaderVisible(shouldHeaderBeVisible);
//     }

//     window.addEventListener("scroll", handler, { passive: true })
//     handler() // Call handler once to set initial state
//     return () => window.removeEventListener("scroll", handler)
//   }, [])

//   return (
//     <section data-nav-theme="white" id="devui" className="relative bg-white pt-[120px] md:pt-[180px]"> {/* Added padding-top here */}
//       <StackedText isVisible={isHeaderVisible} />
//       <GridCards triggerRef={triggerRef} revealed={revealed} />
//       <MobileVerticalSlider revealed={revealed} />
//       <DesktopOverlay revealed={revealed} scrollProgress={scrollProgress} />
//     </section>
//   )
// }

"use client"

import { useState, useRef, useEffect } from "react"
import { Code, Bug, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

// Sticky header text
export function StackedText({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.h1
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        sticky top-20 md:top-40
        text-2xl md:text-4xl lg:text-6xl text-center text-white
        pointer-events-none max-w-xl mx-auto px-4 z-30
      "
    >
      Our Domain Expertise
    </motion.h1>
  )
}

// Labels for the 7 columns
const columnLabels = [
  "Custom Code & Logic",
  "Data & Integration",
  "Low-Code & Automation",
  "Core Cloud Products",
  "LLMs",
  "Fine-tuning",
  "Agentic Framework",
]

// Cards content per column
const cardsPerColumn: Record<string, string[]> = {
  "Custom Code & Logic": ["Apex", "Lightning Web Components", "Aura Components", "Visualforce"],
  "Data & Integration": ["MuleSoft", "Tableau", "Data Cloud", "Salesforce Connect"],
  "Low-Code & Automation": ["Flow", "OmniStudio", "Einstein AI", "Process Builder"],
  "Core Cloud Products": ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud"],
  "LLMs": ["OpenAI", "Claude", "Gemini", "Olama"],
  "Fine-tuning": ["RLHF", "Evaluation", "Custom Training", "Prompt Engineering"],
  "Agentic Framework": ["In-built Agents", "Build Agents", "Automation Scripts", "Bot Framework"],
}

function GridCards({ triggerRef, revealed }: { triggerRef: React.RefObject<HTMLDivElement>; revealed: boolean }) {
  return (
    <div ref={triggerRef} className="relative z-10 pt-20 md:pt-40 min-h-[80vh] md:min-h-[120vh] bg-black pb-20">
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-7 gap-4 px-6 pt-16">
        {columnLabels.map((label, colIdx) => (
          <div key={label} className="flex flex-col gap-4">
            <h3 className="text-center font-semibold text-lg mb-2 text-white">{label}</h3>
            {cardsPerColumn[label].map((cardText, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={revealed ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: revealed ? (colIdx * 0.05 + idx * 0.03) : 0, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group h-[120px] flex items-center justify-center text-center border border-gray-300 rounded-md shadow-sm bg-slate-100 hover:bg-blue-600 transition-all duration-500 cursor-pointer"
              >
                <span className="text-gray-700 font-medium group-hover:text-white px-2">{cardText}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      {/* Mobile Grid */}
      <div className="block md:hidden grid grid-cols-2 gap-4 px-4 pt-12">
        {columnLabels.map((label, colIdx) => (
          <div key={label} className="flex flex-col gap-2">
            <h3 className="text-center font-semibold text-base mb-1 text-white">{label}</h3>
            {cardsPerColumn[label].map((cardText, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={revealed ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: revealed ? (colIdx * 0.05 + idx * 0.03) : 0, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group h-[80px] flex items-center justify-center text-center border border-gray-300 rounded-md shadow-sm bg-slate-100 hover:bg-blue-600 transition-all duration-500 cursor-pointer"
              >
                <span className="text-gray-700 font-medium group-hover:text-white px-2">{cardText}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// Slides for the slider below the grid
const slides = [
  {
    id: 1,
    title: "Data Engineering + Analysis",
    items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
    gradient: "from-blue-600 to-blue-700",
    placeholder: {
      title: "Price Visualization + Analysis",
      user: "nCoder.ai",
      time: "Aug 21, 2024, 7:01 AM",
      message: "I have completed the requested visualizations",
      avatar: "N",
    },
  },
  {
    id: 2,
    title: "Code Migration + Refactors",
    items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
    gradient: "from-blue-600 to-blue-700",
    placeholder: {
      title: "Migrate Apex Trigger Frameworks",
      user: "Dev",
      time: "Aug 15, 2024, 4:01 PM",
      message: "Migrate music generation repo from Java 8 to Python 3.11",
      avatar: "D",
    },
  },
  {
    id: 3,
    title: "Bugs + Backlog Work",
    items: ["Ticket resolution", "CI/CD", "Backlog PR creation"],
    gradient: "from-blue-600 to-blue-700",
    placeholder: {
      title: "Invalid auto-triage link",
      user: "nCoder.ai",
      time: "May 28, 2024, 10:23 AM",
      message: "Investigating invalid auto-triage link and exceptions.",
      avatar: "N",
    },
  },
]

function MobileVerticalSlider({ revealed }: { revealed: boolean }) {
  if (!revealed) return null
  return (
    <div className="block md:hidden relative bg-black pb-20 z-20">
      <div className="space-y-4 px-4">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className={`bg-gradient-to-r ${slide.gradient} rounded-2xl overflow-hidden transition-all duration-300`}
          >
            <div className="p-6">
              <h2 className="text-xl font-light text-white mb-4">{slide.title}</h2>
              <ul className="space-y-2 mb-6">
                {slide.items.map((item, i) => (
                  <li key={i} className="text-white/90 text-sm flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
                      {slide.placeholder.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1 flex space-x-2">
                        <span>{slide.placeholder.user}</span>
                        <span>{slide.placeholder.time}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
                  Start conversation with nCoder.ai
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DesktopOverlay({ revealed, scrollProgress }: { revealed: boolean; scrollProgress: number }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const showSlides = revealed && scrollProgress > 0.3

  return (
    <AnimatePresence>
      {revealed && (
        <div className="hidden md:block relative bg-black pb-20 min-h-screen">
          <div className="sticky top-20 left-0 right-0 z-30 flex justify-center mx-auto gap-4 pointer-events-auto h-[60vh] max-w-6xl">
            {showSlides ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-4 w-full"
              >
                {slides.map((slide, idx) => {
                  const isHovered = hovered === idx || (hovered === null && idx === 1)
                  return (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className={`bg-gradient-to-r ${slide.gradient} rounded-2xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden flex-shrink-0 flex flex-col ${
                        isHovered ? "flex-[3]" : "flex-[1]"
                      } min-h-[400px]`}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {isHovered ? (
                        <div className="p-6 flex flex-col justify-between h-full">
                          <div>
                            <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
                            <ul className="space-y-1">
                              {slide.items.map((item, i) => (
                                <li key={i} className="text-white/90 text-base flex items-center space-x-2">
                                  <span className="w-2 h-2 bg-white rounded-full inline-block" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-sm text-gray-900">{slide.placeholder.title}</h3>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
                                  {slide.placeholder.avatar}
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs text-gray-500 mb-1 flex space-x-2">
                                    <span>{slide.placeholder.user}</span>
                                    <span>{slide.placeholder.time}</span>
                                  </div>
                                  <p className="text-sm text-gray-700 leading-relaxed">{slide.placeholder.message}</p>
                                </div>
                              </div>
                            </div>
                            <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm">
                              Start conversation with nCoder.ai
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <h2 className="text-white text-lg font-light px-2 text-center">{slide.title}</h2>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-4 justify-center items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-blue-600 transition-all duration-500"
                >
                  <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-64 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-blue-600 transition-all duration-500"
                >
                  <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-48 h-48 group flex items-center justify-center border border-white rounded-md shadow-lg bg-slate-100 hover:bg-blue-600 transition-all duration-500"
                >
                  <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

// Main Page Component
export function MobileResponsiveDevinUI() {
  const [revealed, setRevealed] = useState(false) // For card animations
  const [isHeaderVisible, setIsHeaderVisible] = useState(true) // For text visibility
  const [scrollProgress, setScrollProgress] = useState(0)
  const triggerRef = useRef<HTMLDivElement>(null) // Ref for GridCards section

  useEffect(() => {
    const handler = () => {
      if (!triggerRef.current) return

      const rect = triggerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate scroll progress for the entire document
      const progress = scrollTop / (documentHeight - windowHeight)
      setScrollProgress(progress)

      // Logic for card animations (when GridCards section is in view)
      const triggerTopAbsolute = scrollTop + rect.top;
      const isCardsRevealed = scrollTop + windowHeight / 2 > triggerTopAbsolute;
      setRevealed(isCardsRevealed);

      // Logic for header text visibility
      const stickyTextOffset = window.innerWidth < 768 ? 80 : 160;
      const shouldHeaderBeVisible = rect.top > stickyTextOffset;
      setIsHeaderVisible(shouldHeaderBeVisible);
    }

    window.addEventListener("scroll", handler, { passive: true })
    handler() // initial
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <section data-nav-theme="white" id="devui" className="relative bg-black pt-[120px] md:pt-[180px]">
      <StackedText isVisible={isHeaderVisible} />
      <GridCards triggerRef={triggerRef} revealed={revealed} />
      <MobileVerticalSlider revealed={revealed} />
      <DesktopOverlay revealed={revealed} scrollProgress={scrollProgress} />
    </section>
  )
}
