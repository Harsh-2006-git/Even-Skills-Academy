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
            className="text-[24px] md:text-[34px] lg:text-[42px] font-[800] leading-[1.1] text-[#1A1A1A] max-w-[750px] mx-auto tracking-tight"
          >
            Empowering Women Through <br className="hidden md:block" />
            <span className="text-[#9333EA]">Skills & Opportunities</span>
          </motion.h2>
        </div>

        {/* The Graphic Rounded Box */}
        <div className="relative w-full max-w-[720px] aspect-[16/10] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full border-[1.5px] border-[#1A1A1A] rounded-[28px] md:rounded-[48px] flex flex-col items-center justify-center bg-transparent px-4"
          >
            {/* The Venn Diagram Group - Compact & Elegant Scaling */}
            <div className="relative w-full h-full flex flex-col items-center justify-center -translate-y-4 md:-translate-y-6 scale-[0.95] md:scale-100">

              <div className="relative flex items-center justify-center w-full max-w-[400px] aspect-[1.8/1]">

                {/* Left Circle - Women Area */}
                <div className="absolute left-0 w-[54%] aspect-square rounded-full border-[2px] border-[#1A1A1A] flex items-center justify-start pl-[12%]">
                  <span className="text-[12px] md:text-[16px] lg:text-[20px] font-medium text-[#1A1A1A] tracking-tighter">
                    Women
                  </span>
                </div>

                {/* Right Circle - Skills Area */}
                <div className="absolute right-0 w-[54%] aspect-square rounded-full border-[2px] border-[#1A1A1A] flex items-center justify-end pr-[12%]">
                  <span className="text-[12px] md:text-[16px] lg:text-[20px] font-medium text-[#1A1A1A] tracking-tighter">
                    Skills
                  </span>
                </div>

                {/* Refined Modular Vertical Connector */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center h-[180%] pointer-events-none z-10 pt-[14.5%]">
                  <div className="h-[52%] border-r-[2px] border-dotted border-[#1A1A1A]" />

                  {/* Small Terminal Dot and Elegant Label */}
                  <div className="flex flex-col items-center pt-0">
                    <div className="w-2 h-2 bg-[#1A1A1A] rounded-full translate-y-[-1px]" />
                    <span className="mt-3 text-[14px] md:text-[20px] lg:text-[26px] font-medium text-[#1A1A1A] tracking-tighter">
                      Employment
                    </span>
                  </div>
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
