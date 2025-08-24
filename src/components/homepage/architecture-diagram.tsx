// "use client"

// import { useState } from "react"
// import { cn } from "@/lib/utils"

// interface ServiceBox {
//   name: string
//   description?: string
// }

// interface Layer {
//   name: string
//   color: string
//   services: ServiceBox[]
// }

// const layers: Layer[] = [
//   {
//     name: "Presentation Layer",
//     color: "from-slate-700 to-slate-800",
//     services: [
//       { name: "UI & UX" },
//       { name: "API Gateway" },
//       { name: "CI & CD, IDE, Plugins" },
//       { name: "Agents Builder" },
//       { name: "Autonomous Agents" },
//       { name: "Monitoring Services" },
//     ],
//   },
//   {
//     name: "Services Layer",
//     color: "from-blue-600 to-blue-700",
//     services: [
//       { name: "Auth & Authorization" },
//       { name: "Orchestration Service" },
//       { name: "Job & Task Queue" },
//       { name: "Git Integration" },
//       { name: "Vulnerability Assessment" },
//       { name: "Enterprise App Integration" },
//     ],
//   },
//   {
//     name: "Core AI Layer",
//     color: "from-purple-700 to-purple-800",
//     services: [
//       { name: "Code Ingestion & Parsing" },
//       { name: "Knowledge Retrieval" },
//       { name: "Fine Tuned Models" },
//       { name: "AI/ML Model Orchestrator" },
//       { name: "Inference Service" },
//       { name: "Agentic Framework" },
//     ],
//   },
//   {
//     name: "Data Layer",
//     color: "from-teal-600 to-cyan-600",
//     services: [
//       { name: "Relational Database" },
//       { name: "Object Storage" },
//       { name: "Vector Storage" },
//       { name: "Encryption" },
//       { name: "Data Services" },
//       { name: "Metadata" },
//     ],
//   },
// ]

// export function ArchitectureDiagram() {
//   const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)
//   const [hoveredService, setHoveredService] = useState<string | null>(null)

//   return (
//     <div className="grid grid-cols-12 pt-12 container">
//       {/* flex flex-col lg:flex-row items-start lg:items-center justify-center gap-8 lg:gap-16 p-4 lg:p-8 overflow-x-auto */}
//       {/* Left side - Layer shapes */}
//       <div className=" col-span-12 md:col-span-12 lg:col-span-4">
//         <div className="flex flex-col items-center">
//           {layers.map((layer, index) => (
//             <div
//               key={layer.name}
//               className="relative group cursor-pointer"
//               onMouseEnter={() => setHoveredLayer(index)}
//               onMouseLeave={() => setHoveredLayer(null)}
//               style={{
//                 marginBottom: index < layers.length - 1 ? "4rem" : "0",
//                 marginTop: index === 0 ? "1rem" : "0",
//               }}
//             >
//               <svg
//                 width={120 + index * 60}
//                 height="80"
//                 className={cn(
//                   "transition-all duration-500 ease-out drop-shadow-lg",
//                   "transform hover:scale-105 hover:-translate-y-1",
//                   hoveredLayer === index ? "drop-shadow-2xl" : "drop-shadow-lg",
//                 )}
//               >
//                 <defs>
//                   <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop
//                       offset="0%"
//                       stopColor={
//                         index === 0
//                           ? "#475569"
//                           : // slate-600
//                             index === 1
//                             ? "#2563eb"
//                             : // blue-600
//                               index === 2
//                               ? "#7c3aed"
//                               : // purple-600
//                                 "#0891b2" // cyan-600
//                       }
//                     />
//                     <stop
//                       offset="100%"
//                       stopColor={
//                         index === 0
//                           ? "#334155"
//                           : // slate-700
//                             index === 1
//                             ? "#1d4ed8"
//                             : // blue-700
//                               index === 2
//                               ? "#6d28d9"
//                               : // purple-700
//                                 "#0e7490" // cyan-700
//                       }
//                     />
//                   </linearGradient>
//                 </defs>

