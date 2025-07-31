// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// const testimonials = [
//   {
//     name: "Sarah Johnson",
//     role: "Product Manager",
//     company: "TechCorp",
//     content:
//       "This product has completely transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily operations.",
//     rating: 5,
//     avatar: "images/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "Michael Chen",
//     role: "Software Engineer",
//     company: "StartupXYZ",
//     content:
//       "I've tried many similar tools, but this one stands out for its reliability and ease of use. The AI-driven approach has revolutionized our development workflow.",
//     rating: 5,
//     avatar: "images/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Design Lead",
//     company: "Creative Studio",
//     content:
//       "The design is beautiful and the functionality is exactly what we needed. Our productivity has increased significantly since implementing this solution.",
//     rating: 5,
//     avatar: "images/placeholder.svg?height=60&width=60",
//   },
//   {
//     name: "David Park",
//     role: "CTO",
//     company: "InnovateTech",
//     content:
//       "The enterprise-grade security and scalability features give us confidence in our digital transformation journey. Exceptional platform for modern businesses.",
//     rating: 5,
//     avatar: "images/placeholder.svg?height=60&width=60",
//   },
// ]

// export default function TestimonialSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
//     }, 6000) // Change slide every 6 seconds

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const goToPrevious = () => {
//     setIsAutoPlaying(false)
//     setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
//   }

//   const goToNext = () => {
//     setIsAutoPlaying(false)
//     setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
//   }

//   const goToSlide = (index: number) => {
//     setIsAutoPlaying(false)
//     setCurrentIndex(index)
//   }

//   return (
//     <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <div className="flex justify-center animate-float mb-8">
//             <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full">
//               <Star className="w-4 h-4 mr-2" />
//               Customer Stories
//             </Badge>
//           </div>

//           <div className="flex items-center justify-center mb-8">
//             <div className="relative group">
//               <Quote className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
//               <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">What Our Customers Say</h2>
//           </div>

//           <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
//             Don't just take our word for it. Here's what real customers have to say about their transformation
//             experience with our AI-native platform.
//           </p>
//         </div>

//         {/* Carousel Container */}
//         <div className="relative">
//           <div className="overflow-hidden rounded-3xl">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="w-full flex-shrink-0 px-4">
//                   <div className="group relative animate-fade-in-up">
//                     <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
//                     <Card className="relative bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
//                       <CardContent className="p-12 text-center">
//                         {/* Quote Icon */}
//                         <div className="flex justify-center mb-8">
//                           <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300">
//                             <Quote className="w-8 h-8 text-white" />
//                           </div>
//                         </div>

//                         {/* Star Rating */}
//                         <div className="flex justify-center items-center mb-8">
//                           {[...Array(testimonial.rating)].map((_, i) => (
//                             <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
//                           ))}
//                         </div>

//                         {/* Testimonial Content */}
//                         <blockquote className="text-2xl text-gray-700 mb-10 leading-relaxed italic font-light group-hover:text-gray-900 transition-colors duration-300">
//                           "{testimonial.content}"
//                         </blockquote>

//                         {/* Customer Info */}
//                         <div className="flex items-center justify-center">
//                           <div className="relative group">
//                             <img
//                               src={testimonial.avatar || "/placeholder.svg"}
//                               alt={testimonial.name}
//                               className="w-16 h-16 rounded-2xl mr-6 shadow-xl shadow-gray-400/30"
//                             />
//                             <div className="absolute inset-0 bg-gray-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
//                           </div>
//                           <div className="text-left">
//                             <div className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</div>
//                             <div className="text-lg text-gray-600 font-medium">{testimonial.role}</div>
//                             <div className="text-lg text-gray-500">{testimonial.company}</div>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-2xl hover:scale-110 transition-all duration-300"
//             onClick={goToPrevious}
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-700" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-2xl hover:scale-110 transition-all duration-300"
//             onClick={goToNext}
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-700" />
//           </Button>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center mt-12 space-x-3">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
//                 index === currentIndex
//                   ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-400/50"
//                   : "bg-gray-300 hover:bg-gray-400"
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Auto-play Control */}
//         <div className="text-center mt-8">
//           <button
//             className="text-lg text-gray-500 hover:text-gray-700 transition-colors duration-300 font-medium"
//             onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//           >
//             {isAutoPlaying ? "⏸️ Pause auto-play" : "▶️ Resume auto-play"}
//           </button>
//         </div>

