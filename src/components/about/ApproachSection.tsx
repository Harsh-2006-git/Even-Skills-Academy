"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const approachData = [
  {
    title: "Mobility Access",
    description: "Women Mobility Centers teach riding, navigation, and road confidence. If you can't move freely, you can't work freely.",
    image: "/our-Approch-1.png",
  },
  {
    title: "Future-Ready Skills",
    description: "Training in sectors with demand: EV, green energy, platform economy, AI-assisted work. We follow jobs, not trends.",
    image: "/our-Approch-2.png",
  },
  {
    title: "Safety & Confidence",
    description: "Workplace harassment prevention, self-defense basics, rights awareness. Skills mean nothing if women don't feel safe using them.",
    image: "/our-Approch-3.png",
  },
  {
    title: "Workplace Readiness",
    description: "Professional communication, punctuality, conflict resolution, understanding workplace hierarchies.",
    image: "/our-Approch-4.png",
  },
  {
    title: "Employer Partnerships",
    description: "Our curriculum is co-designed with hiring companies. Training ends with interviews, not certificates.",
    image: "/our-Approch-5.png",
  },
];

const ApproachSection = () => {
  return (
    <section className="bg-white pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] lg:text-[48px] font-black text-[#1A1A1A]"
          >
            Our Approach
          </motion.h2>
        </div>

        {/* 3+2 Grid Layout */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {approachData.slice(0, 3).map((item, index) => (
              <ApproachCard key={index} {...item} index={index} />
            ))}
          </div>

          {/* Bottom 2 Cards (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[68%] justify-center">
            {approachData.slice(3).map((item, index) => (
              <ApproachCard key={index + 3} {...item} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ApproachCard = ({ title, description, image, index }: { title: string; description: string; image: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pt-24 pb-12 px-8 rounded-[40px] border-2 border-[#E9D8FD] flex flex-col items-center text-center group hover:border-[#B794F4] transition-all duration-300 bg-white min-h-[300px]"
  >
    {/* Stylized Floating Icon */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-48 h-24 bg-[#E9D8FD] rounded-b-full flex items-end justify-center pb-3 overflow-hidden transition-all duration-300 group-hover:bg-[#D6BCFA]">
      {/* The Illustration aligned inside */}
      <div className="relative w-20 h-20 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-300">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain"
          quality={100}
        />
      </div>
    </div>

    <h3 className="text-xl lg:text-[22px] font-black text-[#1A1A1A] mt-8 mb-4">
      {title}
    </h3>
    <p className="text-[#333333] font-medium leading-[1.6] text-[15px] lg:text-[16px] max-w-[280px] opacity-90">
      {description}
    </p>
  </motion.div>
);

export default ApproachSection;
