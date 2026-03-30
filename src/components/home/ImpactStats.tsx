"use client";

import React, { useEffect, useRef } from "react";
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
    <section className="w-full bg-[#F3E8FF] py-24 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[64px] font-[900] text-[#1A1A1A] mb-20 tracking-tighter"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              className="bg-white rounded-[32px] p-10 md:p-12 flex flex-col items-center justify-center shadow-lg shadow-purple-200/50 cursor-default transition-all hover:translate-y-[-8px] hover:shadow-xl hover:shadow-purple-200"
            >
              <div className="mb-6">
                {stat.icon}
              </div>
              <div className="text-[48px] md:text-[56px] lg:text-[64px] font-[900] text-[#A64AED] leading-none mb-4 tracking-tighter">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[18px] md:text-[20px] font-bold text-[#4B5563]">
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
          className="mt-20"
        >
          <button className="flex items-center gap-4 px-10 py-5 bg-[#A64AED] text-white rounded-full font-[900] text-[20px] shadow-xl shadow-purple-400/30 transition-all hover:scale-105 hover:bg-[#9333EA] active:scale-95 mx-auto">
            View Our Impact
            <div className="bg-white/20 p-1.5 rounded-full flex items-center justify-center">
              <svg
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;


