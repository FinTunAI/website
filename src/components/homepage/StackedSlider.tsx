// "use client"

// import { useState, useEffect, useCallback } from "react"
// import { Button } from "@/components/ui/button"

// interface PlaceholderData {
//   title: string
//   user: string
//   time: string
//   message: string
//   avatar: string
//   hasChart?: boolean
// }

// interface Slide {
//   id: number
//   title: string
//   items: string[]
//   gradient: string
//   placeholder: PlaceholderData
// }

// const slides: Slide[] = [
//   {
//     id: 1,
//     title: "Code Migration + Refactors",
//     items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
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
//     title: "Data Engineering + Analysis",
//     items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
//     gradient: "from-blue-500 to-teal-400",
//     placeholder: {
//       title: "Price Visualization + Analysis",
//       user: "Devin",
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
//       user: "Devin",
//       time: "May 28, 2024, 10:23 AM",
//       message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
//       avatar: "D",
//     },
//   },
// ]

// const SLIDE_DURATION = 4000 // 4 seconds per slide
// const PROGRESS_UPDATE_INTERVAL = 100 // Update every 100ms

// export default function StackedSlider(): React.JSX.Element {
//   const [currentSlide, setCurrentSlide] = useState<number>(0)
//   const [progress, setProgress] = useState<number>(0)

//   const goToSlide = useCallback((index: number): void => {
//     setCurrentSlide(index)
//     setProgress(0)
//   }, [])

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL)
        
//         if (prev >= 100) {
//           setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//           return 0
//         }
//         return Math.min(prev + increment, 100)
//       })
//     }, PROGRESS_UPDATE_INTERVAL)

//     return () => clearInterval(progressInterval)
//   }, [])

//   // Reset progress when slide changes externally
//   useEffect(() => {
//     setProgress(0)
//   }, [currentSlide])

//   return (
//     <div className="w-full max-w-7xl mx-auto p-4 py-20">

//     <h1 className="text-7xl font-semibold">Use cases</h1>
// <p className="mt-4 text-xl mb-10 max-w-md">
//   From implementing new features to fixing thousands of lint errors, Devin can clear your backlog, modernize your codebase, and help you build more.
// </p>
//       <div className="flex gap-4 h-[600px]" style={{ flexDirection: 'row' }}>
//         {[0, 1, 2].map((slideIndex) => {
//           const slide = slides[slideIndex]
//           const isActive = slideIndex === currentSlide
          
//           // Show all slides in order, but only make adjacent ones visible
//           const isVisible = Math.abs(slideIndex - currentSlide) <= 1 ||
//             (currentSlide === 0 && slideIndex === slides.length - 1) ||
//             (currentSlide === slides.length - 1 && slideIndex === 0)

//           return (
//             <div
//               key={slideIndex}
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
//               role="button"
//               tabIndex={!isActive ? 0 : -1}
//               onKeyDown={(e) => {
//                 if (!isActive && (e.key === "Enter" || e.key === " ")) {
//                   e.preventDefault()
//                   goToSlide(slideIndex)
//                 }
//               }}
//               aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${slide.title}`}
//             >
//               {isActive ? (
//                 // Active slide - full content
//                 <div className="p-8 lg:p-12 h-full flex items-center relative">
//                   <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                     {/* Left Content */}
//                     <div className="text-white space-y-6">
//                       <h2 className="text-3xl lg:text-4xl font-light leading-tight">
//                         {slide.title}
//                       </h2>
//                       <ul className="space-y-3" role="list">
//                         {slide.items.map((item, itemIndex) => (
//                           <li key={itemIndex} className="flex items-center space-x-3">
//                             <div 
//                               className="w-2 h-2 bg-white rounded-full flex-shrink-0" 
//                               aria-hidden="true"
//                             />
//                             <span className="text-lg font-light">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Right Content - Single Image Placeholder */}
//                     <div className="flex justify-center">
//                       <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
//                         <div className="flex items-center justify-between mb-3">
//                           <h3 className="font-medium text-sm text-gray-900">
//                             {slide.placeholder.title}
//                           </h3>
//                           <div className="flex space-x-1" aria-hidden="true">
//                             <div className="w-3 h-3 bg-gray-300 rounded-full" />
//                             <div className="w-3 h-3 bg-gray-300 rounded-full" />
//                           </div>
//                         </div>

