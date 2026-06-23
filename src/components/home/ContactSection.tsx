"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    isEmailValid(formData.email) &&
    formData.organization.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Top Lavender Strip */}
      <div className="w-full h-4 bg-[#EADDFF] absolute top-0 left-0" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px] pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[550px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-10"
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="relative inline-block">
                  <h2 className="text-[24px] sm:text-[36px] md:text-[46px] lg:text-[48px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight whitespace-normal md:whitespace-nowrap">
                    Collaborate With Us
                  </h2>
                  <div className="absolute -bottom-3 left-0 w-full">
                    <svg viewBox="0 0 400 20" className="w-[85%] h-auto text-[#B794F4]">
                      <path d="M5 15 Q 100 5, 200 15 T 395 15" stroke="currentColor" strokeWidth="7.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] sm:text-[18px] md:text-[22px] font-bold italic text-[#1A1A1A] leading-[1.3] max-w-[500px] pt-2">
                  For Corporates, Government, and Civil Society Organizations — Reach Out to Us
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-[18px] sm:text-[22px] md:text-[25px] font-bold italic text-[#1A1A1A]">Contact Details</h3>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  {/* Phone Block */}
                  <div className="bg-[#EADDFF] rounded-[16px] sm:rounded-[20px] p-3 px-4 sm:p-4 sm:px-5 flex items-center gap-2.5 sm:gap-3 min-w-full sm:min-w-[270px] flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#B794F4] rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] sm:w-5 sm:h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[12px] font-bold text-[#4B5563]">Phone</p>
                      <a href="tel:+919667167448" className="hover:underline text-[13px] sm:text-[14px] lg:text-[15px] font-bold text-[#1A1A1A] tracking-tight">+91 96671 67448</a>
                    </div>
                  </div>

                  {/* Email Block */}
                  <div className="bg-[#EADDFF] rounded-[16px] sm:rounded-[20px] p-3 px-4 sm:p-4 sm:px-5 flex items-center gap-2.5 sm:gap-3 min-w-full sm:min-w-[270px] flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#B794F4] rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] sm:w-5 sm:h-5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-[12px] font-bold text-[#4B5563]">Email</p>
                      <a href="mailto:evenacademy.ea@gmail.com" className="hover:underline text-[12.5px] sm:text-[13.5px] lg:text-[15px] font-bold text-[#1A1A1A] tracking-tight break-words">evenacademy.ea@gmail.com</a>
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
              className="bg-white border-[2.5px] border-[#B794F4]/70 rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-sm"
            >
              <h2 className="text-[20px] sm:text-[26px] md:text-[32px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                Get in Touch With Us
              </h2>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-6 sm:py-10 space-y-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EADDFF] rounded-full flex items-center justify-center text-[#B794F4]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-8 sm:h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1A1A1A]">Thank You!</h3>
                  <p className="text-[13px] sm:text-[14px] text-zinc-600 max-w-[320px] leading-relaxed px-2">
                    Your partnership request has been submitted successfully. A confirmation email has been sent to your inbox.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setStatus("idle")}
                    className="mt-3 sm:mt-4 px-5 py-2 sm:px-6 sm:py-2.5 bg-[#B794F4] text-white rounded-[12px] font-extrabold text-[13px] sm:text-[14px] transition-colors hover:bg-[#a37ce8]"
                  >
                    Send Another Request
                  </motion.button>
                </motion.div>
              ) : (
                <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full Name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#F5F0FC] border-2 border-transparent p-3 px-3.5 sm:p-3.5 sm:px-4 rounded-lg sm:rounded-xl placeholder:text-zinc-400 text-[13px] sm:text-[14px] font-semibold text-[#1A1A1A] outline-none transition-all duration-200 focus:bg-white focus:border-[#B794F4] focus:shadow-sm disabled:opacity-50"
                      required
                      disabled={status === "submitting"}
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-[#F5F0FC] border-2 p-3 px-3.5 sm:p-3.5 sm:px-4 rounded-lg sm:rounded-xl placeholder:text-zinc-400 text-[13px] sm:text-[14px] font-semibold text-[#1A1A1A] outline-none transition-all duration-200 focus:bg-white focus:shadow-sm disabled:opacity-50 ${
                        formData.email && !isEmailValid(formData.email)
                          ? "border-red-300 focus:border-red-500 focus:ring-0"
                          : "border-transparent focus:border-[#B794F4]"
                      }`}
                      required
                      disabled={status === "submitting"}
                    />
                  </div>

                  <input 
                    type="text" 
                    name="organization"
                    placeholder="Organization Name" 
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-[#F5F0FC] border-2 border-transparent p-3 px-3.5 sm:p-3.5 sm:px-4 rounded-lg sm:rounded-xl placeholder:text-zinc-400 text-[13px] sm:text-[14px] font-semibold text-[#1A1A1A] outline-none transition-all duration-200 focus:bg-white focus:border-[#B794F4] focus:shadow-sm disabled:opacity-50"
                    required
                    disabled={status === "submitting"}
                  />

                  <textarea 
                    name="message"
                    placeholder="How Would You Like to Partner With Us?" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[#F5F0FC] border-2 border-transparent p-3 px-3.5 sm:p-3.5 sm:px-4 rounded-lg sm:rounded-xl placeholder:text-zinc-400 text-[13px] sm:text-[14px] font-semibold text-[#1A1A1A] outline-none resize-none transition-all duration-200 focus:bg-white focus:border-[#B794F4] focus:shadow-sm disabled:opacity-50 min-h-[100px]"
                    required
                    disabled={status === "submitting"}
                  />

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 text-red-600 border border-red-200 rounded-[12px] p-3 flex items-center justify-center gap-2 text-[12.5px] sm:text-[13px] font-bold"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-500 flex-shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <motion.button
                    whileHover={!isFormValid || status === "submitting" ? {} : { scale: 1.02 }}
                    whileTap={!isFormValid || status === "submitting" ? {} : { scale: 0.98 }}
                    type="submit"
                    disabled={!isFormValid || status === "submitting"}
                    className={`w-full py-3 sm:py-3.5 rounded-[12px] sm:rounded-[18px] font-extrabold text-[14px] sm:text-[16px] transition-all duration-300 tracking-tight mt-2 sm:mt-3 flex items-center justify-center gap-2.5 ${
                      status === "submitting"
                        ? "bg-[#2E1065] text-white/80 cursor-not-allowed opacity-90 shadow-none"
                        : isFormValid
                        ? "bg-[#2E1065] text-white hover:bg-[#1D0846] cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                        : "bg-[#E5DDF5] text-[#9B8EB9] cursor-not-allowed"
                    }`}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      "Start Partnership"
                    )}
                  </motion.button>
                </form>
              )}
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


