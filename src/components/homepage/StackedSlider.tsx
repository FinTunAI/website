// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";
// import { Button } from "@/components/ui/button";

// interface PlaceholderData {
//   title: string;
//   user: string;
//   time: string;
//   message: string;
//   avatar: string;
//   hasChart?: boolean;
// }

// interface SlideItem {
//   title: string;
//   description: string;
// }

// interface Slide {
//   id: number;
//   title: string;
//   items: SlideItem[];
//   gradient: string;
//   placeholder: PlaceholderData;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: "Assisted Factoring",
//     items: [
//       {
//         title: "Legacy System Modernization",
//         description: "Transform outdated applications into AI-native platforms",
//       },
//       {
//         title: "Automated Code Analysis & Refactoring",
//         description:
//           "Intelligent code transformation with compliance-first architecture",
//       },
//       {
//         title: "Digital Twin Simulation",
//         description: "Test modernization strategies before implementation",
//       },
//       {
//         title: "Outcome",
//         description: "30–50% faster modernization cycles",
//       },
//     ],
//     gradient: "from-blue-500 to-teal-400",
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
//     id: 2,
//     title: "Assisted Coding",
//     items: [
//       {
//         title: "AI-Augmented Development",
//         description: "Context-aware code generation and multi-agent workflows",
//       },
//       {
//         title: "Low-Code/No-Code Interfaces",
//         description: "Streamlined development for all skill levels",
//       },
//       {
//         title: "Real-Time Collaboration",
//         description: "Zero-setup development environments",
//       },
//       {
//         title: "Outcome",
//         description: "3x faster development cycles, 60% fewer bugs",
//       },
//     ],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "build a collaborative IDE",
//       user: "Dev",
//       time: "Sep 10, 2024, 10:22 AM",
//       message:
//         "Create a collaborative web IDE that integrates AI-driven code suggestions and supports multiple users editing simultaneously.",
//       avatar: "D",
//     },
//   },
// ];

// const SLIDE_DURATION = 4000;
// const PROGRESS_UPDATE_INTERVAL = 100;

// export default function StackedSlider(): React.JSX.Element {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [progress, setProgress] = useState<number>(0);
//   const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

//   const goToSlide = useCallback((index: number): void => {
//     setCurrentSlide(index);
//     setProgress(0);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL);
//         if (prev >= 100) {
//           setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//           return 0;
//         }
//         return Math.min(prev + increment, 100);
//       });
//     }, PROGRESS_UPDATE_INTERVAL);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto px-10 pt-30">
//       <h1 className="text-7xl font-light">Solution Section</h1>
//       <p className="mt-10 text-xl mb-20 max-w-md">
//         AI-Native Platform for Enterprise Modernization
//       </p>

//       <div className="flex gap-4 h-[600px]">
//         {slides.map((slide, slideIndex) => {
//           const isActive = slideIndex === currentSlide;
//           const isVisible =
//             Math.abs(slideIndex - currentSlide) <= 1 ||
//             (currentSlide === 0 && slideIndex === slides.length - 1) ||
//             (currentSlide === slides.length - 1 && slideIndex === 0);

//           return (
//             <div
//               key={slide.id}
//               className={`
//                 ${isActive ? "flex-1" : "w-32"}
//                 bg-gradient-to-r ${slide.gradient}
//                 rounded-2xl
//                 transition-all duration-500 ease-in-out
//                 cursor-pointer
//                 overflow-hidden
//                 ${!isActive ? "hover:w-40" : ""}
//                 ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
//               `}
//               onClick={() => !isActive && goToSlide(slideIndex)}
//               onMouseEnter={() => {
//                 if (!isActive) {
//                   hoverTimeout.current = setTimeout(
//                     () => goToSlide(slideIndex),
//                     300
//                   );
//                 }
//               }}
//               onMouseLeave={() => {
//                 if (hoverTimeout.current) {
//                   clearTimeout(hoverTimeout.current);
//                   hoverTimeout.current = null;
//                 }
//               }}
//               role="button"
//               tabIndex={!isActive ? 0 : -1}
//               onKeyDown={(e) => {
//                 if (!isActive && (e.key === "Enter" || e.key === " ")) {
//                   e.preventDefault();
//                   goToSlide(slideIndex);
//                 }
//               }}
//               aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${
//                 slide.title
//               }`}
//             >
//               {isActive ? (
//                 <div className="h-full flex items-center relative px-6 py-8">
//                   <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                     <div className="text-white space-y-6">
//                       <h2 className="text-3xl lg:text-4xl font-light leading-tight">
//                         {slide.title}
//                       </h2>
//                       <ul className="space-y-4">
//                         {slide.items.map((item) => (
//                           <li
//                             key={item.title}
//                             className="flex items-start gap-3"
//                           >
//                             <div className="w-2 h-2 bg-white rounded-full relative top-1" />
//                             <div>
//                               <div className="text-lg font-medium leading-tight">
//                                 {item.title}
//                               </div>
//                               <div className="text-sm opacity-90 leading-snug">
//                                 {item.description}
//                               </div>
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="flex justify-center">
//                       <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
//                         <div className="flex items-center justify-between mb-4">
//                           <h3 className="font-medium text-sm text-gray-900">
//                             {slide.placeholder.title}
//                           </h3>
//                           <div className="flex space-x-1">
//                             <div className="w-3 h-3 bg-gray-300 rounded-full" />
//                             <div className="w-3 h-3 bg-gray-300 rounded-full" />
//                           </div>
//                         </div>

