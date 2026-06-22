"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WorkProcess = () => {
  return (
    <section className="bg-[#D3B8FC] pt-8 pb-8 lg:pt-14 lg:pb-12 overflow-hidden relative">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] relative z-10 flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-6 lg:mb-10 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#000] font-montserrat text-3xl md:text-[65px] font-bold leading-[1.29em] text-center"
          >
            How We Work
          </motion.h2>
        </div>

        {/* Desktop View (Exact Figma absolute coordinate layout wrapped in fixed-width container) */}
        <div className="hidden lg:block w-[1228px] h-[420px] relative select-none">

          {/* Center Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cursor-default flex p-2.5 justify-center items-center gap-2.5 rounded-[13px] border-2 border-[#191919] bg-[#A64AED] w-[421px] h-[72px] absolute left-[403px] top-0 shadow-md z-20"
          >
            <p className="text-[#FDFDFD] font-inter text-[32px] font-medium leading-[1.29em] w-fit">
              From Learning to Earning
            </p>
          </motion.div>

          {/* Single SVG Overlay for Connector Lines (starts at bottom of button y=72px) */}
          <svg
            className="absolute left-0 top-[72px] w-[1228px] h-[170px] z-0 pointer-events-none"
            viewBox="0 0 1228 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#191919" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Path 1: To Assess Circle (x=106, y=91) */}
              <path d="M 513.5 0 V 16.5 C 513.5 25.3 506.3 32.5 497.5 32.5 H 122 C 113.2 32.5 106 39.7 106 48.5 V 91" />

              {/* Path 2: To Train Circle (x=368, y=96) */}
              <path d="M 563.5 0 V 37 C 563.5 45.8 556.3 53 547.5 53 H 384 C 375.2 53 368 60.2 368 69 V 96" />

              {/* Path 3: To Place Circle (x=614, y=80) */}
              <path d="M 613.5 0 V 80" />

              {/* Path 4: To Track Circle (x=860, y=96) */}
              <path d="M 663.5 0 V 37 C 663.5 45.8 670.7 53 679.5 53 H 844 C 852.8 53 860 60.2 860 69 V 96" />

              {/* Path 5: To Scale Circle (x=1122, y=91) */}
              <path d="M 713.5 0 V 16.5 C 713.5 25.3 720.7 32.5 729.5 32.5 H 1106 C 1114.8 32.5 1122 39.7 1122 48.5 V 91" />
            </g>
          </svg>

          {/* 1. Assess Card */}
          <div className="w-[212px] h-[229px] absolute left-0 top-[163px] flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="w-[90px] h-[90px] flex items-center justify-center bg-white border-2 border-[#191919] rounded-[26px] shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              <img
                src="/how_we_work-1.png"
                className="w-[50px] h-[50px] object-contain"
                alt="Assess icon"
              />
            </motion.div>
            <div className="w-[212px] text-center mt-3">
              <p className="text-[#191919] font-inter text-[32px] font-medium leading-none mb-2">
                Assess
              </p>
              <p className="text-[#191919] font-inter text-[14px] leading-[1.3em] opacity-[74%] px-2">
                Map regional labor demand, identify women-accessible roles, design training accordingly.
              </p>
            </div>
          </div>

          {/* 2. Train Card */}
          <div className="w-[212px] h-[229px] absolute left-[262px] top-[168px] flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="w-[90px] h-[90px] flex items-center justify-center bg-white border-2 border-[#191919] rounded-[26px] shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              <img
                src="/how_we_work-2.png"
                className="w-[50px] h-[50px] object-contain"
                alt="Train icon"
              />
            </motion.div>
            <div className="w-[212px] text-center mt-3">
              <p className="text-[#191919] font-inter text-[32px] font-medium leading-none mb-2">
                Train
              </p>
              <p className="text-[#191919] font-inter text-[14px] leading-[1.3em] opacity-[74%] px-2">
                6–12 week programs combining technical skills, safety modules, and workplace simulation.
              </p>
            </div>
          </div>

          {/* 3. Place Card */}
          <div className="w-[212px] h-[229px] absolute left-[508px] top-[152px] flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="w-[90px] h-[90px] flex items-center justify-center bg-white border-2 border-[#191919] rounded-[26px] shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              <img
                src="/how_we_work-3.png"
                className="w-[50px] h-[50px] object-contain"
                alt="Place icon"
              />
            </motion.div>
            <div className="w-[212px] text-center mt-3">
              <p className="text-[#191919] font-inter text-[32px] font-medium leading-none mb-2">
                Place
              </p>
              <p className="text-[#191919] font-inter text-[14px] leading-[1.3em] opacity-[74%] px-2">
                Direct partnerships with employers. We guarantee interviews, not just referrals.
              </p>
            </div>
          </div>

          {/* 4. Track Card */}
          <div className="w-[212px] h-[229px] absolute left-[754px] top-[168px] flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -3 }}
              className="w-[90px] h-[90px] flex items-center justify-center bg-white border-2 border-[#191919] rounded-[26px] shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              <img
                src="/how_we_work-4.png"
                className="w-[50px] h-[50px] object-contain"
                alt="Track icon"
              />
            </motion.div>
            <div className="w-[212px] text-center mt-3">
              <p className="text-[#191919] font-inter text-[32px] font-medium leading-none mb-2">
                Track
              </p>
              <p className="text-[#191919] font-inter text-[14px] leading-[1.3em] opacity-[74%] px-2">
                Six-month post-placement support. We measure retention, income growth, job satisfaction
              </p>
            </div>
          </div>

          {/* 5. Scale Card */}
          <div className="w-[212px] h-[229px] absolute left-[1016px] top-[163px] flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="w-[90px] h-[90px] flex items-center justify-center bg-white border-2 border-[#191919] rounded-[26px] shadow-sm cursor-pointer transition-shadow hover:shadow-md"
            >
              <img
                src="/how_we_work-5.png"
                className="w-[50px] h-[50px] object-contain"
                alt="Scale icon"
              />
            </motion.div>
            <div className="w-[212px] text-center mt-3">
              <p className="text-[#191919] font-inter text-[32px] font-medium leading-none mb-2">
                Scale
              </p>
              <p className="text-[#191919] font-inter text-[14px] leading-[1.3em] opacity-[74%] px-2">
                Document what works, refine what doesn&apos;t, replicate across geographies.
              </p>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet View (Clean Vertical Process Flow) */}
        <div className="block lg:hidden w-full max-w-md flex flex-col gap-8 mt-4 relative select-none">
          {/* Vertical Connecting Line */}
          <div className="absolute top-[26px] bottom-[26px] left-[35px] w-[3px] bg-[#191919] pointer-events-none" />

          {/* Badge */}
          <div className="flex p-2 justify-center items-center rounded-[10px] border-2 border-[#191919] bg-[#A64AED] w-full py-2.5 shadow-md mb-2 text-center">
            <p className="text-[#FDFDFD] font-inter text-lg sm:text-xl font-medium leading-none">
              From Learning to Earning
            </p>
          </div>

          {/* Steps */}
          {[
            {
              title: "Assess",
              desc: "Map regional labor demand, identify women-accessible roles, design training accordingly.",
              icon: "/how_we_work-1.png",
            },
            {
              title: "Train",
              desc: "6–12 week programs combining technical skills, safety modules, and workplace simulation.",
              icon: "/how_we_work-2.png",
            },
            {
              title: "Place",
              desc: "Direct partnerships with employers. We guarantee interviews, not just referrals.",
              icon: "/how_we_work-3.png",
            },
            {
              title: "Track",
              desc: "Six-month post-placement support. We measure retention, income growth, job satisfaction",
              icon: "/how_we_work-4.png",
            },
            {
              title: "Scale",
              desc: "Document what works, refine what doesn't, replicate across geographies.",
              icon: "/how_we_work-5.png",
            },
          ].map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-5 relative z-10 w-full"
            >
              <div className="w-[70px] h-[70px] shrink-0 flex items-center justify-center bg-white border-2 border-[#191919] rounded-[20px] shadow-sm">
                <img src={step.icon} className="w-[38px] h-[38px] object-contain" alt={step.title} />
              </div>
              <div className="flex flex-col pt-1 text-left">
                <h3 className="text-[#191919] font-inter text-lg sm:text-xl font-bold mb-1 leading-none">{step.title}</h3>
                <p className="text-[#191919] font-inter text-[13px] sm:text-sm opacity-75 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6 lg:mt-8 w-full flex justify-center">
          <Link href="/impact">
            <button className="cursor-pointer text-nowrap inline-flex items-center justify-center rounded-[25px] border border-[#A64AED] bg-[#FDFDFD] hover:bg-zinc-50 transition-colors w-[200px] h-[48px] shadow-sm">
              <span className="text-[#191919] font-inter text-base font-semibold">
                Explore Our Impact
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
