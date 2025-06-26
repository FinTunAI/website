"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { name: "Home", href: "/", active: true },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Customers", href: "/customers" },
  { name: "About us", href: "/about", hasDropdown: true },
  { name: "Careers", href: "/careers", hasDropdown: true },
  { name: "Blog", href: "/blog", hasDropdown: true },
  { name: "Contact", href: "/contact", hasDropdown: true },
  { name: "Docs", href: "/docs", hasDropdown: true },
  { name: "Login", href: "/login", hasDropdown: true },
  { name: "Get Started", href: "/get-started", isButton: true },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto flex items-center gap-2">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
              isScrolled ? "shadow-xl scale-95" : "shadow-lg scale-100"
            }`}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Menu Container */}
        <div
          className={`transition-all duration-300 backdrop-blur-sm ${
            isScrolled
              ? "bg-white dark:bg-gray-900 shadow-lg"
              : "bg-white dark:bg-gray-900 shadow-md"
          } flex-1`}
          style={{
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="px-6 py-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.isButton ? (
                    <Button
                      className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <a href={item.href}>{item.name}</a>
                    </Button>
                  ) : (
                    <a
                      href={item.href}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        item.active
                          ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                          : "text-black dark:text-white hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {item.active && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-6 pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
              <div className="flex flex-col space-y-2 pt-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.isButton ? (
                      <Button
                        className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                      >
                        <a href={item.href}>{item.name}</a>
                      </Button>
                    ) : (
                      <a
                        href={item.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          item.active
                            ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                            : "text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {item.active && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
                          <span>{item.name}</span>
                        </div>
                        {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}