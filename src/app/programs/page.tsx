"use client";

import React from "react";
import Navbar from "@/components/home/Navbar";
import ProgramHero from "@/components/programs/ProgramHero";
import UnstoppableJourney from "@/components/programs/UnstoppableJourney";
import TrainingDevelopment from "@/components/programs/TrainingDevelopment";
import ModuleTraining from "@/components/programs/ModuleTraining";
import Footer from "@/components/home/Footer";

const ProgramsPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Navbar />
      {/* Spacer for the fixed navbar (78px) */}
      <div className="pt-[78px]">
        <ProgramHero />
        <UnstoppableJourney />
        <TrainingDevelopment />
        <ModuleTraining />
        <Footer />
      </div>
    </main>
  );
};

export default ProgramsPage;
