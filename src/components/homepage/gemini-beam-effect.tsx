"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, Sparkles, Zap } from "lucide-react"
import { Badge } from "../ui/badge"

export default function Component() {
  const [activeBeams, setActiveBeams] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const leftLabels = [
    "S-Controls",
    "VF pages",
    "Workflow Rules",
    "Error Messages",
    "Formula Errors",
    "Custom Objects",
  ]

  const rightLabels = [
    "Lightning",
    "LWC",
    "Process Builders",
    "Trigger Frameworks",
    "Documentation",
    "Optimized Schema",
  ]

  // Auto-trigger beam animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      // Stagger the beam activations
      leftLabels.forEach((_, index) => {
        setTimeout(() => {
          setActiveBeams((prev) => [...prev, index])
        }, index * 200)
      })

      // Clear beams after animation
      setTimeout(
        () => {
          setActiveBeams([])
          setIsAnimating(false)
        },
        leftLabels.length * 200 + 1500,
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const BeamLine = ({ index, isActive }: { index: number; isActive: boolean }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id={`beam-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
        <filter id={`glow-${index}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left to Center Line */}
      <motion.line
        x1="20%"
        y1={`${15 + index * 12}%`}
        x2="50%"
        y2="50%"
        stroke={`url(#beam-gradient-${index})`}
        strokeWidth="2"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isActive
            ? {
                pathLength: 1,
                opacity: [0, 1, 1, 0],
                strokeWidth: [1, 3, 2, 1],
              }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
        }}
      />

      {/* Center to Right Line */}
      <motion.line
        x1="50%"
        y1="50%"
        x2="80%"
        y2={`${15 + index * 12}%`}
        stroke={`url(#beam-gradient-${index})`}
        strokeWidth="2"
        filter={`url(#glow-${index})`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          isActive
            ? {
                pathLength: 1,
                opacity: [0, 1, 1, 0],
                strokeWidth: [1, 3, 2, 1],
              }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
        }}
      />

      {/* Flowing particles */}
      {isActive && (
        <>
          <motion.circle
            r="3"
            fill="#8b5cf6"
            filter={`url(#glow-${index})`}
            initial={{ opacity: 0 }}
            animate={{
              cx: ["20%", "50%"],
              cy: [`${15 + index * 12}%`, "50%"],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.circle
            r="3"
            fill="#3b82f6"
            filter={`url(#glow-${index})`}
            initial={{ opacity: 0 }}
            animate={{
              cx: ["50%", "80%"],
              cy: ["50%", `${15 + index * 12}%`],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          />
        </>
      )}
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="max-w-7xl w-full relative">
        {/* Header */}
        <div className="text-center mb-16 pt-24 md:pt-32">
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center gap-3 mb-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <Sparkles className="w-10 h-10 text-blue-400" />
      <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 text-base font-medium shadow-2xl rounded-full">
        <Bot className="w-4 h-4 mr-2" />
        AI-Powered Transformation
      </Badge>
      <Zap className="w-10 h-10 text-purple-400" />
    </div>
    
    <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white mb-6">
      <span className="block text-white mb-4">Transform Legacy Systems</span>
      <span className="block bg-gradient-to-r from-[#446dcd] via-[#4bb6d3] to-[#6ef2cc] bg-clip-text text-transparent">
        with AI-Driven Modernization
      </span>
    </h1>
  </motion.div>
  
  <p className="text-blue-200 text-xl">From Salesforce to Enterprise Applications - Unlock the Future of Your Business</p>
</div>

        {/* Main Network */}
        <div className="relative h-[600px]">
          {/* Beam Lines Container */}
          <div className="absolute inset-0">
            {leftLabels.map((_, index) => (
              <BeamLine key={index} index={index} isActive={activeBeams.includes(index)} />
            ))}
          </div>

          {/* Left Side Labels */}
          <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col justify-center space-y-6">
            {/* <h2 className="text-2xl font-bold text-blue-300 mb-4 text-center">Input Layer</h2> */}
            {leftLabels.map((label, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 shadow-lg transition-all duration-300 ${
                  activeBeams.includes(index) ? "border-blue-400 shadow-blue-400/50 bg-blue-500/30" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={
                      activeBeams.includes(index)
                        ? {
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5, repeat: activeBeams.includes(index) ? 2 : 0 }}
                  />
                  <span className="text-blue-100 font-medium">{label}</span>
                </div>
                {activeBeams.includes(index) && (
                  <motion.div
                    className="absolute inset-0 bg-blue-400/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Center Processing Unit */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="relative"
              animate={
                isAnimating
                  ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }
                  : {}
              }
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-purple-300/50">
                <Zap className="w-10 h-10 text-white" />
              </div>
              {isAnimating && (
                <motion.div
                  className="absolute inset-0 bg-purple-400/30 rounded-full"
                  animate={{
                    scale: [1, 2, 3],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              )}
            </motion.div>
            <div className="text-center mt-4">
              <span className="text-purple-300 font-bold text-lg">ncoderai</span>
            </div>
          </div>

          {/* Right Side Labels */}
          <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col justify-center space-y-6">
            {/* <h2 className="text-2xl font-bold text-purple-300 mb-4 text-center">Output Layer</h2> */}
            {rightLabels.map((label, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className={`relative bg-gradient-to-l from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 shadow-lg transition-all duration-300 ${
                  activeBeams.includes(index) ? "border-purple-400 shadow-purple-400/50 bg-purple-500/30" : ""
                }`}
              >
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-purple-100 font-medium">{label}</span>
                  <motion.div
                    className="w-3 h-3 bg-purple-400 rounded-full"
                    animate={
                      activeBeams.includes(index)
                        ? {
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5, delay: 0.5, repeat: activeBeams.includes(index) ? 2 : 0 }}
                  />
                </div>
                {activeBeams.includes(index) && (
                  <motion.div
                    className="absolute inset-0 bg-purple-400/10 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-center mt-8">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="text-white font-medium">
              {isAnimating ? "Processing..." : "Ready for next transformation"}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
