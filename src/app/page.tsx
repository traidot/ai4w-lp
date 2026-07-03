"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-section").forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 flex-1">
        <Hero />
        <Features />
        <Architecture />
        <Solutions />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
