import React from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import AdvisoryHero from "@/components/advisory/AdvisoryHero";
import AdvisoryServices from "@/components/advisory/AdvisoryServices";
import AdvisoryResearch from "@/components/advisory/AdvisoryResearch";
import AdvisoryEngagements from "@/components/advisory/AdvisoryEngagements";
import AdvisoryCTA from "@/components/advisory/AdvisoryCTA";

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <AdvisoryHero />
      <AdvisoryServices />
      <AdvisoryResearch />
      <AdvisoryEngagements />
      <AdvisoryCTA />
      <Footer />
    </main>
  );
}