//                 {/* Create proper triangle for top layer, trapezoids for others */}
//                 <polygon
//                   points={
//                     index === 0
//                       ? `${60} 10, ${110} 70, ${10} 70` // Perfect triangle
//                       : index === 1
//                         ? `${20} 10, ${100 + index * 60} 10, ${120 + index * 60} 70, ${0} 70` // Trapezoid
//                         : index === 2
//                           ? `${15} 10, ${105 + index * 60} 10, ${120 + index * 60} 70, ${0} 70` // Wider trapezoid
//                           : `${10} 10, ${110 + index * 60} 10, ${120 + index * 60} 70, ${0} 70` // Widest trapezoid
//                   }
//                   fill={`url(#gradient-${index})`}
//                   className={cn("transition-all duration-300", hoveredLayer === index && "brightness-110")}
//                 />

//                 {/* Animated overlay */}
//                 <polygon
//                   points={
//                     index === 0
//                       ? `${60} 10, ${110} 70, ${10} 70`
//                       : index === 1
//                         ? `${20} 10, ${100 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
//                         : index === 2
//                           ? `${15} 10, ${105 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
//                           : `${10} 10, ${110 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
//                   }
//                   fill="rgba(255,255,255,0.1)"
//                   className={cn(
//                     "transition-opacity duration-300",
//                     hoveredLayer === index ? "opacity-100" : "opacity-0",
//                   )}
//                 />
//               </svg>

//               {/* Layer label and dotted line */}
//               {/* Adjusted positioning to align better with service row centers */}
//              {/*  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 lg:gap-3 translate-x-full pl-2 lg:pl-4">
//                 <div className="border-t-2 border-dotted border-slate-400 w-8 lg:w-12" />
//                 <span className="text-slate-700 font-semibold text-xs lg:text-sm whitespace-nowrap">{layer.name}</span>
//                 <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slate-600 rounded-full" />
//               </div> */}
//               <div className="absolute right-0 top-1/2 -translate-y-1/2  translate-x-full ">
//                               <span className="text-slate-700 font-semibold text-xs lg:text-sm whitespace-nowrap">{layer.name}</span>
//                   <div className="flex">

//                 <div className="border-t-2 m-auto border-dotted border-slate-600 w-full" />
//                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slate-600 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>












//       {/* Right side - Service boxes */}
//       {/* Increased gap between service rows to match triangle spacing */}
//       <div className="flex flex-col gap-12 lg:gap-16 w-full lg:w-auto col-span-12 md:col-span-12 lg:col-span-8">
//         {layers.map((layer, layerIndex) => (
//           <div
//             key={layer.name}
//             className={cn(
//               "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3 transition-all duration-500",
//               hoveredLayer !== null && hoveredLayer !== layerIndex ? "opacity-40 scale-95" : "opacity-100 scale-100",
//             )}
//           >
//             {layer.services.map((service, serviceIndex) => (
//               <div
//                 key={service.name}
//                 className={cn(
//                   "bg-white rounded-lg p-3 lg:p-4 shadow-md border border-slate-200",
//                   "transition-all duration-300 cursor-pointer",
//                   "hover:shadow-lg hover:-translate-y-1 hover:border-slate-300",
//                   hoveredService === service.name && "ring-2 ring-blue-500 ring-opacity-50",
//                 )}
//                 onMouseEnter={() => setHoveredService(service.name)}
//                 onMouseLeave={() => setHoveredService(null)}
//                 style={{
//                   animationDelay: `${serviceIndex * 50}ms`,
//                 }}
//               >
//                 <div className={cn("w-full h-2 rounded-full mb-2 lg:mb-3 bg-gradient-to-r", layer.color)} />
//                 <h3 className="text-xs lg:text-sm font-semibold text-slate-800 leading-tight">{service.name}</h3>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ServiceBox {
  name: string
  description?: string
}

interface Layer {
  name: string
  color: string
  services: ServiceBox[]
}