//                         <div className="space-y-4">
//                           <div className="flex items-start space-x-3">
//                             <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-semibold">
//                               {slide.placeholder.avatar}
//                             </div>
//                             <div>
//                               <div className="text-xs text-gray-500 mb-1 flex gap-2">
//                                 <span>{slide.placeholder.user}</span>
//                                 <span>{slide.placeholder.time}</span>
//                               </div>
//                               <p className="text-sm text-gray-700 leading-relaxed">
//                                 {slide.placeholder.message}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-48">
//                             <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
//                               <div className="text-center text-gray-600">
//                                 <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
//                                   <svg
//                                     className="w-8 h-8 text-gray-600"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                   >
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth={2}
//                                       d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                     />
//                                   </svg>
//                                 </div>
//                                 <p className="text-sm font-medium">
//                                   Preview {slide.id}
//                                 </p>
//                                 <p className="text-xs text-gray-500">
//                                   {slide.title}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="flex items-center justify-between pt-2">
//                             <div className="flex items-center space-x-2">
//                               <div className="w-4 h-4 bg-gray-400 rounded-full" />
//                               <span className="text-xs text-gray-500">
//                                 Session Ended
//                               </span>
//                             </div>
//                             <div className="w-4 h-4 bg-gray-300 rounded-full" />
//                           </div>
//                         </div>

//                         <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm">
//                           Start a new conversation with nCoder.ai 
//                         </Button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
//                     {slides.map((_, i) => (
//                       <button
//                         key={i}
//                         onClick={() => goToSlide(i)}
//                         className="w-12 h-1 bg-white/30 rounded-full overflow-hidden"
//                       >
//                         <div
//                           className="h-full bg-white rounded-full transition-all duration-100"
//                           style={{
//                             width:
//                               i === currentSlide
//                                 ? `${progress}%`
//                                 : i < currentSlide
//                                 ? "100%"
//                                 : "0%",
//                           }}
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center h-full px-2 text-white text-xs font-semibold text-center">
//                   {slide.title}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// "use client"

// import type React from "react"

// import { useState, useEffect, useCallback, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Sparkles, Zap, Code, ArrowRight, Play, Pause } from "lucide-react"

// interface PlaceholderData {
//   title: string
//   user: string
//   time: string
//   message: string
//   avatar: string
//   hasChart?: boolean
// }

// interface SlideItem {
//   title: string
//   description: string
// }

// interface Slide {
//   id: number
//   title: string
//   items: SlideItem[]
//   gradient: string
//   placeholder: PlaceholderData
//   icon: React.ReactNode
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: "Assisted Factoring",
//     icon: <Zap className="w-8 h-8" />,
//     items: [
//       {
//         title: "Legacy System Modernization",
//         description: "Transform outdated applications into AI-native platforms",
//       },
//       {
//         title: "Automated Code Analysis & Refactoring",
//         description: "Intelligent code transformation with compliance-first architecture",
//       },
//       {
//         title: "Digital Twin Simulation",
//         description: "Test modernization strategies before implementation",
//       },
//       {
//         title: "Outcome",
//         description: "30–50% faster modernization cycles",
//       },
//     ],
//     gradient: "from-purple-600 to-blue-600",
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
//     id: 2,
//     title: "Assisted Coding",
//     icon: <Code className="w-8 h-8" />,
//     items: [
//       {
//         title: "AI-Augmented Development",
//         description: "Context-aware code generation and multi-agent workflows",
//       },
//       {
//         title: "Low-Code/No-Code Interfaces",
//         description: "Streamlined development for all skill levels",
//       },
//       {
//         title: "Real-Time Collaboration",
//         description: "Zero-setup development environments",
//       },
//       {
//         title: "Outcome",
//         description: "3x faster development cycles, 60% fewer bugs",
//       },
//     ],
//     gradient: "from-indigo-600 to-purple-600",
//     placeholder: {
//       title: "build a collaborative IDE",
//       user: "Dev",
//       time: "Sep 10, 2024, 10:22 AM",
//       message:
//         "Create a collaborative web IDE that integrates AI-driven code suggestions and supports multiple users editing simultaneously.",
//       avatar: "D",
//     },
//   },
// ]

// const SLIDE_DURATION = 4000
// const PROGRESS_UPDATE_INTERVAL = 100

// export default function StackedSlider(): React.JSX.Element {
//   const [currentSlide, setCurrentSlide] = useState<number>(0)
//   const [progress, setProgress] = useState<number>(0)
//   const [isPaused, setIsPaused] = useState<boolean>(false)
//   const hoverTimeout = useRef<NodeJS.Timeout | null>(null)
//   const intervalRef = useRef<NodeJS.Timeout | null>(null)

