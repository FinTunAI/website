"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Target,
  Users,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  Star,
  Globe,
} from "lucide-react"


export default function EnhancedAboutUs() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { value: "70-80%", label: "of enterprise IT budgets maintaining legacy systems", color: "text-red-600" },
    { value: "5x", label: "more unplanned outages from legacy infrastructure", color: "text-orange-600" },
    { value: "90%", label: "of today's applications will become outdated by 2025", color: "text-yellow-600" },
    { value: "55%", label: "of legacy vulnerabilities contribute to data breaches", color: "text-red-600" },
  ]

  const differentiators = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero-Friction Developer Experience",
      description: "Seamless integration with existing workflows, minimal learning curve, maximum impact.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Agentic AI Architecture",
      description:
        "Multi-agent systems handle complex modernization tasks autonomously across the development lifecycle.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Deep Domain Expertise",
      description: "20+ years of Salesforce and enterprise system experience in legacy modernization.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Digital Twin Simulation",
      description: "Test modernization strategies risk-free with digital twin technology and performance prediction.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enterprise Design Philosophy",
      description: "Built for Fortune 500 compliance with scalable architecture for global deployments.",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Enterprise-Grade Compliance",
      description: "Security-first approach with industry-standard compliance frameworks.",
      gradient: "from-teal-400 to-blue-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-30">
     

      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            {/* Floating Badge */}
            <div className="flex justify-center animate-float">
              <Badge className="bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 px-8 py-4 text-base font-medium shadow-2xl shadow-gray-200/50 rounded-full animate-bounce">
                <Star className="w-4 h-4 mr-2" />
                About nCoder.ai
              </Badge>
            </div>

            {/* Main Headlines with Enhanced Typography */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="block text-gray-900 animate-fade-in-up">We're Not Building</span>
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
                Another Co-Pilot
              </span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 animate-fade-in-up animation-delay-400 tracking-tight">
              We're Building the{" "}
              <span className="underline decoration-4 decoration-purple-300 underline-offset-8">Future of Legacy</span>
            </h2>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 font-light">
              At nCoder.ai, we believe that legacy systems shouldn't define your future. While 70% of digital
              transformations fail due to outdated infrastructure, we're creating the AI-native platform that transforms
              legacy applications into intelligent, scalable, and secure systems.
            </p>

            {/* Mission Statement Card */}
            <div className="relative max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
              <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-2xl opacity-5"></div>
              <div className="relative backdrop-blur-xl bg-white/60 p-12 rounded-3xl border border-gray-200/80 shadow-2xl shadow-gray-200/50">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative group">
                    <Sparkles className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-3xl font-bold ml-6 text-gray-900">Our Mission</h3>
                </div>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  Transform legacy systems with AI-driven modernization for streamlined, scalable, and secure
                  applications.
                </p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section with Enhanced Animations */}
      <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <AlertTriangle className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">The Legacy Crisis</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Legacy systems prevent organizations from unlocking their full potential. The statistics are alarming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
                <Card className="relative text-center p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                  <CardContent className="p-0">
                    <div className="text-4xl font-black text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">{stat.label}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      {/* <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <Users className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Our Founding Team</h2>
            </div>
            <p className="text-xl text-gray-600 font-light">Proven Leadership in Enterprise Transformation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="group relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
              <Card className="relative p-10 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="relative group">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gray-400/30">
                        <span className="text-white font-bold text-2xl">VR</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Vivek Reddy</h3>
                      <p className="text-gray-600 font-semibold text-lg mb-2">Co-Founder</p>
                      <p className="text-gray-500">20+ Years in Large-Scale ERP and M&A Integrations</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Vivek brings two decades of experience in building technology-enabled products with a focus on
                    enterprise solutions. His entrepreneurial journey includes successful exits and deep expertise in
                    large-scale system integrations.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Proven entrepreneurial experience with successful exits",
                      "Expert in large-scale ERP implementations",
                      "Specializes in M&A technology integrations",
                    ].map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-lg font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            
            <div className="group relative animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
              <Card className="relative p-10 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="relative group">
                      <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-gray-400/30">
                        <span className="text-white font-bold text-2xl">SP</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Srini Pendala</h3>
                      <p className="text-gray-600 font-semibold text-lg mb-2">Co-Founder</p>
                      <p className="text-gray-500">28+ Years Leading Digital Transformations Globally</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    Sreenivasa has spent nearly three decades at the forefront of digital transformation, leading
                    initiatives across the globe. His track record includes 600+ successful project deliveries.
                  </p>
                  <div className="space-y-4">
                    {[
                      "600+ successful project deliveries",
                      "Led digital transformations across multiple continents",
                      "Elite technical team leadership",
                    ].map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-lg font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Differentiators Section */}
      <section className="py-32 px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-8">
              <div className="relative group">
                <Target className="w-12 h-12 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gray-700 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold ml-6 text-gray-900">Our Unique Approach</h2>
            </div>
            <p className="text-xl text-gray-600 font-light">6 Core Differentiators That Set Us Apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gray-900 rounded-3xl blur-3xl opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
                <Card className="relative p-8 bg-white/80 backdrop-blur-xl border border-gray-200/80 hover:border-gray-300 transition-all duration-700 hover:scale-105 hover:-translate-y-2 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 rounded-3xl">
                  <CardContent className="p-0">
                    <div className="flex items-start mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mr-4 shadow-xl shadow-gray-400/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="space-y-12">
            <div className="flex items-center justify-center mb-10">
              <div className="relative group">
                <Sparkles className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white ml-8">Ready to Transform?</h2>
            </div>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
              Join the future of legacy modernization with nCoder.ai's AI-native platform and experience transformation
              like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-gray-900/50 hover:shadow-gray-800/50 transition-all duration-300 hover:scale-110 border-0"
              >
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <Button
                size="lg"
                className="bg-gray-800/50 backdrop-blur-xl text-white hover:bg-gray-700/50 font-bold px-12 py-6 text-xl rounded-2xl border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-110"
                variant="outline"
              >
                <Globe className="w-6 h-6 mr-3" />
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

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
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  )
}
