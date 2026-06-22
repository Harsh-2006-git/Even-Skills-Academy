"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E5D5FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: 2500,
    label: "Women Trained",
    suffix: "+",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E5D5FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
        <path d="M16 7H22V13" />
      </svg>
    ),
    value: 1800,
    label: "Work Transitions",
    suffix: "+",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E5D5FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22V18" />
        <path d="M15 22V18" />
        <path d="M8 6h.01" />
        <path d="M12 6h.01" />
        <path d="M16 6h.01" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
    value: 10,
    label: "Cities",
    suffix: "+",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#E5D5FC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px]">
        <path d="M11 17l-5-5L8 9l4 4 4-4 2 3-5 5z" />
        <path d="M18 9l1.5 1.5a1.5 1.5 0 1 1-2.12 2.12L16 11.25" />
        <path d="M6 9L4.5 10.5a1.5 1.5 0 1 0 2.12 2.12L8 11.25" />
      </svg>
    ),
    value: 40,
    label: "Partners",
    suffix: "+",
  },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const [displayValue, setDisplayValue] = React.useState("0");

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest).toLocaleString());
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  return (
    <section className="w-full relative py-10 md:py-20 overflow-hidden bg-[#1A0B2E]">
      {/* Background Images with Improved Visibility */}
      <div className="absolute inset-0 z-0 flex">
        <div className="relative w-1/2 h-full grayscale-[0.3] opacity-40">
          <Image 
            src="/our-impact-1.jpg" 
            alt="Impact background" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="relative w-1/2 h-full grayscale-[0.3] opacity-40">
          <Image 
            src="/our-impact-2.jpg" 
            alt="Impact background" 
            fill 
            className="object-cover" 
            style={{ objectPosition: "right 25%" }}
          />
        </div>
        {/* Subtle Purple Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A64AED]/40 via-[#1A0B2E]/60 to-[#1A0B2E]" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[24px] sm:text-[40px] md:text-[50px] font-montserrat font-bold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-2xl"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-[16px] sm:rounded-[20px] p-3.5 sm:p-6 flex flex-col items-center justify-center transition-all hover:bg-white/[0.12] hover:border-white/[0.22] hover:scale-[1.01] group shadow-lg"
            >
              <div className="mb-2 sm:mb-3.5 bg-white/[0.08] p-2.5 sm:p-3 rounded-lg sm:rounded-xl group-hover:bg-[#A64AED]/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-[22px] sm:text-[32px] md:text-[40px] font-montserrat font-bold text-white leading-none mb-0.5 sm:mb-1.5 tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[11.5px] sm:text-[14px] font-medium font-inter text-zinc-300 tracking-normal opacity-90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-10"
        >
          <Link href="/impact">
            <button className="flex items-center gap-1.5 sm:gap-2 px-5 py-2 sm:px-8 sm:py-3 bg-white text-[#A64AED] rounded-full font-bold text-[13px] sm:text-[16px] shadow-lg transition-all hover:scale-105 active:scale-95 mx-auto cursor-pointer">
              View Our Impact
              <svg
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