//   const goToSlide = useCallback((index: number): void => {
//     setCurrentSlide(index)
//     setProgress(0)
//   }, [])

//   const togglePause = useCallback(() => {
//     setIsPaused((prev) => !prev)
//   }, [])

//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setProgress((prev) => {
//           const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL)
//           if (prev >= 100) {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//             return 0
//           }
//           return Math.min(prev + increment, 100)
//         })
//       }, PROGRESS_UPDATE_INTERVAL)
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current)
//       }
//     }
//   }, [isPaused])

//   return (
//     <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="flex justify-center animate-float mb-8">
//             <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Our Solutions
//             </Badge>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-8">
//             <span className="block text-gray-900 animate-fade-in-up">AI-Native Platform</span>
//             <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
//               for Enterprise Modernization
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 font-light">
//             Transform legacy systems and accelerate development with our comprehensive AI-driven solutions.
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative animate-fade-in-up animation-delay-600">
//           <div className="flex gap-6 h-[600px] relative">
//             {slides.map((slide, slideIndex) => {
//               const isActive = slideIndex === currentSlide
//               const isVisible =
//                 Math.abs(slideIndex - currentSlide) <= 1 ||
//                 (currentSlide === 0 && slideIndex === slides.length - 1) ||
//                 (currentSlide === slides.length - 1 && slideIndex === 0)

//               return (
//                 <div
//                   key={slide.id}
//                   className={`${isActive ? "flex-1" : "w-32"}
//                     bg-gradient-to-r ${slide.gradient}
//                     rounded-3xl
//                     transition-all duration-700 ease-in-out
//                     cursor-pointer
//                     overflow-hidden
//                     shadow-2xl shadow-gray-400/20
//                     hover:shadow-2xl hover:shadow-gray-400/30
//                     ${!isActive ? "hover:w-40" : ""}
//                     ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
//                     group
//                   `}
//                   onClick={() => !isActive && goToSlide(slideIndex)}
//                   onMouseEnter={() => {
//                     if (!isActive) {
//                       hoverTimeout.current = setTimeout(() => goToSlide(slideIndex), 300)
//                     }
//                   }}
//                   onMouseLeave={() => {
//                     if (hoverTimeout.current) {
//                       clearTimeout(hoverTimeout.current)
//                       hoverTimeout.current = null
//                     }
//                   }}
//                   role="button"
//                   tabIndex={!isActive ? 0 : -1}
//                   onKeyDown={(e) => {
//                     if (!isActive && (e.key === "Enter" || e.key === " ")) {
//                       e.preventDefault()
//                       goToSlide(slideIndex)
//                     }
//                   }}
//                   aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${slide.title}`}
//                 >
//                   {isActive ? (
//                     <div className="h-full flex items-center relative px-8 py-10">
//                       {/* Background overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-3xl" />

//                       <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
//                         {/* Content Side */}
//                         <div className="text-white space-y-8">
//                           <div className="flex items-center space-x-4 mb-6">
//                             <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-xl">
//                               {slide.icon}
//                             </div>
//                             <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{slide.title}</h2>
//                           </div>

//                           <ul className="space-y-6">
//                             {slide.items.map((item, index) => (
//                               <li
//                                 key={item.title}
//                                 className="flex items-start gap-4 animate-fade-in-up"
//                                 style={{ animationDelay: `${index * 100}ms` }}
//                               >
//                                 <div className="w-2 h-2 bg-white rounded-full relative top-2 flex-shrink-0" />
//                                 <div>
//                                   <div className="text-lg font-semibold leading-tight mb-2">{item.title}</div>
//                                   <div className="text-sm opacity-90 leading-relaxed">{item.description}</div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>

//                           {/* CTA Button */}
//                           <div className="pt-6">
//                             <Button className="bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 font-semibold px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20">
//                               Learn More
//                               <ArrowRight className="w-4 h-4 ml-2" />
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Preview Side */}
//                         <div className="flex justify-center">
//                           <Card className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-md border border-white/20">
//                             <CardContent className="p-0">
//                               {/* Header */}
//                               <div className="flex items-center justify-between mb-6">
//                                 <h3 className="font-semibold text-gray-900">{slide.placeholder.title}</h3>
//                                 <div className="flex space-x-1">
//                                   <div className="w-3 h-3 bg-red-400 rounded-full" />
//                                   <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//                                   <div className="w-3 h-3 bg-green-400 rounded-full" />
//                                 </div>
//                               </div>

//                               {/* Chat Message */}
//                               <div className="space-y-4 mb-6">
//                                 <div className="flex items-start space-x-3">
//                                   <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white flex items-center justify-center font-semibold text-sm">
//                                     {slide.placeholder.avatar}
//                                   </div>
//                                   <div className="flex-1">
//                                     <div className="text-xs text-gray-500 mb-2 flex gap-2">
//                                       <span className="font-medium">{slide.placeholder.user}</span>
//                                       <span>{slide.placeholder.time}</span>
//                                     </div>
//                                     <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-3">
//                                       {slide.placeholder.message}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>

