
"use client";
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SalesforceHero from "@/components/homepage/salesforce-hero";


import StackedSlider from "@/components/homepage/StackedSlider";
import { LogoMarqueeSection } from "@/components/homepage/SlidingLogos";
import ServiceCards from "@/components/homepage/ServiceCards";
import DevWorkspace from "@/components/homepage/DevWorkspace";
import DevinUIPreview from "@/components/homepage/DevUI";
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/homepage/google-gemini-effect";
import CompetitiveAdvantages from "@/components/homepage/adv";
import TestimonialSection from "@/components/homepage/testimonials";
import { AITransformationFlow } from "@/components/homepage/ai-transformation-flow";





export default function HomePage() {
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSixth = useTransform(scrollYProgress, [0, 0.8], [-0.05, 1.2]);

  return (
    <div className="min-h-screen bg-white">
     
     
     

     

      {/* <div className="min-h-screen bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip">
        <GoogleGeminiEffect />
      </div> */}
      <AITransformationFlow />

     

      <StackedSlider />
      <ServiceCards />
      <DevWorkspace />
      {/* <CompetitiveAdvantages /> */}
      <DevinUIPreview />
      {/* <LogoMarqueeSection /> */}
      <TestimonialSection />
      
      
      
    </div>
  );
}




// "use client";
// import { useScroll, useTransform } from "motion/react";
// import React from "react";
// import { GoogleGeminiEffect } from "../components/homepage/google-gemini-effect";
// import StackedSlider from "@/components/homepage/StackedSlider";
// import ServiceCards from "@/components/homepage/ServiceCards";
// import DevWorkspace from "@/components/homepage/DevWorkspace";
// import DevinUIPreview from "@/components/homepage/DevUI";
// import TestimonialSection from "@/components/homepage/testimonials";

// export default function GoogleGeminiEffectDemo() {
//   const ref = React.useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
//   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
//   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
//   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
//   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

//   return (
//     <div
//       className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
//       ref={ref}
//     >
//       <GoogleGeminiEffect
//         pathLengths={[
//           pathLengthFirst,
//           pathLengthSecond,
//           pathLengthThird,
//           pathLengthFourth,
//           pathLengthFifth,
//         ]}
//       />

//             <StackedSlider />
//       <ServiceCards />
//       <DevWorkspace />
//       {/* <CompetitiveAdvantages /> */}
//       <DevinUIPreview />
//       {/* <LogoMarqueeSection /> */}
//       <TestimonialSection />
//     </div>
//   );
// }
