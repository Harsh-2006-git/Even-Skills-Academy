"use client";

import React from "react";
import { motion } from "framer-motion";

const ProgramHero = () => {
  return (
    <section className="w-full bg-white overflow-hidden lg:min-h-[calc(100vh-78px)] lg:flex lg:items-center py-6 lg:py-0">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 lg:px-[60px] h-[calc(100dvh-78px)] min-h-[500px] lg:min-h-0 lg:h-auto flex flex-col justify-start lg:flex-row lg:items-center lg:justify-between pt-6 pb-4 lg:py-0 overflow-hidden lg:overflow-visible">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[500px] xl:w-[540px] shrink-0 text-left z-10 flex flex-col justify-start mt-0"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-[#F5A623] font-montserrat font-bold text-[18px] sm:text-[24px] tracking-wide mb-1.5 inline-block"
          >
            Our Programs
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-montserrat text-[32px] sm:text-[46px] lg:text-[64px] font-bold text-[#1A1A1A] leading-tight mb-4 tracking-tight"
          >
            Four Programs. <br className="md:hidden" /> One Mission
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-zinc-500 font-inter text-[15px] sm:text-[18px] leading-relaxed max-w-[550px] font-normal"
          >
            Through focused training in mobility, safety, logistics, and soft skills,
            we enable independence and confidence.
            <br />
            <br />
            Our mission is to create pathways
            to sustainable livelihoods and long-term empowerment.
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:flex-1 mt-2 lg:mt-0 relative"
        >
          <div className="relative w-full max-w-[440px] aspect-[16/10] mx-auto overflow-hidden lg:overflow-visible lg:w-full lg:max-w-none lg:aspect-auto lg:scale-[2.3] lg:translate-x-[-15px] lg:-translate-y-6">
            <img
              src="/program-hero-side.png"
              alt="Program Hero Illustration"
              className="absolute w-[230%] h-[230%] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain lg:relative lg:w-full lg:h-auto lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHero;
