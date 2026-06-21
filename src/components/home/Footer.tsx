"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-12 pb-6 border-t border-[#F3E8FF]">
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center">
              <div className="flex flex-col leading-[0.95] font-[900] tracking-tighter text-[#1A1A1A] text-[24px]">
                <span className="flex items-baseline">
                  <span className="text-[#A64AED]">E</span>ven
                </span>
                <span className="text-[#A64AED]">Skills Academy</span>
              </div>
            </Link>
            <p className="text-[14px] text-[#6B7280] leading-[1.5] max-w-[350px]">
              The global standard for inclusive professional education and workforce placement.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[13px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Programs", "Advisory", "Impact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-[14px] font-medium text-[#6B7280] hover:text-[#A64AED] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-bold text-[#1A1A1A] tracking-[0.1em] uppercase">
              RESOURCES
            </h4>
            <ul className="space-y-2.5">
              {["Green Energy", "Mobility Training", "Platform Economy Skills", "Ai Labs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[14px] font-medium text-[#6B7280] hover:text-[#A64AED] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-bold text-[#1A1A1A] tracking-[0.1em]">
              Connect
            </h4>
            <div className="space-y-3">
              <a href="mailto:info@evenacademy.com" className="flex items-center gap-3 group">
                <div className="text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                  info@evenacademy.com
                </span>
              </a>
              <Link href="/#contact" className="flex items-center gap-3 group transition-colors hover:text-[#A64AED]">
                <div className="text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 17 6.26 12.26a3 3 0 0 1 0-4.24l.18-.18a3 3 0 0 1 4.24 0L13.25 10.4" />
                    <path d="m13.25 10.4 2.15 2.15a3 3 0 0 1 0 4.24l-.18.18a3 3 0 0 1-4.24 0L8.4 14.3" />
                    <path d="m16 8 2.5-2.5a3 3 0 0 1 4.2 0l.2.2a3 3 0 0 1 0 4.2L19 13.5" />
                    <path d="m8 16-2.5 2.5a3 3 0 0 1-4.2 0l-.2-.2a3 3 0 0 1 0-4.2L4 11.5" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium text-[#6B7280] group-hover:text-[#A64AED] transition-colors">
                  Partner With Us
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#F3E8FF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] font-semibold text-[#6B7280]">
            © 2026 Even Academy. Empowering women through education.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[13px] font-semibold text-[#6B7280] hover:text-[#A64AED] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] font-semibold text-[#6B7280] hover:text-[#A64AED] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
