"use client";

import { motion } from "framer-motion";

const WhyChange = () => {
  return (
    <section className="w-full bg-[#EADDFF] pt-20 lg:pt-28 pb-20 lg:pb-28 overflow-hidden">
      {/* SECTION 1 TITLE */}
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[36px] md:text-[56px] lg:text-[60px] font-bold text-[#1A1A1A] leading-[1.15] tracking-tight"
        >
          Why Women’s Access to <br className="hidden md:block" /> Work Must Change
        </motion.h2>
      </div>

      {/* WHITE STRIP WITH INFO CARDS */}
      <div className="w-full bg-white py-10 lg:py-12 mb-16 lg:mb-24 shadow-sm">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/mobility.png" alt="Mobility" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Mobility</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  <span className="font-bold text-[#1A1A1A]">87%</span> of women report <br className="hidden lg:block" /> harassment in public transport
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/skill_gap.png" alt="Skills Gap" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Skills Gap</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  Technical training programs <br className="hidden lg:block" /> rarely target women
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start text-left gap-5"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center">
                 <img src="/workplace_safety.png" alt="Safety" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[18px] md:text-[20px] mb-2 tracking-tight">Workplace Safety</h3>
                <p className="text-[#4B5563] text-[14px] md:text-[15px] leading-[1.5]">
                  Safety concerns and lack of <br className="hidden lg:block" /> support systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* DATA REVEAL SECTION */}
      <div className="w-full">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch lg:h-[480px]">
            {/* Left Large Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-12 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div>
                <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] mb-4 tracking-tighter">
                  &lt;5% <br /> Women in <br /> Transport Jobs
                </h3>
                <p className="text-[#6B7280] text-[15px] md:text-[16px] mb-12 lg:mb-8 leading-relaxed max-w-[380px]">
                  Highlighting a significant gender gap in the global transport workforce.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-end text-[10px] md:text-[11px] font-bold tracking-[0.15em] px-1">
                   <span className="text-[#A78BFA]">CURRENT WORKFORCE</span>
                   <span className="text-[#1A1A1A]">INDUSTRY GAP (95%+)</span>
                </div>
                
                <div className="w-full h-[48px] md:h-[56px] bg-[#EADDFF] rounded-2xl relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "45px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="h-full bg-[#A78BFA] rounded-l-2xl shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                  />
                </div>

                <div className="flex justify-between items-start px-2 pt-1">
                  <div className="flex flex-col">
                     <span className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">4.8%</span>
                     <p className="text-[10px] md:text-[11px] font-semibold text-[#1A1A1A] mt-0.5 leading-tight uppercase">Female Representation</p>
                  </div>
                  <div className="flex flex-col text-right">
                     <span className="text-[20px] md:text-[24px] font-bold text-[#1A1A1A]">95.2%</span>
                     <p className="text-[10px] md:text-[11px] font-semibold text-[#1A1A1A] mt-0.5 leading-tight uppercase">Male Dominated</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Stacked Cards */}
            <div className="flex flex-col gap-8 lg:gap-10">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="54" stroke="#EADDFF" strokeWidth="12" fill="transparent" />
                    <motion.circle 
                      cx="64" cy="64" r="54" stroke="#A78BFA" strokeWidth="12" fill="transparent" 
                      strokeDasharray="339.3"
                      initial={{ strokeDashoffset: 339.3 }}
                      whileInView={{ strokeDashoffset: 339.3 * (1 - 0.72) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-[32px] font-bold text-[#1A1A1A]">72%</span>
                  </div>
                </div>
                <p className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight text-center sm:text-left">
                   72% Of Our Graduates <br className="hidden sm:block" /> Get Hired Within 6 <br className="hidden sm:block" /> Months
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[32px] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex-1"
              >
                 <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="54" stroke="#EADDFF" strokeWidth="12" fill="transparent" />
                    <motion.circle 
                      cx="64" cy="64" r="54" stroke="#A78BFA" strokeWidth="12" fill="transparent" 
                      strokeDasharray="339.3"
                      initial={{ strokeDashoffset: 339.3 }}
                      whileInView={{ strokeDashoffset: 339.3 * (1 - 0.03) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-[32px] font-bold text-[#1A1A1A]">&lt;1%</span>
                  </div>
                </div>
                <p className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight text-center sm:text-left">
                   Professional Driving <br className="hidden sm:block" /> Licenses Held <br className="hidden sm:block" /> by Women
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChange;
