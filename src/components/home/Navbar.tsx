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
          <div className="flex flex-col leading-tight font-black tracking-tighter">
            <span className="text-xl uppercase flex items-baseline">
              EVE<span className="text-[#9F7AEA] text-lg mx-[1px]">N</span>
            </span>
            <span className="text-xl uppercase">ACADEMY</span>
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
                className={`text-base font-medium transition-colors hover:text-[#9F7AEA] ${
                  isActive ? "text-[#9F7AEA]" : "text-zinc-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-[#B794F4] text-white rounded-full font-semibold text-sm shadow-sm hover:bg-[#a782f0] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
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
                className={`text-2xl font-bold ${
                  isActive ? "text-[#9F7AEA]" : "text-zinc-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#B794F4] text-white rounded-2xl font-bold text-lg mt-4 shadow-lg">
            Join our Team
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
