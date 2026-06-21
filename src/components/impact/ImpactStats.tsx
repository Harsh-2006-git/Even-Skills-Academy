"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, Building2, ClipboardCheck, Users, ShieldCheck, Headset, Banknote } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, value, label, delay, isFirst }: StatCardProps & { isFirst?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`rounded-[20px] p-6 shadow-md flex flex-col justify-between h-[180px] group transition-all duration-300 cursor-pointer ${
      isFirst 
        ? "bg-[#A64AED] text-white" 
        : "bg-white hover:bg-[#1A0B2E] text-[#1A1A1A]"
    }`}
  >
    <div className={`mb-3 transition-colors duration-300 ${
      isFirst ? "text-white" : "text-[#A64AED] group-hover:text-white"
    }`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
        isFirst ? "bg-white/20" : "bg-[#F3E8FF] group-hover:bg-white/20"
      }`}>
        {icon}
      </div>
    </div>
    <div>
      <h3 className={`text-[26px] font-[700] leading-tight mb-1.5 transition-colors duration-300 ${
        isFirst ? "text-white" : "text-[#1A1A1A] group-hover:text-white"
      }`}>
        {value}
      </h3>
      <p className={`text-[11px] font-[600] tracking-widest uppercase leading-snug transition-colors duration-300 ${
        isFirst ? "text-white/80" : "text-[#6B7280] group-hover:text-white/80"
      }`}>
        {label}
      </p>
    </div>
  </motion.div>
);

const ImpactStats = () => {
  const stats = [
    {
      icon: <GraduationCap size={22} />,
      value: "2,500+",
      label: "Women Trained Across 4 Verticals",
    },
    {
      icon: <TrendingUp size={22} />,
      value: "1,800+",
      label: "Work Transitions",
    },
    {
      icon: <Building2 size={22} />,
      value: "10+",
      label: "Cities Across India",
    },
    {
      icon: <ClipboardCheck size={22} />,
      value: "72%",
      label: "Placement Rate Within 6 Months",
    },
    {
      icon: <Users size={22} />,
      value: "40+",
      label: "Employer Partners",
    },
    {
      icon: <ShieldCheck size={22} />,
      value: "20%",
      label: "Higher Retention vs. Industry Average",
    },
    {
      icon: <Headset size={22} />,
      value: "6 Months",
      label: "Post-Placement Support",
    },
    {
      icon: <Banknote size={22} />,
      value: "₹12K–18K",
      label: "Average Starting Monthly Salary",
    },
  ];

  return (
    <section className="bg-[#E9D5FF] pt-12 pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[56px] font-bold text-[#1A1A1A] text-center mb-10"
        >
          Empowering Women at Scale
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
