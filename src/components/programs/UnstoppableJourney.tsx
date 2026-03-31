"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 1",
    title: "Identify",
    description: "Women From Resource-Poor Communities Unskilled, Unemployed, Underconfident",
  },
  {
    step: "STEP 2",
    title: "Assess & Train",
    description: "Skill Matrix Assessment Then Mobility, Logistics, Self-Defense & Soft Skills Training",
  },
  {
    step: "STEP 3",
    title: "Placed & Employed",
    description: "Placed With Employer Partners: Amazon, Flipkart, Zepto, Ola With 6-Month Support",
  },
  {
    step: "STEP 4",
    title: "Outcome",
    description: "Certified, Job-Ready Women With Practical Skills And Workplace Confidence",
  },
];

const UnstoppableJourney = () => {
  return (
    <section className="relative w-full bg-[#E5D1FF] py-14 flex flex-col items-center justify-center min-h-[380px] overflow-hidden">
      {/* Full-bleed Dotted Line */}
      <div className="absolute top-[204px] left-0 right-0 w-full h-[2px] border-t-2 border-dotted border-black/20 z-0" />
      
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] relative z-10">
        {/* Header content */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[42px] font-[900] text-[#1A1A1A] mb-2 tracking-[-0.03em] leading-tight"
          >
            From Unskilled to Unstoppable
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] md:text-[20px] text-zinc-500 font-medium max-w-[800px] mx-auto tracking-tight opacity-90"
          >
            Transforming potential into confidence, skills, and sustainable livelihoods
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                {/* Visual indicator (Dot on line) */}
                <div className="relative z-10 mb-0">
                  <div className="w-4 h-4 bg-[#6B21A8] rounded-full" />
                </div>

                {/* Vertical Connector Line */}
                <div className="w-[1.5px] h-8 bg-black/10 mb-3" />

                {/* Step badge */}
                <div className="bg-white px-7 py-2 rounded-full mb-5 shadow-sm flex items-center justify-center">
                  <span className="text-[#A64AED] font-black text-[14px] tracking-wider whitespace-nowrap">{item.step}</span>
                </div>

                {/* Content */}
                <h3 className="text-[20px] md:text-[22px] font-[900] text-[#1A1A1A] mb-3 tracking-tighter leading-tight">{item.title}</h3>
                <p className="text-[14px] md:text-[15px] text-[#1A1A1A] font-medium leading-[1.3] max-w-[200px] opacity-75">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnstoppableJourney;
