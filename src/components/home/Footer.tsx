"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-10 border-t border-[#F3E8FF]">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-20 lg:px-[120px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          
          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col leading-[0.9] font-[900] tracking-tighter">
            <span className="text-[26px] flex items-baseline">
              <span className="text-[#A64AED]">Eve</span>
              <span className="text-[#1A1A1A]">n</span>
            </span>
            <span className="text-[26px] text-[#A64AED]">
              Academy
            </span>
            </div>
            <p className="text-[16px] text-[#6B7280] leading-[1.6] max-w-[280px]">
              The global standard for inclusive professional education and workforce placement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[14px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Programs", "Advisory", "Impact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-[15px] font-medium text-[#6B7280] hover:text-[#A64AED] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[14px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">
              Resources
            </h4>
            <ul className="space-y-4">
              {["Green Energy", "Mobility Training", "Platform Economy Skills", "Ai Labs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[15px] font-medium text-[#6B7280] hover:text-[#A64AED] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[14px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">
              Connect
            </h4>
            <div className="space-y-5">
              <a href="mailto:info@evenacademy.com" className="flex items-center gap-3 group">
                <div className="text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <rect width="20" height="16" x="2" y="4" rx="2" />
                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                   </svg>
                </div>
                <span className="text-[15px] font-medium text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                  info@evenacademy.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="text-[#6B7280]">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                   </svg>
                </div>
                <span className="text-[15px] font-medium text-[#6B7280]">
                  Partner With Us
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F3E8FF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] font-medium text-[#9CA3AF]">
            © 2026 Even Academy. Empowering women through education.
          </p>
          <div className="flex items-center gap-8">
                      <Link href="/privacy" className="text-[14px] font-medium text-[#9CA3AF] hover:text-[#A64AED] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[14px] font-medium text-[#9CA3AF] hover:text-[#A64AED] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
