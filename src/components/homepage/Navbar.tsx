// // "use client"

// // import { useState, useEffect } from "react"
// // import { ChevronDown, Menu, X } from "lucide-react"
// // import { Button } from "@/components/ui/button"

// // const navigationItems = [
// //   { name: "Home", href: "/", active: true },
// //   { name: "Enterprise", href: "/enterprise" },
// //   { name: "Pricing", href: "/pricing" },
// //   { name: "Customers", href: "/customers" },
// //   { name: "About us", href: "/about", hasDropdown: true },
// //   { name: "Careers", href: "/careers", hasDropdown: true },
// //   { name: "Blog", href: "/blog", hasDropdown: true },
// //   { name: "Contact", href: "/contact", hasDropdown: true },
// //   { name: "Docs", href: "/docs", hasDropdown: true },
// //   { name: "Login", href: "/login", hasDropdown: true },
// //   { name: "Get Started", href: "/get-started", isButton: true },
// // ]

// // export default function Navbar() {
// //   const [isScrolled, setIsScrolled] = useState(false)
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10)
// //     }

// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   return (
// //     <div className="fixed top-4 left-0 right-0 z-50 px-4">
// //       <div className="max-w-7xl mx-auto flex items-center gap-2">
// //         {/* Logo */}
// //         <div className="flex items-center">
// //           <div
// //             className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
// //               isScrolled ? "shadow-xl scale-95" : "shadow-lg scale-100"
// //             }`}
// //           >
// //             <svg
// //               className="w-7 h-7 text-white"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
// //             </svg>
// //           </div>
// //         </div>

// //         {/* Menu Container */}
// //         <div
// //           className={`transition-all duration-300 backdrop-blur-sm ${
// //             isScrolled
// //               ? "bg-white dark:bg-gray-900 shadow-lg"
// //               : "bg-white dark:bg-gray-900 shadow-md"
// //           } flex-1`}
// //           style={{
// //             borderRadius: "32px",
// //             border: "1px solid rgba(255, 255, 255, 0.1)",
// //           }}
// //         >
// //           <div className="px-6 py-2">
// //             {/* Desktop Navigation */}
// //             <div className="hidden md:flex items-center space-x-1">
// //               {navigationItems.map((item) => (
// //                 <div key={item.name}>
// //                   {item.isButton ? (
// //                     <Button
// //                       className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
// //                     >
// //                       <a href={item.href}>{item.name}</a>
// //                     </Button>
// //                   ) : (
// //                     <a
// //                       href={item.href}
// //                       className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
// //                         item.active
// //                           ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
// //                           : "text-black dark:text-white hover:text-black dark:hover:text-white"
// //                       }`}
// //                     >
// //                       {item.active && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
// //                       <span>{item.name}</span>
// //                       {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
// //                     </a>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <div className="md:hidden">
// //               <Button
// //                 variant="ghost"
// //                 size="sm"
// //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //                 className="text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
// //               >
// //                 {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Mobile Menu */}
// //           {isMobileMenuOpen && (
// //             <div className="md:hidden px-6 pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
// //               <div className="flex flex-col space-y-2 pt-4">
// //                 {navigationItems.map((item) => (
// //                   <div key={item.name}>
// //                     {item.isButton ? (
// //                       <Button
// //                         className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
// //                       >
// //                         <a href={item.href}>{item.name}</a>
// //                       </Button>
// //                     ) : (
// //                       <a
// //                         href={item.href}
// //                         className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
// //                           item.active
// //                             ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
// //                             : "text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
// //                         }`}
// //                       >
// //                         <div className="flex items-center space-x-2">
// //                           {item.active && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
// //                           <span>{item.name}</span>
// //                         </div>
// //                         {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
// //                       </a>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import { ChevronDown, Menu, X } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const leftNavItems = [
//   { name: "Home", href: "/", active: true },
//   { name: "About us", href: "/about" },
//   { name: "Pricing", href: "/pricing" },
//   { name: "Customers", href: "/customers" },
// ]

