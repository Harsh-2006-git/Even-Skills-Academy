"use client";

import React from "react";
import { motion } from "framer-motion";

const TrainingSection = () => {
  return (
    <section className="w-full bg-[#E5D5FC] pt-12 pb-24 md:pt-16 md:pb-32 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] flex flex-col gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Left Column: Heading and Subtitle */}
          <div className="flex flex-col items-start gap-5 flex-1 pr-4">
            <h2 className="text-[#000000] font-montserrat text-3xl md:text-[38px] font-bold leading-[1.2] w-full tracking-tight pb-2">
              Training &amp; Skill Development <br className="hidden md:inline" /> At Even Academy
            </h2>
            <p className="text-[#191919] font-inter text-base md:text-lg font-medium leading-[1.3em] opacity-[90%] max-w-[550px]">
              Over <strong className="font-extrabold text-black">4,400+ women</strong> trained across four modules all from resource-poor
              communities, all now working with confidence.
            </p>
          </div>

          {/* Right Column: 2x2 Stats Badges Grid */}
          <div className="grid grid-cols-2 gap-3.5 w-full lg:w-[476px] shrink-0">
            <div className="text-nowrap flex p-2 justify-center items-center rounded-[18px] bg-[rgba(253,253,253,0.74)] w-full h-[68px] shadow-sm select-none">
              <p className="text-[#191919] font-inter text-[14px] md:text-[15px] font-bold leading-tight w-fit text-center">
                4,400+ Total Trained
              </p>
            </div>
            <div className="text-nowrap flex p-2 justify-center items-center rounded-[18px] bg-[rgba(253,253,253,0.74)] w-full h-[68px] shadow-sm select-none">
              <p className="text-[#191919] font-inter text-[14px] md:text-[15px] font-bold leading-tight w-fit text-center">
                10+ Cities Active
              </p>
            </div>
            <div className="text-nowrap flex p-2 justify-center items-center rounded-[18px] bg-[rgba(253,253,253,0.74)] w-full h-[68px] shadow-sm select-none">
              <p className="text-[#191919] font-inter text-[14px] md:text-[15px] font-bold leading-tight w-fit text-center">
                4 Training Modules
              </p>
            </div>
            <div className="text-nowrap flex p-2 justify-center items-center rounded-[18px] bg-[rgba(253,253,253,0.74)] w-full h-[68px] shadow-sm select-none">
              <p className="text-[#191919] font-inter text-[14px] md:text-[15px] font-bold leading-tight w-fit text-center">
                72% Avg Placement Rate
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 w-full">
          {/* Card 1: Mobility */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-[rgba(198,198,205,0.10)] bg-[#F9F1FF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] w-full h-[270px] p-4 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <svg
                width="42"
                height="40"
                viewBox="0 0 42 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-3 flex-col items-start rounded-xl bg-[#A64AED] w-[42px] h-[40px] shrink-0"
              >
                <rect width="42" height="40" rx="12" fill="#A64AED" />
                <path
                  d="M15 26V27C15 27.2833 14.9042 27.5208 14.7125 27.7125C14.5208 27.9042 14.2833 28 14 28H13C12.7167 28 12.4792 27.9042 12.2875 27.7125C12.0958 27.5208 12 27.2833 12 27V19L14.1 13C14.2 12.7 14.3792 12.4583 14.6375 12.275C14.8958 12.0917 15.1833 12 15.5 12H26.5C26.8167 12 27.1042 12.0917 27.3625 12.275C27.6208 12.4583 27.8 12.7 27.9 13L30 19V27C30 27.2833 29.9042 27.5208 29.7125 27.7125C29.5208 27.9042 29.2833 28 29 28H28C27.7167 28 27.4792 27.9042 27.2875 27.7125C27.0958 27.5208 27 27.2833 27 27V26H15ZM14.8 17H27.2L26.15 14H15.85L14.8 17ZM14 19V24V19ZM16.5 23C16.9167 23 17.2708 22.8542 17.5625 22.5625C17.8542 22.2708 18 21.9167 18 21.5C18 21.0833 17.8542 20.7292 17.5625 20.4375C17.2708 20.1458 16.9167 20 16.5 20C16.0833 20 15.7292 20.1458 15.4375 20.4375C15.1458 20.7292 15 21.0833 15 21.5C15 21.9167 15.1458 22.2708 15.4375 22.5625C15.7292 22.8542 16.0833 23 16.5 23ZM25.5 23C25.9167 23 26.2708 22.8542 26.5625 22.5625C26.8542 22.2708 27 21.9167 27 21.5C27 21.0833 26.8542 20.7292 26.5625 20.4375C26.2708 20.1458 25.9167 20 25.5 20C25.0833 20 24.7292 20.1458 24.4375 20.4375C24.1458 20.7292 24 21.0833 24 21.5C24 21.9167 24.1458 22.2708 24.4375 22.5625C24.7292 22.8542 25.0833 23 25.5 23ZM14 24H28V19H14V24Z"
                  fill="#FDFDFD"
                />
              </svg>
              <div className="flex py-1 px-2 flex-col items-start rounded-md bg-[#F0DEFF] w-fit">
                <p className="text-[#191919] font-workSans text-xs font-bold leading-none">
                  +12%
                </p>
              </div>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col items-start mt-2 w-full">
              <p className="text-[#191919] font-inter text-sm font-medium leading-5 opacity-[66%] h-5">
                Mobility
              </p>
              <p className="text-[#191919] font-inter text-2xl font-bold leading-7 mt-0.5">
                1,200 women
              </p>
            </div>

            {/* Chart Area */}
            <div className="flex justify-between items-end gap-1.5 w-full h-[88px] mt-auto px-1 select-none">
              <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-5"></div>
              <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-[36px]"></div>
              <div className="rounded-t-[4px] bg-[#A64AED] w-[14%] h-[68px]"></div>
              <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-[52px]"></div>
              <div className="rounded-t-[4px] bg-[#A64AED] w-[14%] h-[88px]"></div>
            </div>
          </motion.div>

          {/* Card 2: Self-Defense */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-[rgba(198,198,205,0.10)] bg-[#F9F1FF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] w-full h-[270px] p-4 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <svg
                width="40"
                height="44"
                viewBox="0 0 40 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-3 flex-col items-start rounded-xl bg-[#A64AED] w-fit"
              >
                <rect width="40" height="44" rx="12" fill="#A64AED" />
                <path
                  d="M20 32C17.6833 31.4167 15.7708 30.0875 14.2625 28.0125C12.7542 25.9375 12 23.6333 12 21.1V15L20 12L28 15V21.1C28 23.6333 27.2458 25.9375 25.7375 28.0125C24.2292 30.0875 22.3167 31.4167 20 32ZM20 29.9C21.7333 29.35 23.1667 28.25 24.3 26.6C25.4333 24.95 26 23.1167 26 21.1V16.375L20 14.125L14 16.375V21.1C14 23.1167 14.5667 24.95 15.7 26.6C16.8333 28.25 18.2667 29.35 20 29.9Z"
                  fill="#FDFDFD"
                />
              </svg>
              <div className="flex flex-col justify-center items-center text-zinc-400 hover:text-[#A64AED] transition-colors cursor-pointer">
                <svg
                  width="16"
                  height="4"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col items-start mt-2 w-full">
              <p className="text-[#191919] font-inter text-sm font-medium leading-5 opacity-[66%] h-5">
                Self-Defense
              </p>
              <p className="text-[#191919] font-inter text-2xl font-semibold leading-7 mt-0.5">
                700 women
              </p>
            </div>

            {/* Chart Area with '70%' indicator */}
            <div className="relative flex flex-col justify-end w-full h-[110px] mt-auto select-none">
              <span className="absolute right-[4%] top-[-22px] text-[#191919] font-workSans text-sm font-bold w-11 text-center">
                70%
              </span>
              <div className="flex justify-between items-end gap-1.5 w-full h-[88px] px-1">
                <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-5"></div>
                <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-[36px]"></div>
                <div className="rounded-t-[4px] bg-[#DDC6EF] w-[14%] h-[68px]"></div>
                <div className="rounded-t-[4px] opacity-[41%] bg-[#A64AED] w-[14%] h-[52px]"></div>
                <div className="rounded-t-[4px] bg-[#A64AED] w-[14%] h-[88px]"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Logistics-Specific */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-2xl border border-[rgba(198,198,205,0.10)] bg-[#F9F1FF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] w-full h-[270px] p-4 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-3 flex-col items-start rounded-xl bg-[#A64AED] w-[44px] h-[44px] shrink-0"
              >
                <rect width="44" height="44" rx="12" fill="#A64AED" />
                <path
                  d="M15 32C14.45 32 13.9792 31.8042 13.5875 31.4125C13.1958 31.0208 13 30.55 13 30V18.725C12.7 18.5417 12.4583 18.3042 12.275 18.0125C12.0917 17.7208 12 17.3833 12 17V14C12 13.45 12.1958 12.9792 12.5875 12.5875C12.9792 12.1958 13.45 12 14 12H30C30.55 12 31.0208 12.1958 31.4125 12.5875C31.8042 12.9792 32 13.45 32 14V17C32 17.3833 31.9083 17.7208 31.725 18.0125C31.5417 18.3042 31.3 18.5417 31 18.725V30C31 30.55 30.8042 31.0208 30.4125 31.4125C30.0208 31.8042 29.55 32 29 32H15ZM15 19V30H29V19H15ZM14 17H30V14H14V17ZM19 24H25V22H19V24Z"
                  fill="#FDFDFD"
                />
              </svg>
              <div className="flex py-1 px-2 flex-col items-start rounded-md bg-[#F0DEFF] w-fit">
                <p className="text-[#191919] font-workSans text-xs font-bold leading-none">
                  Peak
                </p>
              </div>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col items-start mt-2 w-full">
              <p className="text-[#191919] font-inter text-sm font-medium leading-5 opacity-[66%] h-5">
                Logistics-Specific
              </p>
              <p className="text-[#131B2E] font-inter text-2xl font-bold leading-7 mt-0.5">
                2,000 women
              </p>
            </div>

            {/* Progress Bars */}
            <div className="flex flex-col gap-3 w-full mt-auto mb-2 px-1 select-none">
              <div className="w-full">
                <div className="h-2 w-full rounded-full bg-[#E2E7FF] overflow-hidden">
                  <div className="h-full rounded-full bg-[#A64AED]" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="w-full">
                <div className="h-2 w-full rounded-full bg-[#E2E7FF] overflow-hidden">
                  <div className="h-full rounded-full bg-[#F5A623]" style={{ width: "45%" }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-2xl border border-[rgba(198,198,205,0.10)] bg-[#F9F1FF] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] w-full h-[270px] p-4 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top row */}
            <div className="flex justify-between items-center w-full">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex p-3 flex-col items-start rounded-xl bg-[#A64AED] w-fit"
              >
                <rect width="43.0118" height="44" rx="12" fill="#A64AED" />
                <path
                  d="M15 32V27.7C14.05 26.8333 13.3125 25.8208 12.7875 24.6625C12.2625 23.5042 12 22.2833 12 21C12 18.5 12.875 16.375 14.625 14.625C16.375 12.875 18.5 12 21 12C23.0833 12 24.9292 12.6125 26.5375 13.8375C28.1458 15.0625 29.1917 16.6583 29.675 18.625L30.975 23.75C31.0583 24.0667 31 24.3542 30.8 24.6125C30.6 24.8708 30.3333 25 30 25H28V28C28 28.55 27.8042 29.0208 27.4125 29.4125C27.0208 29.8042 26.55 30 26 30H24V32H22V28H26V23H28.7L27.75 19.125C27.3667 17.6083 26.55 16.375 25.3 15.425C24.05 14.475 22.6167 14 21 14C19.0667 14 17.4167 14.675 16.05 16.025C14.6833 17.375 14 19.0167 14 20.95C14 21.95 14.2042 22.9 14.6125 23.8C15.0208 24.7 15.6 25.5 16.35 26.2L17 26.8V32H15ZM20 25H22L22.15 23.75C22.2833 23.7 22.4042 23.6417 22.5125 23.575C22.6208 23.5083 22.7167 23.4333 22.8 23.35L23.95 23.85L24.95 22.15L23.95 21.4C23.9833 21.2667 24 21.1333 24 21C24 20.8667 23.9833 20.7333 23.95 20.6L24.95 19.85L23.95 18.15L22.8 18.65C22.7167 18.5667 22.6208 18.4917 22.5125 18.425C22.4042 18.3583 22.2833 18.3 22.15 18.25L22 17H20L19.85 18.25C19.7167 18.3 19.5958 18.3583 19.4875 18.425C19.3792 18.4917 19.2833 18.5667 19.2 18.65L18.05 18.15L17.05 19.85L18.05 20.6C18.0167 20.7333 18 20.8667 18 21C18 21.1333 18.0167 21.2667 18.05 21.4L17.05 22.15L18.05 23.85L19.2 23.35C19.2833 23.4333 19.3792 23.5083 19.4875 23.575C19.5958 23.6417 19.7167 23.7 19.85 23.75L20 25ZM21 22.5C20.5833 22.5 20.2292 22.3542 19.9375 22.0625C19.6458 21.7708 19.5 21.4167 19.5 21C19.5 20.5833 19.6458 20.2292 19.9375 19.9375C20.2292 19.6458 20.5833 19.5 21 19.5C21.4167 19.5 21.7708 19.6458 22.0625 19.9375C22.3542 20.2292 22.5 20.5833 22.5 21C22.5 21.4167 22.3542 21.7708 22.0625 22.0625C21.7708 22.3542 21.4167 22.5 21 22.5Z"
                  fill="#FDFDFD"
                />
              </svg>
              <div className="flex py-1 px-2 flex-col items-start rounded-md bg-[#F0DEFF] w-fit">
                <p className="text-[#191919] font-workSans text-xs font-bold leading-none">
                  Trending
                </p>
              </div>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col items-start mt-2 w-full">
              <p className="text-[#191919] font-inter text-sm font-medium leading-5 opacity-[66%] h-5">
                Soft Skills
              </p>
              <p className="text-[#131B2E] font-inter text-2xl font-bold leading-7 mt-0.5">
                500 women
              </p>
            </div>

            {/* Path Chart */}
            <div className="w-full mt-auto mb-1 h-[88px] select-none">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 254 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <path
                  d="M5.50037 109L43.0211 81.5977C47.1174 78.606 52.7283 78.8033 56.6044 82.0753L80.9176 102.599C85.2258 106.236 91.5862 106.027 95.646 102.115L138.623 60.7009C141.614 57.8186 145.973 56.867 149.893 58.2407L193.877 73.6537C198.649 75.326 203.946 73.5295 206.717 69.2994L248.5 5.50049"
                  stroke="#A64AED"
                  strokeWidth="11"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
