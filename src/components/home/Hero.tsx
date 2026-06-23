"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100dvh-78px)] sm:h-[calc(100vh-78px)] overflow-hidden bg-[#1A0B2E]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile/Tablet Image */}
        <img
          src="/Hero-Mobile.jpg"
          alt="Making the Gig Economy Work for Women"
          className="w-full h-full object-cover object-center scale-[1.08] lg:hidden"
        />
        {/* Desktop Image */}
        <img
          src="/Hero-New_One.jpg"
          alt="Making the Gig Economy Work for Women"
          className="w-full h-full object-cover object-center hidden lg:block"
        />
        {/* Smooth Purple Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D1B4E]/60 to-[#1A0B2E]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-end sm:items-center justify-center text-center px-6 max-w-[1440px] mx-auto pb-44 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Main Title From Image */}
          <h1 className="text-[38px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.1] font-bold text-white max-w-4xl tracking-tight drop-shadow-xl">
            Making the <br className="block md:hidden" />
            Gig Economy <br />
            Work for Women
          </h1>
        </motion.div>
      </div>

      {/* Moving Scooter Illustration */}
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "100vw" }}
        transition={{ 
          repeat: Infinity,
          duration: 9,
          ease: "linear",
          repeatType: "loop"
        }}
        className="absolute bottom-[4%] sm:bottom-[2%] z-20 w-[75px] md:w-[150px] lg:w-[180px] flex items-center"
      >
        {/* Exhaust Gas/Smoke Animation */}
        <div className="absolute left-0 bottom-[12%] w-0 h-0 pointer-events-none z-10">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, -35, -80, -125, -170],
                y: [0, -5, -12, -22, -32],
                scale: [0.3, 0.9, 1.4, 1.8, 2.2],
                opacity: [0.75, 0.55, 0.35, 0.12, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.4,
              }}
              className="absolute w-5 h-5 bg-gradient-to-br from-white/70 to-[#EADDFF]/50 rounded-full blur-[2.5px]"
              style={{
                left: "-18px",
                transformOrigin: "center",
              }}
            />
          ))}
        </div>

        <img
          src="/scomrnvsndscoo.png"
          alt="Moving Scooter Illustration"
          className="w-full h-auto drop-shadow-2xl opacity-90 relative z-20"
        />
      </motion.div>

    </section>
  );
};

export default Hero;
