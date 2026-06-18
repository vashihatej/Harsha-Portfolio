"use client";

import { useEffect } from "react";
import AboutMeComponent from "./about-me/about-me";
import IntroSection from "./components/introSection";
import EducationComponent from "./education/education";
import SkillsComponent from "./skills/skills";
import ExperienceComponent from "./experience/experience";
import ProjectsComponent from "./projects/projects";
import ContactSection from "./contact/contact";
import Footer from "./components/footer";
import ParticleCanvas from "./components/ParticleCanvas";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const bar = document.getElementById("scroll-bar");

    let rx = 0, ry = 0;
    const onMove = (e) => {
      if (dot) { dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px"; }
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
      if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
    };

    const onScroll = () => {
      if (!bar) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      bar.style.width = pct + "%";
    };

    const animateRing = () => {
      if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
      requestAnimationFrame(animateRing);
    };
    animateRing();

    document.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />

      {/* Scroll progress bar */}
      <div id="scroll-bar" />

      {/* Background orbs */}
      <div className="orb orb1" />
      <div className="orb orb2" />

      {/* Particle canvas */}
      <ParticleCanvas />

      <IntroSection />
      <AboutMeComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <EducationComponent />
      <ContactSection />
      <Footer />
    </>
  );
}
