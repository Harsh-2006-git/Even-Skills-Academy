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
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 lg:px-[120px] bg-white/80 border-b border-zinc-100 backdrop-blur-[37.9px]"
        style={{ height: "78px" }}
      >
        <div className="flex items-center">
          <div className="flex flex-col leading-[0.9] font-[900] tracking-tighter">
            <span className="text-[26px] flex items-baseline">
              <span className="text-[#A64AED]">Eve</span>
              <span className="text-[#1A1A1A]">n</span>
            </span>
            <span className="text-[26px] text-[#A64AED]">
              Academy
            </span>
          </div>
        </div>

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
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#A64AED] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-3 px-6 py-2 bg-[#A64AED] text-white rounded-full font-bold text-sm shadow-md hover:bg-[#9333EA] transition-all"
          >
            <div className="relative w-7 h-7 bg-white rounded-[8px] flex items-center justify-center">
              <svg 
                width="14" height="14" viewBox="0 0 24 24" fill="none" 
                stroke="#A64AED" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M4 9l8 6 8-6" />
              </svg>
            </div>
            Join our Team
          </motion.button>

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
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#A64AED] text-white rounded-2xl font-bold text-lg mt-4 shadow-lg">
            Join our Team
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
