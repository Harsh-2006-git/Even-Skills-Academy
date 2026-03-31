"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  MapPin, 
  GraduationCap, 
  Users, 
  TrendingUp 
} from "lucide-react";

const AdvisoryServices = () => {
  const services = [
    {
      title: "Gender Lens Workforce Assessments",
      desc: "We audit your hiring, retention, and workplace practices through a gender lens. Where are women succeeding? Where are they invisible?",
      deliverable: "40-60 page diagnostic with actionable recommendations",
      icon: ClipboardCheck,
      variant: "white",
      span: "col-span-12 lg:col-span-7"
    },
    {
      title: "Mobility Diagnostics",
      desc: "How do your female employees actually get to work? What does commute cost them in time, money, and safety?",
      deliverable: "Mobility assessment + infrastructure recommendations",
      icon: MapPin,
      variant: "purple",
      span: "col-span-12 lg:col-span-5"
    },
    {
      title: "Training Needs Assessment",
      desc: "Which roles could women fill with targeted training? What skills gaps exist?",
      deliverable: "Training roadmap aligned with hiring pipeline",
      icon: GraduationCap,
      variant: "white",
      span: "col-span-12 lg:col-span-4"
    },
    {
      title: "Curriculum Co-Design",
      desc: "We build custom training programs for your workforce needs. You define the job; we design the training.",
      deliverable: "Turnkey training program with placement guarantee",
      icon: Users,
      variant: "white",
      span: "col-span-12 lg:col-span-4"
    },
    {
      title: "Women-in-Workforce Strategy",
      desc: "From recruitment to retention to advancement — we help you move from targets to outcomes.",
      deliverable: "18-24 month implementation roadmap",
      icon: TrendingUp,
      variant: "white",
      span: "col-span-12 lg:col-span-4"
    }
  ];

  return (
    <section className="bg-[#F5EBFF] py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[42px] md:text-[52px] font-black text-[#1A1A1A] mb-4">
            Our Services
          </h2>
          <p className="text-zinc-600 text-[18px] font-medium max-w-[700px] mx-auto leading-relaxed">
            Every engagement is evidence-based, co-designed with your team, and measured against real outcomes not metrics.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`
                ${service.span} 
                rounded-[32px] p-10 flex flex-col justify-between h-full min-h-[400px]
                ${service.variant === "purple" 
                  ? "bg-[#A64AED] text-white" 
                  : "bg-white text-[#1A1A1A] shadow-sm shadow-[#A64AED]/5 border border-[#1A1A1A]/5"}
              `}
            >
              <div>
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-10 ${service.variant === 'purple' ? 'bg-white/20' : 'bg-[#F3E8FF]'}`}>
                  <service.icon 
                    className={`w-6 h-6 ${service.variant === 'purple' ? 'text-white' : 'text-[#A64AED]'}`} 
                  />
                </div>
                <h3 className={`text-[28px] lg:text-[32px] font-black leading-tight mb-6 ${service.variant === 'purple' ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {service.title}
                </h3>
                <p className={`text-[16px] lg:text-[18px] font-medium leading-relaxed mb-10 ${service.variant === 'purple' ? 'text-white/90' : 'text-zinc-500'}`}>
                  {service.desc}
                </p>
              </div>

              <div className={`
                px-6 py-4 rounded-[16px] flex items-center gap-4 text-[13px] font-bold tracking-tight
                ${service.variant === 'purple' ? 'bg-white text-[#1A1A1A]' : 'bg-[#E9E4FF] text-[#A64AED]'}
              `}>
                <span className="opacity-60 uppercase text-[10px] tracking-widest whitespace-nowrap">Deliverable</span>
                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-20 hidden sm:block"></div>
                <span className={`leading-tight ${service.variant === 'purple' ? 'text-[#1A1A1A]' : 'text-zinc-600'}`}>{service.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryServices;
