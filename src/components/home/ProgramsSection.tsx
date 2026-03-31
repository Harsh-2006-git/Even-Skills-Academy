"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    title: "Women Mobility Centre",
    description: "Building confidence through two-wheeler and three-wheeler training at Women Mobility Centers (WMC).",
    image: "/women_mobility_center.png",
  },
  {
    title: "Platform Economy",
    description: "Warehouse operations, picking/packing, inventory management, and digital workflow tools.",
    image: "/platform_economy.png",
  },
  {
    title: "EV & Green Energy",
    description: "Training women in EV systems, charging infrastructure, and solar basics.",
    image: "/ev_green_evergy.png",
  },
  {
    title: "AI Labs",
    description: "Training women in EV systems, charging infrastructure, and solar basics.",
    image: "/ai_lab.png",
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full bg-white flex items-center justify-center py-24 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-[#1A1A1A] tracking-tighter leading-[1]"
          >
            Our Programs
          </motion.h2>
          
          <Link href="/programs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-3.5 bg-[#A64AED] text-white rounded-full font-bold text-[18px] shadow-sm transition-all text-center"
            >
              View All
              <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
                <svg 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" 
                  stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </motion.button>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-[32px] border-[1.5px] border-[#D8B4FE] overflow-hidden flex flex-col h-[520px] group cursor-default transition-all hover:bg-[#F9F7FF]/30"
            >
              {/* Full Card Image Background Area - Full Bleed */}
              <div className="relative w-full h-[65%] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Section - Pinned to bottom with clean white background */}
              <div className="relative z-10 px-8 pb-8 pt-4 mt-auto flex flex-col bg-white">
                <h3 className="text-[22px] md:text-[24px] font-[800] text-[#1A1A1A] leading-[1.2] mb-3 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-zinc-500 font-medium leading-[1.5] mb-5 line-clamp-3">
                  {program.description}
                </p>
                <Link href="/programs" className="flex items-center gap-1.5 text-[#A64AED] font-extrabold text-[16px] group/btn transition-colors hover:text-[#9333EA]">
                  Learn More 
                  <span className="text-[20px] transition-transform group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
