"use client";

import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Organization from "@/components/Organization";
import Internship from "@/components/Internship";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Splash />

      <div id="main-content" className="visible">
        <Navbar />
        <Hero />
        <Education />
        <Organization />
        <Internship />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
