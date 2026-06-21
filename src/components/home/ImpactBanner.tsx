"use client";

import React from "react";
import { motion } from "framer-motion";

const ImpactBanner = () => {
  // Animation settings for the one-time transition when scrolled into view
  const duration = 0.8;
  const ease = [0.16, 1, 0.3, 1] as any; // Smooth custom cubic bezier

  // Static target positions for the merged state (since animation is one-shot whileInView)
  const leftXVal = 230;
  const rightXVal = 370;

  const leftTextXVal = 165;
  const rightTextXVal = 435;

  return (
    <section className="w-full bg-[#E3C0FF] flex flex-col items-center justify-center py-8 px-4 relative overflow-hidden">
      
      {/* Decorative Corner Icons - Positioned Outside the Rectangle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-24 h-24 md:w-36 md:h-36 z-0 pointer-events-none"
      >
        <img src="/empower-2.png" alt="Skills Icon" className="w-full h-full object-contain opacity-40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-24 h-24 md:w-36 md:h-36 z-0 pointer-events-none"
      >
        <img src="/empower-1.png" alt="Women Icon" className="w-full h-full object-contain opacity-40" />
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-center gap-4 z-10 relative">

        {/* Title Section */}
        <div className="text-center mb-1">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] md:text-[34px] lg:text-[42px] font-montserrat font-bold leading-[1.1] text-[#191919] max-w-[800px] mx-auto tracking-tight"
          >
            Empowering Women Through <br className="hidden md:block" />
            <span className="text-[#AE75DA]">Skills & Opportunities</span>
          </motion.h2>
        </div>

        {/* The Graphic Rounded Box - Made Smaller and padding reduced */}
        <div className="relative w-full max-w-[580px] aspect-[1.7/1] flex items-center justify-center">
          <div
            className="w-full h-full border-[3px] border-[#191919] rounded-[24px] md:rounded-[32px] flex flex-col items-center justify-center bg-white p-2 relative overflow-hidden shadow-md"
          >
            {/* Venn Diagram SVG Container */}
            <div className="relative w-full h-full">
              <svg viewBox="0 0 600 350" className="w-full h-full overflow-visible">
                <defs>
                  {/* Clip path from the left circle shape */}
                  <clipPath id="leftCircleClip">
                    <motion.circle 
                      initial={{ cx: 150 }}
                      whileInView={{ cx: leftXVal }}
                      viewport={{ once: true }}
                      transition={{ duration, ease }}
                      cy="175" 
                      r="135" 
                    />
                  </clipPath>
                </defs>

                {/* Left Circle White Fill */}
                <motion.circle 
                  initial={{ cx: 150 }}
                  whileInView={{ cx: leftXVal }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  cy="175" 
                  r="135" 
                  fill="#FFF" 
                />

                {/* Right Circle White Fill */}
                <motion.circle 
                  initial={{ cx: 450 }}
                  whileInView={{ cx: rightXVal }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  cy="175" 
                  r="135" 
                  fill="#FFF" 
                />

                {/* Overlap Lens Purple Fill (clipped by Left Circle) */}
                <motion.circle 
                  initial={{ cx: 450 }}
                  whileInView={{ cx: rightXVal }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  cy="175" 
                  r="135" 
                  fill="#AE75DA" 
                  clipPath="url(#leftCircleClip)" 
                />

                {/* Left Circle Outline */}
                <motion.circle 
                  initial={{ cx: 150 }}
                  whileInView={{ cx: leftXVal }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  cy="175" 
                  r="135" 
                  fill="none" 
                  stroke="#191919" 
                  strokeWidth="3" 
                />

                {/* Right Circle Outline */}
                <motion.circle 
                  initial={{ cx: 450 }}
                  whileInView={{ cx: rightXVal }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  cy="175" 
                  r="135" 
                  fill="none" 
                  stroke="#191919" 
                  strokeWidth="3" 
                />

                {/* Left Circle Content: Women Face Icon + Text */}
                <motion.foreignObject
                  initial={{ x: 150 - 60 }}
                  whileInView={{ x: leftTextXVal - 60 }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  y="115"
                  width="120"
                  height="120"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full gap-1 select-none pointer-events-none">
                    <img src="/empower-1.png" alt="Women" className="w-14 h-14 object-contain opacity-95" />
                    <span className="font-inter font-bold text-[#191919] text-[18px] md:text-[20px] leading-none">
                      Women
                    </span>
                  </div>
                </motion.foreignObject>

                {/* Right Circle Content: Skills Gear/Book Icon + Text */}
                <motion.foreignObject
                  initial={{ x: 450 - 60 }}
                  whileInView={{ x: rightTextXVal - 60 }}
                  viewport={{ once: true }}
                  transition={{ duration, ease }}
                  y="115"
                  width="120"
                  height="120"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full gap-1 select-none pointer-events-none">
                    <img src="/empower-2.png" alt="Skills" className="w-14 h-14 object-contain opacity-95" />
                    <span className="font-inter font-bold text-[#191919] text-[18px] md:text-[20px] leading-none">
                      Skills
                    </span>
                  </div>
                </motion.foreignObject>
              </svg>

              {/* Absolute Center Content: Even Skills Academy */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="w-[110px] md:w-[140px] text-center"
                >
                  <span className="text-white font-montserrat font-bold text-[12px] md:text-[15px] leading-[1.25] block">
                    Even Skills
                  </span>
                  <span className="text-white font-montserrat font-bold text-[12px] md:text-[15px] leading-[1.25] block">
                    Academy
                  </span>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
