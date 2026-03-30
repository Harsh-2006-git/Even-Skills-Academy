"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  isSmall?: boolean;
}

const CircularProgress = ({ 
  percentage, 
  label, 
  size = 120, 
  strokeWidth = 6,
  isSmall = false
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F3E8FF"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#A64AED"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`${isSmall ? 'text-[20px] md:text-[24px]' : 'text-[28px] md:text-[34px]'} font-[900] text-[#1A1A1A] tracking-tighter`}>
          {label}
        </span>
      </div>
    </div>
  );
};

const WhyChange = () => {
  return (
    <section className="w-full bg-[#EADDFF] pt-20 lg:pt-24 pb-20 lg:pb-24 overflow-hidden font-inter">
      {/* SECTION 1 TITLE - RESTORED */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[56px] lg:text-[60px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight"
        >
          Why Women’s Access to <br className="hidden md:block" /> Work Must Change
        </motion.h2>
      </div>

      {/* WHITE STRIP WITH INFO CARDS - RESTORED */}
      <div className="w-full bg-white py-10 lg:py-12 mb-16 lg:mb-24 shadow-sm border-y border-purple-100">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/mobility.png" alt="Mobility" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Mobility</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  <span className="font-bold text-[#1A1A1A]">87%</span> of women report <br className="hidden lg:block" /> harassment in public transport
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/skill_gap.png" alt="Skills Gap" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Skills Gap</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  Technical training programs <br className="hidden lg:block" /> rarely target women
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/workplace_safety.png" alt="Safety" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Workplace Safety</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  Safety concerns and lack of <br className="hidden lg:block" /> support systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* NEW UPDATED STATS CARDS - MATCHING TYPE 2 (THIN RINGS) */}
      <div className="max-w-[1240px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Large Card - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[40px] overflow-hidden flex flex-col shadow-sm"
          >
            {/* Top Section */}
            <div className="p-10 flex flex-col sm:flex-row items-center gap-10 flex-grow">
              <CircularProgress percentage={5} label="<5%" size={160} strokeWidth={6} />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[36px] md:text-[48px] lg:text-[54px] font-[900] leading-[1.05] text-[#1A1A1A] tracking-tighter">
                  <span className="block">&lt;5%</span>
                  Women in <br className="hidden md:block" /> Transport Jobs
                </h3>
              </div>
            </div>

            {/* Bottom Representation Bar */}
            <div className="bg-[#F3E8FF] p-8 flex justify-between items-center px-12">
              <div className="flex flex-col items-start text-left">
                <span className="text-[28px] md:text-[36px] font-[900] text-[#1A1A1A] tracking-tighter leading-none">4.8%</span>
                <span className="text-[11px] font-[900] text-gray-500 uppercase tracking-wider mt-1">Female Representation</span>
              </div>
              <div className="flex flex-col items-end text-right">
                <span className="text-[28px] md:text-[36px] font-[900] text-[#1A1A1A] tracking-tighter leading-none">95.2%</span>
                <span className="text-[11px] font-[900] text-gray-500 uppercase tracking-wider mt-1">Male Dominated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            
            {/* Hired Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-10 flex items-center gap-6 shadow-sm flex-1"
            >
              <CircularProgress percentage={72} label="72%" size={100} strokeWidth={5} isSmall={true} />
              <h4 className="text-[20px] md:text-[24px] lg:text-[28px] font-[900] leading-[1.2] text-[#1A1A1A] tracking-tighter text-left">
                72% Of Our Graduates Get Hired Within 6 Months
              </h4>
            </motion.div>

            {/* License Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-8 md:p-10 flex items-center gap-6 shadow-sm flex-1"
            >
              <CircularProgress percentage={1} label="<1%" size={100} strokeWidth={5} isSmall={true} />
              <h4 className="text-[20px] md:text-[24px] lg:text-[28px] font-[900] leading-[1.2] text-[#1A1A1A] tracking-tighter text-left">
                Professional Driving Licenses Held by Women
              </h4>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChange;
