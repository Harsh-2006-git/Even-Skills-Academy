"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const modules = [
  {
    id: "01",
    moduleNum: "MODULE 01",
    partner: "Honda",
    title: "Mobility Training",
    stats: "1,200+",
    statsTag: "WOMEN CERTIFIED",
    description: "Comprehensive road safety and professional navigation mastery for urban mobility.",
    features: [
      { icon: "/module-1-icon-1.png", label: "Traffic Education" },
      { icon: "/module-1-icon-2.png", label: "Vehicle Mechanism" },
      { icon: "/module-1-icon-3.png", label: "Defensive Driving" },
      { icon: "/module-1-icon-4.png", label: "Route Planning" }
    ],
    image: "/module-1-new.png",
    reverse: false
  },
  {
    id: "02",
    moduleNum: "MODULE 02",
    title: "Self-Defense Training",
    partner: "Delhi Police",
    stats: "700+",
    statsTag: "WOMEN EMPOWERED",
    description: "Physical and psychological preparedness for real-world scenarios and workplace safety.",
    features: [
      { icon: "/module-2-icon-1.png", label: "Practical Personal Safety Techniques" },
      { icon: "/module-2-icon-2.png", label: "Situational Awareness Training" },
      { icon: "/module-2-icon-3.png", label: "Strategies for Challenging Situations" },
      { icon: "/module-2-icon-4.png", label: "Confidence & Assertiveness Building" }
    ],
    image: "/module-2-new4.png",
    reverse: true
  },
  {
    id: "03",
    moduleNum: "MODULE 03",
    title: "Logistics Excellence",
    partner: "Amazon",
    stats: "4,500+",
    statsTag: "ORDERS DELIVERED",
    description: "Supply chain fundamentals and last-mile delivery mastery for modern professionals.",
    features: [
      { icon: "/module-3-icon-1.png", label: "Inventory Management & Stock Counting" },
      { icon: "/module-3-icon-2.png", label: "Order Processing & Fulfillment" },
      { icon: "/module-3-icon-3.png", label: "Packaging Standards & Quality Control" },
      { icon: "/module-3-icon-4.png", label: "Efficient Distribution Techniques" }
    ],
    image: "/module-3-new.png",
    reverse: false
  },
  {
    id: "04",
    moduleNum: "MODULE 04",
    title: "Soft Skills & Tech",
    partner: "Skill India",
    stats: "2,000+",
    statsTag: "GRADUATES PLACED",
    description: "Digital literacy and professional communication for career growth in logistics.",
    features: [
      { icon: "/module-4-icon-1.png", label: "Communication Skills" },
      { icon: "/module-4-icon-2.png", label: "Teamwork & Collaboration" },
      { icon: "/module-4-icon-3.png", label: "Time Management" },
      { icon: "/module-4-icon-4.png", label: "Problem-Solving & Critical Thinking" }
    ],
    image: "/module-4.png",
    reverse: true
  }
];

const ModuleBlock = ({ data }: { data: typeof modules[0] }) => {
  return (
    <div className={`flex flex-col ${data.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-12 lg:gap-16 xl:gap-20 mb-24 lg:mb-32 last:mb-0 w-full`}>
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: data.reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-[29px] p-5 md:p-6 shadow-xl border border-[#AE75DA]/50 relative w-full lg:w-[560px] flex flex-col min-h-[460px] justify-between"
      >
        <div>
          {/* Card Header */}
          <div className="flex justify-between items-start border-b-2 border-dashed border-zinc-100 pb-3 mb-4">
            <div className="flex flex-col">
              <span className="text-[30px] md:text-[36px] font-bold font-montserrat leading-none text-[#1A1A1A] mb-1">{data.id}</span>
              <span className="text-[#F5A623] font-bold font-montserrat text-[13px] tracking-wide uppercase">{data.moduleNum}</span>
              <span className="text-zinc-500 text-[12px] font-normal mt-1">
                in partnership with: <span className="text-[#1A1A1A] font-semibold">{data.partner}</span>
              </span>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="text-[22px] md:text-[26px] font-bold font-montserrat text-[#A64AED] leading-none">{data.stats}</span>
              <span className="text-[9px] font-bold text-zinc-400 tracking-wider uppercase mt-1">{data.statsTag}</span>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="text-[22px] md:text-[25px] font-bold font-montserrat text-[#1A1A1A] mb-2 leading-tight">
              {data.title}
            </h3>
            <p className="text-zinc-500 text-[14px] font-normal leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-1 px-2 rounded-[16px] border border-[#A64AED] bg-white min-h-[70px] h-auto py-1.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-[60px] h-[54px] flex-shrink-0">
                  <Image 
                    src={feature.icon} 
                    alt={feature.label} 
                    fill 
                    className="object-contain" 
                  />
                </div>
                <span className="text-[12px] sm:text-[13px] font-semibold text-[#191919] leading-tight pr-1">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Link href="/#contact">
            <button className="bg-[#A64AED] hover:bg-[#9333EA] text-white px-6 py-2.5 rounded-full font-bold text-[13px] transition-all shadow-lg hover:shadow-[#A64AED]/20 active:scale-95">
              Start Training
            </button>
          </Link>
          <Link href="/impact">
            <button className="bg-white border border-[#1A1A1A] hover:bg-zinc-50 text-[#1A1A1A] px-6 py-2.5 rounded-full font-bold text-[13px] transition-all active:scale-95">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Image Area */}
      <motion.div 
        initial={{ opacity: 0, x: data.reverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full flex justify-center items-center"
      >
        <div className="relative w-full max-w-[480px] h-[360px] md:h-[420px] lg:h-[480px]">
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

const ModuleTraining = () => {
  return (
    <section className="w-full bg-[#E5D1FF] pt-8 pb-24 md:pt-12 md:pb-32 flex flex-col items-center">
      <div className="max-w-[1550px] w-full mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-semibold font-montserrat text-[#1A1A1A] leading-[1.2] tracking-tight w-full"
          >
            Empowering Excellence through<br className="hidden md:inline" /> Curated Training.
          </motion.h2>
        </div>

        {/* Modules List */}
        <div className="flex flex-col">
          {modules.map((m) => (
            <ModuleBlock key={m.id} data={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleTraining;
