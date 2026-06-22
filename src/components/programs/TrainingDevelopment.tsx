"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Clean the value string to get just the number
  const numericValue = parseInt(value.replace(/,/g, "").replace(/\+/g, "").replace(/%/g, ""));
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toLocaleString());
    });
  }, [springValue]);

  const hasPlus = value.includes("+");
  const hasPercent = value.includes("%");

  return (
    <span ref={ref}>
      {displayValue}
      {hasPercent ? "%" : ""}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
};
const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.1-1.6.4L1 10M14 17H10M5 17H3c-.6 0-1-.4-1-1v-3M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m7.5 4.27 9 5.15" />
    <path d="M3.29 7 12 12l8.71-5" />
    <path d="M12 22V12" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const mainStats = [
  { label: "Total Trained", value: "4,400+" },
  { label: "Cities Active", value: "10+" },
  { label: "Training Modules", value: "4" },
  { label: "Avg Placement Rate", value: "72%" },
];

const moduleStats = [
  {
    title: "Mobility",
    count: "1,200",
    unit: "women",
    icon: <CarIcon />,
    badge: "+12%",
    chartType: "bars",
    chartData: [25, 40, 75, 45, 90], // Heights in %
    barColors: ['#DCC0FF', '#DCC0FF', '#A64AED', '#DCC0FF', '#A64AED']
  },
  {
    title: "Self-Defense",
    count: "700",
    unit: "women",
    icon: <ShieldIcon />,
    badge: "...",
    chartType: "target_bars",
    chartData: [20, 35, 45, 40, 85],
    barColors: ['#DCC0FF', '#DCC0FF', '#DCC0FF', '#DCC0FF', '#A64AED'],
    highlightValue: "70%",
  },
  {
    title: "Logistics-Specific",
    count: "2,000",
    unit: "women",
    icon: <PackageIcon />,
    badge: "Peak",
    chartType: "progress",
    progressData: [
      { color: '#A64AED', width: '75%' },
      { color: '#FF9500', width: '35%' }
    ]
  },
  {
    title: "Soft Skills",
    count: "500",
    unit: "women",
    icon: <MessageIcon />,
    badge: "Trending",
    chartType: "line",
  },
];

const TrainingDevelopment = () => {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center min-h-[910px]">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-12 sm:mb-20">
          <div className="max-w-[600px]">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[26px] sm:text-[38px] md:text-[56px] font-[700] text-[#1A1A1A] mb-4 sm:mb-6 leading-[1.1] tracking-tighter"
            >
              Training & Skill Development At Even Academy
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[15px] sm:text-[17px] md:text-[20px] text-zinc-600 font-medium leading-relaxed tracking-tight"
            >
              Over <span className="text-[#1A1A1A] font-bold">4,400+ women</span> trained across four modules all from resource-poor communities, all now working with confidence.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-10 w-full lg:w-auto">
            {mainStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#F3E8FF] p-3.5 sm:p-8 rounded-[20px] sm:rounded-[24px] w-full md:min-w-[180px] flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="text-[20px] sm:text-[24px] md:text-[28px] font-black text-[#1A1A1A] mb-0.5">
                  <AnimatedNumber value={stat.value} />
                </span>
                <span className="text-zinc-600 font-bold text-[10.5px] sm:text-[12px] md:text-[14px] uppercase tracking-wide leading-tight">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moduleStats.map((module, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#F9F7FF] p-5 sm:p-7 rounded-[24px] sm:rounded-[32px] flex flex-col min-h-[320px] sm:min-h-[380px] relative overflow-hidden"
            >
              {/* Top Row: Icon and Badge */}
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="bg-[#A64AED] p-2.5 sm:p-3 rounded-[14px] sm:rounded-[18px]">
                  {module.icon}
                </div>
                <div className="bg-[#EFEDF5] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full">
                  <span className="text-[10px] sm:text-[11px] font-black text-zinc-600 tracking-tight">{module.badge}</span>
                </div>
              </div>

              {/* Title and Stats */}
              <div className="mb-6 sm:mb-10">
                <span className="text-zinc-500 font-bold text-[13.5px] sm:text-[15px] tracking-tight">{module.title}</span>
                <div className="flex flex-col mt-2 sm:mt-3">
                  <span className="text-[32px] sm:text-[42px] font-black text-[#1A1A1A] leading-[0.8]">
                    <AnimatedNumber value={module.count} />
                  </span>
                  <span className="text-[22px] sm:text-[32px] font-bold text-[#1A1A1A] mt-1 sm:mt-2">{module.unit}</span>
                </div>
              </div>

              {/* Chart Implementation */}
              <div className="mt-auto h-[90px] w-full flex items-end justify-between relative px-1">
                {module.chartType === 'bars' && module.chartData && (
                  <div className="flex items-end gap-2 w-full h-full pb-1">
                    {module.chartData.map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1) + (i * 0.1), ease: "easeOut" }}
                        className="flex-1 rounded-[4px] min-h-[4px]"
                        style={{ backgroundColor: module.barColors?.[i] || '#DCC0FF' }}
                      />
                    ))}
                  </div>
                )}

                {module.chartType === 'target_bars' && module.chartData && (
                  <div className="w-full h-full relative pb-1">
                    <div className="absolute -top-6 right-0">
                      <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="text-[15px] font-black text-[#1A1A1A]"
                      >
                        {module.highlightValue}
                      </motion.span>
                    </div>
                    <div className="flex items-end gap-2 w-full h-full">
                      {module.chartData.map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (idx * 0.1) + (i * 0.1), ease: "easeOut" }}
                          className="flex-1 rounded-[4px] min-h-[4px]"
                          style={{ backgroundColor: module.barColors?.[i] || '#DCC0FF' }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {module.chartType === 'progress' && module.progressData && (
                  <div className="w-full flex flex-col gap-5 pb-6">
                    {module.progressData.map((p, i) => (
                      <div key={i} className="h-[9px] w-full bg-[#EAE8F2] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: p.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.4 + (i * 0.2), ease: "circOut" }}
                          className="h-full rounded-full" 
                          style={{ backgroundColor: p.color }} 
                        />
                      </div>
                    ))}
                  </div>
                )}

                {module.chartType === 'line' && (
                  <div className="w-full h-full pt-2">
                     <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        d="M0 50 Q20 30 35 45 T70 35 T100 10" 
                        fill="none" 
                        stroke="#A64AED" 
                        strokeWidth="7" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingDevelopment;
