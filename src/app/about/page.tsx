import Navbar from "@/components/home/Navbar";
import AboutHero from "@/components/about/AboutHero";
import VisionSection from "@/components/about/VisionSection";
import ApproachSection from "@/components/about/ApproachSection";
import WorkProcess from "@/components/about/WorkProcess";
import ReadyToBuild from "@/components/about/ReadyToBuild";
import Footer from "@/components/home/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Navbar />
      {/* Spacer for the fixed navbar (78px) */}
      <div className="pt-[78px]">
        <AboutHero />
        <VisionSection />
        <ApproachSection />
        <WorkProcess />
        <ReadyToBuild />
        {/* Empty purple strip above footer */}
        <div className="w-full h-16 bg-[#D1B9FC]" />
        <Footer />
      </div>
    </main>
  );
}
