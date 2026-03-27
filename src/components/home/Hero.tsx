"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-78px)] overflow-hidden bg-[#1A0B2E]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Making the Gig Economy Work for Women"
          className="w-full h-full object-contain object-top sm:object-cover sm:object-center"
        />
        {/* Smooth Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D1B4E]/60 to-[#1A0B2E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end sm:items-center justify-center text-center px-6 max-w-[1440px] mx-auto pb-32 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Main Title From Image */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] font-bold text-white max-w-4xl tracking-tight drop-shadow-xl">
            Making the Gig Economy <br className="hidden md:block" /> Work for Women
          </h1>
        </motion.div>
      </div>

      {/* Side Illustrations - Visible on all screens, size adjusted */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute left-[4%] sm:left-[2%] bottom-[12%] sm:bottom-[5%] z-20 w-[60px] md:w-[120px] lg:w-[160px]"
      >
        <img
          src="/Hero-sides.PNG"
          alt="Scooter Illustration Left"
          className="w-full h-auto drop-shadow-2xl opacity-90 sm:opacity-80"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute right-[4%] sm:right-[2%] bottom-[12%] sm:bottom-[5%] z-20 w-[60px] md:w-[120px] lg:w-[160px]"
      >
        <img
          src="/Hero-sides.PNG"
          alt="Scooter Illustration Right"
          className="w-full h-auto drop-shadow-2xl opacity-90 sm:opacity-80"
        />
      </motion.div>

      {/* Small 'N' Badge Corner */}
      <div className="absolute left-[20px] bottom-[20px] z-30">
        <div className="bg-[#191919] w-8 h-8 rounded-full flex items-center justify-center border border-white/20">
          <span className="text-white text-[10px] font-bold font-mono">N'</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
