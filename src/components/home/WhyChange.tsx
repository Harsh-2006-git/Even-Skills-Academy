"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  textSizeClass?: string;
  color?: string;
  bgColor?: string;
  rotation?: number;
}

const CircularProgress = ({ 
  percentage, 
  label, 
  size = 120, 
  strokeWidth = 6,
  textSizeClass = "text-[28px] md:text-[34px]",
  color = "#AE75DA",
  bgColor = "rgba(174, 117, 218, 0.2)",
  rotation = -90
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: `rotate(${rotation}deg)` }}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
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
        <span className={`${textSizeClass} font-inter font-black text-[#191919] tracking-tighter`}>
          {label}
        </span>
      </div>
    </div>
  );
};

const WhyChange = () => {
  return (
    <section className="w-full bg-[#E3C0FF] pt-8 lg:pt-12 pb-8 lg:pb-12 overflow-hidden font-inter">
      {/* SECTION 1 TITLE - RESTORED */}
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 text-center mb-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[50px] font-montserrat font-bold text-[#191919] leading-tight tracking-tight whitespace-normal md:whitespace-nowrap"
        >
          Why Women’s Access to Work Must Change
        </motion.h2>
      </div>

      {/* WHITE STRIP WITH INFO CARDS - RESTORED */}
      <div className="w-full bg-white py-6 lg:py-8 mb-8 lg:mb-12 shadow-sm border-y border-purple-100">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start text-left gap-5"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                 <CircularProgress percentage={87} label="87%" size={72} strokeWidth={6} textSizeClass="text-[18px] md:text-[22px]" color="#F59E0B" bgColor="#FEF3C7" />
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
              <div className="flex-shrink-0 flex items-center justify-center">
                 <CircularProgress percentage={30} label="30%" size={72} strokeWidth={6} textSizeClass="text-[18px] md:text-[22px]" color="#F59E0B" bgColor="#FEF3C7" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Skills Gap</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  Less than <span className="font-bold text-[#1A1A1A]">30%</span> of women participate in technical training programs
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
              <div className="flex-shrink-0 flex items-center justify-center">
                 <CircularProgress percentage={60} label="60%" size={72} strokeWidth={6} textSizeClass="text-[18px] md:text-[22px]" color="#F59E0B" bgColor="#FEF3C7" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Workplace Safety</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  <span className="font-bold text-[#1A1A1A]">60%+</span> Safety concerns and lack of support systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* NEW UPDATED STATS CARDS - MATCHING TYPE 2 (THIN RINGS) */}
      <div className="max-w-[1080px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Main Large Card - Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-[23px] border border-[#AE75DA] overflow-hidden flex flex-col shadow-sm"
          >
            {/* Top Section */}
            <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-10 flex-grow">
              <CircularProgress percentage={4.8} label="<5%" size={110} strokeWidth={11} textSizeClass="text-[20px] md:text-[24px]" color="#AE75DA" bgColor="rgba(174,117,218,0.2)" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-[26px] md:text-[36px] font-inter font-bold leading-[1.1] text-[#191919] tracking-[-0.0192em]">
                  <span className="block">&lt;5%</span>
                  <span className="block">Women in</span>
                  <span className="block">Transport Jobs</span>
                </h3>
              </div>
            </div>

            {/* Bottom Representation Bar */}
            <div className="bg-[rgba(174,117,218,0.24)] py-4 px-6 md:px-[40px] flex justify-between items-center h-[95px]">
              <div className="flex flex-col items-start text-left">
                <span className="text-[#0F172A] font-inter text-[24px] md:text-[32px] font-bold leading-none">4.8%</span>
                <span className="text-[#191919] font-inter text-[11px] md:text-[13px] font-semibold leading-none tracking-[-0.0389em] mt-1.5">Female Representation</span>
              </div>
              <div className="flex flex-col items-end text-right">
                <span className="text-[#000] font-inter text-[24px] md:text-[32px] font-bold leading-none">95.2%</span>
                <span className="text-[#191919] font-inter text-[11px] md:text-[13px] font-semibold leading-none tracking-[-0.0389em] mt-1.5">Male Dominated</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-6">
            
            {/* Hired Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[23px] border border-[#AE75DA] p-5 md:p-6 flex items-center gap-5 shadow-sm flex-1"
            >
              <CircularProgress percentage={72} label="72%" size={85} strokeWidth={8.5} textSizeClass="text-[16px] md:text-[18px]" color="#AE75DA" bgColor="rgba(174,117,218,0.2)" />
              <h4 className="text-[16px] md:text-[20px] lg:text-[22px] font-inter font-bold leading-tight text-[#191919] tracking-tight text-left">
                72% Of Our Graduates Get Hired Within 6 Months
              </h4>
            </motion.div>

            {/* License Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[23px] border border-[#AE75DA] p-5 md:p-6 flex items-center gap-5 shadow-sm flex-1"
            >
              <CircularProgress percentage={0.8} label="<1%" size={85} strokeWidth={8.5} textSizeClass="text-[16px] md:text-[18px]" color="#AE75DA" bgColor="rgba(174,117,218,0.2)" rotation={-90} />
              <h4 className="text-[16px] md:text-[20px] lg:text-[22px] font-inter font-bold leading-tight text-[#191919] tracking-tight text-left">
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
