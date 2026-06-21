"use client";

import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative w-full bg-[#D3B8FC] py-8 lg:py-12 overflow-hidden">
      {/* Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.65, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute left-0 top-0 hidden md:block select-none pointer-events-none"
      >
        <img
          src="/About-icon-1.png"
          alt="Vision Icon 1"
          className="w-[133px] h-[119px] max-w-none object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.65, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="absolute right-0 bottom-0 lg:bottom-4 hidden md:block select-none pointer-events-none"
      >
        <img
          src="/About-icon-2.png"
          alt="Vision Icon 2"
          className="w-[139px] h-[125px] max-w-none object-contain"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] relative z-10">
        <div className="flex flex-col items-center text-center max-w-[970px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#000000] font-montserrat text-3xl md:text-[40px] font-bold leading-[1.29em] mb-6 tracking-wide"
          >
            OUR VISION
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#000000] font-inter text-xl md:text-[38px] font-medium leading-[1.29em]"
          >
            “A workforce where women's participation isn't aspirational — it's operational.”
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
