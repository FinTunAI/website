import React from 'react';

const FullImageComponent = () => {
  return (
    <div className="relative w-full bg-gray-100 py-12 flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 text-sm mb-2">Industry leaders choose to</p>
        <h1 className="text-5xl font-bold mb-6">
          <span>Build with </span>
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Devin
          </span>
        </h1>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Hear from our customers
        </button>
      </div>
      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex animate-scroll space-x-16">
          {[
            { src: '/lt-logo.png', alt: 'LT Logo' },
            { src: '/hg-logo.png', alt: 'Hg Logo' },
            { src: '/wevnal-logo.png', alt: 'Wevnal Logo' },
            { src: '/cloud-ace-logo.png', alt: 'Cloud Ace Logo' },
            { src: '/origin-logo.png', alt: 'Origin Logo' },
          ].concat([
            { src: '/lt-logo.png', alt: 'LT Logo' },
            { src: '/hg-logo.png', alt: 'Hg Logo' },
            { src: '/wevnal-logo.png', alt: 'Wevnal Logo' },
            { src: '/cloud-ace-logo.png', alt: 'Cloud Ace Logo' },
            { src: '/origin-logo.png', alt: 'Origin Logo' },
          ]).map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300"
              style={{ minWidth: '120px' }}
            />
          ))}
        </div>
        <style jsx>{`
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default FullImageComponent;