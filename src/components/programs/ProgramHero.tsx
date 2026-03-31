"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProgramHero = () => {
  return (
    <section className="w-full bg-white overflow-hidden min-h-[calc(100vh-78px)] flex items-center py-16 lg:py-0">
      <div className="max-w-[1550px] w-full mx-auto px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-[750px] text-left z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-[#F59E0B] font-bold text-[18px] md:text-[22px] tracking-tight mb-2 inline-block"
            >
              Our Programs
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[48px] sm:text-[60px] md:text-[72px] lg:text-[92px] font-[900] text-[#1A1A1A] leading-[0.95] mb-6 tracking-tighter"
            >
              Four Programs.<br />
              One Mission
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-zinc-500 text-[18px] md:text-[21px] leading-[1.6] mb-10 max-w-[620px] font-medium"
            >
              Through focused training in mobility, safety, logistics, and soft skills, 
              we enable independence and confidence. Our mission is to create pathways 
              to sustainable livelihoods and long-term empowerment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/#contact">
                <button className="px-12 py-5 bg-[#A64AED] text-white rounded-full font-[900] text-[20px] shadow-xl shadow-purple-400/30 transition-all hover:scale-105 hover:bg-[#9333EA] active:scale-95">
                  Start Your Journey
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-full lg:scale-[1.8] lg:translate-x-24 lg:-translate-y-20">
              <img 
                src="/program-hero-side.png" 
                alt="Program Hero Illustration" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
