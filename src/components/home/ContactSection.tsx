"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#DBC2FF] flex items-center justify-center py-20 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 mb-12 sm:mb-16"
                >
                  <h2 className="relative inline-block text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tighter">
                    Collaborate With Us
                    <div className="absolute -bottom-6 left-0 w-full group">
                      <svg
                        viewBox="0 0 400 20"
                        className="w-full h-auto text-[#A782F0] opacity-80"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M5 15 Q 100 5, 200 15 T 395 15"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          fill="none"
                          className="drop-shadow-sm"
                        />
                      </svg>
                    </div>
                  </h2>
                </motion.div>
                <p className="text-[24px] md:text-[28px] font-bold italic text-[#1A1A1A] leading-[1.3] max-w-[500px]">
                  For Corporates, Government, and Civil Society Organizations — Reach Out to Us
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-[28px] font-bold italic text-[#1A1A1A]">Contact Details</h3>
                
                <div className="flex flex-wrap gap-6">
                  {/* Phone Block */}
                  <div className="bg-white rounded-3xl p-5 px-8 flex items-center gap-5 shadow-lg min-w-[280px]">
                    <div className="w-12 h-12 bg-[#A782F0] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#4B5563]">Phone</p>
                      <p className="text-[18px] font-bold text-[#1A1A1A] tracking-tight">+91 76783 58891</p>
                    </div>
                  </div>

                  {/* Email Block */}
                  <div className="bg-white rounded-3xl p-5 px-8 flex items-center gap-5 shadow-lg min-w-[280px]">
                    <div className="w-12 h-12 bg-[#A782F0] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#4B5563]">Email</p>
                      <p className="text-[18px] font-bold text-[#1A1A1A] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">Info@Evenacademy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content: Form Card */}
          <div className="flex-1 w-full lg:max-w-[550px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[48px] p-8 md:p-12 shadow-2xl space-y-8"
            >
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Get in Touch With Us
              </h2>

              <form className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-[#E9D5FF]/40 border-none p-5 rounded-2xl placeholder:text-zinc-500 font-medium focus:ring-2 focus:ring-[#A782F0] outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-[#E9D5FF]/40 border-none p-5 rounded-2xl placeholder:text-zinc-500 font-medium focus:ring-2 focus:ring-[#A782F0] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="text" 
                    placeholder="Organization Name" 
                    className="w-full bg-[#E9D5FF]/40 border-none p-5 rounded-2xl placeholder:text-zinc-500 font-medium focus:ring-2 focus:ring-[#A782F0] outline-none"
                  />
                </div>

                <div>
                  <textarea 
                    placeholder="How Would You Like to Partner With Us?" 
                    rows={4}
                    className="w-full bg-[#E9D5FF]/40 border-none p-5 rounded-2xl placeholder:text-zinc-500 font-medium focus:ring-2 focus:ring-[#A782F0] outline-none resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#9569E6" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#A782F0] text-white py-5 rounded-3xl font-bold text-[18px] shadow-xl shadow-purple-200 transition-all uppercase tracking-wide"
                >
                  Start Partnership
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
