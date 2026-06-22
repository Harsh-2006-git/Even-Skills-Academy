"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    title: "Women Mobility Centre",
    description: "Building confidence through two-wheeler and three-wheeler training at Women Mobility Centers (WMC).",
    image: "/our-program-new-1.jpg",
  },
  {
    title: "Platform Economy",
    description: "Warehouse operations, picking/packing, inventory management, and digital workflow tools.",
    image: "/our-program-new-2.jpg",
  },
  {
    title: "EV & Green Energy",
    description: "Training women in EV systems, charging infrastructure, and solar basics.",
    image: "/our-program-new-3.jpg",
  },
  {
    title: "AI Labs",
    description: "Training women in EV systems, charging infrastructure, and solar basics.",
    image: "/our-program-new-4.jpg",
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full bg-white flex items-center justify-center py-24 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[40px] md:text-[52px] font-montserrat font-bold text-[#191919] tracking-tight"
          >
            Our Programs
          </motion.h2>
          
          <Link href="/programs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-5 sm:py-2 bg-[#AE75DA] text-white rounded-full font-bold text-[13px] sm:text-[16px] shadow-sm transition-all hover:bg-[#9d60cc] cursor-pointer"
            >
              View All
              <div className="bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="#AE75DA" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </motion.button>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative bg-white rounded-[23px] border border-[#AE75DA]/80 flex flex-col h-[340px] p-4 group transition-all hover:border-[#AE75DA] hover:shadow-lg hover:shadow-purple-100/50"
            >
              {/* Illustration Area */}
              <div className="relative w-full h-[210px] overflow-hidden rounded-[16px] bg-white flex items-center justify-center mb-3">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content Section */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[18px] font-bold font-montserrat text-[#191919] leading-tight mb-1.5 whitespace-nowrap overflow-hidden text-ellipsis" title={program.title}>
                  {program.title}
                </h3>
                <p className="text-[12px] text-zinc-500 font-medium leading-normal h-[54px] line-clamp-3">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
