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

const ProgramsCarousel = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  // Auto-play feature: 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % trainingPrograms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#F8F5FF] flex flex-col justify-center overflow-hidden py-10 sm:py-14 lg:py-12">
      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-[60px] min-h-[520px] sm:min-h-[480px] lg:min-h-[420px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 w-full pb-14 lg:pb-0"
          >
            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
              <motion.h2 
                key={`title-${activeTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[25px] sm:text-[32px] md:text-[44px] lg:text-[50px] font-extrabold leading-tight text-black mb-3 tracking-tight min-h-[72px] sm:min-h-[85px] md:min-h-[120px] lg:min-h-[130px] flex flex-col justify-start"
              >
                {/* Typing Animation for the dynamic part of the title */}
                {trainingPrograms[activeTab].title.includes(' for ') ? (
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[#1A1A1A] whitespace-normal sm:whitespace-nowrap">
                      {trainingPrograms[activeTab].title.split(' for ')[0].trim()} for
                    </span>
                    <div className="flex items-center mt-0.5 sm:mt-1 max-w-full overflow-hidden">
                      <motion.span
                        key={`typing-${activeTab}`}
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="inline-block overflow-hidden whitespace-nowrap align-bottom border-r-3 border-[#A64AED] pr-2 text-[#A64AED] max-w-full"
                      >
                        {trainingPrograms[activeTab].title.split(' for ')[1].trim()}
                      </motion.span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[#1A1A1A] whitespace-normal sm:whitespace-nowrap">Mobilizing Women for</span>
                    <span className="text-[#A64AED] block mt-0.5 sm:mt-1">{trainingPrograms[activeTab].title.replace('Mobilizing Women for', '').trim()}</span>
                  </div>
                )}
              </motion.h2>
              <motion.p 
                key={`desc-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[14px] sm:text-[16px] md:text-[17px] text-zinc-500 leading-relaxed mb-6 max-w-[480px] min-h-[45px] sm:min-h-[60px]"
              >
                {trainingPrograms[activeTab].description}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 w-full">
                <Link href="/programs" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#9333EA" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#A64AED] text-white rounded-full font-bold text-sm md:text-[15px] transition-all shadow-md shadow-purple-100 whitespace-nowrap"
                  >
                    Our Programs
                    <svg 
                      width="16" height="16" viewBox="0 0 24 24" fill="none" 
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </motion.button>
                </Link>
                <Link href="/impact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: "#f9fafb" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-white text-zinc-800 border-2 border-zinc-200 rounded-full font-bold text-sm md:text-[15px] transition-all whitespace-nowrap flex items-center justify-center"
                  >
                    See our Impact
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Right Side: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
              <motion.img
                key={`img-${activeTab}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={trainingPrograms[activeTab].image}
                alt={trainingPrograms[activeTab].title}
                className="w-[75%] sm:w-[60%] lg:w-full h-auto max-h-[180px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[400px] object-contain drop-shadow-sm"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modern Progress-based Pagination */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 items-center">
        {trainingPrograms.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="group relative"
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              activeTab === i ? "w-10 md:w-12 bg-zinc-900" : "w-3 bg-zinc-300 group-hover:bg-zinc-400"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProgramsCarousel;
