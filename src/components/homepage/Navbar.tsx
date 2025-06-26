// import React, { useState, useEffect } from 'react';
// import { Button } from '../ui/button';
// import { Brain } from 'lucide-react';

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center space-x-8">
//             {/* Logo and Brand */}
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Brain className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">FinTun AI</span>
//             </div>
//             {/* Menu Links */}
//             <div className="hidden md:flex items-center space-x-6">
//               <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
//                 Home
//               </a>
//               <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
//                 About
//               </a>
//             </div>
//           </div>
//           {/* Right-side Actions */}
//           <div className="flex items-center space-x-4">
//             <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium">
//               Join the Waitlist
//             </Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Brain } from 'lucide-react';
import Image from 'next/image'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 backdrop-blur-md rounded-xl shadow-md px-6 py-2 max-w-7xl w-full mx-4 ${
          scrolled ? 'bg-white/80 border border-gray-200' : 'bg-gray-800/60'
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                FinTun AI
              </span> */}
                           
              <Image
  src="/images/fintunai.png"
  alt="FinTun AI Logo"
  width={36}
  height={36}
  className="rounded-md"
/>
<span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
  FinTun AI
</span>
             

            </div>

            {/* Menu Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`font-medium transition-colors ${
                  scrolled ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
                }`}
              >
                About
              </a>
            </div>
          </div>

          {/* Right-side Button */}
          <div className="flex items-center space-x-4">
            <Button
              className={`font-medium rounded-md ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-black'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
