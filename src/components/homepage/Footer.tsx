// import { Button } from '../ui/button';
// import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
// import { Brain } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
//           {/* Left: Logo & Description */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
//                 <Brain className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">nCoder.ai</span>
//             </div>
//             <p className="text-gray-400 mb-4 max-w-sm">
//               Accelerate your team’s innovation with our AI-driven development tools.
//             </p>
//             <div className="flex space-x-4">
//               <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                 <Twitter className="w-5 h-5" />
//               </Button>
//               <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                 <Github className="w-5 h-5" />
//               </Button>
//               <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
//                 <Linkedin className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Middle: Join the Waitlist CTA */}
//           {/* <div className="flex justify-start md:justify-center">
//             <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-md">
//               Join the Waitlist
//             </Button>
//           </div> */}

//           {/* Right: Contact Info */}
//           <div>
//             <h3 className="font-semibold text-white mb-2">Contact</h3>
//             <a
//               href="mailto:support@fintun.ai"
//               className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors text-sm"
//             >
//               <Mail className="w-4 h-4" />
//               <span>support@fintun.ai</span>
//             </a>
//           </div>
//         </div>

//         {/* Bottom Legal */}
//         <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//           <p>© 2025 nCoder.ai. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="hover:text-white transition-colors">Terms</a>
//             <a href="#" className="hover:text-white transition-colors">Cookies</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black border-t py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        
        {/* Left: Headline */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4">
            Be the first <br />
            to build with <br />
            <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-600">
              nCoder.ai 
            </span>
          </h2>
        </div>

        {/* Right: Form CTA */}
        <div className="w-full md:w-2/3">
          <div className="relative bg-gradient-to-br from-gray-100 to-white p-[1px] rounded-xl shadow-sm">
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8">
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                Join the waitlist to access nCoder.ai before anyone else and unlock the future of autonomous software engineering.
              </p>
              <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md font-semibold hover:from-blue-700 hover:to-teal-600 transition-all shadow-md text-sm sm:text-base"
                >
                  Join the Waitlist
                  <ArrowRight size={14} className="sm:size-[16px]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="mt-12 pt-6 flex flex-col items-center md:flex-row md:justify-between text-sm text-gray-500 space-y-6 md:space-y-0">
        {/* Left: Legal Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        {/* Middle: Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn↗
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X (Twitter)↗
          </a>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center space-y-2 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gray-400" />
              <a href="mailto:support@ncoder.ai" className="hover:underline">
                support@ncoder.ai
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gray-400" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;