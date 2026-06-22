"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Advisory", href: "/advisory" },
    { name: "Impact", href: "/impact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-[120px] bg-white/80 border-b border-black backdrop-blur-[37.9px]"
        style={{ height: "78px" }}
      >
        <Link href="/" className="flex items-center">
          <div className="flex flex-col leading-[0.95] font-[900] tracking-tighter">
            <span className="text-[19px] sm:text-[26px] flex items-baseline">
              <span className="text-[#A64AED]">Eve</span>
              <span className="text-[#1A1A1A]">n</span>
            </span>
            <span className="text-[19px] sm:text-[26px] text-[#A64AED]">
              Skills Academy
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-base transition-colors hover:text-[#A64AED] py-2 ${
                  isActive ? "text-[#A64AED] font-[900]" : "text-zinc-600 font-medium"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 sm:gap-3 px-3 py-1.5 sm:px-6 sm:py-2.5 bg-[#A64AED] text-white rounded-full font-bold text-[11px] sm:text-sm shadow-md hover:bg-[#9333EA] transition-all cursor-pointer"
            >
              <div className="relative w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] bg-white rounded-[4px] sm:rounded-[6px] flex items-center justify-center shadow-sm">
                <svg 
                  viewBox="0 0 24 24" fill="none" 
                  stroke="#A64AED" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                >
                  <path d="M4 9l8 6 8-6" />
                </svg>
              </div>
              <span className="sm:hidden">Join us</span>
              <span className="hidden sm:inline">Join our Team</span>
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-900"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-[90] bg-white flex flex-col pt-24 px-8 lg:hidden"
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl transition-colors ${
                  isActive ? "text-[#A64AED] font-[900]" : "text-zinc-600 font-bold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="w-full block">
            <button className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#A64AED] text-white rounded-full font-bold text-lg mt-4 shadow-lg w-full">
              <div className="relative w-[26px] h-[26px] bg-white rounded-[6px] flex items-center justify-center shadow-sm">
                <svg 
                  width="12" height="12" viewBox="0 0 24 24" fill="none" 
                  stroke="#A64AED" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M4 9l8 6 8-6" />
                </svg>
              </div>
              Join our Team
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
