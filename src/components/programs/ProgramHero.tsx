"use client";

import React from "react";
import { motion } from "framer-motion";

const ProgramHero = () => {
  return (
    <section className="w-full bg-white overflow-hidden min-h-[calc(100vh-78px)] flex items-center py-16 lg:py-0">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-[60px]">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[500px] xl:w-[540px] shrink-0 text-left z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[#F5A623] font-montserrat font-bold text-[20px] md:text-[24px] tracking-wide mb-3 inline-block"
            >
              Our Programs
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-montserrat text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.15] mb-6 tracking-tight"
            >
              <span className="block md:inline-block whitespace-nowrap">Four Programs.</span><br />
              <span className="block md:inline-block whitespace-nowrap">One Mission</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-zinc-500 font-inter text-[16px] md:text-[18px] leading-[1.6] max-w-[550px] font-normal"
            >
              Through focused training in mobility, safety, logistics, and soft skills, 
              we enable independence and confidence. Our mission is to create pathways 
              to sustainable livelihoods and long-term empowerment.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[700px] lg:max-w-none mx-auto lg:scale-[2.3] lg:translate-x-[-15px] lg:-translate-y-6">
              <img 
                src="/program-hero-side.png" 
                alt="Program Hero Illustration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
