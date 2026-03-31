"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AdvisoryHero = () => {
  const stats = [
    { value: "2,500+", label: "Training Hours In The Field" },
    { value: "3+", label: "Published Research Reports" },
    { value: "10+", label: "Institutional Engagements" },
    { value: "72%", label: "Average Placement Rate" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-[700px]"
          >
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-black text-[#1A1A1A] leading-[1.05] mb-4 tracking-tight">
              Building Gender-<br />
              Inclusive Workforces
            </h1>
            <p className="text-zinc-500 text-[15px] md:text-[16px] font-medium leading-relaxed mb-6 max-w-[480px]">
              We partner with organizations to design inclusive policies, build diverse talent pipelines, and create safe, equitable workplaces where women can grow, lead, and succeed
            </p>
            <Link href="/#contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#A64AED] hover:bg-[#9333EA] text-white px-8 py-3.5 rounded-[16px] font-black text-[15px] transition-all shadow-xl shadow-[#A64AED]/20"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-end"
          >
            <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[480px]">
              <Image 
                src="/Advisory-side-imd.png"
                alt="Advisory Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Single Solid Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F5EBFF] rounded-[24px] py-10 px-8 flex flex-wrap justify-between items-center relative overflow-hidden"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 min-w-[200px] text-left px-4 relative">
              <div className="flex flex-col">
                <span className="text-[44px] md:text-[52px] font-black text-[#1A1A1A] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-zinc-600 text-[14px] font-bold tracking-tight leading-tight">
                  {stat.label}
                </span>
              </div>
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-zinc-400/40" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisoryHero;