//                               {/* Preview Area */}
//                               <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center h-48 mb-4">
//                                 <div className="text-center text-gray-600">
//                                   <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
//                                     <svg
//                                       className="w-8 h-8 text-white"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       viewBox="0 0 24 24"
//                                     >
//                                       <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                                       />
//                                     </svg>
//                                   </div>
//                                   <p className="text-sm font-semibold text-gray-900">AI Preview {slide.id}</p>
//                                   <p className="text-xs text-gray-500">{slide.title}</p>
//                                 </div>
//                               </div>

//                               {/* Status */}
//                               <div className="flex items-center justify-between mb-4">
//                                 <div className="flex items-center space-x-2">
//                                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                                   <span className="text-xs text-gray-600 font-medium">Processing Complete</span>
//                                 </div>
//                                 <Badge className="bg-green-100 text-green-700 text-xs">Ready</Badge>
//                               </div>

//                               {/* CTA Button */}
//                               <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
//                                 Start a new conversation with nCoder.ai
//                               </Button>
//                             </CardContent>
//                           </Card>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full px-4 text-white text-center group-hover:scale-105 transition-transform duration-300">
//                       <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
//                         {slide.icon}
//                       </div>
//                       <span className="text-sm font-semibold">{slide.title}</span>
//                     </div>
//                   )}
//                 </div>
//               )
//             })}
//           </div>

//           {/* Controls */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//             {/* Progress Indicators */}
//             <div className="flex space-x-2">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goToSlide(i)}
//                   className="w-12 h-2 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
//                   aria-label={`Go to slide ${i + 1}`}
//                 >
//                   <div
//                     className="h-full bg-white rounded-full transition-all duration-100"
//                     style={{
//                       width: i === currentSlide ? `${progress}%` : i < currentSlide ? "100%" : "0%",
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>

//             {/* Play/Pause Button */}
//             <button
//               onClick={togglePause}
//               className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
//               aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
//             >
//               {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Add required CSS animations */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }
        
//         .animation-delay-400 {
//           animation-delay: 400ms;
//         }
        
//         .animation-delay-600 {
//           animation-delay: 600ms;
//         }
//       `}</style>
//     </section>
//   )
// }

// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Sparkles, Zap, Code, ArrowRight, Play, Pause } from "lucide-react";

// interface PlaceholderData {
//   title: string;
//   user: string;
//   time: string;
//   message: string;
//   avatar: string;
//   hasChart?: boolean;
// }

// interface SlideItem {
//   title: string;
//   description: string;
// }

// interface Slide {
//   id: number;
//   title: string;
//   items: SlideItem[];
//   gradient: string;
//   placeholder: PlaceholderData;
//   icon: React.ReactNode;
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: "Assisted Factoring",
//     icon: <Zap className="w-8 h-8" />,
//     items: [
//       {
//         title: "Legacy System Modernization",
//         description: "Transform outdated applications into AI-native platforms",
//       },
//       {
//         title: "Automated Code Analysis & Refactoring",
//         description: "Intelligent code transformation with compliance-first architecture",
//       },
//       {
//         title: "Digital Twin Simulation",
//         description: "Test modernization strategies before implementation",
//       },
//       {
//         title: "Outcome",
//         description: "30–50% faster modernization cycles",
//       },
//     ],
//     gradient: "from-purple-600 to-blue-600",
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
//     id: 2,
//     title: "Assisted Coding",
//     icon: <Code className="w-8 h-8" />,
//     items: [
//       {
//         title: "AI-Augmented Development",
//         description: "Context-aware code generation and multi-agent workflows",
//       },
//       {
//         title: "Low-Code/No-Code Interfaces",
//         description: "Streamlined development for all skill levels",
//       },
//       {
//         title: "Real-Time Collaboration",
//         description: "Zero-setup development environments",
//       },
//       {
//         title: "Outcome",
//         description: "3x faster development cycles, 60% fewer bugs",
//       },
//     ],
//     gradient: "from-indigo-600 to-purple-600",
//     placeholder: {
//       title: "build a collaborative IDE",
//       user: "Dev",
//       time: "Sep 10, 2024, 10:22 AM",
//       message:
//         "Create a collaborative web IDE that integrates AI-driven code suggestions and supports multiple users editing simultaneously.",
//       avatar: "D",
//     },
//   },
// ];

// const SLIDE_DURATION = 4000;
// const PROGRESS_UPDATE_INTERVAL = 50;

// export default function StackedSlider() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const hoverTimeout = useRef(null);
//   const intervalRef = useRef(null);

//   const goToSlide = useCallback((index) => {
//     setCurrentSlide(index);
//     setProgress(0);
//   }, []);

//   const togglePause = useCallback(() => {
//     setIsPaused(prev => !prev);
//   }, []);

//   // Clean up intervals and timeouts
//   const cleanup = useCallback(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//     if (hoverTimeout.current) {
//       clearTimeout(hoverTimeout.current);
//       hoverTimeout.current = null;
//     }
//   }, []);

//   // Main auto-advance effect
//   useEffect(() => {
//     cleanup();

//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setProgress((prev) => {
//           const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL);
//           const newProgress = prev + increment;
          
//           if (newProgress >= 100) {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//             return 0;
//           }
          
