"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";

interface PlaceholderData {
  title: string;
  user: string;
  time: string;
  message: string;
  avatar: string;
  hasChart?: boolean;
}

interface SlideItem {
  title: string;
  description: string;
}

interface Slide {
  id: number;
  title: string;
  items: SlideItem[];
  gradient: string;
  placeholder: PlaceholderData;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Assisted Factoring",
    items: [
      {
        title: "Legacy System Modernization",
        description: "Transform outdated applications into AI-native platforms",
      },
      {
        title: "Automated Code Analysis & Refactoring",
        description:
          "Intelligent code transformation with compliance-first architecture",
      },
      {
        title: "Digital Twin Simulation",
        description: "Test modernization strategies before implementation",
      },
      {
        title: "Outcome",
        description: "30–50% faster modernization cycles",
      },
    ],
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
    title: "Assisted Coding",
    items: [
      {
        title: "AI-Augmented Development",
        description: "Context-aware code generation and multi-agent workflows",
      },
      {
        title: "Low-Code/No-Code Interfaces",
        description: "Streamlined development for all skill levels",
      },
      {
        title: "Real-Time Collaboration",
        description: "Zero-setup development environments",
      },
      {
        title: "Outcome",
        description: "3x faster development cycles, 60% fewer bugs",
      },
    ],
    gradient: "from-blue-500 to-teal-400",
    placeholder: {
      title: "build a collaborative IDE",
      user: "Dev",
      time: "Sep 10, 2024, 10:22 AM",
      message:
        "Create a collaborative web IDE that integrates AI-driven code suggestions and supports multiple users editing simultaneously.",
      avatar: "D",
    },
  },
];

const SLIDE_DURATION = 4000;
const PROGRESS_UPDATE_INTERVAL = 100;

export default function StackedSlider(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number): void => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (SLIDE_DURATION / PROGRESS_UPDATE_INTERVAL);
        if (prev >= 100) {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          return 0;
        }
        return Math.min(prev + increment, 100);
      });
    }, PROGRESS_UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-10 pt-30">
      <h1 className="text-7xl font-light">Solution Section</h1>
      <p className="mt-10 text-xl mb-20 max-w-md">
        AI-Native Platform for Enterprise Modernization
      </p>

      <div className="flex gap-4 h-[600px]">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === currentSlide;
          const isVisible =
            Math.abs(slideIndex - currentSlide) <= 1 ||
            (currentSlide === 0 && slideIndex === slides.length - 1) ||
            (currentSlide === slides.length - 1 && slideIndex === 0);

          return (
            <div
              key={slide.id}
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
                  hoverTimeout.current = setTimeout(
                    () => goToSlide(slideIndex),
                    300
                  );
                }
              }}
              onMouseLeave={() => {
                if (hoverTimeout.current) {
                  clearTimeout(hoverTimeout.current);
                  hoverTimeout.current = null;
                }
              }}
              role="button"
              tabIndex={!isActive ? 0 : -1}
              onKeyDown={(e) => {
                if (!isActive && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  goToSlide(slideIndex);
                }
              }}
              aria-label={`${isActive ? "Current slide" : "Go to slide"}: ${
                slide.title
              }`}
            >
              {isActive ? (
                <div className="h-full flex items-center relative px-6 py-8">
                  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="text-white space-y-6">
                      <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                        {slide.title}
                      </h2>
                      <ul className="space-y-4">
                        {slide.items.map((item) => (
                          <li
                            key={item.title}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-white rounded-full relative top-1" />
                            <div>
                              <div className="text-lg font-medium leading-tight">
                                {item.title}
                              </div>
                              <div className="text-sm opacity-90 leading-snug">
                                {item.description}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center">
                      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-medium text-sm text-gray-900">
                            {slide.placeholder.title}
                          </h3>
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-gray-300 rounded-full" />
                            <div className="w-3 h-3 bg-gray-300 rounded-full" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center font-semibold">
                              {slide.placeholder.avatar}
                            </div>
                            <div>
                              <div className="text-xs text-gray-500 mb-1 flex gap-2">
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
                                <p className="text-sm font-medium">
                                  Preview {slide.id}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {slide.title}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 bg-gray-400 rounded-full" />
                              <span className="text-xs text-gray-500">
                                Session Ended
                              </span>
                            </div>
                            <div className="w-4 h-4 bg-gray-300 rounded-full" />
                          </div>
                        </div>

                        <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm">
                          Start a new conversation with nCoder.ai 
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className="w-12 h-1 bg-white/30 rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full bg-white rounded-full transition-all duration-100"
                          style={{
                            width:
                              i === currentSlide
                                ? `${progress}%`
                                : i < currentSlide
                                ? "100%"
                                : "0%",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full px-2 text-white text-xs font-semibold text-center">
                  {slide.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
