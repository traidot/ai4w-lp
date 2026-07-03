import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 flex-1">
        <Hero />
        <Features />
        <Architecture />
        <Solutions />
        <Partners />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
