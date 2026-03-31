"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const AdvisoryEngagements = () => {
  const engagements = [
    {
      initial: "L",
      title: "Lodha Group",
      desc: "Gender-inclusive logistics park design and framework implementation.",
      link: "/impact"
    },
    {
      initial: "D",
      title: "Don Bosco Mondo",
      desc: "Women in EV training programs across multiple institutional centers.",
      link: "/impact"
    },
    {
      initial: "G",
      title: "GIZ",
      desc: "Policy research on green energy transition and workforce inclusion.",
      link: "/impact"
    }
  ];

  return (
    <section className="bg-[#E9D8FF] py-24">
      <div className="max-w-[1216px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] md:text-[56px] font-black text-[#1A1A1A] mb-4">
            Recent Engagements
          </h2>
          <p className="text-zinc-600 text-[18px] max-w-[700px] mx-auto leading-relaxed">
            Partnering with organizations to drive real impact through training, consulting, and inclusive workforce solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[48px] p-12 flex flex-col items-start shadow-xl shadow-purple-900/5 hover:shadow-purple-900/10 transition-all border border-transparent hover:border-[#A64AED]/20 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#A64AED] flex items-center justify-center text-white text-[24px] font-black mb-8 shadow-lg shadow-[#A64AED]/30">
                {item.initial}
              </div>

              <h3 className="text-[24px] font-black text-[#1A1A1A] mb-4">
                {item.title}
              </h3>
              
              <p className="text-zinc-500 text-[15px] font-medium leading-relaxed mb-10 flex-grow">
                {item.desc}
              </p>

              <Link href={item.link} className="flex items-center gap-2 text-[#A64AED] font-black text-[13px] tracking-widest uppercase group/btn transition-colors hover:text-[#1A1A1A]">
                View Project
                <MoveRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryEngagements;
