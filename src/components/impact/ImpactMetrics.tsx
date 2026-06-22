"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Clock, TrendingUp, Heart, Star } from "lucide-react";

interface MetricCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  question: string;
  tagline: string;
  subTagline?: string;
  delay: number;
}

const MetricCard = ({ number, icon, title, question, tagline, subTagline, delay }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white border border-[#A64AED]/30 rounded-[20px] p-5 md:p-6 relative overflow-hidden h-[200px] md:h-[240px] flex flex-col justify-between group hover:border-[#A64AED] transition-all duration-300"
  >
    {/* Large Background Number */}
    <span className="absolute top-2 right-6 text-[60px] md:text-[80px] font-black text-[#A64AED]/5 select-none transition-all group-hover:text-[#A64AED]/10">
      {number}
    </span>

    <div className="relative z-10">
      <div className="w-9 h-9 md:w-10 md:h-10 bg-[#F3E8FF] rounded-lg flex items-center justify-center text-[#A64AED] mb-3 md:mb-4">
        {React.isValidElement(icon)
          ? React.cloneElement(icon, {
              className: "w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            } as any)
          : icon}
      </div>
      
      <h3 className="text-[17px] md:text-[20px] font-bold text-[#1A1A1A] mb-1 leading-snug">{title}</h3>
      <p className="text-[#6B7280] text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">{question}</p>
    </div>

    <div className="relative z-10 pt-2 md:pt-3">
      <p className="text-[#A64AED] font-bold tracking-wider uppercase text-[11px] md:text-[12px]">
        {tagline}
      </p>
      {subTagline && (
        <p className="text-[#9CA3AF] text-[10px] md:text-[11px] mt-0.5 font-medium">{subTagline}</p>
      )}
    </div>
  </motion.div>
);

const ImpactMetrics = () => {
  const metrics = [
    {
      number: "01",
      icon: <CheckCircle2 size={24} />,
      title: "Training Completion",
      question: "Did she finish the program successfully?",
      tagline: "85% COMPLETION RATE",
    },
    {
      number: "02",
      icon: <Briefcase size={24} />,
      title: "Job Placement",
      question: "Hired within 6 months of graduation?",
      tagline: "STRATEGIC PLACEMENT",
      subTagline: "By whom? At what salary?",
    },
    {
      number: "03",
      icon: <Clock size={24} />,
      title: "Retention",
      question: "Still working at 3, 6, 12 months?",
      tagline: "70%+ WITH EVEN GRADUATES",
    },
    {
      number: "04",
      icon: <TrendingUp size={24} />,
      title: "Income Growth",
      question: "Has household income increased? By how much?",
      tagline: "LONGITUDINAL TRACKING",
    },
    {
      number: "05",
      icon: <Heart size={24} />,
      title: "Confidence & Mobility",
      question: "Self-reported changes in independence.",
      tagline: "TRACKED AT 3 & 6 MONTHS",
    },
    {
      number: "06",
      icon: <Star size={24} />,
      title: "Employer Feedback",
      question: "Do hiring partners want more graduates?",
      tagline: "NPS TRACKED QUARTERLY",
    },
  ];

  return (
    <section className="bg-[#FDFDFD] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="max-w-[768px] mx-auto text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <p className="text-[#A64AED] font-bold tracking-[0.2em] text-[12px] md:text-[13px] uppercase">
            TRACKING SUCCESS
          </p>
          <h2 className="text-[26px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#1A1A1A] leading-tight">
            Our Performance Metrics
          </h2>
          <p className="text-[#6B7280] text-[15px] md:text-[18px] leading-relaxed">
            Six metrics, tracked longitudinally. Transparent data, no cherry-picking. We measure the long-term impact of our programs on women's lives and careers.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
