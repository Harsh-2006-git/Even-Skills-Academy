"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight, Clock } from "lucide-react";

interface StoryCardProps {
  name: string;
  designation: string;
  image: string;
  domain: string;
  quote: string;
  transitionData?: { from: string; to: string } | { before: string; after: string };
  delay: number;
  imagePosition?: string;
}

const VandanaCard = ({ name, designation, image, domain, quote, transitionData, delay, imagePosition }: StoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col lg:flex-row"
    >
      {/* Image Area */}
      <div className="relative bg-white lg:w-[45%] h-[220px] sm:h-[280px] lg:h-auto overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className={`object-cover transition-transform duration-700 hover:scale-105 ${imagePosition || "object-center"}`}
        />
        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm z-20">
          <p className="text-[#6B7280] text-[10px] lg:text-[12px] font-bold tracking-wider uppercase mb-0.5">SKILL DOMAIN</p>
          <p className="text-[#1A1A1A] text-[12.5px] lg:text-[14px] font-bold">{domain}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-8 flex-1 flex flex-col justify-between lg:max-w-[55%]">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-[#A64AED] flex items-center justify-center text-white text-[20px] font-black">
              {name[0]}
            </div>
            <div>
              <h4 className="text-[20px] sm:text-[24px] font-bold text-[#1A1A1A] leading-tight">{name}</h4>
              <p className="text-[#A64AED] text-[14px] font-medium">{designation}</p>
            </div>
          </div>

          {transitionData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 p-4 rounded-[16px] bg-transparent border-0">
              <div>
                <p className="text-[#6B7280] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                   BEFORE
                </p>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">{(transitionData as any).before}</p>
              </div>
              <div>
                <p className="text-[#A64AED] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                   AFTER
                </p>
                <p className="text-[#4B5563] text-[14px] leading-relaxed">{(transitionData as any).after}</p>
              </div>
            </div>
          )}

          <blockquote className="text-[15px] sm:text-[18px] text-[#4B5563] leading-relaxed italic mb-5 relative">
            <span className="absolute -left-4 top-0 w-1 h-full bg-[#A64AED] opacity-30 rounded-full"></span>
            "{quote}"
          </blockquote>
        </div>

        <button className="flex items-center gap-2 text-[#A64AED] font-bold text-[14px] group">
          READ FULL INTERVIEW <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const GridStoryCard = ({ name, designation, image, domain, quote, transitionData, delay, imagePosition }: StoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row"
    >
      {/* Image Area */}
      <div className="relative w-full md:w-[38%] h-[200px] sm:h-[250px] md:h-auto overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className={`object-cover transition-transform duration-700 hover:scale-105 ${imagePosition || "object-center"}`}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
        
        {/* Skill Domain Overlay */}
        <div className="absolute bottom-4 left-4 text-white z-20 pointer-events-none">
          <p className="text-[#c084fc] text-[9px] font-bold tracking-[0.15em] uppercase mb-0.5">SKILL DOMAIN</p>
          <p className="text-white text-[15px] font-bold leading-tight">{domain}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-6 flex-1 flex flex-col justify-between md:max-w-[62%]">
        <div>
          {/* Profile Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#A64AED] flex items-center justify-center text-white text-[15px] font-black">
              {name[0]}
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-[#111827] leading-tight">{name}</h4>
              <p className="text-[#6B7280] text-[12.5px] mt-0.5 font-medium">{designation}</p>
            </div>
          </div>

          {/* Transition Block */}
          {transitionData && (
            <div className="bg-[#F5F6FF] rounded-[12px] p-3 mb-4 border border-[#E0E4FF]/30">
              <div>
                <div className="flex items-center gap-1.5 mb-1.5 text-[#76777D]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M16 3 21 8 16 13" />
                    <path d="M21 8H3" />
                    <path d="m8 21-5-5 5-5" />
                    <path d="M3 16h18" />
                  </svg>
                  <span className="text-[9.5px] font-bold tracking-[0.1em] uppercase">TRANSITION</span>
                </div>
                <p className="text-[#374151] text-[12.5px] leading-relaxed">
                  <span className="font-semibold text-[#6B7280]">From:</span> {(transitionData as any).from}<br />
                  <span className="font-semibold text-[#9863FF] mt-0.5 inline-block">To:</span> {(transitionData as any).to}
                </p>
              </div>
            </div>
          )}

          {/* Quote */}
          <p className="text-[#374151] text-[14px] leading-relaxed mb-4 font-normal">
            &quot;{quote}&quot;
          </p>
        </div>

        {/* Action Link */}
        <button className="flex items-center gap-2 text-[#9863FF] hover:text-[#7C3AED] font-semibold text-[13px] transition-colors group w-fit">
          Read full interview <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const ImpactStories = () => {
  return (
    <section className="bg-[#E9D5FF] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[26px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold text-[#1A1A1A] text-center mb-8 md:mb-12 tracking-[-0.03em] leading-tight"
        >
          Stories from the Field
        </motion.h2>

        <div className="space-y-10">
          {/* Large Card */}
          <VandanaCard 
            name="Vandana"
            designation="Dark Store Associate at Zepto"
            image="/VandanaAtZepto.jpg"
            domain="Mobility + Platform Economy"
            quote="I was scared of traffic. Now I ride to work every day, navigating the city with confidence I never knew I possessed."
            transitionData={{
              before: "Garment factory worker in a restricted industrial zone.",
              after: "Empowered associate managing logistics and rapid fulfillment."
            }}
            delay={0.1}
          />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <GridStoryCard 
              name="Tanishka"
              designation="Assembly Line Operator at Ola Electric"
              image="/TanishkaOlaElectric.png"
              domain="EV & Green Energy"
              quote="I never thought I could work with machines. Now I'm teaching my younger sister to think bigger."
              transitionData={{
                from: "Unemployed & seeking direction",
                to: "High-precision manufacturing"
              }}
              delay={0.2}
              imagePosition="object-top"
            />
            <GridStoryCard 
              name="Priya"
              designation="Remote Customer Support"
              image="/PriyaRemoteSupport.jpg"
              domain="AI & Digital Tech"
              quote="I work from home now, but it's real work with real pay. My in-laws respect me more."
              transitionData={{
                from: "Home-based tailoring for local clients",
                to: "Global digital support specialist"
              }}
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;