// // const centerNavItems = [
// //   { name: "About us", href: "/about", hasDropdown: true },
// //   { name: "Careers", href: "/careers", hasDropdown: true },
// //   { name: "Blog", href: "/blog", hasDropdown: true },
// //   { name: "Contact", href: "/contact", hasDropdown: true },
// //   { name: "Docs", href: "/docs", hasDropdown: true },
// // ]

// // const rightNavItems = [
// //   { name: "Login", href: "/login", hasDropdown: true },
// //   { name: "Get Started", href: "/get-started", isButton: true },
// // ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const renderNavItem = (item: any) => (
//     <div key={item.name}>
//       {item.isButton ? (
//         <Button
//           className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200"
//         >
//           <a href={item.href}>{item.name}</a>
//         </Button>
//       ) : (
//         <a
//           href={item.href}
//           className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
//             item.active
//               ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
//               : "text-black dark:text-white hover:text-black dark:hover:text-white"
//           }`}
//         >
//           {item.active && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
//           <span>{item.name}</span>
//           {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
//         </a>
//       )}
//     </div>
//   )

//   return (
//     <div className="fixed top-7 left-0 right-0 z-60 px-4 w-full">
//       <div className="max-w-7xl mx-auto flex items-center gap-2">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div
//             className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
//               isScrolled ? "shadow-xl scale-95" : "shadow-lg scale-100"
//             }`}
//           >
//             <svg
//               className="w-7 h-7 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//           </div>
//         </div>

//         {/* Menu Container */}
//         <div
//           className={`transition-all duration-300 backdrop-blur-sm ${
//             isScrolled
//               ? "bg-transparent dark:bg-gray-900 shadow-lg"
//               : "bg-transparent dark:bg-gray-900 shadow-md"
//           } flex-1`}
//           style={{
//             borderRadius: "32px",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//           }}
//         >
//           <div className="px-6 py-2">
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center justify-between w-full space-x-8">
//               {/* Left group */}
//               <div className="flex items-center space-x-1">
//                 {leftNavItems.map(renderNavItem)}
//               </div>
             
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-black dark:text-white hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
//               >
//                 {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </Button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden px-6 pb-4 border-t border-gray-200 dark:border-gray-700 mt-2">
//               <div className="flex flex-col space-y-4 pt-4">
//                 {/* {[leftNavItems, centerNavItems, rightNavItems].map((group, idx) => (
//                   <div key={idx} className="flex flex-col space-y-2">
//                     {group.map(renderNavItem)}
//                     {idx < 2 && <hr className="my-3 border-gray-200 dark:border-gray-700" />}
//                   </div>
//                 ))} */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"
// Add this import at the top
import { SECTION_CONFIG, getSectionBoundaries } from "@/lib/navbar-config"

interface NavigationItem {
  name: string
  href: string
  active?: boolean
  hasDropdown?: boolean
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Pricing", href: "/pricing" },
]

type ScrollState = "dark" | "white"

