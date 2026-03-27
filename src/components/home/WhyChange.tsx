"use client";

import { motion } from "framer-motion";

const WhyChange = () => {
  return (
    <>
      {/* SECTION 1: The Context & Challenges */}
      <section className="w-full lg:h-[calc(100vh-78px)] bg-white flex items-center justify-center overflow-hidden border-b border-[#F3E8FF] py-20 lg:py-0">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px] text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[56px] lg:text-[72px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tighter mb-12 lg:mb-20"
          >
            Why Women’s Access to <br className="hidden md:block" /> Work Must Change
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center text-center sm:text-left lg:text-left gap-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[#F5F3FF] rounded-3xl -rotate-6 transform scale-90" />
                 <img src="/mobility.png" alt="Mobility" className="w-full h-full object-contain relative z-10" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[22px] md:text-[24px] mb-1 tracking-tight">Mobility</h3>
                <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-[1.4]">
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
              className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center text-center sm:text-left lg:text-left gap-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[#F5F3FF] rounded-3xl rotate-3 transform scale-90" />
                 <img src="/skill_gap.png" alt="Skills Gap" className="w-full h-full object-contain relative z-10" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[22px] md:text-[24px] mb-1 tracking-tight">Skills Gap</h3>
                <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-[1.4]">
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
              className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center text-center sm:text-left lg:text-left gap-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-[#F5F3FF] rounded-3xl -rotate-3 transform scale-90" />
                 <img src="/workplace_safety.png" alt="Safety" className="w-full h-full object-contain relative z-10" />
              </div>
              <div>
                <h3 className="text-[#F59E0B] font-bold text-[22px] md:text-[24px] mb-1 tracking-tight">Workplace Safety</h3>
                <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-[1.4]">
                  Safety concerns and lack of <br className="hidden lg:block" /> support systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: The Data Reveal */}
      <section className="w-full lg:h-[calc(100vh-78px)] bg-white flex items-center justify-center overflow-hidden py-20 lg:py-0">
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-stretch lg:h-[600px]">
            {/* Left Large Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-[#F3E8FF] rounded-[48px] p-8 md:p-12 flex flex-col justify-between shadow-xl"
            >
              <div>
                <h3 className="text-[32px] md:text-[44px] lg:text-[52px] font-bold text-[#1A1A1A] leading-[1.1] mb-6 tracking-tighter">
                  &lt;5% Women in <br /> Transport Jobs
                </h3>
                <p className="text-[#6B7280] text-[16px] md:text-[17px] mb-12 lg:mb-8 max-w-[420px] leading-relaxed">
                  Highlighting a significant gender gap in the global transport workforce.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-end text-[10px] md:text-[11px] font-bold tracking-[0.2em] px-1 opacity-60">
                   <span className="text-[#8B5CF6]">CURRENT WORKFORCE</span>
                   <span className="text-black">INDUSTRY GAP (95%+)</span>
                </div>
                
                <div className="w-full h-[56px] md:h-[64px] bg-[#F3E8FF] rounded-2xl relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "45px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="h-full bg-[#8B5CF6] rounded-l-2xl shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  />
                </div>

                <div className="flex justify-between items-start px-2 pt-2 gap-4">
                  <div className="flex flex-col">
                     <span className="text-[24px] md:text-[32px] font-bold text-[#1A1A1A]">4.8%</span>
                     <p className="text-[10px] md:text-[11px] font-bold text-[#6B7280] tracking-widest mt-1 uppercase leading-tight">Female Representation</p>
                  </div>
                  <div className="flex flex-col text-right">
                     <span className="text-[24px] md:text-[32px] font-bold text-[#1A1A1A]">95.1%</span>
                     <p className="text-[10px] md:text-[11px] font-bold text-[#6B7280] tracking-widest mt-1 uppercase leading-tight">Male Dominated</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Stacked Cards */}
            <div className="flex flex-col gap-10">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-[#F3E8FF] rounded-[48px] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 md:gap-10 shadow-lg flex-1"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="54" stroke="#F3E8FF" strokeWidth="14" fill="transparent" />
                    <motion.circle 
                      cx="64" cy="64" r="54" stroke="#8B5CF6" strokeWidth="14" fill="transparent" 
                      strokeDasharray="339.3"
                      initial={{ strokeDashoffset: 339.3 }}
                      whileInView={{ strokeDashoffset: 339.3 * (1 - 0.72) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">72%</span>
                  </div>
                </div>
                <p className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight text-center sm:text-left">
                   72% Of Our Graduates <br className="hidden sm:block" /> Get Hired Within 6 <br className="hidden sm:block" /> Months
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-[#F3E8FF] rounded-[48px] p-8 md:p-10 flex flex-col sm:flex-row items-center gap-8 md:gap-10 shadow-lg flex-1"
              >
                 <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0 flex items-end justify-center overflow-hidden pt-12">
                  <svg className="w-full h-full absolute top-12 left-0">
                    <path d="M 14 64 A 50 50 0 0 1 114 64" fill="none" stroke="#F3E8FF" strokeWidth="14" strokeLinecap="round" />
                    <motion.path 
                      d="M 14 64 A 50 50 0 0 1 114 64" fill="none" stroke="#8B5CF6" strokeWidth="14" strokeLinecap="round"
                      strokeDasharray="157"
                      initial={{ strokeDashoffset: 157 }}
                      whileInView={{ strokeDashoffset: 157 * (1 - 0.05) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="z-10 pb-2">
                    <span className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">&lt;1%</span>
                  </div>
                </div>
                <p className="text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight text-center sm:text-left">
                   Professional Driving <br className="hidden sm:block" /> Licenses Held <br className="hidden sm:block" /> by Women
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChange;
