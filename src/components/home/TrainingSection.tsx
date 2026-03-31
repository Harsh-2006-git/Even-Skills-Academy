"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const trainingPrograms = [
  {
    title: "Mobilizing Women for Mobility Training",
    description: "We train women in mobility, future skills, and workplace readiness creating pathways into India's fastest-growing sectors.",
    image: "/sec-1.png",
  },
  {
    title: "Mobilizing Women for Platform Economy Skills",
    description: "We train women in mobility, future skills, and workplace readiness creating pathways into India's fastest-growing sectors.",
    image: "/sec-2.png",
  },
  {
    title: "Mobilizing Women for EV & Green Energy",
    description: "EV assembly, service center operations, charging systems, and solar energy basics",
    image: "/sec-3.png",
  },
  {
    title: "Mobilizing Women for AI & Digital Tech",
    description: "Digital literacy, AI tools, workplace software, and remote work readiness",
    image: "/sec-4.png",
  },
];

const TrainingSection = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  // Auto-play feature: 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % trainingPrograms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full lg:h-[calc(100vh-78px)] min-h-[600px] bg-white flex items-center justify-center overflow-hidden py-20 lg:py-0">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24"
          >
            {/* Left Side: Content */}
            <div className="flex-1 max-w-[650px] text-center lg:text-left">
              <motion.h2 
                key={`title-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.1] text-black mb-6 tracking-tight"
              >
                {/* Typing Animation for the dynamic part of the title */}
                {trainingPrograms[activeTab].title.includes(' for ') ? (
                  <>
                    <span className="inline-block whitespace-nowrap">
                      {trainingPrograms[activeTab].title.split(' for ')[0].trim()}
                    </span>
                    <br className="hidden sm:block" />
                    <span className="text-[#1A1A1A]">for </span>
                    <motion.span
                      key={`typing-${activeTab}`}
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="inline-block overflow-hidden whitespace-nowrap align-bottom border-r-2 border-[#A64AED] pr-1 text-[#A64AED]"
                    >
                      {trainingPrograms[activeTab].title.split(' for ')[1].trim()}
                    </motion.span>
                  </>
                ) : (
                  <span className="text-[#A64AED]">{trainingPrograms[activeTab].title}</span>
                )}
              </motion.h2>
              <motion.p 
                key={`desc-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[16px] md:text-lg text-zinc-500 leading-relaxed mb-10 md:mb-12 max-w-[540px] mx-auto lg:mx-0"
              >
                {trainingPrograms[activeTab].description}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link href="/programs" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#9333EA" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-10 py-4 bg-[#A64AED] text-white rounded-full font-bold transition-all shadow-lg shadow-purple-200"
                  >
                    Our Programs
                    <svg 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/impact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-10 py-4 bg-white text-zinc-800 border-2 border-zinc-200 rounded-full font-bold transition-all"
                  >
                    See our Impact
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="flex-1 max-w-[500px] w-full flex justify-center lg:justify-end">
              <motion.img
                key={`img-${activeTab}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={trainingPrograms[activeTab].image}
                alt={trainingPrograms[activeTab].title}
                className="w-full h-auto max-h-[300px] md:max-h-[420px] object-contain drop-shadow-sm"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Progress-based Pagination */}
      <div className="absolute bottom-10 lg:bottom-16 left-1/2 -translate-x-1/2 flex gap-4 items-center">
        {trainingPrograms.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="group relative"
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              activeTab === i ? "w-12 md:w-16 bg-zinc-900" : "w-3 bg-zinc-300 group-hover:bg-zinc-400"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
