"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FileText, 
  BarChart3, 
  Users2, 
  Settings, 
  PieChart, 
  Download 
} from "lucide-react";

const AdvisoryResearch = () => {
  const focusAreas = [
    {
      icon: BarChart3,
      text: "Gendered barriers to mobility and workforce participation"
    },
    {
      icon: Users2,
      text: "Women's experiences in male-dominated sectors"
    },
    {
      icon: Settings,
      text: "What makes training programs actually work"
    },
    {
      icon: PieChart,
      text: "Economic impact of women's participation"
    }
  ];

  const researchPapers = [
    {
      year: "2024",
      org: "Asian Development Bank (ADB)",
      title: "'Her Drive: Women's Inclusion in Bangladesh's EV Value Chain'",
      desc: "Exploring mobility solutions and institutional support for women in the electric vehicle sector, identifying key leverage points for inclusion."
    },
    {
      year: "2023",
      org: "Even Academy",
      title: "'Making Logistics Inclusive: Lodha Case Study'",
      desc: "Analyzing the implementation of inclusive hiring and training practices in large-scale logistics hubs and industrial parks."
    },
    {
      year: "2024",
      org: "GIZ",
      title: "'Urban Women's Livelihoods: Surat & Bhubaneswar'",
      desc: "A comparative study of economic participation across major Indian urban hubs, focusing on the informal sector and mobility barriers."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-[600px]">
            <span className="text-[#A64AED] font-bold text-[14px] tracking-widest uppercase mb-4 block">
              What We Study
            </span>
            <h2 className="text-[48px] md:text-[56px] font-black text-[#1A1A1A] mb-3 leading-tight">
              Our Research
            </h2>
            <div className="w-16 h-1.5 bg-[#A64AED] rounded-full mb-8" />
            <p className="text-zinc-500 text-[18px] font-medium leading-relaxed">
              We combine field expertise with rigorous data analysis to identify and dismantle the barriers preventing women from participating in high-growth economic sectors.
            </p>
          </div>

          <div className="lg:max-w-[500px] w-full">
            <h3 className="text-[#1A1A1A] font-bold text-[16px] mb-8">
              Primary Focus Areas
            </h3>
            <div className="space-y-6">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EBFF] flex items-center justify-center shrink-0">
                    <area.icon className="w-5 h-5 text-[#A64AED]" />
                  </div>
                  <span className="text-[#1A1A1A] font-bold text-[15px] leading-snug">
                    {area.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border-2 border-[#A64AED]/30 rounded-[32px] p-10 flex flex-col justify-between h-full hover:border-[#A64AED] transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#A64AED] text-white px-3 py-1 rounded-lg text-[12px] font-black tracking-tight">
                      {paper.year}
                    </span>
                    <span className="text-[#1A1A1A] text-[13px] font-bold">
                      {paper.org}
                    </span>
                  </div>
                  <FileText className="w-7 h-7 text-[#A64AED] shrink-0" />
                </div>

                <h3 className="text-[24px] font-black text-[#1A1A1A] leading-tight mb-6 group-hover:text-[#A64AED] transition-colors line-clamp-3">
                  {paper.title}
                </h3>
                <p className="text-zinc-500 text-[15px] font-medium leading-relaxed mb-10">
                  {paper.desc}
                </p>
              </div>

              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-fit bg-[#1A1A1A] hover:bg-[#A64AED] text-white px-8 py-3.5 rounded-2xl flex items-center justify-center gap-3 text-[14px] font-black transition-all"
                >
                  <Download className="w-4 h-4" />
                  Request Report
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryResearch;
