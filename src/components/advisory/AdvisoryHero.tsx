"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AdvisoryHero = () => {
  return (
    <section className="relative w-full bg-white h-[100dvh] min-h-[550px] lg:h-auto lg:min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Hero Section Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px] pt-[96px] sm:pt-[110px] md:pt-[120px] lg:pt-[78px] pb-6 lg:pb-8 flex-grow flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[38%] max-w-[500px] text-left"
          >
            <h1 className="font-montserrat font-[700] text-[28px] sm:text-[44px] md:text-[52px] lg:text-[56px] text-[#1A1A1A] leading-[1.15] mb-4 lg:mb-6 tracking-tight">
              <span className="inline-block lg:whitespace-nowrap">Building Gender-</span>
              <br />
              <span className="inline-block lg:whitespace-nowrap">Inclusive Workforces</span>
            </h1>
            <p className="font-inter text-[#4A4A4A] text-[16px] md:text-[18px] font-normal leading-relaxed mb-5 lg:mb-8 max-w-[480px]">
              We partner with organizations to design inclusive policies, build diverse talent pipelines, and create safe, equitable workplaces where women can grow, lead, and succeed
            </p>
            <Link href="/#contact">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#A64AED] hover:bg-[#9333EA] text-white px-10 py-4 rounded-full font-bold text-[16px] transition-all shadow-md shadow-[#A64AED]/20 cursor-pointer"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[56%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[780px] aspect-[1.4/1] md:aspect-auto h-auto md:h-[520px] lg:h-[620px]">
              <Image 
                src="/Advisory-side-imd.png"
                alt="Advisory Illustration"
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

export default AdvisoryHero;