export default function Navbar() {
  const [scrollState, setScrollState] = useState<ScrollState>("dark")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const [activeTheme, setActiveTheme] = useState<"white" | "dark">("dark");
/* useEffect(() => {
  function checkVisibleSectionsAndSetTheme() {
    const sections = document.querySelectorAll("section[data-nav-theme]");

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      if (
        rect.top >= window.innerHeight * 0.3 &&
        rect.top <= window.innerHeight * 0.7
      ) {
        const theme = section.getAttribute("data-nav-theme") as "white" | "dark";
        console.log('theme',section,theme)
        setActiveTheme(theme); // ✅ Update state
        break; // Stop at the first matching section
      }
    }
  }

  function onScroll() {
    checkVisibleSectionsAndSetTheme();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  checkVisibleSectionsAndSetTheme(); // Run once on mount

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []); */

/* useEffect(() => {
  function checkVisibleSectionsAndSetTheme() {
    const sections = document.querySelectorAll("section[data-nav-theme]");

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      // Check if the section top is near the top of the viewport (within 50px)
      if (rect.top >= 0 && rect.top <= 50) {
        const theme = section.getAttribute("data-nav-theme") as "white" | "dark";
        setActiveTheme(theme);
        break; // Stop after the first match
      }
    }
  }

  function onScroll() {
    checkVisibleSectionsAndSetTheme();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  checkVisibleSectionsAndSetTheme(); // Initial check on mount

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []); */


useEffect(() => {
  let lastScrollY = window.scrollY;

  function checkVisibleSectionsAndSetTheme() {
    const sections = document.querySelectorAll("section[data-nav-theme]");
    const scrollDown = window.scrollY > lastScrollY;
    lastScrollY = window.scrollY;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();

      const topTouchesTop = rect.top >= 0 && rect.top <= 50;
      const bottomTouchesTop = rect.bottom >= 0 && rect.bottom <= 50;

      if (scrollDown && topTouchesTop) {
        const theme = section.getAttribute("data-nav-theme") as "white" | "dark";
        setActiveTheme(theme);
        break;
      }

      if (!scrollDown && bottomTouchesTop) {
        const theme = section.getAttribute("data-nav-theme") as "white" | "dark";
        setActiveTheme(theme);
        break;
      }
    }
  }

  function onScroll() {
    checkVisibleSectionsAndSetTheme();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  checkVisibleSectionsAndSetTheme(); // Initial call

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);





  // Replace the handleScroll function with this cleaner version:
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const boundaries = getSectionBoundaries()
        /* console.log(scrollY,boundaries)
         if (scrollY >= boundaries.hero.start && scrollY < boundaries.hero.end) {
          setScrollState("white")
        } else if (scrollY >= boundaries.stackedSlider.start && scrollY < boundaries.stackedSlider.end) {
         setScrollState("dark")
        } else if (scrollY >= boundaries.serviceCards.start && scrollY < boundaries.serviceCards.end) {
          setScrollState("dark")
        } else if (
          scrollY >= boundaries.competitiveAdvantages.start &&
          scrollY < boundaries.competitiveAdvantages.end
        ) {
          setScrollState("white")
        } else {
         setScrollState("white")
        } */

        // Determine navbar state based on current scroll position
        /* if (scrollY >= boundaries.hero.start && scrollY < boundaries.hero.end) {
          setScrollState(SECTION_CONFIG.hero.navbarState)
        } else if (scrollY >= boundaries.stackedSlider.start && scrollY < boundaries.stackedSlider.end) {
          setScrollState(SECTION_CONFIG.stackedSlider.navbarState)
        } else if (scrollY >= boundaries.serviceCards.start && scrollY < boundaries.serviceCards.end) {
          setScrollState(SECTION_CONFIG.serviceCards.navbarState)
        } else if (
          scrollY >= boundaries.competitiveAdvantages.start &&
          scrollY < boundaries.competitiveAdvantages.end
        ) {
          setScrollState(SECTION_CONFIG.competitiveAdvantages.navbarState)
        } else {
          setScrollState(SECTION_CONFIG.logoMarquee.navbarState)
        } */

        setIsScrolled(scrollY > 20)
        lastScrollY.current = scrollY
        ticking.current = false
      })
      ticking.current = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const updateActiveItem = () => {
      const currentPath = window.location.pathname
      const currentHash = window.location.hash

      if (currentPath === "/" && !currentHash) {
        setActiveItem("Home")
      } else if (currentHash === "#services") {
        setActiveItem("Services")
      } else if (currentPath === "/aboutus") {
        // Changed from "/about" to "/aboutus"
        setActiveItem("About")
      } else if (currentPath === "/pricing") {
        setActiveItem("Pricing")
      }
    }

    updateActiveItem()
    window.addEventListener("hashchange", updateActiveItem)
    window.addEventListener("popstate", updateActiveItem)

    return () => {
      window.removeEventListener("hashchange", updateActiveItem)
      window.removeEventListener("popstate", updateActiveItem)
    }
  }, [])

  // const isDark = scrollState === "dark";
    const isDark = activeTheme == "dark";
