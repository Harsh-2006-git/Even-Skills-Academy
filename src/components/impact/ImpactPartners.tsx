"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface PartnerTestimonialProps {
  quote: string;
  authorTitle: string;
  company: string;
  highlighted?: boolean;
  delay: number;
}

const PartnerTestimonial = ({ quote, authorTitle, company, highlighted, delay }: PartnerTestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`p-10 rounded-[32px] flex flex-col justify-between min-h-[411px] transition-all duration-300 ${
      highlighted 
        ? 'bg-[#F0DEFF] shadow-xl shadow-purple-500/10' 
        : 'bg-white border border-[#C6C6CD]/30 hover:border-[#A64AED]/50'
    }`}
  >
    <div>
      <Quote size={40} className="text-[#A64AED]/30 mb-6" fill="currentColor" />
      <p className="text-[#1A1A1A] text-[18px] font-medium leading-relaxed mb-8">
        "{quote}"
      </p>
    </div>

    <div className="flex items-center gap-4 pt-6 border-t border-[#1A1A1A]/5">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black overflow-hidden ${
        highlighted ? 'bg-[#A64AED]' : 'bg-[#131B2E]'
      }`}>
        <div className="w-full h-full relative">
           {/* Placeholder for avatar, could be letter or icon as in screenshot */}
           <div className="flex items-center justify-center w-full h-full text-[14px]">
             {company[0]}
           </div>
        </div>
      </div>
      <div>
        <h4 className="text-[16px] font-black text-[#1A1A1A] leading-tight">{authorTitle}</h4>
        <p className="text-[#6B7280] text-[14px] font-medium transition-colors group-hover:text-[#A64AED]">
          {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const ImpactPartners = () => {
  return (
    <section className="bg-[#FDFDFD] py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[56px] font-black text-[#1A1A1A] text-center mb-20 relative"
        >
          What Our Partners Say
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#A64AED] rounded-full opacity-30"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-[1184px] mx-auto">
          <PartnerTestimonial 
            quote="Even Academy doesn't just send us resumes. They send us job-ready candidates who stay."
            authorTitle="HR Head"
            company="Zepto"
            delay={0.1}
          />
          <PartnerTestimonial 
            quote="Their training is the only one that actually prepares women for factory work — not just the technical part, but the reality of being the only woman on the floor."
            authorTitle="Operations Manager"
            company="Ola Electric"
            highlighted
            delay={0.2}
          />
          <PartnerTestimonial 
            quote="We tried hiring women directly. 80% quit in 3 months. With Even graduates, retention is over 70%. That's the difference training makes."
            authorTitle="Logistics Partner"
            company="Flipkart"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactPartners;
