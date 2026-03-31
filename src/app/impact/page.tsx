import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import ImpactHero from "@/components/impact/ImpactHero";
import ImpactStats from "@/components/impact/ImpactStats";
import ImpactMetrics from "@/components/impact/ImpactMetrics";
import ImpactStories from "@/components/impact/ImpactStories";
import ImpactPartners from "@/components/impact/ImpactPartners";
import ImpactCTA from "@/components/impact/ImpactCTA";

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ImpactHero />
      <ImpactStats />
      <ImpactMetrics />
      <ImpactStories />
      <ImpactPartners />
      <ImpactCTA />
      <Footer />
    </main>
  );
}
