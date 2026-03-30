"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImpactBanner = () => {
  return (
    <section className="w-full bg-[#EADDFF] flex flex-col items-center justify-center lg:h-[calc(100vh-80px)] min-h-[600px] py-4 px-6 relative overflow-hidden">

      {/* Decorative Corner Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-24 h-24 md:w-36 md:h-36 z-0 pointer-events-none"
      >
        <Image src="/empower-2.png" alt="Skills Icon" fill className="object-contain opacity-80" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-24 h-24 md:w-36 md:h-36 z-0 pointer-events-none"
      >
        <Image src="/empower-1.png" alt="Women Icon" fill className="object-contain opacity-80" />
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] w-full flex flex-col items-center justify-center gap-4 md:gap-6 z-10 relative">

        {/* Title Section */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[38px] lg:text-[48px] font-[900] leading-[1.1] text-[#1A1A1A] max-w-[800px] mx-auto tracking-tighter"
          >
            Empowering Women Through <br className="hidden md:block" />
            <span className="text-[#A64AED]">Skills & Opportunities</span>
          </motion.h2>
        </div>

        {/* The Graphic Rounded Box */}
        <div className="relative w-full max-w-[720px] aspect-[16/10] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full border-[3px] border-[#A64AED]/20 rounded-[32px] md:rounded-[56px] flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm shadow-2xl shadow-purple-500/10 px-4"
          >
            {/* The Venn Diagram Group */}
            <div className="relative w-full h-full flex flex-col items-center justify-center -translate-y-4 md:-translate-y-6 scale-[0.95] md:scale-100">

              <div className="relative flex items-center justify-center w-full max-w-[420px] aspect-[1.8/1]">

                {/* Left Circle - Women Area */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0, x: -30 }}
                  whileInView={{ scale: 1, opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute left-0 w-[56%] aspect-square rounded-full border-[4px] border-[#A64AED] bg-[#F3E8FF]/40 backdrop-blur-[2px] flex items-center justify-start pl-[14%] mix-blend-multiply"
                >
                  <span className="text-[14px] md:text-[18px] lg:text-[22px] font-[900] text-[#1A1A1A] tracking-tighter">
                    Women
                  </span>
                </motion.div>
                
                {/* Right Circle - Skills Area */}
                <motion.div 
                   initial={{ scale: 0.8, opacity: 0, x: 30 }}
                   whileInView={{ scale: 1, opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                   className="absolute right-0 w-[56%] aspect-square rounded-full border-[4px] border-[#9333EA] bg-[#FAE8FF]/40 backdrop-blur-[2px] flex items-center justify-end pr-[14%] mix-blend-multiply"
                >
                  <span className="text-[14px] md:text-[18px] lg:text-[22px] font-[900] text-[#1A1A1A] tracking-tighter">
                    Skills
                  </span>
                </motion.div>

                {/* Refined Modular Vertical Connector */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center h-[180%] pointer-events-none z-10 pt-[15.5%]">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                    className="border-l-[4px] border-dotted border-[#A64AED]" 
                  />

                  {/* Small Terminal Dot and Elegant Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    className="flex flex-col items-center pt-0"
                  >
                    <div className="w-3 h-3 bg-[#A64AED] rounded-full shadow-lg shadow-purple-500/50" />
                    <span className="mt-4 text-[16px] md:text-[24px] lg:text-[32px] font-[1000] text-[#1A1A1A] tracking-tighter leading-none bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm">
                      Employment
                    </span>
                  </motion.div>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default ImpactBanner;
