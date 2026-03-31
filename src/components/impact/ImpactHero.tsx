"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ImpactHero = () => {
  return (
    <section className="bg-[#FDFDFD] relative h-[572px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center relative">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-[600px] z-10"
          >
            <h1 className="text-[56px] md:text-[64px] font-black text-[#1A1A1A] leading-[1.05] mb-6">
              We Track <br />
              What Matters.
            </h1>
            <p className="text-[#6B7280] text-[20px] font-medium leading-relaxed mb-10 max-w-[500px]">
              Not just training completion — real workforce outcomes. Every graduate tracked at 3, 6, and 12 months.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#AE75DA] hover:bg-[#9D5CCF] text-white px-10 py-4 rounded-[33px] text-[16px] font-black shadow-xl shadow-[#AE75DA]/30 transition-all"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image - Precise Dimensions & Better Fit */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex items-center justify-center absolute top-[60px] right-0 w-[665px] h-[488px] overflow-visible"
          >
            <div className="relative w-full h-full transform scale-125 translate-x-12">
              <Image
                src="/impact-side-img.png"
                alt="Impact Tracking Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHero;
