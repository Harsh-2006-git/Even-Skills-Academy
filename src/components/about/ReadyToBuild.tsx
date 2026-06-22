"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ReadyToBuild = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-6 lg:py-12">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-[38px] w-full lg:w-[55%] z-10 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-[18px] w-full">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#000] font-montserrat text-3xl md:text-5xl font-bold leading-tight"
              >
                Ready to build with us?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#191919] opacity-[59%] font-inter text-base md:text-[22px] leading-relaxed"
              >
                Whether you&apos;re an employer, funder, or partner, we’d love to connect and explore opportunities to work together.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/#contact">
                <button className="cursor-pointer text-nowrap flex items-center justify-center rounded-full border border-[#A64AED] bg-[#AE75DA] hover:bg-[#9c60cc] transition-colors px-6 py-3 sm:w-[211px] sm:h-[57px] shadow-sm">
                  <p className="text-[#FFF] font-inter text-base sm:text-xl font-semibold w-fit">
                    Partner With Us
                  </p>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[40%] flex justify-center lg:justify-end opacity-80"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[16/9] max-h-[220px] lg:max-h-[350px]">
              <img
                src="/ready_to_build_img.png"
                alt="Partner with Even Cargo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