//           return Math.min(newProgress, 100);
//         });
//       }, PROGRESS_UPDATE_INTERVAL);
//     }

//     return cleanup;
//   }, [isPaused, currentSlide, cleanup]);

//   // Reset progress when slide changes manually
//   useEffect(() => {
//     setProgress(0);
//   }, [currentSlide]);

//   return (
//     <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="flex justify-center mb-8">
//             <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full">
//               <Sparkles className="w-4 h-4 mr-2" />
//               Our Solutions
//             </Badge>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-8">
//             <span className="block text-gray-900">AI-Native Platform</span>
//             <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//               for Enterprise Modernization
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
//             Transform legacy systems and accelerate development with our comprehensive AI-driven solutions.
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative">
//           <div className="flex gap-6 h-[600px] relative">
//             {slides.map((slide, slideIndex) => {
//               const isActive = slideIndex === currentSlide;
//               const isVisible =
//                 Math.abs(slideIndex - currentSlide) <= 1 ||
//                 (currentSlide === 0 && slideIndex === slides.length - 1) ||
//                 (currentSlide === slides.length - 1 && slideIndex === 0);

//               return (
//                 <div
//                   key={slide.id}
//                   className={`
//                     ${isActive ? "flex-1" : "w-32"}
//                     bg-gradient-to-r ${slide.gradient}
//                     rounded-3xl
//                     transition-all duration-700 ease-in-out
//                     cursor-pointer
//                     overflow-hidden
//                     shadow-2xl shadow-gray-400/20
//                     hover:shadow-2xl hover:shadow-gray-400/30
//                     ${!isActive ? "hover:w-40" : ""}
//                     ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
//                     group
//                   `}
//                   onClick={() => !isActive && goToSlide(slideIndex)}
//                   onMouseEnter={() => {
//                     if (!isActive) {
//                       hoverTimeout.current = setTimeout(() => goToSlide(slideIndex), 300);
//                     }
//                   }}
//                   onMouseLeave={() => {
//                     if (hoverTimeout.current) {
//                       clearTimeout(hoverTimeout.current);
//                       hoverTimeout.current = null;
//                     }
//                   }}
//                   role="button"
//                   tabIndex={!isActive ? 0 : -1}
//                   onKeyDown={(e) => {
//                     if (!isActive && (e.key === "Enter" || e.key === " ")) {
//                       e.preventDefault();
//                       goToSlide(slideIndex);
//                     }
//                   }}
//                   aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${slide.title}`}
//                 >
//                   {isActive ? (
//                     <div className="h-full flex items-center relative px-8 py-10">
//                       {/* Background overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-3xl" />

//                       <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
//                         {/* Content Side */}
//                         <div className="text-white space-y-8">
//                           <div className="flex items-center space-x-4 mb-6">
//                             <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white shadow-xl">
//                               {slide.icon}
//                             </div>
//                             <h2 className="text-3xl lg:text-4xl font-bold leading-tight">{slide.title}</h2>
//                           </div>

//                           <ul className="space-y-6">
//                             {slide.items.map((item, index) => (
//                               <li
//                                 key={item.title}
//                                 className="flex items-start gap-4"
//                               >
//                                 <div className="w-2 h-2 bg-white rounded-full relative top-2 flex-shrink-0" />
//                                 <div>
//                                   <div className="text-lg font-semibold leading-tight mb-2">{item.title}</div>
//                                   <div className="text-sm opacity-90 leading-relaxed">{item.description}</div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>

//                           {/* CTA Button */}
//                           <div className="pt-6">
//                             <Button className="bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 font-semibold px-8 py-3 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20">
//                               Learn More
//                               <ArrowRight className="w-4 h-4 ml-2" />
//                             </Button>
//                           </div>
//                         </div>

//                         {/* Preview Side */}
//                         <div className="flex justify-center">
//                           <Card className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 w-full max-w-md border border-white/20">
//                             <CardContent className="p-0">
//                               {/* Header */}
//                               <div className="flex items-center justify-between mb-6">
//                                 <h3 className="font-semibold text-gray-900">{slide.placeholder.title}</h3>
//                                 <div className="flex space-x-1">
//                                   <div className="w-3 h-3 bg-red-400 rounded-full" />
//                                   <div className="w-3 h-3 bg-yellow-400 rounded-full" />
//                                   <div className="w-3 h-3 bg-green-400 rounded-full" />
//                                 </div>
//                               </div>

//                               {/* Chat Message */}
//                               <div className="space-y-4 mb-6">
//                                 <div className="flex items-start space-x-3">
//                                   <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white flex items-center justify-center font-semibold text-sm">
//                                     {slide.placeholder.avatar}
//                                   </div>
//                                   <div className="flex-1">
//                                     <div className="text-xs text-gray-500 mb-2 flex gap-2">
//                                       <span className="font-medium">{slide.placeholder.user}</span>
//                                       <span>{slide.placeholder.time}</span>
//                                     </div>
//                                     <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-3">
//                                       {slide.placeholder.message}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>

