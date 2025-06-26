"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const workflowSteps = [
  {
    id: 1,
    title: "Ticket",
    description: "Integrates with Slack and Linear",
    image: "images/placeholder.svg?height=400&width=600&text=Slack+Integration",
  },
  {
    id: 2,
    title: "Plan",
    description: "Devin can ask for more info",
    image: "images/placeholder.svg?height=400&width=600&text=Planning+Interface",
  },
  {
    id: 3,
    title: "Test",
    description: "Devin makes sure the changes work",
    image: "images/placeholder.svg?height=400&width=600&text=Testing+Dashboard",
  },
  {
    id: 4,
    title: "PR",
    description: "Request changes directly on the PR",
    image: "images/placeholder.svg?height=400&width=600&text=Pull+Request",
  },
]

export default function SalesforceHero() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [defaultImage] = useState("images/placeholder.svg?height=400&width=600&text=AI+Software+Engineer")

  return (
    <section className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-400">Devin</span>, the AI
                <br />
                software engineer
              </h1>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg">
                Start building
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-slate-300">
                Crush your backlog <span className="text-slate-400">with your personal AI engineering team.</span>
              </p>

              <div className="space-y-4 mt-8">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:shadow-lg"
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-semibold">
                      {step.id}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Image */}
          <div className="relative">
            <div className="relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gradient-to-r from-blue-300/20 to-cyan-300/20 shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src={
                    activeStep
                      ? workflowSteps.find((step) => step.id === activeStep)?.image || defaultImage
                      : defaultImage
                  }
                  alt={
                    activeStep
                      ? workflowSteps.find((step) => step.id === activeStep)?.title || "AI Software Engineer"
                      : "AI Software Engineer"
                  }
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                />

                {/* Overlay with step info when hovering */}
                {activeStep && (
                  <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-slate-900">
                      <h4 className="font-semibold">{workflowSteps.find((step) => step.id === activeStep)?.title}</h4>
                      <p className="text-sm text-slate-600">
                        {workflowSteps.find((step) => step.id === activeStep)?.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}