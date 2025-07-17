import { Marquee } from "@/components/magicui/marquee"; // adjust path if necessary
import Image from "next/image";

const logos = [
  { src: '/images/ibm.png', alt: 'IBM' },
  { src: '/images/oracle.png', alt: 'Oracle' },
  { src: '/images/SAP.png', alt: 'SAP' },
  { src: '/images/microsoft.png', alt: 'Microsoft' },
  { src: '/images/Sun_Microsystems.png', alt: 'Sun Microsystems' },
  { src: '/images/aws.png', alt: 'AWS' },
  { src: '/images/Salesforce.png', alt: 'Salesforce' },
  { src: '/images/google.png', alt: 'Google' },
  { src: '/images/react.png', alt: 'React' },
  { src: '/images/angular.png', alt: 'Angular' },
  { src: '/images/typescript.png', alt: 'TypeScript' },
];

const LogoCard = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-col items-center min-w-[150px] sm:min-w-[180px] lg:min-w-[200px] text-center opacity-70 hover:opacity-100 transition-opacity duration-300">
    <Image
      src={src}
      alt={alt}
      width={100}
      height={100}
      className="mb-2 object-contain"
    />
  </div>
);

export function LogoMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        {/* <p className="text-gray-400 text-lg sm:text-2xl mb-2">
          Trusted by Industry Leaders
        </p> */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl my-4 font-bold">
          <span>Tools we work with </span>
          {/* <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            nCoder.ai 
          </span> */}
        </h1>
        {/* <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition mt-4 font-semibold text-lg sm:text-xl">
          Hear from our customers
        </button> */}
      </div>

      {/* Gradient overlays for marquee */}
      <div className="relative mt-10 mb-16 px-4 sm:px-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-10" />
      </div>

      {/* Logo Marquee */}
      <Marquee pauseOnHover className="[--duration:30s] px-4 sm:px-8">
        {logos.map((logo, index) => (
          <LogoCard key={index} {...logo} />
        ))}
      </Marquee>
    </section>
  );
}