console.log(activeTheme,isDark)
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (itemName: string) => {
    setActiveItem(itemName)
    setIsMobileMenuOpen(false)
  }

  const NavItem = ({ item, isMobile = false }: { item: NavigationItem; isMobile?: boolean }) => {
    const isActive = activeItem === item.name

    return (
      <div className="group relative">
        <a
          href={item.href}
          onClick={(e) => {
            handleNavClick(item.name)
            // Smooth scroll for hash links
            if (item.href.startsWith("#")) {
              e.preventDefault()
              const element = document.querySelector(item.href)
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
                window.history.pushState(null, "", item.href)
              }
            }
          }}
          className={cn(
            "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden",
            "hover:scale-105 active:scale-95",
            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent",
            isMobile ? "justify-between w-full rounded-xl py-3" : "",
            isDark
              ? isActive
                ? "bg-white/20 backdrop-blur-xl text-white shadow-lg"
                : "text-white/80 hover:text-white hover:bg-white/10"
              : isActive
                ? "bg-black/10 backdrop-blur-xl text-gray-900 shadow-lg"
                : "text-gray-600 hover:text-gray-900 hover:bg-black/5",
          )}
          aria-current={isActive ? "page" : undefined}
        >
          <div className="flex items-center space-x-2">
            {isActive && (
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse shadow-sm" />
            )}
            <span className="relative z-10">{item.name}</span>
          </div>
          {item.hasDropdown && (
            <ChevronDown className="w-3 h-3 text-current opacity-60 group-hover:opacity-100 transition-opacity" />
          )}

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </a>
      </div>
    )
  }

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center group">
            <a
              href="/"
              className={cn(
                "relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110",
                "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent",
                isScrolled ? "shadow-2xl" : "shadow-xl",
              )}
              aria-label="NCoderAI Home"
            >
              <Image
                src="/images/ncodericon.jpg?height=48&width=48&text=AI"
                alt="NCoderAI"
                width={64}
                height={64}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110 rounded-2xl"
              />

              {/* Animated background */}
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </a>
          </div>

          {/* Main Navigation Container */}
          <div
            ref={mobileMenuRef}
            className={cn(
              "relative transition-all duration-500 backdrop-blur-xl border border-white/10 rounded-2xl group flex-1 shadow-2xl",
              isDark ? "bg-gray-900/30 hover:bg-gray-900/40" : "bg-white/30 hover:bg-white/40",
              "flex items-center justify-between px-6 py-3",
              isScrolled ? "shadow-2xl border-white/20" : "shadow-xl",
            )}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-full">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-between w-full">
                <div className="flex items-center space-x-1">
                  {/* {activeTheme} */}
                  {navigationItems.map((item) => (
                    <NavItem key={item.name} item={item} />
                  ))}
                </div>

                <Button
                  className={cn(
                    "relative overflow-hidden px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 group/btn",
                    "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent",
                    "hover:from-purple-700 hover:to-blue-700",
                  )}
                  aria-label="Book a consultation call"
                >
                  <Phone className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
                  <span className="relative z-10">Book a Call</span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center justify-between w-full">
                <span className={cn("text-sm font-semibold", isDark ? "text-white" : "text-gray-900")}>Menu</span>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMobileMenu}
                  className={cn(
                    "relative p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent",
                    isDark ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-black/10",
                  )}
                  aria-expanded={isMobileMenuOpen}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <div className="relative">
                    <Menu
                      className={cn(
                        "w-5 h-5 transition-all duration-300",
                        isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
                      )}
                    />
                    <X
                      className={cn(
                        "w-5 h-5 absolute inset-0 transition-all duration-300",
                        isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
                      )}
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute top-20 left-4 right-4 transition-all duration-500 transform-gpu",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none",
          )}
        >
          <div
            className={cn(
              "px-6 py-6 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl",
              isDark ? "bg-gray-900/40" : "bg-white/40",
            )}
          >
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item, idx) => (
                <div
                  key={item.name}
                  className="animate-fade-in-up"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <NavItem item={item} isMobile />
                </div>
              ))}

              <div
                className="animate-fade-in-up pt-4 border-t border-white/10"
                style={{
                  animationDelay: `${navigationItems.length * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <Button
                  className={cn(
                    "w-full relative overflow-hidden px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group/btn",
                    "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl",
                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
                  <span className="relative z-10">Book a Call</span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add required CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>
    </>
  )
}
