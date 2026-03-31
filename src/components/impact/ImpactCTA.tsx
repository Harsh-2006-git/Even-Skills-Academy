"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ImpactCTA = () => {
  return (
    <section className="bg-white py-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E9D5FF] rounded-[48px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-[36px] md:text-[48px] font-black text-[#1A1A1A] leading-tight">
              Build Inclusive Workforces
            </h2>
            <p className="text-[#6B7280] text-[20px] font-medium leading-relaxed max-w-[550px]">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-[#F3E8FF] text-[#A64AED] px-12 py-5 rounded-full text-[18px] font-black shadow-xl shadow-[#A64AED]/10 transition-all whitespace-nowrap"
              >
                Partner with Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactCTA;
