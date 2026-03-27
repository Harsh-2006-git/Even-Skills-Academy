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
    <section className="w-full min-h-screen bg-[#DBC2FF] flex items-center justify-center py-24">
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
            whileHover={{ scale: 1.05, backgroundColor: "#9569E6" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-[#A782F0] text-white rounded-full font-bold text-[18px] shadow-xl transition-all"
          >
            View All
            <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
              <svg 
                width="20" height="20" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[48px] overflow-hidden flex flex-col h-full shadow-2xl group cursor-default"
            >
              {/* Image Container */}
              <div className="w-full h-auto flex items-center justify-center pt-8 px-6">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                   <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-contain"
                    />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 pt-6 flex flex-col flex-1">
                <h3 className="text-[26px] font-bold text-[#1A1A1A] leading-[1.1] mb-3 tracking-tight">
                  {program.title}
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.5] mb-8 flex-1">
                  {program.description}
                </p>
                <button className="flex items-center gap-2 text-[#A782F0] font-bold text-[18px] group/btn transition-colors hover:text-[#8B5CF6]">
                  Learn More 
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
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
