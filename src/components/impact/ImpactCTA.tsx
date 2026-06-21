"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ImpactCTA = () => {
  return (
    <section className="bg-[#E9D5FF] py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] leading-tight mb-2">
            Build Inclusive Workforces
          </h2>
          <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-relaxed max-w-[550px]">
            Empower women. Strengthen teams. Drive real impact.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#A64AED] hover:bg-[#8B5CF6] text-white px-8 py-3.5 rounded-full text-[16px] font-bold shadow-lg shadow-purple-500/10 transition-all whitespace-nowrap cursor-pointer"
            >
              Partner with Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCTA;
