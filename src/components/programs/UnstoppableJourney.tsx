"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 1",
    title: "Identify",
    description: "Women from resource-poor communities unskilled, unemployed, underconfident",
  },
  {
    step: "STEP 2",
    title: "Assess & Train",
    description: "Skill matrix assessment then mobility, logistics, self-defense & soft skills training",
  },
  {
    step: "STEP 3",
    title: "Placed & Employed",
    description: (
      <>
        Placed with employer partners:<br />
        Amazon, Flipkart, Zepto, Ola<br />
        with 6-month support
      </>
    ),
  },
  {
    step: "STEP 4",
    title: "Outcome",
    description: "Certified, job-ready women with practical skills and workplace confidence",
  },
];

const UnstoppableJourney = () => {
  return (
    <section className="relative w-full bg-[#E5D1FF] py-16 md:py-20 flex flex-col items-center justify-center min-h-[380px] overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] relative z-10">
        {/* Header content */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[42px] font-bold font-montserrat text-[#1A1A1A] mb-2 tracking-tight leading-tight"
          >
            Skills Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[17px] md:text-[20px] text-[#191919] opacity-60 font-inter font-normal max-w-[800px] mx-auto tracking-tight"
          >
            Transforming potential into confidence, skills, and sustainable livelihoods
          </motion.p>
        </div>

        {/* Timeline continer */}
        <div className="relative">
          {/* Full-bleed Dotted Line relative to the timeline container */}
          <div className="absolute top-[11px] left-[-200px] right-[-200px] h-[2px] border-t-2 border-dotted border-black/20 z-0 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
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
                  <div className="w-6 h-6 rounded-full border border-black bg-[#A64AED] flex items-center justify-center shadow-sm">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#191919]" />
                  </div>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-[2px] h-[42px] bg-gradient-to-b from-[#191919]/40 to-transparent mb-3" />

                {/* Step badge */}
                <div className="bg-white px-7 py-2 rounded-full mb-5 shadow-sm border border-black/5 flex items-center justify-center">
                  <span className="text-[#A64AED] font-bold text-[14px] tracking-wider whitespace-nowrap">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[20px] md:text-[22px] font-bold font-inter text-[#1A1A1A] mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#1A1A1A] font-normal leading-[1.4] max-w-[250px] opacity-75">
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
