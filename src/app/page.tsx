import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import TrainingSection from "@/components/home/TrainingSection";
import ImpactBanner from "@/components/home/ImpactBanner";
import WhyChange from "@/components/home/WhyChange";
import ProgramsSection from "@/components/home/ProgramsSection";
import ProgramsCarousel from "@/components/home/ProgramsCarousel";
import ImpactStats from "@/components/home/ImpactStats";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Navbar />
      {/* Spacer for the fixed navbar (78px) */}
      <div className="pt-[78px]">
        <Hero />
        <WhyChange />
        <ProgramsCarousel />
        <ImpactBanner />
        <ProgramsSection />
        <TrainingSection />

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
