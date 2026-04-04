"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A64AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A64AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A64AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A64AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
    <section className="w-full relative py-16 md:py-24 overflow-hidden bg-[#1A0B2E]">
      {/* Background Images with Improved Visibility */}
      <div className="absolute inset-0 z-0 flex">
        <div className="relative w-1/2 h-full grayscale-[0.3] opacity-40">
          <Image src="/our-impact-1.jpg" alt="Impact background" fill className="object-cover" />
        </div>
        <div className="relative w-1/2 h-full grayscale-[0.3] opacity-40">
          <Image src="/our-impact-2.jpg" alt="Impact background" fill className="object-cover" />
        </div>
        {/* Subtle Purple Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A64AED]/40 via-[#1A0B2E]/60 to-[#1A0B2E]" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[60px] font-[900] text-white mb-10 tracking-tight drop-shadow-2xl"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center shadow-2xl transition-all hover:bg-white/20 hover:scale-[1.02] group"
            >
              <div className="mb-4 bg-white/10 p-3 rounded-2xl group-hover:bg-[#A64AED]/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-[36px] md:text-[48px] font-[900] text-white leading-none mb-2 tracking-tighter">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[12px] md:text-[14px] font-bold text-white/80 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Link href="/impact">
            <button className="flex items-center gap-3 px-10 py-3.5 bg-white text-[#A64AED] rounded-full font-[900] text-[16px] shadow-2xl transition-all hover:scale-105 active:scale-95 mx-auto">
              View Our Impact
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
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
