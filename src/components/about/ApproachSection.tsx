"use client";

import React from "react";
import { motion } from "framer-motion";

const approachCards = [
  {
    title: "Mobility Access",
    description: "Women Mobility Centers teach riding, navigation, and road confidence. If you can't move freely, you can't work freely.",
    image: "/our-Approch-1.png",
    imageScale: 1.2
  },
  {
    title: "Future-Ready Skills",
    description: "Training in sectors with demand: EV, green energy, platform economy, AI-assisted work. We follow jobs, not trends.",
    image: "/our-Approch-2.png",
    imageScale: 1.15
  },
  {
    title: "Safety & Confidence",
    description: "Workplace harassment prevention, self-defense basics, rights awareness. Skills mean nothing if women don't feel safe using them.",
    image: "/our-Approch-3.png",
    imageScale: 1.25
  },
  {
    title: "Workplace Readiness",
    description: "Professional communication, punctuality, conflict resolution, understanding workplace hierarchies.",
    image: "/our-Approch-4.png",
    imageScale: 1.3
  },
  {
    title: "Employer Partnerships",
    description: "Our curriculum is co-designed with hiring companies. Training ends with interviews, not certificates.",
    image: "/our-Approch-5.png",
    imageScale: 1.2
  }
];

const ApproachSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#000] font-montserrat text-4xl md:text-5xl font-bold leading-[1.29em]"
          >
            Our Approach
          </motion.h2>
        </div>

        {/* Responsive Flex / Grid Wrapper */}
        <div className="flex flex-col gap-8 items-center">
          
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-[1100px]">
            {approachCards.slice(0, 3).map((card, index) => (
              <ApproachCard key={card.title} card={card} index={index} />
            ))}
          </div>

          {/* Bottom Row: 2 Cards (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full max-w-[730px]">
            {approachCards.slice(3).map((card, index) => (
              <ApproachCard key={card.title} card={card} index={index + 3} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

interface ApproachCardProps {
  card: {
    title: string;
    description: string;
    image: string;
    imageScale: number;
  };
  index: number;
}

const ApproachCard = ({ card, index }: ApproachCardProps) => {
  const { title, description, image, imageScale } = card;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full max-w-[343px] h-[281px] rounded-[27px] border-2 border-[#A64AED] bg-[#FDFDFD] overflow-hidden shadow-sm mx-auto group hover:shadow-md hover:border-[#ae75da] transition-all duration-300 select-none flex flex-col items-center"
    >
      {/* Centered Image Container at the top */}
      <div className="w-full h-[135px] flex items-center justify-center relative pt-4 overflow-visible">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="object-contain max-h-[115px] max-w-[280px] w-auto transition-transform duration-300 group-hover:scale-105"
            style={{ transform: `scale(${imageScale})` }}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[#191919] font-inter text-[25px] font-bold leading-[1.29em] text-center mt-1 px-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#191919] font-inter text-[15px] leading-[1.32em] opacity-95 text-center mt-1.5 px-6 line-clamp-3">
        {description}
      </p>
    </motion.div>
  );
};

export default ApproachSection;
