"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";

interface StoryCardProps {
  name: string;
  designation: string;
  image: string;
  domain: string;
  quote: string;
  large?: boolean;
  transitionData?: { from: string; to: string } | { before: string; after: string };
  delay: number;
}

const StoryCard = ({ name, designation, image, domain, quote, large, transitionData, delay }: StoryCardProps) => {
  const isBeforeAfter = transitionData && 'before' in transitionData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white rounded-[48px] overflow-hidden shadow-sm flex flex-col ${large ? 'lg:flex-row' : ''}`}
    >
      {/* Image Area */}
      <div className={`relative ${large ? 'lg:w-[45%] h-[400px] lg:h-auto' : 'h-[300px]'}`}>
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
          <p className="text-[#6B7280] text-[12px] font-bold tracking-wider uppercase mb-0.5">SKILL DOMAIN</p>
          <p className="text-[#1A1A1A] text-[14px] font-black">{domain}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className={`p-8 lg:p-12 flex-1 flex flex-col justify-between ${large ? 'lg:max-w-[55%]' : ''}`}>
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#A64AED] flex items-center justify-center text-white text-[20px] font-black">
              {name[0]}
            </div>
            <div>
              <h4 className="text-[24px] font-black text-[#1A1A1A] leading-tight">{name}</h4>
              <p className="text-[#A64AED] text-[14px] font-medium">{designation}</p>
            </div>
          </div>

          {transitionData && (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 rounded-3xl ${large ? 'bg-transparent border-0' : 'bg-[#F2F3FF]'}`}>
              {isBeforeAfter ? (
                <>
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
                </>
              ) : (
                <div className="col-span-2">
                  <p className="text-[#6B7280] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">TRANSITION</p>
                  <p className="text-[#4B5563] text-[14px] leading-loose">
                    <span className="font-bold text-[#6B7280]">From:</span> {(transitionData as any).from}<br />
                    <span className="font-bold text-[#A64AED]">To:</span> {(transitionData as any).to}
                  </p>
                </div>
              )}
            </div>
          )}

          <blockquote className="text-[18px] text-[#4B5563] leading-relaxed italic mb-8 relative">
            <span className="absolute -left-4 top-0 w-1 h-full bg-[#A64AED] opacity-30 rounded-full"></span>
            "{quote}"
          </blockquote>
        </div>

        <button className="flex items-center gap-2 text-[#A64AED] font-black text-[14px] group">
          READ FULL INTERVIEW <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

const ImpactStories = () => {
  return (
    <section className="bg-[#E9D5FF] py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[60px] font-black text-[#1A1A1A] text-center mb-20 tracking-[-0.03em]"
        >
          Stories from the Field
        </motion.h2>

        <div className="space-y-10">
          {/* Large Card */}
          <StoryCard 
            name="Vandana"
            designation="Dark Store Associate at Zepto"
            image="/mobility.png"
            domain="Mobility + Platform Economy"
            quote="I was scared of traffic. Now I ride to work every day, navigating the city with confidence I never knew I possessed."
            large
            transitionData={{
              before: "Garment factory worker in a restricted industrial zone.",
              after: "Empowered associate managing logistics and rapid fulfillment."
            }}
            delay={0.1}
          />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <StoryCard 
              name="Tanishka"
              designation="Assembly Line Operator at Ola Electric"
              image="/ev_green_evergy.png"
              domain="EV & Green Energy"
              quote="I never thought I could work with machines. Now I'm teaching my younger sister to think bigger."
              transitionData={{
                from: "Unemployed & seeking direction.",
                to: "High-precision manufacturing."
              }}
              delay={0.2}
            />
            <StoryCard 
              name="Priya"
              designation="Remote Customer Support"
              image="/platform_economy.png"
              domain="AI & Digital Tech"
              quote="I work from home now, but it's real work with real pay. My in-laws respect me more."
              transitionData={{
                from: "Home-based tailoring for local clients.",
                to: "Global digital support specialist."
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
