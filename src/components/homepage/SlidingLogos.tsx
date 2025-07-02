// import React from 'react';

// const FullImageComponent = () => {
//   return (
//     <div className="relative w-full  h-screen  flex flex-col items-center justify-center">
//       <div className="text-center">
//         <p className="text-gray-600 text-2xl mb-2">Industry leaders choose to</p>
//         <h1 className="text-7xl  my-6">
//           <span>Build with </span>
//           <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
//             Devin
//           </span>
//         </h1>
//         <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mt-2 font-semibold text-xl">
//           Hear from our customers
//         </button>
//       </div>
//   <div className="relative w-[90%] overflow-hidden py-20 mt-10 ">
//   <div className="marquee-track flex space-x-16">
//     {[...Array(2)].flatMap(() =>
//       [
//         { src: '/lt-logo.png', alt: 'LT Logo' },
//         { src: '/hg-logo.png', alt: 'Hg Logo' },
//         { src: '/wevnal-logo.png', alt: 'Wevnal Logo' },
//         { src: '/cloud-ace-logo.png', alt: 'Cloud Ace Logo' },
//         { src: '/origin-logo.png', alt: 'Origin Logo' },
//       ].map((logo, index) => (
//         <div
//           key={`${logo.alt}-${index}`}
//           className="flex flex-col items-center min-w-[180px] text-center opacity-70 hover:opacity-100 transition-opacity duration-300"
//         >
//           <img
//             src={logo.src}
//             alt={logo.alt}
//             className="h-24 w-auto mb-2"
//           />
          
//         </div>
//       ))
//     )}
//   </div>

//   <style jsx>{`
//     .marquee-track {
//       animation: marquee 30s linear infinite;
//       display: flex;
//       width: max-content;
//     }
//     @keyframes marquee {
//       0% {
//         transform: translateX(0%);
//       }
//       100% {
//         transform: translateX(-50%);
//       }
//     }
//   `}</style>
// </div>

//     </div>
//   );
// };

// export default FullImageComponent;


import { Marquee } from "@/components/magicui/marquee"; // adjust to your project

const logos = [
  { src: '/lt-logo.png', name: 'LT Logo' },
  { src: '/hg-logo.png', name: 'Hg Logo' },
  { src: '/wevnal-logo.png', name: 'Wevnal Logo' },
  { src: '/cloud-ace-logo.png', name: 'Cloud Ace Logo' },
  { src: '/origin-logo.png', name: 'Origin Logo' },
];

const LogoCard = ({ src, name }) => (
  <div className="flex flex-col items-center min-w-[150px] sm:min-w-[180px] lg:min-w-[200px] text-center opacity-70 hover:opacity-100 transition-opacity duration-300">
   
    <span className="text-2xl font-semibold text-black">{name}</span>
  </div>
);

export function LogoMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 mt-10 ">
      {/* ✅ Header over the Marquee */}
      <div className="text-center mb-12 px-4">
        <p className="text-gray-400 text-lg sm:text-2xl mb-2">
          Industry leaders choose to
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl my-4 font-bold">
          <span>Build with </span>
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Devin
          </span>
        </h1>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mt-4 font-semibold text-lg sm:text-xl">
          Hear from our customers
        </button>
      </div>
<div className="relative">
      {/* ✅ Edge gradient fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      {/* ✅ Marquee */}
      <Marquee
        pauseOnHover
        className="[--duration:30s] px-4 sm:px-8"
      >
        {logos.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </Marquee>
      </div>
    </section>
  );
}
