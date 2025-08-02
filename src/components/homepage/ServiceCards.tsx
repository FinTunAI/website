// import { Sparkles } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     title: "Zero-Friction Developer Experience",
//     icon: "sparkles",
//     iconColor: "text-blue-500",
//     dotColor: "bg-blue-500",
//     items: [
//       "Seamless integration with existing workflows",
//       "Intuitive AI-powered interfaces",
//     ],
//   },
//   {
//     id: 2,
//     title: "Advanced Agentic AI Architecture",
//     icon: "sparkles",
//     iconColor: "text-cyan-500",
//     dotColor: "bg-cyan-500",
//     items: [
//       "Multi-agent systems for complex modernization tasks",
//       "Intelligent automation across the development lifecycle",
//     ],
//   },
//   {
//     id: 3,
//     title: "Deep Domain Expertise",
//     icon: "sparkles",
//     iconColor: "text-emerald-500",
//     dotColor: "bg-emerald-500",
//     items: [
//       "20+ years of Salesforce and enterprise system experience",
//       "Proven track record with 600+ successful project deliveries",
//     ],
//   },
//   {
//     id: 4,
//     title: "Digital Twin Simulation Capability",
//     icon: "sparkles",
//     iconColor: "text-purple-500",
//     dotColor: "bg-purple-500",
//     items: [
//       "Risk-free testing of modernization strategies",
//       "Predictive analysis for system performance",
//     ],
//   },
//   {
//     id: 5,
//     title: "Enterprise Design Philosophy",
//     icon: "sparkles",
//     iconColor: "text-yellow-500",
//     dotColor: "bg-yellow-500",
//     items: [
//       "Built for Fortune 500 compliance requirements",
//       "Scalable architecture for global deployments",
//     ],
//   },
//   {
//     id: 6,
//     title: "Enterprise-Grade Compliance Foundation",
//     icon: "sparkles",
//     iconColor: "text-red-500",
//     dotColor: "bg-red-500",
//     items: [
//       "Security-first approach to AI modernization",
//       "Industry-standard compliance frameworks",
//     ],
//   },
// ];

// export default function ServiceCards() {
//   return (
//     <div className="w-full max-w-7xl mx-auto px-10 py-4 ">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {services.map((service) => (
//           <div key={service.id} className="bg-gray-50 rounded-md p-10 relative">
//             {/* Icon */}
//             <div className="absolute top-6 right-6">
//               <div
//                 className={`w-10 h-10 ${service.iconColor} bg-white rounded-lg flex items-center justify-center shadow-sm`}
//               >
//                 <Sparkles className="w-5 h-5" />
//               </div>
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl text-gray-900  pr-16 w-4/5">
//               {service.title}
//             </h3>

//             {/* Items List */}
//             <ul className="space-y-3 mt-20">
//               {service.items.map((item, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <div
//                     className={`w-2 h-2 ${service.dotColor} rounded-full flex-shrink-0 mt-2`}
//                   />
//                   <span className="text-gray-700 leading-relaxed">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client"

// import { Sparkles, Zap, Brain, Target, Shield, Users, CheckCircle } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"

// const services = [
//   {
//     id: 1,
//     title: "Zero-Friction Developer Experience",
//     icon: <Zap className="w-6 h-6" />,
//     gradient: "from-blue-400 to-cyan-500",
//     items: [
//       "Seamless integration with existing workflows",
//       "Intuitive AI-powered interfaces",
//       "Minimal learning curve, maximum impact",
//     ],
//   },
//   {
//     id: 2,
//     title: "Advanced Agentic AI Architecture",
//     icon: <Brain className="w-6 h-6" />,
//     gradient: "from-purple-400 to-pink-500",
//     items: [
//       "Multi-agent systems for complex modernization tasks",
//       "Intelligent automation across the development lifecycle",
//       "Context-aware decision making",
//     ],
//   },
//   {
//     id: 3,
//     title: "Deep Domain Expertise",
//     icon: <Target className="w-6 h-6" />,
//     gradient: "from-emerald-400 to-teal-500",
//     items: [
//       "20+ years of Salesforce and enterprise system experience",
//       "Proven track record with 600+ successful project deliveries",
//       "Industry-specific modernization strategies",
//     ],
//   },
//   {
//     id: 4,
//     title: "Digital Twin Simulation Capability",
//     icon: <Shield className="w-6 h-6" />,
//     gradient: "from-indigo-400 to-purple-500",
//     items: [
//       "Risk-free testing of modernization strategies",
//       "Predictive analysis for system performance",
//       "Real-time monitoring and optimization",
//     ],
//   },
//   {
//     id: 5,
//     title: "Enterprise Design Philosophy",
//     icon: <Users className="w-6 h-6" />,
//     gradient: "from-orange-400 to-red-500",
//     items: [
//       "Built for Fortune 500 compliance requirements",
//       "Scalable architecture for global deployments",
//       "Enterprise-grade security and governance",
//     ],
//   },
//   {
//     id: 6,
//     title: "Enterprise-Grade Compliance Foundation",
//     icon: <CheckCircle className="w-6 h-6" />,
//     gradient: "from-rose-400 to-pink-500",
//     items: [
//       "Security-first approach to AI modernization",
//       "Industry-standard compliance frameworks",
//       "Automated audit trails and reporting",
//     ],
//   },
// ]

