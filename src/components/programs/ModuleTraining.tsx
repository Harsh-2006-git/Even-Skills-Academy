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
      { icon: "/module-1-icon-1.png", label: "Traffic Education", isImage: true },
      { icon: "/module-1-icon-2.png", label: "Vehicle Mechanism", isImage: true },
      { icon: "/module-1-icon-3.png", label: "Defensive Driving", isImage: true },
      { icon: "/module-1-icon-4.png", label: "Route Planning", isImage: true }
    ],
    image: "/module-1.png",
    reverse: false
  },
  {
    id: "02",
    moduleNum: "MODULE 02",
    title: "Self-Defense Training",
    partner: "Zomato",
    stats: "700+",
    statsTag: "WOMEN EMPOWERED",
    description: "Physical and psychological preparedness for real-world scenarios and workplace safety.",
    features: [
      { icon: "/module-2-icon-1.png", label: "Martial Arts Intro", isImage: true },
      { icon: "/module-2-icon-2.png", label: "De-escalation", isImage: true },
      { icon: "/module-2-icon-3.png", label: "Safety Tools", isImage: true },
      { icon: "/module-2-icon-4.png", label: "Legal Rights", isImage: true }
    ],
    image: "/module-2.png",
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
      { icon: "/module-3-icon-1.png", label: "Inventory Mgmt", isImage: true },
      { icon: "/module-3-icon-2.png", label: "Customer Service", isImage: true },
      { icon: "/module-3-icon-3.png", label: "Tech Operations", isImage: true },
      { icon: "/module-3-icon-4.png", label: "Load Handling", isImage: true }
    ],
    image: "/module-3.png",
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
      { icon: "/module-4-icon-1.png", label: "Body Language", isImage: true },
      { icon: "/module-4-icon-2.png", label: "Conflict Mgmt", isImage: true },
      { icon: "/module-4-icon-3.png", label: "Public Speaking", isImage: true },
      { icon: "/module-4-icon-4.png", label: "Work Ethic", isImage: true }
    ],
    image: "/module-4.png",
    reverse: true
  }
];

const ModuleBlock = ({ data }: { data: typeof modules[0] }) => {
  return (
    <div className={`flex flex-col ${data.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-10 lg:gap-20 mb-16 last:mb-0 w-full`}>
      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: data.reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-[40px] p-8 md:p-10 shadow-xl border border-[#AE75DA] relative w-full lg:w-[741px]"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-[42px] md:text-[48px] font-black leading-none text-[#1A1A1A] mb-1">{data.id}</span>
            <span className="text-[#FFA500] font-black text-[16px] tracking-tight">{data.moduleNum}</span>
            <span className="text-zinc-400 text-[13px] font-bold mt-1">in partnership with: <span className="text-[#1A1A1A]">{data.partner}</span></span>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[32px] md:text-[36px] font-black text-[#1A1A1A] leading-none">{data.stats}</span>
            <span className="text-[9px] font-black text-zinc-400 tracking-tighter mt-1">{data.statsTag}</span>
          </div>
        </div>

        <h3 className="text-[30px] md:text-[34px] font-black text-[#1A1A1A] mb-4 leading-tight tracking-tighter">
          {data.title}
        </h3>

        <p className="text-zinc-500 text-[15px] font-medium leading-relaxed mb-6 max-w-[550px]">
          {data.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {data.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-[16px] border border-[#AE75DA] bg-[#AE75DA]/5">
              {(feature as any).isImage ? (
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image src={feature.icon} alt={feature.label} fill className="object-contain" />
                </div>
              ) : (
                <span className="text-lg">{feature.icon}</span>
              )}
              <span className="text-[13px] font-bold text-[#1A1A1A] leading-tight">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/#contact">
            <button className="bg-[#A64AED] hover:bg-[#9333EA] text-white px-7 py-3.5 rounded-full font-black text-[14px] transition-all shadow-lg hover:shadow-[#A64AED]/30">
              Start Training
            </button>
          </Link>
          <Link href="/impact">
            <button className="bg-white border border-[#1A1A1A] hover:bg-zinc-50 text-[#1A1A1A] px-7 py-3.5 rounded-full font-black text-[14px] transition-all">
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
        className="flex-1 flex justify-center items-center"
      >
        <div className="relative w-full lg:w-[680px] h-[450px] lg:h-[680px]">
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
    <section className="w-full bg-[#E5D1FF] py-32 flex flex-col items-center">
      <div className="max-w-[1550px] w-full mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[38px] sm:text-[46px] md:text-[54px] lg:text-[62px] font-black text-[#1A1A1A] leading-[1.1] tracking-tight w-full"
          >
            <span className="whitespace-nowrap">Empowering Excellence through</span><br />
            <span>Curated Training.</span>
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
