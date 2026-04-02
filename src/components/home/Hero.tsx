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

      {/* Moving Scooter Illustration */}
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "100vw" }}
        transition={{ 
          repeat: Infinity,
          duration: 15,
          ease: "linear",
          repeatType: "loop"
        }}
        className="absolute bottom-[8%] sm:bottom-[5%] z-20 w-[120px] md:w-[180px] lg:w-[240px]"
      >
        <img
          src="/Hero-sides2.png"
          alt="Moving Scooter Illustration"
          className="w-full h-auto drop-shadow-2xl opacity-90 -scale-x-100"
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
