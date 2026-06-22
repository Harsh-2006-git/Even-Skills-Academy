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

      {/* Mobile/Tablet View (Below lg): Responsive left-aligned layout fitting in screen */}
      <div className="block lg:hidden bg-white px-6 py-6 h-[calc(100dvh-78px)] min-h-[560px] flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col items-start gap-3 mt-2">
          
          {/* Tagline */}
          <p className="text-[#F5A623] font-montserrat text-base sm:text-lg font-bold">
            Who We Are
          </p>
          
          {/* Heading */}
          <h1 className="text-[#191919] font-montserrat text-[28px] sm:text-4xl font-bold leading-[1.25] max-w-[450px]">
            From Mobility to Opportunity
          </h1>
          
          {/* Subtitles */}
          <div className="flex flex-col gap-2.5 max-w-[450px]">
            <p className="text-[#191919] font-inter text-[14px] sm:text-base leading-relaxed opacity-[65%]">
              Even Academy was built on a simple premise: women can’t take jobs they can’t reach
            </p>
            <p className="text-[#191919] font-inter text-[14px] sm:text-base leading-relaxed opacity-[65%]">
              We began with mobility training, but quickly expanded to skills that matter: technical training, workplace readiness, and career support.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-row items-center gap-3 mt-3 w-full justify-start">
            <Link href="/programs" className="shrink-0">
              <button className="cursor-pointer text-nowrap flex px-5 py-3 justify-center items-center gap-2.5 rounded-[33px] bg-[#AE75DA] hover:bg-[#9c60cc] transition-colors text-white font-inter text-[14px] sm:text-base font-semibold shadow-sm">
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
            <Link href="/impact" className="shrink-0">
              <button className="cursor-pointer text-nowrap flex px-5 py-3 justify-center items-center gap-2.5 rounded-[33px] border border-[#191919] hover:bg-zinc-50 transition-colors text-[#191919] font-inter text-[14px] sm:text-base font-normal">
                see our impact
              </button>
            </Link>
          </div>
        </div>
        
        {/* Image at bottom center/left */}
        <div className="w-full flex justify-center sm:justify-start mt-1 max-h-[280px] shrink overflow-hidden">
          <img
            src="/About-hero-bg.png"
            alt="Woman on a scooter illustration"
            className="h-[32vh] max-h-[280px] object-contain"
          />
        </div>
      </div>
      
    </section>
  );
};

export default AboutHero;
