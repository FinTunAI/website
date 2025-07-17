import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { BorderBeam } from "../magicui/border-beam";

const bulletPoints = [
  { title: "Enterprise‑Ready", desc: "Built for Fortune 500 requirements" },
  {
    title: "Modernization Focus",
    desc: "Deep expertise in legacy transformation",
  },
  { title: "AI Sophistication", desc: "Advanced agentic architecture" },
  {
    title: "Proven ROI",
    desc: "50 % faster modernization, 3× development speed",
  },
  { title: "Salesforce Maturity", desc: "20+ years of platform expertise" },
];

export default function CompetitiveAdvantages() {
  return (
    <section className="relative py-18 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-10"
        >
          Competitive Advantages
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-300">
              First AI-Native Salesforce Platform
            </h3>
            <ul className="space-y-5">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-cyan-400 flex-shrink-0" />
                  <span>
                    <strong>{point.title}:</strong> {point.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 shadow-2xl h-full min-h-[280px] flex flex-col justify-center">
              <h4 className="text-2xl font-semibold mb-4 text-cyan-300">
                Market Position
              </h4>
              <p className="text-white/90 text-lg leading-relaxed">
                The market is wide open for a unified, AI-native platform
                purpose-built for Salesforce and Enterprise Legacy Systems.
              </p>
              <BorderBeam duration={8} size={100} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
