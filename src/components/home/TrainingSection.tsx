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
    <section className="relative w-full min-h-[600px] bg-[#F8F5FF] flex flex-col justify-center overflow-hidden py-20 lg:py-16">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[60px] min-h-[700px] md:min-h-[600px] lg:min-h-[550px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full"
          >
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
              <motion.h2 
                key={`title-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[32px] md:text-[48px] lg:text-[56px] font-[900] leading-tight text-black mb-4 tracking-tight min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex flex-col justify-start"
              >
                {/* Typing Animation for the dynamic part of the title */}
                {trainingPrograms[activeTab].title.includes(' for ') ? (
                  <div className="flex flex-col items-start leading-tight">
                    <span className="whitespace-nowrap text-[#1A1A1A]">
                      {trainingPrograms[activeTab].title.split(' for ')[0].trim()} for
                    </span>
                    <div className="flex items-center mt-1 sm:mt-2">
                      <motion.span
                        key={`typing-${activeTab}`}
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="inline-block overflow-hidden whitespace-nowrap align-bottom border-r-4 border-[#A64AED] pr-2 text-[#A64AED]"
                      >
                        {trainingPrograms[activeTab].title.split(' for ')[1].trim()}
                      </motion.span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-start leading-tight">
                    <span className="whitespace-nowrap text-[#1A1A1A]">Mobilizing Women for</span>
                    <span className="text-[#A64AED] block mt-1 sm:mt-2">{trainingPrograms[activeTab].title.replace('Mobilizing Women for', '').trim()}</span>
                  </div>
                )}
              </motion.h2>
              <motion.p 
                key={`desc-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[17px] md:text-[20px] text-zinc-500 leading-relaxed mb-8 max-w-[550px] min-h-[80px] lg:min-h-[100px]"
              >
                {trainingPrograms[activeTab].description}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-4 w-full">
                <Link href="/programs" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#9333EA" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#A64AED] text-white rounded-full font-bold transition-all shadow-lg shadow-purple-200 whitespace-nowrap"
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
                    className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-800 border-2 border-zinc-200 rounded-full font-bold transition-all whitespace-nowrap"
                  >
                    See our Impact
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center h-full">
              <motion.img
                key={`img-${activeTab}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={trainingPrograms[activeTab].image}
                alt={trainingPrograms[activeTab].title}
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[550px] object-contain drop-shadow-sm"
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
