
'use client';
 
import React, { useState, useRef, useEffect } from 'react';
import { Code, Database, Bug, Cpu, Layers, Cloud, Shield } from 'lucide-react'; // you can choose any set
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
//
// Your slides data
//
const slides = [
  {
    id: 1,
    title: "Code Migration + Refactors",
    items: ["Language migrations", "Version upgrades", "Codebase restructuring"],
    gradient: "from-blue-500 to-teal-400",
    placeholder: {
      title: "migrate music repo to Python",
      user: "Dev",
      time: "Aug 15, 2024, 4:01 PM",
      message: "Migrate the music generation repo from Java 8 to Python 3.11. As you migrate, you should also add small tests to each new python file to ensure that the code can run.",
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
];
 
//
// Sticky header text
//
 
gsap.registerPlugin(ScrollTrigger);
export function StackedText({ containerRef }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef?.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [containerRef]);

  return (
    <h1
      ref={textRef}
      className="
        sticky top-40   
        text-4xl md:text-6xl  text-center text-black/90
         pointer-events-none max-w-xl mx-auto
      "
    >
      Able to work
with hundreds of tools
    </h1>
  );
}

function GridCards({ triggerRef, revealed }) {
  const icons = [
    <Code className="w-12 h-12" />,
    <Database className="w-12 h-12" />,
    <Bug className="w-12 h-12" />,
    <Cpu className="w-12 h-12" />,
    <Layers className="w-12 h-12" />,
    <Cloud className="w-12 h-12" />,
    <Shield className="w-12 h-12" />,
  ];
   const containerRef = useRef(null);
  return (
    <div  ref={containerRef} className="relative z-10 pt-40 min-h-[120vh] bg-white">
     <StackedText containerRef={containerRef} />
      <div className="grid grid-cols-7 items-start pt-32 px-4 gap-2 relative">
        {Array.from({ length: 7 }).map((_, colIdx) => {
          const isSwapColumn = colIdx === 2 || colIdx === 3 || colIdx === 4;
 
          return (
            <div
              key={colIdx}
              className={`relative flex flex-col gap-2 ${
                [2, 4].includes(colIdx)
                  ? 'mt-100'
                  : [1, 5].includes(colIdx)
                  ? 'mt-60'
                  : [3].includes(colIdx)
                  ? 'mt-94'
                  : ''
              }`}
            >
              {isSwapColumn ? (
                <>
                  <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm
                    bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
                    {icons[colIdx]}
                  </div>
                  {!revealed && (
                    <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
                      bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
                      {icons[colIdx]}
                    </div>
                  )}
                  {colIdx === 3 && (
                    <div ref={triggerRef} className="h-[50px] bg-transparent" />
                  )}
                </>
              ) : (
                <>
                  <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
                    bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
                    {icons[colIdx]}
                  </div>
                  <div className="h-[150px] group flex items-center justify-center border border-white rounded-md shadow-sm
                    bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
                    {icons[colIdx]}
                  </div>
                  <div className="h-[300px] group flex items-center justify-center border border-white rounded-md shadow-sm
                    bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500">
                    {icons[colIdx]}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
//
// The overlay with 2 modes: blank scroll-expanding vs interactive slider
//
function StackedOverlay({ revealed }) {
  const { scrollYProgress } = useScroll();
  const [pastThreshold, setPastThreshold] = useState(false);
  const [hovered, setHovered] = useState(null);
 
  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      setPastThreshold(v > 0.7);
    });
  }, [scrollYProgress]);
 
  // Scroll-driven transforms for the basic overlay
  const animatedWidth = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['30vw', '30vw', '80vw', '90vw'])
const animatedHeight = useTransform(
  scrollYProgress,
  [0.2, 0.8],
  ['30vh', '50vh']
);
  const sideWidth = useTransform(scrollYProgress, [0.2, 0.8], ['200px', '20vw']);
  const centerWidth = useTransform(scrollYProgress, [0.2, 0.8], ['200px', '80vw']);
  const sideHeight = useTransform(scrollYProgress, [0.2, 0.8], ['30vh', '50vh']);
  const centerHeight = useTransform(scrollYProgress, [0.2, 0.8], ['30vh', '50vh']);
 
  return (
    <AnimatePresence>
      {revealed && (
          <div className="relative bg-white" style={{ height: '150vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
    width: animatedWidth,
    height: animatedHeight,
  }}
          className="sticky  top-40 left-0 right-0 z-50 flex justify-center mx-auto gap-2 md:gap-4 lg:gap-6 pointer-events-auto"
        >
          {pastThreshold ? (
            slides.map((slide, index) => {
              const isHovered = hovered === index || (hovered === null && index === 1);
 
              return (
                <div
                  key={slide.id}
                  className={`
                    bg-gradient-to-r ${slide.gradient}
                    rounded-2xl
                    transition-all duration-500 ease-in-out
                    cursor-pointer
                    overflow-hidden
                    flex-shrink-0
                    flex flex-col
                    ${isHovered ? "flex-[3]" : "flex-[1]"}
                  `}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {isHovered ? (
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-2xl font-light text-white mb-3">{slide.title}</h2>
                        <ul className="space-y-1">
                          {slide.items.map((item, i) => (
                            <li key={i} className="text-white/90 text-base flex items-center space-x-2">
                              <span className="w-2 h-2 bg-white rounded-full inline-block" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
 
                      <div className="bg-white rounded-lg shadow-lg p-3 mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sm text-gray-900">
                            {slide.placeholder.title}
                          </h3>
                        </div>
 
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
                              {slide.placeholder.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="text-xs text-gray-500 mb-1 flex space-x-2">
                                <span>{slide.placeholder.user}</span>
                                <span>{slide.placeholder.time}</span>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {slide.placeholder.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm">
                          Start a new conversation with Devin
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <h2 className="text-white text-lg font-light px-2 text-center">
                        {slide.title}
                      </h2>
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <>
             <>
  <motion.div
    style={{ width: sideWidth, height: sideHeight }}
    className="group flex items-center justify-center border border-white rounded-md shadow-lg
      bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
  >
    <Code className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
  </motion.div>
 
  <motion.div
    style={{ width: centerWidth, height: centerHeight }}
    className="group flex items-center justify-center border border-white rounded-md shadow-lg
      bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
  >
    <Cpu className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
  </motion.div>
 
  <motion.div
    style={{ width: sideWidth, height: sideHeight }}
    className="group flex items-center justify-center border border-white rounded-md shadow-lg
      bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 transition-all duration-500"
  >
    <Bug className="w-12 h-12 text-slate-400 group-hover:text-white transition-colors duration-500" />
  </motion.div>
</>
 
            </>
          )}
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
 
//
// Main Page
//
export default function DevinUIPreview() {
  const [revealed, setRevealed] = useState(false);
  const triggerRef = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => {
      if (!triggerRef.current) return;
      const triggerTop = triggerRef.current.getBoundingClientRect().top;
      const triggerGlobalTop = window.scrollY + triggerTop;
 
      if (window.scrollY + window.innerHeight / 2 > triggerGlobalTop) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <>
    <div className="relative bg-white ">
      <GridCards triggerRef={triggerRef} revealed={revealed} />
      <StackedOverlay revealed={revealed} />
    </div>
 
    </>
  );
}
 