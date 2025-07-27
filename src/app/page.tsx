
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
     
     
     

     

      <div className="min-h-screen bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip">
        <GoogleGeminiEffect />
      </div>

     

      <StackedSlider />
      <ServiceCards />
      <DevWorkspace />
      {/* <CompetitiveAdvantages /> */}
      <DevinUIPreview />
      <LogoMarqueeSection />
      
      
      
    </div>
  );
}