//                         <div className="space-y-3">
//                           <div className="flex items-start space-x-2">
//                             <div 
//                               className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium"
//                               aria-label={`Avatar for ${slide.placeholder.user}`}
//                             >
//                               {slide.placeholder.avatar}
//                             </div>
//                             <div className="flex-1">
//                               <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
//                                 <span>{slide.placeholder.user}</span>
//                                 <span>{slide.placeholder.time}</span>
//                               </div>
//                               <p className="text-sm text-gray-700 leading-relaxed">
//                                 {slide.placeholder.message}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Image Placeholder */}
//                           <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-48">
//                             <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
//                               <div className="text-center text-gray-600">
//                                 <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
//                                   <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                   </svg>
//                                 </div>
//                                 <p className="text-sm font-medium">Preview {slide.id}</p>
//                                 <p className="text-xs text-gray-500">{slide.title}</p>
//                               </div>
//                             </div>
//                           </div>

//                           {slide.placeholder.hasChart && (
//                             <div className="bg-gray-50 rounded p-3">
//                               <div 
//                                 className="w-full h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded flex items-end justify-around p-2"
//                                 role="img"
//                                 aria-label="Sample chart showing data visualization"
//                               >
//                                 {[40, 60, 45, 70, 55, 80].map((height, i) => (
//                                   <div
//                                     key={i}
//                                     className="bg-blue-400 rounded-sm w-3"
//                                     style={{ height: `${height}%` }}
//                                     aria-hidden="true"
//                                   />
//                                 ))}
//                               </div>
//                             </div>
//                           )}

//                           <div className="flex items-center justify-between pt-2">
//                             <div className="flex items-center space-x-2">
//                               <div 
//                                 className="w-4 h-4 bg-gray-400 rounded-full" 
//                                 aria-hidden="true"
//                               />
//                               <span className="text-xs text-gray-500">Session Ended</span>
//                             </div>
//                             <div 
//                               className="w-4 h-4 bg-gray-300 rounded-full" 
//                               aria-hidden="true"
//                             />
//                           </div>
//                         </div>

//                         <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm">
//                           Start a new conversation with Devin
//                         </Button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Progress Indicators */}
//                   <div 
//                     className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2"
//                     role="tablist"
//                     aria-label="Slide navigation"
//                   >
//                     {slides.map((_, barIndex) => (
//                       <button
//                         key={barIndex}
//                         className="w-12 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
//                         onClick={() => goToSlide(barIndex)}
//                         role="tab"
//                         aria-selected={barIndex === currentSlide}
//                         aria-label={`Go to slide ${barIndex + 1}: ${slides[barIndex].title}`}
//                       >
//                         <div
//                           className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
//                           style={{
//                             width: 
//                               barIndex === currentSlide 
//                                 ? `${progress}%` 
//                                 : barIndex < currentSlide 
//                                 ? "100%" 
//                                 : "0%"
//                           }}
//                           aria-hidden="true"
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 // Inactive slide - no text, just gradient background
//                 <div className="h-full w-full" aria-hidden="true" />
//               )}
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"

interface PlaceholderData {
  title: string
  user: string
  time: string
  message: string
  avatar: string
  hasChart?: boolean
}

interface Slide {
  id: number
  title: string
  items: string[]
  gradient: string
  placeholder: PlaceholderData
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Code Migration + Refactors",
    items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
    gradient: "from-blue-500 to-teal-400",
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
    title: "Data Engineering + Analysis",
    items: ["Data warehouse migrations", "ETL development", "Data cleaning and preprocessing"],
    gradient: "from-blue-500 to-teal-400",
    placeholder: {
      title: "Price Visualization + Analysis",
      user: "Devin",
      time: "Aug 21, 2024, 7:01 AM",
      message: "I have completed the requested visualizations",
      avatar: "D",
      hasChart: true,
    },
  },
  {
    id: 3,
    title: "Bugs + Backlog Work",
    items: ["Ticket resolution", "CI/CD", "First-draft PR creation for backlog tasks"],
    gradient: "from-blue-600 to-blue-400",
    placeholder: {
      title: "Invalid auto-triage link",
      user: "Devin",
      time: "May 28, 2024, 10:23 AM",
      message: "Got it, I'll look into the exception in run_auto and the invalid auto-triage link format issue.",
      avatar: "D",
    },
  },
]

const SLIDE_DURATION = 4000
const PROGRESS_UPDATE_INTERVAL = 100

