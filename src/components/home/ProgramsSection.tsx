"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section className="w-full bg-[#EADDFF] flex items-center justify-center py-24 overflow-hidden">
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
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#B794F4" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-3.5 bg-[#A78BFA] text-white rounded-full font-bold text-[18px] shadow-lg transition-all"
          >
            View All
            <div className="bg-white p-1 rounded-full flex items-center justify-center">
              <svg 
                width="16" height="16" viewBox="0 0 24 24" fill="none" 
                stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </motion.button>
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
              className="relative bg-white rounded-[32px] overflow-hidden flex flex-col h-[480px] group shadow-xl cursor-default"
            >
              {/* Full Card Image Background */}
              <div className="absolute inset-0 w-full h-full pt-6">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-contain object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/5 to-transparent" />
              </div>
              
              {/* Content Section - Pinned to bottom */}
              <div className="relative z-10 p-8 mt-auto flex flex-col">
                <h3 className="text-[22px] md:text-[24px] font-bold text-[#1A1A1A] leading-[1.2] mb-3 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#4B5563] leading-[1.5] mb-5 line-clamp-3">
                  {program.description}
                </p>
                <button className="flex items-center gap-1.5 text-[#A78BFA] font-bold text-[15px] group/btn transition-colors hover:text-[#8B5CF6]">
                  Learn More 
                  <span className="text-[18px] transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
