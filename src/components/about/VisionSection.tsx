"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative w-full bg-[#E9D8FD] py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-[120px] relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-[900] text-[#1A1A1A] mb-6 tracking-widest"
          >
            OUR VISION
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-[36px] font-[900] text-[#1A1A1A] leading-[1.3] px-4 md:px-0"
          >
            &ldquo;A workforce where women&apos;s participation isn&apos;t aspirational — it&apos;s operational.&rdquo;
          </motion.p>
        </div>

        {/* Decorative Icons */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute left-4 lg:left-12 top-4 lg:top-6 hidden md:block"
        >
          <div className="relative w-16 h-16 lg:w-24 lg:h-24">
            <Image 
              src="/About-icon-1.png" 
              alt="Vision Icon 1" 
              fill 
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute right-4 lg:right-12 bottom-4 lg:bottom-6 hidden md:block"
        >
          <div className="relative w-20 h-20 lg:w-28 lg:h-28">
            <Image 
              src="/About-icon-2.png" 
              alt="Vision Icon 2" 
              fill 
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
