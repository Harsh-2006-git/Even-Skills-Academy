"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ReadyToBuild = () => {
  return (
    <section className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl text-left"
          >
            <h2 className="text-[36px] md:text-[45px] lg:text-[52px] font-black text-[#1A1A1A] leading-[1.1] mb-6">
              Ready To Build With Us?
            </h2>
            <p className="text-lg lg:text-[20px] text-[#555555] font-medium leading-[1.6] mb-8 max-w-lg">
              Whether You&apos;re An Employer, Funder, Or Partner, We&apos;d Love To 
              Connect And Explore Opportunities To Work Together.
            </p>
            
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9F7AEA] hover:bg-[#8B5CF6] text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg transition-all"
              >
                Partner with Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full aspect-[4/3] max-w-[450px]"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/ready_to_build_img.png"
                alt="Partner with Even Cargo"
                width={400}
                height={320}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;
