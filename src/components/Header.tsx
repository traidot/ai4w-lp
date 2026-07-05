"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Tính năng", href: "#features" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Bảng giá", href: "#pricing" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-14 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm"
          : "h-16 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-full px-4 md:px-8 max-w-[1440px] mx-auto">
        <Link href="#" className="flex items-center gap-2" aria-label="DXFlow trang chủ">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary font-headline text-label-md font-bold">
            D
          </span>
          <span className="font-headline text-headline-md font-bold text-on-surface tracking-tight">
            DXFlow
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body-md text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-on-surface/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden md:block font-headline text-label-md px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.04] transition-colors">
            Đăng nhập
          </button>
          <button className="font-headline text-label-md px-5 py-2.5 bg-primary text-on-primary rounded-lg font-semibold shadow-sm hover:bg-primary-container transition-colors">
            Dùng thử miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
