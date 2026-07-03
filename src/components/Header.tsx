"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300 ${isScrolled ? "py-2 h-14" : "h-16"}`}>
      <div className="flex justify-between items-center h-full px-margin-desktop max-w-max-width mx-auto">
        <div className="flex items-center gap-base">
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed tracking-tight">AI4W</span>
        </div>
        <nav className="hidden md:flex items-center gap-xl">
          <Link href="#" className="font-body-md text-body-md text-primary dark:text-primary-fixed font-bold border-b-2 border-primary pb-1 transition-all duration-300">Features</Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors">Solutions</Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-md">
          <button className="hidden md:block font-label-md text-label-md px-lg py-sm rounded-full text-primary hover:bg-primary/5 transition-all">Đăng nhập</button>
          <button className="font-label-md text-label-md px-lg py-sm bg-primary-container text-on-primary-container rounded-full font-bold shadow-sm hover:scale-105 active:scale-95 transition-all duration-300">Try for free</button>
        </div>
      </div>
    </header>
  );
}