//         {/* Bottom Sparkles Decoration */}
//         <div className="flex justify-center mt-16">
//           <div className="relative group">
//             <Sparkles className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
//             <div className="absolute inset-0 bg-gray-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
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
//       `}</style>
//     </section>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "This product has completely transformed how our team collaborates. The intuitive interface and powerful features make it indispensable for our daily operations.",
    rating: 5,
    avatar: "images/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    company: "StartupXYZ",
    content:
      "I've tried many similar tools, but this one stands out for its reliability and ease of use. The AI-driven approach has revolutionized our development workflow.",
    rating: 5,
    avatar: "images/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Studio",
    content:
      "The design is beautiful and the functionality is exactly what we needed. Our productivity has increased significantly since implementing this solution.",
    rating: 5,
    avatar: "images/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Park",
    role: "CTO",
    company: "InnovateTech",
    content:
      "The enterprise-grade security and scalability features give us confidence in our digital transformation journey. Exceptional platform for modern businesses.",
    rating: 5,
    avatar: "images/placeholder.svg?height=60&width=60",
  },
]

export default function MobileResponsiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-play functionality - disabled on mobile for better UX
  useEffect(() => {
    if (!isAutoPlaying || isMobile) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isMobile])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 lg:px-8 relative bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="flex justify-center animate-float mb-6 md:mb-8">
            <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-4 md:px-8 py-2 md:py-4 text-sm md:text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Customer Stories
            </Badge>
          </div>

          <div className="flex items-center justify-center mb-6 md:mb-8">
            <div className="relative group">
              <Quote className="w-8 h-8 md:w-12 md:h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold ml-3 md:ml-6 text-gray-900 leading-tight">
              What Our Customers Say
            </h2>
          </div>

          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Don't just take our word for it. Here's what real customers have to say about their transformation
            experience with our AI-native platform.
          </p>
        </div>

        {/* Mobile: Vertical Stack Layout */}
        <div className="block md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gray-900 rounded-2xl blur-2xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
              <Card className="relative bg-white/90 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-500 hover:scale-102 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 rounded-2xl">
                <CardContent className="p-6 text-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-gray-400/30">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex justify-center items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mx-0.5" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed italic font-light">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center">
                    <div className="relative group">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-xl mr-4 shadow-lg shadow-gray-400/30"
                      />
                      <div className="absolute inset-0 bg-gray-400 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-left">
                      <div className="text-base font-bold text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Desktop: Carousel Layout */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group relative animate-fade-in-up">
                    <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
                    <Card className="relative bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                      <CardContent className="p-12 text-center">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300">
                            <Quote className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex justify-center items-center mb-8">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-2xl text-gray-700 mb-10 leading-relaxed italic font-light group-hover:text-gray-900 transition-colors duration-300">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Customer Info */}
                        <div className="flex items-center justify-center">
                          <div className="relative group">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-16 h-16 rounded-2xl mr-6 shadow-xl shadow-gray-400/30"
                            />
                            <div className="absolute inset-0 bg-gray-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                          </div>
                          <div className="text-left">
                            <div className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</div>
                            <div className="text-lg text-gray-600 font-medium">{testimonial.role}</div>
                            <div className="text-lg text-gray-500">{testimonial.company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Desktop Only */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-2xl hover:scale-110 transition-all duration-300"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-2xl hover:scale-110 transition-all duration-300"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </Button>

          {/* Dots Indicator - Desktop Only */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-400/50"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control - Desktop Only */}
          <div className="text-center mt-8">
            <button
              className="text-lg text-gray-500 hover:text-gray-700 transition-colors duration-300 font-medium"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? "⏸️ Pause auto-play" : "▶️ Resume auto-play"}
            </button>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="block md:hidden text-center mt-8">
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Scroll to see more testimonials</p>
        </div>

        {/* Bottom Sparkles Decoration */}
        <div className="flex justify-center mt-12 md:mt-16">
          <div className="relative group">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gray-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}