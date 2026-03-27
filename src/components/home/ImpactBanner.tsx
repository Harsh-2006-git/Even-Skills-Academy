"use client";

import React from "react";
import { motion } from "framer-motion";

const ImpactBanner = () => {
  return (
    <section className="w-full h-auto lg:h-[calc(100vh-78px)] min-h-[500px] bg-[#DBC2FF] flex items-center justify-center overflow-hidden relative py-20 lg:py-0">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-24 flex items-center h-full">
        <div className="flex-1 z-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] text-[#1A1A1A] max-w-[750px] tracking-tighter"
          >
            Empowering <br />
            Women Through <br />
            Mobility, Work & <br />
            Innovation
          </motion.h2>
        </div>

        {/* Using the image as background-right - responsive visibility */}
        <div className="absolute right-0 top-0 h-full w-[40%] md:w-[50%] pointer-events-none opacity-40 lg:opacity-100">
          <img
            src="/section-3-img.png"
            alt="Illustration"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactBanner;
