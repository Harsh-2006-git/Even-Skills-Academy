"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full lg:h-[calc(100dvh-78px)] lg:min-h-[650px] bg-white overflow-hidden flex items-center py-10 lg:py-0">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-32 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 lg:mt-[-30px]">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#FF9F1C] font-extrabold text-lg md:text-xl mb-3 tracking-wide"
            >
              Who We Are
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[50px] lg:text-[56px] xl:text-[64px] font-[900] text-[#1A1A1A] leading-[1.08] mb-6"
            >
              <span className="block md:inline lg:block xl:inline">From Mobility to</span>{" "}
              <span className="text-[#1A1A1A]">Opportunity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-[20px] lg:text-[22px] text-zinc-500 font-semibold max-w-[540px] mb-6 leading-[1.4]"
            >
              Even Academy was built on a simple premise: women can&apos;t take jobs they can&apos;t reach
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-[540px] mb-10 leading-relaxed font-medium"
            >
              We began with mobility training, but quickly expanded to skills that matter: technical training, workplace readiness, and career support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5"
            >
              <button className="flex items-center gap-3 px-8 py-4 bg-[#B794F4] text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:bg-[#a782f0] transition-all transform hover:scale-105 active:scale-95 group">
                Our Programs
                <svg
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>

              <button className="px-8 py-4 border-2 border-zinc-200 text-zinc-800 rounded-full font-extrabold text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all transform hover:scale-105 active:scale-95">
                See our Impact
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[43%] relative flex justify-center lg:justify-end lg:-mr-12 xl:-mr-16"
          >
            <div className="relative w-full h-[400px] md:h-[600px] lg:h-[calc(100dvh-120px)] flex items-end">
              <Image 
                src="/About-hero-bg.png" 
                alt="Woman on a scooter illustration"
                fill
                className="object-contain object-right-bottom scale-[1.05] md:scale-100 lg:scale-[1.05] origin-bottom-right"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
