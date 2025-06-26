"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Zap, Sparkles } from "lucide-react"

const legacyElements = [
  {
    id: 1,
    title: "S-controls",
    description: "Legacy HTML/JS",
    modernEquivalent: "Lightning Web Components",
    image: "images/placeholder.svg?height=800&width=600&text=S-controls+Legacy+Interface",
    modernImage: "images/placeholder.svg?height=800&width=600&text=Lightning+Web+Components",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 2,
    title: "VF Pages",
    description: "Visualforce UI",
    modernEquivalent: "Lightning Experience",
    image: "images/placeholder.svg?height=800&width=600&text=Visualforce+Classic+UI",
    modernImage: "images/placeholder.svg?height=800&width=600&text=Lightning+Experience+UI",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Workflow Rules",
    description: "Basic automation",
    modernEquivalent: "Process Builders & Flow",
    image: "images/placeholder.svg?height=800&width=600&text=Workflow+Rules+Interface",
    modernImage: "images/placeholder.svg?height=800&width=600&text=Flow+Builder+Interface",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 4,
    title: "Error Messages",
    description: "Basic validation",
    modernEquivalent: "Trigger Frameworks",
    image: "images/placeholder.svg?height=800&width=600&text=Basic+Error+Handling",
    modernImage: "images/placeholder.svg?height=800&width=600&text=Advanced+Trigger+Framework",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    id: 5,
    title: "Formula Errors",
    description: "Manual debugging",
    modernEquivalent: "Enhanced Documentation",
    image: "images/placeholder.svg?height=800&width=600&text=Formula+Error+Debugging",
    modernImage: "images/placeholder.svg?height=800&width=600&text=Modern+Documentation+Tools",
    color: "from-purple-500/20 to-violet-500/20",
  },
  {
    id: 6,
    title: "Sandbox Creation",
    description: "Manual setup",
    modernEquivalent: "SFDX Creation",
    image: "images/placeholder.svg?height=800&width=600&text=Manual+Sandbox+Setup",
    modernImage: "images/placeholder.svg?height=800&width=600&text=SFDX+Automated+Tools",
    color: "from-pink-500/20 to-rose-500/20",
  },
]

export default function SalesforceHero() {
  const [activeElement, setActiveElement] = useState<number | null>(null)
  const [isTransformed, setIsTransformed] = useState(false)
  const [defaultImage] = useState("images/placeholder.svg?height=800&width=600&text=Salesforce+Digital+Transformation")

  const handleElementHover = (id: number) => {
    setActiveElement(id)
    setIsTransformed(true)
  }

  const handleElementLeave = () => {
    setActiveElement(null)
    setIsTransformed(false)
  }

  const getCurrentImage = () => {
    if (!activeElement) return defaultImage
    const element = legacyElements.find((el) => el.id === activeElement)
    return isTransformed ? element?.modernImage : element?.image
  }

  const getCurrentTitle = () => {
    if (!activeElement) return "Salesforce Transformation"
    const element = legacyElements.find((el) => el.id === activeElement)
    return isTransformed ? element?.modernEquivalent : element?.title
  }

  const getActiveElementColor = () => {
    if (!activeElement) return "from-slate-500/10 to-slate-600/10"
    const element = legacyElements.find((el) => el.id === activeElement)
    return element?.color || "from-orange-500/20 to-blue-500/20"
  }

  return (
    <section className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 relative">
          {activeElement && (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${getActiveElementColor()} transition-all duration-700 ease-out`} />
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
                    </pattern>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white/30" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
            </>
          )}

          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 sm:py-16 lg:py-20 h-full">
            <div className="max-w-xl space-y-8">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-300">Digital Transformation</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your <br />
                  <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                    Salesforce
                  </span>{" "}
                  Legacy
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Modernize your Salesforce org with cutting-edge tools and frameworks. Hover over legacy elements to
                  see their modern transformations.
                </p>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 text-lg rounded-lg shadow-lg backdrop-blur-sm">
                    Start Transformation
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-6 py-3 text-lg rounded-lg backdrop-blur-sm"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {legacyElements.map((element) => {
                  const isActive = activeElement === element.id
                  return (
                    <div
                      key={element.id}
                      className={`group relative p-3 rounded-lg transition-all duration-300 cursor-pointer border backdrop-blur-sm ${
                        isActive
                          ? "bg-white/10 border-orange-500/50 shadow-lg shadow-orange-500/10 scale-105"
                          : "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 hover:scale-102"
                      }`}
                      onMouseEnter={() => handleElementHover(element.id)}
                      onMouseLeave={handleElementLeave}
                    >
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-white text-sm">{element.title}</h4>
                          <p className="text-slate-400 text-xs leading-tight">{element.description}</p>
                        </div>
                        {isActive && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                        )}
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg border-2 border-orange-400/50 pointer-events-none shadow-lg shadow-orange-400/20" />
                      )}
                      <div
                        className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "shadow-lg shadow-orange-500/20"
                            : "group-hover:shadow-md group-hover:shadow-slate-500/20"
                        }`}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[300px] md:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900/60 z-10" />

          <Image
            src={getCurrentImage() || "images/placeholder.svg"}
            alt={getCurrentTitle() || "Salesforce Transformation"}
            fill
            className="object-cover transition-all duration-700 ease-in-out"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {activeElement && (
            <div className="absolute top-6 right-6 z-20">
              <div
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 backdrop-blur-sm ${
                  isTransformed ? "bg-green-500/90 text-white" : "bg-orange-500/90 text-white"
                }`}
              >
                {isTransformed ? "✨ Modern Solution" : "⚠️ Legacy System"}
              </div>
            </div>
          )}

          {activeElement && isTransformed && (
            <div className="absolute inset-0 z-15">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 animate-pulse" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <Sparkles className="w-16 h-16 text-white/80 animate-spin" />
                  <div className="absolute inset-0 w-16 h-16 border-4 border-orange-400/30 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          )}

          {activeElement && (
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{getCurrentTitle()}</h3>
                <p className="text-sm text-slate-300">
                  {isTransformed
                    ? "Modern implementation with enhanced capabilities"
                    : "Legacy system requiring modernization"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