export default function StackedSlider(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = useCallback((index: number): void => {
    setCurrentSlide(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL)
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          return 0
        }
        return Math.min(prev + increment, 100)
      })
    }, PROGRESS_UPDATE_INTERVAL)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    setProgress(0)
  }, [currentSlide])

  return (
    <div className="w-full max-w-7xl mx-auto p-4 py-20">
      <h1 className="text-7xl font-semibold">Use cases</h1>
      <p className="mt-4 text-xl mb-10 max-w-md">
        From implementing new features to fixing thousands of lint errors, Devin can clear your backlog,
        modernize your codebase, and help you build more.
      </p>

      <div className="flex gap-4 h-[600px]">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === currentSlide
          const isVisible =
            Math.abs(slideIndex - currentSlide) <= 1 ||
            (currentSlide === 0 && slideIndex === slides.length - 1) ||
            (currentSlide === slides.length - 1 && slideIndex === 0)

          return (
            <div
              key={slideIndex}
              className={`
                ${isActive ? "flex-1" : "w-32"}
                bg-gradient-to-r ${slide.gradient}
                rounded-2xl
                transition-all duration-500 ease-in-out
                cursor-pointer
                overflow-hidden
                ${!isActive ? "hover:w-40" : ""}
                ${!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
              onClick={() => !isActive && goToSlide(slideIndex)}
              onMouseEnter={() => {
                if (!isActive) {
                  hoverTimeout.current = setTimeout(() => goToSlide(slideIndex), 300)
                }
              }}
              onMouseLeave={() => {
                if (hoverTimeout.current) {
                  clearTimeout(hoverTimeout.current)
                  hoverTimeout.current = null
                }
              }}
              role="button"
              tabIndex={!isActive ? 0 : -1}
              onKeyDown={(e) => {
                if (!isActive && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  goToSlide(slideIndex)
                }
              }}
              aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${slide.title}`}
            >
              {isActive ? (
                <div className="p-8 lg:p-12 h-full flex items-center relative">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="text-white space-y-6">
                      <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                        {slide.title}
                      </h2>
                      <ul className="space-y-3" role="list">
                        {slide.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <div
                              className="w-2 h-2 bg-white rounded-full flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-lg font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center">
                      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium text-sm text-gray-900">
                            {slide.placeholder.title}
                          </h3>
                          <div className="flex space-x-1" aria-hidden="true">
                            <div className="w-3 h-3 bg-gray-300 rounded-full" />
                            <div className="w-3 h-3 bg-gray-300 rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <div
                              className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium"
                              aria-label={`Avatar for ${slide.placeholder.user}`}
                            >
                              {slide.placeholder.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                                <span>{slide.placeholder.user}</span>
                                <span>{slide.placeholder.time}</span>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {slide.placeholder.message}
                              </p>
                            </div>
                          </div>

                          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-48">
                            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                              <div className="text-center text-gray-600">
                                <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="w-8 h-8 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <p className="text-sm font-medium">Preview {slide.id}</p>
                                <p className="text-xs text-gray-500">{slide.title}</p>
                              </div>
                            </div>
                          </div>

                          {slide.placeholder.hasChart && (
                            <div className="bg-gray-50 rounded p-3">
                              <div
                                className="w-full h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded flex items-end justify-around p-2"
                                role="img"
                                aria-label="Sample chart showing data visualization"
                              >
                                {[40, 60, 45, 70, 55, 80].map((height, i) => (
                                  <div
                                    key={i}
                                    className="bg-blue-400 rounded-sm w-3"
                                    style={{ height: `${height}%` }}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 bg-gray-400 rounded-full" aria-hidden="true" />
                              <span className="text-xs text-gray-500">Session Ended</span>
                            </div>
                            <div className="w-4 h-4 bg-gray-300 rounded-full" aria-hidden="true" />
                          </div>
                        </div>

                        <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm">
                          Start a new conversation with Devin
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2"
                    role="tablist"
                    aria-label="Slide navigation"
                  >
                    {slides.map((_, barIndex) => (
                      <button
                        key={barIndex}
                        className="w-12 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                        onClick={() => goToSlide(barIndex)}
                        role="tab"
                        aria-selected={barIndex === currentSlide}
                        aria-label={`Go to slide ${barIndex + 1}: ${slides[barIndex].title}`}
                      >
                        <div
                          className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                          style={{
                            width:
                              barIndex === currentSlide
                                ? `${progress}%`
                                : barIndex < currentSlide
                                ? "100%"
                                : "0%",
                          }}
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full w-full" aria-hidden="true" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
