"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full bg-white flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Top Lavender Strip */}
      <div className="w-full h-4 bg-[#EADDFF] absolute top-0 left-0" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px] pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[550px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight whitespace-nowrap">
                    Collaborate With Us
                  </h2>
                  <div className="absolute -bottom-3 left-0 w-full">
                    <svg viewBox="0 0 400 20" className="w-[85%] h-auto text-[#B794F4]">
                      <path d="M5 15 Q 100 5, 200 15 T 395 15" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
                <p className="text-[18px] md:text-[22px] font-bold italic text-[#1A1A1A] leading-[1.3] max-w-[500px] pt-2">
                  For Corporates, Government, and Civil Society Organizations — Reach Out to Us
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-[22px] md:text-[25px] font-bold italic text-[#1A1A1A]">Contact Details</h3>
                
                <div className="flex flex-wrap gap-4">
                  {/* Phone Block */}
                  <div className="bg-[#EADDFF] rounded-[20px] p-4 px-6 flex items-center gap-4 min-w-[240px]">
                    <div className="w-10 h-10 bg-[#B794F4] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#4B5563]">Phone</p>
                      <p className="text-[15px] font-bold text-[#1A1A1A] tracking-tight">+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  {/* Email Block */}
                  <div className="bg-[#EADDFF] rounded-[20px] p-4 px-6 flex items-center gap-4 min-w-[240px]">
                    <div className="w-10 h-10 bg-[#B794F4] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#4B5563]">Email</p>
                      <p className="text-[15px] font-bold text-[#1A1A1A] tracking-tight">Info@Evenacademy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Form Card */}
          <div className="flex-1 w-full lg:max-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-[2.5px] border-[#B794F4]/70 rounded-[32px] p-6 md:p-8 space-y-6 shadow-sm"
            >
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Get in Touch With Us
              </h2>

              <form className="space-y-4.5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-[#EADDFF] border-none p-3.5 px-4 rounded-xl placeholder:text-zinc-500 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B794F4]"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-[#EADDFF] border-none p-3.5 px-4 rounded-xl placeholder:text-zinc-500 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B794F4]"
                    required
                  />
                </div>

                <input 
                  type="text" 
                  placeholder="Organization Name" 
                  className="w-full bg-[#EADDFF] border-none p-3.5 px-4 rounded-xl placeholder:text-zinc-500 text-[14px] font-medium outline-none focus:ring-2 focus:ring-[#B794F4]"
                  required
                />

                <textarea 
                  placeholder="How Would You Like to Partner With Us?" 
                  rows={3}
                  className="w-full bg-[#EADDFF] border-none p-3.5 px-4 rounded-xl placeholder:text-zinc-500 text-[14px] font-medium outline-none resize-none focus:ring-2 focus:ring-[#B794F4]"
                  required
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#B794F4] text-white py-3.5 rounded-[18px] font-extrabold text-[16px] transition-all tracking-tight mt-3"
                >
                  Start Partnership
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Middle color strip */}
      <div className="w-full h-16 bg-[#D1B9FC]" />
    </section>
  );
};

export default ContactSection;


