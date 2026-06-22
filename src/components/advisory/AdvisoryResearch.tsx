"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const AdvisoryResearch = () => {
  const focusAreas = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.80437 12.067H5.47104V7.90038H3.80437V12.067ZM10.3297 12.067H11.9964V3.73372H10.3297V12.067ZM7.06705 12.067H8.73372V9.56705H7.06705V12.067ZM7.06705 7.90038H8.73372V6.23372H7.06705V7.90038ZM2.20836 15.8008C1.59302 15.8008 1.07112 15.5865 0.642671 15.1581C0.214224 14.7296 0 14.2078 0 13.5924V2.20836C0 1.59302 0.214224 1.07112 0.642671 0.642671C1.07112 0.214224 1.59302 0 2.20836 0H13.5924C14.2078 0 14.7296 0.214224 15.1581 0.642671C15.5865 1.07112 15.8008 1.59302 15.8008 2.20836V13.5924C15.8008 14.2078 15.5865 14.7296 15.1581 15.1581C14.7296 15.5865 14.2078 15.8008 13.5924 15.8008H2.20836ZM2.20836 13.5924H13.5924V2.20836H2.20836V13.5924ZM2.20836 2.20836V13.5924V2.20836Z" fill="currentColor"/>
        </svg>
      ),
      text: "Gendered barriers to mobility and workforce participation"
    },
    {
      icon: (
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.44679 20.3443C4.65075 20.3443 3.97631 20.0656 3.42347 19.5084C2.87063 18.9512 2.59421 18.2746 2.59421 17.4785C2.59421 16.6825 2.87161 16.008 3.42641 15.4552C3.98122 14.9024 4.65491 14.6259 5.44749 14.6259C5.64193 14.6259 5.83426 14.6448 6.02448 14.6825C6.2147 14.7203 6.38227 14.7699 6.5272 14.8315L7.50273 13.5761C7.14525 13.1613 6.88815 12.6869 6.73145 12.1531C6.57475 11.6193 6.53413 11.0973 6.60962 10.587L5.19297 10.0363C4.94115 10.3913 4.61404 10.6789 4.21162 10.899C3.8092 11.1192 3.36034 11.2292 2.86506 11.2292C2.06921 11.2292 1.39274 10.9514 0.835641 10.3958C0.278547 9.84018 0 9.16551 0 8.37177C0 7.57804 0.278614 6.90279 0.835843 6.34602C1.39307 5.78926 2.06971 5.51087 2.86575 5.51087C3.66179 5.51087 4.33623 5.78942 4.88907 6.34652C5.44191 6.90361 5.71833 7.58008 5.71833 8.37593C5.71833 8.39782 5.71833 8.41971 5.71833 8.4416C5.71833 8.46349 5.71833 8.48538 5.71833 8.50727L7.11143 9.07883C7.38921 8.60238 7.75878 8.1925 8.22013 7.84921C8.68148 7.50591 9.18812 7.28173 9.74006 7.17665V5.61145C9.19839 5.45082 8.71907 5.12624 8.3021 4.63771C7.88513 4.14918 7.67664 3.5583 7.67664 2.86506C7.67664 2.06921 7.95525 1.39274 8.51248 0.835641C9.06971 0.278547 9.74635 0 10.5424 0C11.3384 0 12.0148 0.278547 12.5716 0.835641C13.1284 1.39274 13.4067 2.06921 13.4067 2.86506C13.4067 3.5583 13.1968 4.14918 12.7768 4.63771C12.3568 5.12624 11.879 5.45082 11.3433 5.61145V7.17665C11.8953 7.28958 12.4019 7.51769 12.8633 7.86098C13.3246 8.20428 13.6942 8.61415 13.972 9.0906L15.3651 8.50727C15.3651 8.48538 15.3651 8.46349 15.3651 8.4416C15.3651 8.41971 15.3651 8.39782 15.3651 8.37593C15.3651 7.58008 15.6429 6.90361 16.1985 6.34652C16.7541 5.78942 17.4288 5.51087 18.2225 5.51087C19.0162 5.51087 19.6915 5.78949 20.2482 6.34672C20.805 6.90395 21.0834 7.58058 21.0834 8.37662C21.0834 9.17266 20.8048 9.84711 20.2477 10.3999C19.6907 10.9528 19.0142 11.2292 18.2183 11.2292C17.7236 11.2292 17.2715 11.1172 16.8618 10.8932C16.4521 10.6691 16.1244 10.3796 15.8786 10.0245L14.462 10.587C14.5218 11.113 14.4812 11.6335 14.3402 12.1486C14.1992 12.6637 13.946 13.1395 13.5807 13.5761L14.568 14.8343C14.7129 14.7648 14.8785 14.7127 15.0648 14.678C15.2511 14.6433 15.4415 14.6259 15.6359 14.6259C16.4285 14.6259 17.1022 14.9024 17.657 15.4552C18.2118 16.008 18.4892 16.6825 18.4892 17.4785C18.4892 18.2746 18.2128 18.9512 17.6599 19.5084C17.1071 20.0656 16.4326 20.3443 15.6366 20.3443C14.8406 20.3443 14.1639 20.0657 13.6067 19.5086C13.0495 18.9515 12.7708 18.2751 12.7708 17.4792C12.7708 17.1684 12.8199 16.8692 12.918 16.5817C13.0162 16.2942 13.1416 16.0423 13.2944 15.8261L12.3306 14.5707C11.7769 14.8666 11.1771 15.0145 10.5313 15.0145C9.88544 15.0145 9.28566 14.8666 8.73191 14.5707L7.78899 15.8261C7.94177 16.0423 8.06722 16.2942 8.16535 16.5817C8.26348 16.8692 8.31254 17.1684 8.31254 17.4792C8.31254 18.2751 8.03393 18.9515 7.4767 19.5086C6.91947 20.0657 6.24284 20.3443 5.44679 20.3443ZM2.86506 9.20926C3.10117 9.20926 3.29908 9.1294 3.45881 8.96968C3.61853 8.80996 3.69839 8.61204 3.69839 8.37593C3.69839 8.13982 3.61853 7.9419 3.45881 7.78218C3.29908 7.62246 3.10117 7.5426 2.86506 7.5426C2.62894 7.5426 2.43103 7.62246 2.27131 7.78218C2.11158 7.9419 2.03172 8.13982 2.03172 8.37593C2.03172 8.61204 2.11158 8.80996 2.27131 8.96968C2.43103 9.1294 2.62894 9.20926 2.86506 9.20926ZM5.44749 18.3125C5.6836 18.3125 5.88151 18.2327 6.04124 18.073C6.20096 17.9132 6.28082 17.7153 6.28082 17.4792C6.28082 17.2431 6.20096 17.0452 6.04124 16.8855C5.88151 16.7257 5.6836 16.6459 5.44749 16.6459C5.21138 16.6459 5.01346 16.7257 4.85374 16.8855C4.69401 17.0452 4.61415 17.2431 4.61415 17.4792C4.61415 17.7153 4.69401 17.9132 4.85374 18.073C5.01346 18.2327 5.21138 18.3125 5.44749 18.3125ZM10.5417 3.69839C10.7778 3.69839 10.9757 3.61853 11.1354 3.45881C11.2952 3.29908 11.375 3.10117 11.375 2.86506C11.375 2.62894 11.2952 2.43103 11.1354 2.27131C10.9757 2.11158 10.7778 2.03172 10.5417 2.03172C10.3056 2.03172 10.1077 2.11158 9.94794 2.27131C9.78822 2.43103 9.70836 2.62894 9.70836 2.86506C9.70836 3.10117 9.78822 3.29908 9.94794 3.45881C10.1077 3.61853 10.3056 3.69839 10.5417 3.69839ZM10.5397 12.8062C11.0302 12.8062 11.4454 12.6369 11.7853 12.2982C12.1253 11.9596 12.2953 11.545 12.2953 11.0546C12.2953 10.5641 12.126 10.1489 11.7873 9.80892C11.4487 9.46895 11.0341 9.29896 10.5437 9.29896C10.0532 9.29896 9.63802 9.46829 9.29805 9.80693C8.95807 10.1456 8.78809 10.5601 8.78809 11.0506C8.78809 11.541 8.95741 11.9562 9.29606 12.2962C9.6347 12.6362 10.0493 12.8062 10.5397 12.8062ZM15.6359 18.3125C15.872 18.3125 16.0699 18.2327 16.2297 18.073C16.3894 17.9132 16.4692 17.7153 16.4692 17.4792C16.4692 17.2431 16.3894 17.0452 16.2297 16.8855C16.0699 16.7257 15.872 16.6459 15.6359 16.6459C15.3998 16.6459 15.2019 16.7257 15.0422 16.8855C14.8824 17.0452 14.8026 17.2431 14.8026 17.4792C14.8026 17.7153 14.8824 17.9132 15.0422 18.073C15.2019 18.2327 15.3998 18.3125 15.6359 18.3125ZM18.2183 9.20926C18.4544 9.20926 18.6524 9.1294 18.8121 8.96968C18.9718 8.80996 19.0517 8.61204 19.0517 8.37593C19.0517 8.13982 18.9718 7.9419 18.8121 7.78218C18.6524 7.62246 18.4544 7.5426 18.2183 7.5426C17.9822 7.5426 17.7843 7.62246 17.6246 7.78218C17.4649 7.9419 17.385 8.13982 17.385 8.37593C17.385 8.61204 17.4649 8.80996 17.6246 8.96968C17.7843 9.1294 17.9822 9.20926 18.2183 9.20926Z" fill="currentColor"/>
        </svg>
      ),
      text: "Women's experiences in male-dominated sectors"
    },
    {
      icon: (
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.68661 18.5127L5.02085 15.6812L1.83243 14.9792L2.14765 11.7192L0 9.25637L2.14765 6.7935L1.83243 3.53352L5.02085 2.83153L6.68661 0L9.68481 1.27899L12.683 0L14.3488 2.83153L17.5372 3.53352L17.222 6.7935L19.3696 9.25637L17.222 11.7192L17.5372 14.9792L14.3488 15.6812L12.683 18.5127L9.68481 17.2337L6.68661 18.5127ZM7.61869 15.7047L9.68481 14.7998L11.7926 15.7047L12.9239 13.7518L15.1449 13.2337L14.9602 10.9475L16.443 9.25637L14.9602 7.52358L15.1449 5.23735L12.9239 4.7609L11.7509 2.80801L9.68481 3.7129L7.57702 2.80801L6.44568 4.7609L4.22467 5.23735L4.40945 7.52358L2.92667 9.25637L4.40945 10.9475L4.22467 13.2754L6.44568 13.7518L7.61869 15.7047ZM8.80981 12.3442L13.6477 7.50637L12.3397 6.18027L8.80981 9.71016L7.02992 7.94839L5.72194 9.25637L8.80981 12.3442Z" fill="currentColor"/>
        </svg>
      ),
      text: "What makes training programs actually work"
    },
    {
      icon: (
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.55527 10.8008L0 9.25727L6.62593 2.60145L9.95926 5.93478L13.7038 2.20836H11.6667V0H17.4674V5.78899H15.2591V3.75186L9.95926 9.06344L6.62593 5.73011L1.55527 10.8008Z" fill="currentColor"/>
        </svg>
      ),
      text: "Economic impact of women's participation"
    }
  ];

  const engagements = [
    {
      initial: "L",
      color: "bg-[#AE75DA]",
      title: "Lodha Group",
      desc: "Gender-inclusive logistics park design and framework implementation.",
      link: "/impact"
    },
    {
      initial: "D",
      color: "bg-[#A64AED]",
      title: "Don Bosco Mondo",
      desc: "Women in EV training programs across multiple institutional centers.",
      link: "/impact"
    },
    {
      initial: "G",
      color: "bg-[#A64AED]",
      title: "GIZ",
      desc: "Policy research on green energy transition and workforce inclusion.",
      link: "/impact"
    }
  ];

  return (
    <section className="bg-[#FDFDFD] py-12 lg:py-28 w-full border-t border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-24 mb-12 lg:mb-20">
          <div className="max-w-[600px] text-left">
            <span className="text-[#A64AED] font-inter text-[15px] font-semibold mb-4 block">
              What We Study
            </span>
            <h2 className="font-montserrat font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-[#191919] leading-[1.1] mb-4 tracking-tight">
              Our Recent Research Engagements
            </h2>
            <div className="w-20 h-1.5 bg-[#A64AED] rounded-full mb-5 lg:mb-8" />
            <p className="font-inter text-[#191919] opacity-70 text-[16px] md:text-[18px] leading-relaxed max-w-[500px]">
              We combine field expertise with rigorous data analysis to identify and dismantle the barriers preventing women from participating in high-growth economic sectors.
            </p>
          </div>

          <div className="max-w-[500px] w-full text-left">
            <h3 className="text-[#000000] font-inter text-[14px] font-bold tracking-[0.12em] uppercase mb-5 lg:mb-8">
              Primary Focus Areas
            </h3>
            <div className="space-y-6">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center shrink-0 text-[#A64AED] shadow-sm">
                    {area.icon}
                  </div>
                  <span className="font-inter text-[#191919] text-[15px] md:text-[16px] font-medium leading-relaxed">
                    {area.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {engagements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col items-start border border-zinc-200/50 hover:border-[#A64AED]/30 shadow-md hover:shadow-xl transition-all duration-300 group min-h-[230px]"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] font-black font-plusJakartaSans mb-4 md:mb-6 shadow-sm ${item.color}`}>
                {item.initial}
              </div>

              <h3 className="font-inter text-[#131B2E] text-[18px] md:text-[20px] font-bold tracking-tight mb-2">
                {item.title}
              </h3>
              
              <p className="font-inter text-[#191919] opacity-75 text-[14px] font-normal leading-relaxed mb-5 flex-grow text-left">
                {item.desc}
              </p>

              <Link href={item.link} className="flex items-center gap-2 text-[#A64AED] font-bold text-[12px] tracking-widest uppercase group/btn transition-colors hover:text-[#1A1A1A]">
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

export default AdvisoryResearch;
