"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Assess",
    description: "Map regional labor demand, identify women-accessible roles, design training accordingly.",
    image: "/how_we_work-1.png",
  },
  {
    title: "Train",
    description: "6-12 week programs combining technical skills, safety modules, and workplace simulation.",
    image: "/how_we_work-2.png",
  },
  {
    title: "Place",
    description: "Direct partnerships with employers. We guarantee interviews, not just referrals.",
    image: "/how_we_work-3.png",
  },
  {
    title: "Track",
    description: "Six-month post-placement support. We measure retention, income growth, job satisfaction.",
    image: "/how_we_work-4.png",
  },
  {
    title: "Scale",
    description: "Document what works, refine what doesn't, replicate across geographies.",
    image: "/how_we_work-5.png",
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-[#E9D8FD] py-20 lg:py-28 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-0 relative z-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[52px] lg:text-[64px] font-black text-[#1A1A1A] mb-8"
          >
            How We Work
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-[#9F7AEA] text-white px-10 py-4 rounded-2xl text-xl lg:text-2xl font-bold shadow-md border-2 border-[#1A1A1A] relative z-20"
          >
            From Learning to Earning
          </motion.div>
        </div>

        {/* Process Flow - Desktop View (Multiple Curved Lines) */}
        <div className="hidden lg:block relative mb-24 min-h-[400px]">
          {/* Multiple Curved Connector Lines SVG */}
          <svg className="absolute top-[-10px] left-0 w-full h-[160px] z-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <g stroke="#1A1A1A" strokeWidth="2.5" fill="none" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round">
                {/* 1. Path to Assess */}
                <path d="M400 0 V 20 Q 400 35 385 35 H 105 Q 90 35 90 50 V 100" />
                
                {/* 2. Path to Train */}
                <path d="M450 0 V 45 Q 450 60 435 60 H 310 Q 295 60 295 75 V 100" />
                
                {/* 3. Path to Place (Center) */}
                <path d="M500 0 V 100" />
                
                {/* 4. Path to Track */}
                <path d="M550 0 V 45 Q 550 60 565 60 H 690 Q 705 60 705 75 V 100" />
                
                {/* 5. Path to Scale */}
                <path d="M600 0 V 20 Q 600 35 615 35 H 895 Q 910 35 910 50 V 100" />
             </g>
          </svg>

          {/* Process Nodes */}
          <div className="flex justify-between items-start relative z-10 pt-[145px]">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center w-[18%]"
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-[#1A1A1A] bg-[#9F7AEA] flex items-center justify-center mb-6 shadow-xl relative group overflow-hidden hover:scale-110 transition-all duration-300">
                   <div className="relative w-14 h-14 lg:w-16 lg:h-16 group-hover:rotate-6 transition-transform">
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-contain"
                        quality={100}
                      />
                   </div>
                </div>
                <h3 className="text-2xl font-black text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-[#1A1A1A] text-sm leading-[1.6] font-medium opacity-80 max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow - Tablet/Mobile View */}
        <div className="lg:hidden flex flex-col gap-12 items-center mb-16 relative mt-16">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#1A1A1A] opacity-20" />
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-24 h-24 rounded-full border-2 border-[#1A1A1A] bg-[#9F7AEA] flex items-center justify-center mb-4 shadow-xl">
                 <div className="relative w-14 h-14">
                    <Image src={step.image} alt={step.title} fill className="object-contain" />
                 </div>
              </div>
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-2">{step.title}</h3>
              <p className="text-[#1A1A1A] text-base leading-[1.5] font-medium max-w-sm px-6">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1A1A1A] font-black text-lg px-12 py-4 rounded-full shadow-2xl hover:bg-zinc-50 transition-all border-2 border-white"
          >
            Explore Our Impact
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