// export default function ServiceCards() {
//   return (
//     <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="flex items-center justify-center mb-8">
//             <div className="relative group">
//               <Sparkles className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
//               <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
//             </div>
//             <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Our Core Services</h2>
//           </div>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
//             Six foundational pillars that power our AI-driven modernization platform and deliver exceptional results.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               className="group relative animate-fade-in-up"
//               style={{ animationDelay: `${index * 150}ms` }}
//             >
//               {/* Hover glow effect */}
//               <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />

//               <Card className="relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
//                 <CardContent className="p-0">
//                   {/* Icon */}
//                   <div className="flex items-start justify-between mb-6">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
//                     >
//                       {service.icon}
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
//                     {service.title}
//                   </h3>

//                   {/* Items List */}
//                   <ul className="space-y-4">
//                     {service.items.map((item, itemIndex) => (
//                       <li
//                         key={itemIndex}
//                         className="flex items-start space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
//                       >
//                         <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0 mt-2" />
//                         <span className="text-lg font-medium leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Hover gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
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
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//           opacity: 0;
//         }
        
//         .animation-delay-800 {
//           animation-delay: 800ms;
//         }
//       `}</style>
//     </section>
//   )
// }



"use client"

import { Sparkles, Zap, Brain, Target, Shield, Users, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: 1,
    title: "Zero-Friction Developer Experience",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-blue-400 to-cyan-500",
    items: [
      "Seamless integration with existing workflows",
      "Intuitive AI-powered interfaces",
      "Minimal learning curve, maximum impact",
    ],
  },
  {
    id: 2,
    title: "Advanced Agentic AI Architecture",
    icon: <Brain className="w-6 h-6" />,
    gradient: "from-purple-400 to-pink-500",
    items: [
      "Multi-agent systems for complex modernization tasks",
      "Intelligent automation across the development lifecycle",
      "Context-aware decision making",
    ],
  },
  {
    id: 3,
    title: "Deep Domain Expertise",
    icon: <Target className="w-6 h-6" />,
    gradient: "from-emerald-400 to-teal-500",
    items: [
      "20+ years of Salesforce and enterprise system experience",
      "Proven track record with 600+ successful project deliveries",
      "Industry-specific modernization strategies",
    ],
  },
  {
    id: 4,
    title: "Digital Twin Simulation Capability",
    icon: <Shield className="w-6 h-6" />,
    gradient: "from-indigo-400 to-purple-500",
    items: [
      "Risk-free testing of modernization strategies",
      "Predictive analysis for system performance",
      "Real-time monitoring and optimization",
    ],
  },
  {
    id: 5,
    title: "Enterprise Design Philosophy",
    icon: <Users className="w-6 h-6" />,
    gradient: "from-orange-400 to-red-500",
    items: [
      "Built for Fortune 500 compliance requirements",
      "Scalable architecture for global deployments",
      "Enterprise-grade security and governance",
    ],
  },
  {
    id: 6,
    title: "Enterprise-Grade Compliance Foundation",
    icon: <CheckCircle className="w-6 h-6" />,
    gradient: "from-rose-400 to-pink-500",
    items: [
      "Security-first approach to AI modernization",
      "Industry-standard compliance frameworks",
      "Automated audit trails and reporting",
    ],
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            {/* <div className="relative group">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            </div> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold ml-3 sm:ml-4 lg:ml-6 text-gray-900">
              Our Core Services
            </h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light px-4">
            Six foundational pillars that power our AI-driven modernization platform and deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gray-900 rounded-2xl sm:rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700" />

              <Card className="relative p-4 sm:p-6 lg:p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-2xl sm:rounded-3xl">
                <CardContent className="p-0">
                  {/* Mobile: Icon and Title Side by Side, Desktop: Icon on Top */}
                  <div className="flex sm:block items-center sm:items-start mb-4 sm:mb-6">
                    {/* Icon */}
                    {/* <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mr-4 sm:mr-0 sm:mb-4 lg:mb-6`}
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6">
                        {service.icon}
                      </div>
                    </div> */}

                    {/* Title - Next to icon on mobile, below icon on larger screens */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight flex-1 sm:flex-none">
                      {service.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3 sm:space-y-4">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-indigo-500/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </section>
  )
}