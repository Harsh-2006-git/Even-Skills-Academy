"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-[600px]">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[56px] font-[900] text-[#1A1A1A] mb-8 leading-[1.1] tracking-tighter"
            >
              Training & Skill Development At Even Academy
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[18px] md:text-[20px] text-zinc-600 font-medium leading-relaxed tracking-tight"
            >
              Over <span className="text-[#1A1A1A] font-bold">4,400+ women</span> trained across four modules all from resource-poor communities, all now working with confidence.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {mainStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F3E8FF] p-8 rounded-[24px] min-w-[200px] flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="text-[28px] font-black text-[#1A1A1A] mb-1">{stat.value}</span>
                <span className="text-zinc-600 font-bold text-[14px] uppercase tracking-wider">{stat.label}</span>
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
              className="bg-[#F9F7FF] p-7 rounded-[32px] flex flex-col min-h-[380px] relative overflow-hidden"
            >
              {/* Top Row: Icon and Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#A64AED] p-3 rounded-[18px]">
                  {module.icon}
                </div>
                <div className="bg-[#EFEDF5] px-3.5 py-1.5 rounded-full">
                  <span className="text-[11px] font-black text-zinc-600 tracking-tight">{module.badge}</span>
                </div>
              </div>

              {/* Title and Stats */}
              <div className="mb-10">
                <span className="text-zinc-500 font-bold text-[15px] tracking-tight">{module.title}</span>
                <div className="flex flex-col mt-3">
                  <span className="text-[42px] font-black text-[#1A1A1A] leading-[0.8]">{module.count}</span>
                  <span className="text-[32px] font-bold text-[#1A1A1A] mt-2">{module.unit}</span>
                </div>
              </div>

              {/* Chart Implementation */}
              <div className="mt-auto h-[90px] w-full flex items-end justify-between relative px-1">
                {module.chartType === 'bars' && module.chartData && (
                  <div className="flex items-end gap-2 w-full h-full pb-1">
                    {module.chartData.map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 rounded-[4px] min-h-[4px]"
                        style={{ height: `${h}%`, backgroundColor: module.barColors?.[i] || '#DCC0FF' }}
                      />
                    ))}
                  </div>
                )}

                {module.chartType === 'target_bars' && module.chartData && (
                  <div className="w-full h-full relative pb-1">
                    <div className="absolute -top-6 right-0">
                      <span className="text-[15px] font-black text-[#1A1A1A]">{module.highlightValue}</span>
                    </div>
                    <div className="flex items-end gap-2 w-full h-full">
                      {module.chartData.map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 rounded-[4px] min-h-[4px]"
                          style={{ height: `${h}%`, backgroundColor: module.barColors?.[i] || '#DCC0FF' }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {module.chartType === 'progress' && module.progressData && (
                  <div className="w-full flex flex-col gap-5 pb-6">
                    {module.progressData.map((p, i) => (
                      <div key={i} className="h-[9px] w-full bg-[#EAE8F2] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: p.width, backgroundColor: p.color }} />
                      </div>
                    ))}
                  </div>
                )}

                {module.chartType === 'line' && (
                  <div className="w-full h-full pt-2">
                    <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
                      <path 
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
