"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Desktop View: Centered 1440px fixed width layout matching Figma absolute specs */}
      <div className="hidden lg:block w-full h-[650px] bg-white relative">
        <div className="w-[1440px] h-full mx-auto relative">
          
          {/* Right Image Illustration */}
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src="/About-hero-bg.png"
            className="w-[583px] h-[672px] absolute left-[857px] -top-[27px] max-w-none object-contain"
            alt="Woman on a scooter illustration"
          />

          {/* Left Content Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[605px] h-[451px] absolute left-[101px] top-[111px]"
          >
            {/* Tagline */}
            <p className="text-[#F5A623] font-montserrat text-[28px] font-bold leading-[1.32em] w-[186px] h-[37px] absolute left-0 top-0">
              Who We Are
            </p>

            {/* Heading */}
            <h1 className="text-[#191919] font-montserrat text-[55px] font-bold leading-[1.29em] w-[501px] h-[142px] absolute left-0 top-[45px]">
              From Mobility to Opportunity
            </h1>

            {/* Subtitle 1 */}
            <p className="text-[#191919] font-inter text-xl leading-[1.29em] opacity-[59%] w-[605px] h-[52px] absolute left-0 top-[205px]">
              Even Academy was built on a simple premise: women can’t take jobs they can’t reach
            </p>

            {/* Subtitle 2 */}
            <p className="text-[#191919] font-inter text-xl leading-snug opacity-[59%] w-[559px] h-[81px] absolute left-0 top-[275px]">
              We began with mobility training, but quickly expanded to skills that matter: technical training, workplace readiness, and career support.
            </p>

            {/* Buttons inline block */}
            <div className="inline-flex justify-center items-center gap-7 absolute left-0 top-[394px] w-full">
              
              <Link href="/programs">
                <button className="cursor-pointer text-nowrap flex p-2.5 justify-center items-center gap-2.5 rounded-[33px] bg-[#AE75DA] hover:bg-[#9c60cc] transition-colors w-[211px] h-[57px] absolute left-0 top-0 text-white font-inter text-xl font-semibold shadow-sm">
                  <span>our programs</span>
                  <div className="shrink-0 w-[22px] h-[22px] overflow-hidden relative">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 absolute left-3 top-[3px]"
                    >
                      <path
                        d="M1 8.51667L8.51667 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1 h-1 absolute left-4 top-0.5"
                    >
                      <path
                        d="M5.4 5.4V1H1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M9.25 1H7.41667C2.83333 1 1 2.83333 1 7.41667V12.9167C1 17.5 2.83333 19.3333 7.41667 19.3333H12.9167C17.5 19.3333 19.3333 17.5 19.3333 12.9167V11.0833"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </Link>

              <Link href="/impact">
                <button className="cursor-pointer text-nowrap flex p-2.5 justify-center items-center gap-2.5 rounded-[33px] border border-[#191919] hover:bg-zinc-50 transition-colors w-[211px] h-[57px] absolute left-[239px] top-0 text-[#191919] font-inter text-xl font-normal">
                  see our impact
                </button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet View (Below lg): Responsive centered layout */}
      <div className="block lg:hidden bg-white py-12 px-6">
        <div className="flex flex-col items-center gap-10">
          
          {/* Content */}
          <div className="w-full flex flex-col items-center text-center">
            <p className="text-[#F5A623] font-montserrat text-2xl font-bold mb-3">
              Who We Are
            </p>
            <h1 className="text-[#191919] font-montserrat text-4xl font-bold leading-tight mb-5">
              From Mobility to Opportunity
            </h1>
            <p className="text-[#191919] font-inter text-lg opacity-[59%] mb-4 max-w-[500px]">
              Even Academy was built on a simple premise: women can’t take jobs they can’t reach
            </p>
            <p className="text-[#191919] font-inter text-lg opacity-[59%] mb-8 max-w-[500px]">
              We began with mobility training, but quickly expanded to skills that matter: technical training, workplace readiness, and career support.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link href="/programs" className="w-full sm:w-auto flex justify-center">
                <button className="cursor-pointer text-nowrap flex p-2.5 justify-center items-center gap-2.5 rounded-[33px] bg-[#AE75DA] w-[211px] h-[57px] text-white font-inter text-xl font-semibold">
                  <span>our programs</span>
                  <div className="shrink-0 w-[22px] h-[22px] overflow-hidden relative">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 absolute left-3 top-[3px]"
                    >
                      <path
                        d="M1 8.51667L8.51667 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-1 h-1 absolute left-4 top-0.5"
                    >
                      <path
                        d="M5.4 5.4V1H1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] absolute left-0.5 top-0.5"
                    >
                      <path
                        d="M9.25 1H7.41667C2.83333 1 1 2.83333 1 7.41667V12.9167C1 17.5 2.83333 19.3333 7.41667 19.3333H12.9167C17.5 19.3333 19.3333 17.5 19.3333 12.9167V11.0833"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
              <Link href="/impact" className="w-full sm:w-auto flex justify-center">
                <button className="cursor-pointer text-nowrap flex p-2.5 justify-center items-center gap-2.5 rounded-[33px] border border-[#191919] w-[211px] h-[57px] text-[#191919] font-inter text-xl">
                  see our impact
                </button>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full max-w-[320px] aspect-square relative">
            <img
              src="/About-hero-bg.png"
              alt="Woman on a scooter illustration"
              className="w-full h-full object-contain"
            />
          </div>

        </div>
      </div>
      
    </section>
  );
};

export default AboutHero;