const layers: Layer[] = [
  {
    name: "Presentation Layer",
    color: "from-slate-700 to-slate-800",
    services: [
      { name: "UI & UX" },
      { name: "API Gateway" },
      { name: "CI & CD, IDE, Plugins" },
      { name: "Agents Builder" },
      { name: "Autonomous Agents" },
      { name: "Monitoring Services" },
    ],
  },
  {
    name: "Services Layer",
    color: "from-blue-600 to-blue-700",
    services: [
      { name: "Auth & Authorization" },
      { name: "Orchestration Service" },
      { name: "Job & Task Queue" },
      { name: "Git Integration" },
      { name: "Vulnerability Assessment" },
      { name: "Enterprise App Integration" },
    ],
  },
  {
    name: "Core AI Layer",
    color: "from-purple-700 to-purple-800",
    services: [
      { name: "Code Ingestion & Parsing" },
      { name: "Knowledge Retrieval" },
      { name: "Fine Tuned Models" },
      { name: "AI/ML Model Orchestrator" },
      { name: "Inference Service" },
      { name: "Agentic Framework" },
    ],
  },
  {
    name: "Data Layer",
    color: "from-teal-600 to-cyan-600",
    services: [
      { name: "Relational Database" },
      { name: "Object Storage" },
      { name: "Vector Storage" },
      { name: "Encryption" },
      { name: "Data Services" },
      { name: "Metadata" },
    ],
  },
]

export function ArchitectureDiagram() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-12 pt-12 container">
      {/* Left side - Layer shapes */}
      <div className="col-span-12 md:col-span-12 lg:col-span-4">
        <div className="flex flex-col items-center">
          {layers.map((layer, index) => (
            <div
              key={layer.name}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredLayer(index)}
              onMouseLeave={() => setHoveredLayer(null)}
              style={{
                marginBottom: index < layers.length - 1 ? "3rem" : "0",
                marginTop: index === 0 ? "1rem" : "0",
              }}
            >
              <svg
                // 📱 Mobile scale down
                className={cn(
                  "transition-all duration-500 ease-out drop-shadow-lg",
                  "transform hover:scale-105 hover:-translate-y-1",
                  "sm:w-[180px] sm:h-[100px] w-[120px] h-[70px]", // mobile smaller
                  hoveredLayer === index ? "drop-shadow-2xl" : "drop-shadow-lg",
                )}
                viewBox={`0 0 ${120 + index * 60} 80`}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop
                      offset="0%"
                      stopColor={
                        index === 0
                          ? "#475569"
                          : index === 1
                            ? "#2563eb"
                            : index === 2
                              ? "#7c3aed"
                              : "#0891b2"
                      }
                    />
                    <stop
                      offset="100%"
                      stopColor={
                        index === 0
                          ? "#334155"
                          : index === 1
                            ? "#1d4ed8"
                            : index === 2
                              ? "#6d28d9"
                              : "#0e7490"
                      }
                    />
                  </linearGradient>
                </defs>

                <polygon
                  points={
                    index === 0
                      ? `${60} 10, ${110} 70, ${10} 70`
                      : index === 1
                        ? `${20} 10, ${100 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
                        : index === 2
                          ? `${15} 10, ${105 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
                          : `${10} 10, ${110 + index * 60} 10, ${120 + index * 60} 70, ${0} 70`
                  }
                  fill={`url(#gradient-${index})`}
                  className={cn("transition-all duration-300", hoveredLayer === index && "brightness-110")}
                />
              </svg>

              {/* Layer label + line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <span className="text-slate-700 font-semibold text-xs lg:text-sm whitespace-nowrap">{layer.name}</span>
                <div className="flex">
                  <div className="border-t-2 m-auto border-dotted border-slate-600 w-full" />
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slate-600 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Service boxes */}
      <div className="flex flex-col gap-12 lg:gap-16 w-full lg:w-auto col-span-12 md:col-span-12 lg:col-span-8">
        {layers.map((layer, layerIndex) => (
          <div
            key={layer.name}
            className={cn(
              // 📱 One column on mobile
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-3 transition-all duration-500",
              hoveredLayer !== null && hoveredLayer !== layerIndex ? "opacity-40 scale-95" : "opacity-100 scale-100",
            )}
          >
            {layer.services.map((service, serviceIndex) => (
              <div
                key={service.name}
                className={cn(
                  "bg-white rounded-lg p-3 lg:p-4 shadow-md border border-slate-200",
                  "transition-all duration-300 cursor-pointer",
                  "hover:shadow-lg hover:-translate-y-1 hover:border-slate-300",
                  hoveredService === service.name && "ring-2 ring-blue-500 ring-opacity-50",
                )}
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  animationDelay: `${serviceIndex * 50}ms`,
                }}
              >
                <div className={cn("w-full h-2 rounded-full mb-2 lg:mb-3 bg-gradient-to-r", layer.color)} />
                <h3 className="text-xs lg:text-sm font-semibold text-slate-800 leading-tight">{service.name}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