//                               {/* Preview Area */}
//                               <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 flex items-center justify-center h-48 mb-4">
//                                 <div className="text-center text-gray-600">
//                                   <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
//                                     <svg
//                                       className="w-8 h-8 text-white"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       viewBox="0 0 24 24"
//                                     >
//                                       <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z"
//                                       />
//                                     </svg>
//                                   </div>
//                                   <p className="text-sm font-semibold text-gray-900">AI Preview {slide.id}</p>
//                                   <p className="text-xs text-gray-500">{slide.title}</p>
//                                 </div>
//                               </div>

//                               {/* Status */}
//                               <div className="flex items-center justify-between mb-4">
//                                 <div className="flex items-center space-x-2">
//                                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//                                   <span className="text-xs text-gray-600 font-medium">Processing Complete</span>
//                                 </div>
//                                 <Badge className="bg-green-100 text-green-700 text-xs">Ready</Badge>
//                               </div>

//                               {/* CTA Button */}
//                               <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
//                                 Start a new conversation with nCoder.ai
//                               </Button>
//                             </CardContent>
//                           </Card>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center h-full px-4 text-white text-center group-hover:scale-105 transition-transform duration-300">
//                       <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
//                         {slide.icon}
//                       </div>
//                       <span className="text-sm font-semibold">{slide.title}</span>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Controls */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
//             {/* Progress Indicators */}
//             <div className="flex space-x-2">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goToSlide(i)}
//                   className="w-12 h-2 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
//                   aria-label={`Go to slide ${i + 1}`}
//                 >
//                   <div
//                     className="h-full bg-white rounded-full transition-all duration-100"
//                     style={{
//                       width: i === currentSlide ? `${progress}%` : i < currentSlide ? "100%" : "0%",
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>

//             {/* Play/Pause Button */}
//             <button
//               onClick={togglePause}
//               className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
//               aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
//             >
//               {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Code, ArrowRight, Play, Pause, ChevronDown, ExternalLink, Clock, CheckCircle } from "lucide-react";

interface PlaceholderData {
  title: string;
  user: string;
  time: string;
  message: string;
  avatar: string;
  hasChart?: boolean;
}

interface SlideItem {
  title: string;
  description: string;
}

interface Slide {
  id: number;
  title: string;
  items: SlideItem[];
  gradient: string;
  placeholder: PlaceholderData;
  icon: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Assisted Factoring",
    icon: <Zap className="w-8 h-8" />,
    items: [
      {
        title: "Legacy System Modernization",
        description: "Transform outdated applications into AI-native platforms",
      },
      {
        title: "Automated Code Analysis & Refactoring",
        description: "Intelligent code transformation with compliance-first architecture",
      },
      {
        title: "Digital Twin Simulation",
        description: "Test modernization strategies before implementation",
      },
      {
        title: "Outcome",
        description: "30–50% faster modernization cycles",
      },
    ],
    gradient: "from-purple-600 to-blue-600",
    placeholder: {
      title: "migrate music repo to Python",
      user: "Dev",
      time: "Aug 15, 2024, 4:01 PM",
      message:
        "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
      avatar: "D",
    },
  },
  {
    id: 2,
    title: "Assisted Coding",
    icon: <Code className="w-8 h-8" />,
    items: [
      {
        title: "AI-Augmented Development",
        description: "Context-aware code generation and multi-agent workflows",
      },
      {
        title: "Low-Code/No-Code Interfaces",
        description: "Streamlined development for all skill levels",
      },
      {
        title: "Real-Time Collaboration",
        description: "Zero-setup development environments",
      },
      {
        title: "Outcome",
        description: "3x faster development cycles, 60% fewer bugs",
      },
    ],
    gradient: "from-indigo-600 to-purple-600",
    placeholder: {
      title: "build a collaborative IDE",
      user: "Dev",
      time: "Sep 10, 2024, 10:22 AM",
      message:
        "Create a collaborative web IDE that integrates AI-driven code suggestions and supports multiple users editing simultaneously.",
      avatar: "D",
    },
  },
];

const SLIDE_DURATION = 4000;
const PROGRESS_UPDATE_INTERVAL = 50;

