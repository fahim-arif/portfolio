import React from "react";
import Navbar from "@/common/elements/Navbar";
import Footer from "@/common/elements/Footer";
import { HtmlHead } from "@/common/elements/HtmlHead";
import HeroSection from "@/modules/LandingPage/components/HeroSection";
import DeveloperSection from "@/modules/LandingPage/components/DeveloperSection/DeveloperSection";
import ProjectSection from "@/modules/LandingPage/components/ProjectSection";
import SkillsSection from "@/modules/LandingPage/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/modules/LandingPage/components/ExperienceSection/ExperienceSection";
import TestimonialsSection from "@/modules/LandingPage/components/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/modules/LandingPage/components/ContactSection/ContactSection";

function HomePage() {
  return (
    <>
      <HtmlHead />
      <Navbar />
      <main>
        <HeroSection />
        <DeveloperSection />
        <ProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
