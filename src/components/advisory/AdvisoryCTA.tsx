"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AdvisoryCTA = () => {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-[#A64AED] opacity-5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-[#A64AED] opacity-10 blur-[100px] rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="max-w-[650px] relative z-10">
          <h2 className="text-[40px] md:text-[48px] font-black text-[#1A1A1A] mb-4 leading-tight">
            Build an Inclusive Workforce
          </h2>
          <p className="text-zinc-500 text-[18px] font-medium leading-relaxed">
            Partner with us to design inclusive systems, train diverse talent, and create equitable workplaces where women can thrive
          </p>
        </div>

        <Link href="/#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[240px] h-[57px] bg-[#AE75DA] hover:bg-[#A64AED] text-white rounded-[33px] text-[16px] font-black transition-all shadow-lg shadow-[#AE75DA]/30 relative z-10"
          >
            Partner with Us
          </motion.button>
        </Link>
      </div>

      {/* Missing Paatty (Bottom Ribbon) */}
      <div className="absolute bottom-0 left-0 w-full h-[48px] bg-[#E9D5FF]" />
    </section>
  );
};

export default AdvisoryCTA;