export default function ImprovedMobileSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedMobileSlide, setExpandedMobileSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = useRef(null);
  const intervalRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const toggleMobileSlide = useCallback((index) => {
    setExpandedMobileSlide(expandedMobileSlide === index ? -1 : index);
  }, [expandedMobileSlide]);

  // Clean up intervals and timeouts
  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  }, []);

  // Main auto-advance effect (only for desktop)
  useEffect(() => {
    cleanup();

    if (!isPaused && !isMobile) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL);
          const newProgress = prev + increment;
          
          if (newProgress >= 100) {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            return 0;
          }
          
          return Math.min(newProgress, 100);
        });
      }, PROGRESS_UPDATE_INTERVAL);
    }

    return cleanup;
  }, [isPaused, currentSlide, cleanup, isMobile]);

  // Reset progress when slide changes manually
  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  // Mobile Stack Layout
  if (isMobile) {
    return (
      <section className="py-12 px-4 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-lg mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-4 py-2 text-xs font-medium shadow-lg shadow-gray-200/50 rounded-full">
                <Sparkles className="w-3 h-3 mr-1" />
                Our Solutions
              </Badge>
            </div>

            <h1 className="text-2xl font-black leading-tight tracking-tight mb-4">
              <span className="block text-gray-900">AI-Native Platform</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                for Enterprise Modernization
              </span>
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed font-light px-2">
              Transform legacy systems and accelerate development with AI-driven solutions.
            </p>
          </div>

          {/* Mobile Vertical Stack */}
          <div className="space-y-3">
            {slides.map((slide, slideIndex) => {
              const isExpanded = slideIndex === expandedMobileSlide;

              return (
                <div
                  key={slide.id}
                  className={`
                    bg-gradient-to-r ${slide.gradient}
                    rounded-xl
                    transition-all duration-500 ease-in-out
                    overflow-hidden
                    shadow-lg shadow-gray-400/20
                    ${isExpanded ? 'shadow-xl shadow-gray-400/30' : ''}
                  `}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => toggleMobileSlide(slideIndex)}
                    className="w-full p-4 text-left text-white flex items-center justify-between active:scale-[0.98] transition-transform duration-150"
                    aria-expanded={isExpanded}
                    aria-controls={`slide-content-${slideIndex}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <div className="w-5 h-5">
                          {slide.icon}
                        </div>
                      </div>
                      <h2 className="text-lg font-bold leading-tight">{slide.title}</h2>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Expandable Content */}
                  <div
                    id={`slide-content-${slideIndex}`}
                    className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className="px-4 pb-4 space-y-4">
                      {/* Features List */}
                      <ul className="space-y-3 text-white">
                        {slide.items.map((item, index) => (
                          <li
                            key={item.title}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full relative top-1.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-sm leading-tight mb-1">{item.title}</div>
                              <div className="text-xs opacity-90 leading-relaxed">{item.description}</div>
                            </div>
                          </li>
                        ))}
                      </ul>

                      {/* Simplified Preview Card */}
                      <Card className="bg-white/95 backdrop-blur-xl rounded-lg shadow-xl border border-white/20">
                        <CardContent className="p-3">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 text-xs truncate flex-1 mr-2">{slide.placeholder.title}</h3>
                            <div className="flex space-x-1 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                              <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            </div>
                          </div>

                          {/* Simplified Chat Message */}
                          <div className="space-y-2 mb-3">
                            <div className="flex items-start space-x-2">
                              <div className="w-5 h-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white flex items-center justify-center font-semibold text-xs flex-shrink-0">
                                {slide.placeholder.avatar}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                                  <span className="font-medium">{slide.placeholder.user}</span>
                                  <Clock className="w-2.5 h-2.5" />
                                  <span className="text-xs">Now</span>
                                </div>
                                <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 rounded-md p-2 line-clamp-2">
                                  {slide.placeholder.message.slice(0, 80)}...
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Compact Preview Area */}
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-md p-3 flex items-center justify-center h-20 mb-3">
                            <div className="text-center text-gray-600">
                              <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-xs font-semibold text-gray-900">AI Preview</p>
                            </div>
                          </div>

                          {/* Status */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                              <span className="text-xs text-gray-600 font-medium">Ready</span>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">Complete</Badge>
                          </div>

                          {/* Responsive CTA Button */}
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs font-semibold py-2 rounded-md transition-all duration-300 active:scale-[0.98]">
                            <span className="inline sm:hidden">Try Now</span>
                            <span className="hidden sm:inline">Start with nCoder.ai</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Main CTA Button - Responsive Text */}
                      <div className="pt-1">
                        <Button className="w-full bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 border border-white/20 active:scale-[0.98]">
                          <span className="text-sm">
                            <span className="inline sm:hidden">Learn More</span>
                            <span className="hidden sm:inline">Explore {slide.title}</span>
                          </span>
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setExpandedMobileSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === expandedMobileSlide 
                    ? 'bg-purple-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${slides[index].title}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Slider Layout (Improved)
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-6 lg:mb-8">
            <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Solutions
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6 lg:mb-8">
            <span className="block text-gray-900">AI-Native Platform</span>
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              for Enterprise Modernization
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Transform legacy systems and accelerate development with our comprehensive AI-driven solutions.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="flex gap-4 lg:gap-6 h-[500px] lg:h-[600px] relative">
            {slides.map((slide, slideIndex) => {
              const isActive = slideIndex === currentSlide;
              const isVisible =
                Math.abs(slideIndex - currentSlide) <= 1 ||
                (currentSlide === 0 && slideIndex === slides.length - 1) ||
                (currentSlide === slides.length - 1 && slideIndex === 0);

              return (
                <div
                  key={slide.id}
                  className={`
                    ${isActive ? "flex-1" : "w-24 lg:w-32"}
                    bg-gradient-to-r ${slide.gradient}
                    rounded-2xl lg:rounded-3xl
                    transition-all duration-700 ease-in-out
                    cursor-pointer
                    overflow-hidden
                    shadow-2xl shadow-gray-400/20
                    hover:shadow-2xl hover:shadow-gray-400/30
                    ${!isActive ? "hover:w-32 lg:hover:w-40" : ""}
                    ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
                    group
                  `}
                  onClick={() => !isActive && goToSlide(slideIndex)}
                  onMouseEnter={() => {
                    if (!isActive) {
                      hoverTimeout.current = setTimeout(() => goToSlide(slideIndex), 300);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hoverTimeout.current) {
                      clearTimeout(hoverTimeout.current);
                      hoverTimeout.current = null;
                    }
                  }}
                  role="button"
                  tabIndex={!isActive ? 0 : -1}
                  onKeyDown={(e) => {
                    if (!isActive && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      goToSlide(slideIndex);
                    }
                  }}
                  aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${slide.title}`}
                >
                  {isActive ? (
                    <div className="h-full flex items-center relative px-6 lg:px-8 py-8 lg:py-10">
                      {/* Background overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent rounded-2xl lg:rounded-3xl" />

                      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start relative z-10">
                        {/* Content Side */}
                        <div className="text-white space-y-6 lg:space-y-8">
                          <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-xl rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-xl">
                              {slide.icon}
                            </div>
                            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">{slide.title}</h2>
                          </div>

                          <ul className="space-y-4 lg:space-y-6">
                            {slide.items.map((item, index) => (
                              <li
                                key={item.title}
                                className="flex items-start gap-3 lg:gap-4"
                              >
                                <div className="w-2 h-2 bg-white rounded-full relative top-2 flex-shrink-0" />
                                <div>
                                  <div className="text-base lg:text-lg font-semibold leading-tight mb-1 lg:mb-2">{item.title}</div>
                                  <div className="text-sm opacity-90 leading-relaxed">{item.description}</div>
                                </div>
                              </li>
                            ))}
                          </ul>

                          {/* CTA Button */}
                          <div className="pt-4 lg:pt-6">
                            <Button className="bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 font-semibold px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-white/20">
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>

                        {/* Preview Side */}
                        <div className="flex justify-center">
                          <Card className="bg-white/95 backdrop-blur-xl rounded-xl lg:rounded-2xl shadow-2xl p-4 lg:p-6 w-full max-w-md border border-white/20">
                            <CardContent className="p-0">
                              {/* Header */}
                              <div className="flex items-center justify-between mb-4 lg:mb-6">
                                <h3 className="font-semibold text-gray-900 text-sm lg:text-base">{slide.placeholder.title}</h3>
                                <div className="flex space-x-1">
                                  <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-400 rounded-full" />
                                  <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-yellow-400 rounded-full" />
                                  <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-400 rounded-full" />
                                </div>
                              </div>

                              {/* Chat Message */}
                              <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-6">
                                <div className="flex items-start space-x-2 lg:space-x-3">
                                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white flex items-center justify-center font-semibold text-xs lg:text-sm">
                                    {slide.placeholder.avatar}
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs text-gray-500 mb-1 lg:mb-2 flex gap-2">
                                      <span className="font-medium">{slide.placeholder.user}</span>
                                      <span>{slide.placeholder.time}</span>
                                    </div>
                                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-lg p-2 lg:p-3">
                                      {slide.placeholder.message}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Preview Area */}
                              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg lg:rounded-xl p-4 lg:p-6 flex items-center justify-center h-32 lg:h-48 mb-3 lg:mb-4">
                                <div className="text-center text-gray-600">
                                  <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-2 lg:mb-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg lg:rounded-xl flex items-center justify-center">
                                    <svg
                                      className="w-6 h-6 lg:w-8 lg:h-8 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  <p className="text-xs lg:text-sm font-semibold text-gray-900">AI Preview {slide.id}</p>
                                  <p className="text-xs text-gray-500">{slide.title}</p>
                                </div>
                              </div>

                              {/* Status */}
                              <div className="flex items-center justify-between mb-3 lg:mb-4">
                                <div className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                  <span className="text-xs text-gray-600 font-medium">Processing Complete</span>
                                </div>
                                <Badge className="bg-green-100 text-green-700 text-xs">Ready</Badge>
                              </div>

                              {/* CTA Button */}
                              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs lg:text-sm font-semibold py-2 lg:py-3 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-105">
                                Start a new conversation with nCoder.ai
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full px-2 lg:px-4 text-white text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-xl rounded-lg lg:rounded-xl flex items-center justify-center text-white mb-2 lg:mb-4 shadow-lg">
                        <div className="w-4 h-4 lg:w-6 lg:h-6">
                          {slide.icon}
                        </div>
                      </div>
                      <span className="text-xs lg:text-sm font-semibold leading-tight">{slide.title}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Enhanced Controls */}
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3 lg:space-x-4">
            {/* Progress Indicators */}
            <div className="flex space-x-1.5 lg:space-x-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="w-8 h-1.5 lg:w-12 lg:h-2 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm hover:bg-white/40 transition-colors duration-300"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100"
                    style={{
                      width: i === currentSlide ? `${progress}%` : i < currentSlide ? "100%" : "0%",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePause}
              className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
              aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-3 h-3 lg:w-4 lg:h-4" /> : <Pause className="w-3 h-3 lg:w-4 lg:h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}