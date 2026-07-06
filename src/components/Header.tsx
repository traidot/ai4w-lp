"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/i18n/dictionaries";
import { useContact } from "./ContactModal";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
];

export default function Header({ nav, lang }: { nav: Dictionary["nav"]; lang: Locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { open: openContact } = useContact();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rest = pathname.replace(/^\/(vi|en)(?=\/|$)/, "");
  const localeHref = (code: Locale) => `/${code}${rest}`;

  const navLinks = [
    { label: nav.features, href: "#features" },
    { label: nav.solutions, href: "#solutions" },
    { label: nav.pricing, href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-14 bg-surface/85 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm"
          : "h-16 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-full px-4 md:px-8 max-w-[1440px] mx-auto">
        <Link href={`/${lang}`} className="flex items-center gap-2" aria-label={nav.home}>
          <Image
            src="/dxbiz-mark.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="flex flex-col leading-none">
            <span className="font-headline text-[20px] font-bold text-on-surface tracking-tight">
              DXBiz
            </span>
            <span className="hidden sm:block font-headline text-[8.5px] font-semibold uppercase tracking-[0.13em] text-on-surface-variant/70 mt-1">
              Digital Transformation for Business
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-md text-on-surface-variant hover:text-on-surface px-3 py-2 rounded-lg hover:bg-on-surface/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center rounded-lg border border-outline-variant/60 p-0.5"
            role="group"
            aria-label={nav.switchLanguage}
          >
            {LOCALES.map(({ code, label }) => (
              <Link
                key={code}
                href={localeHref(code)}
                aria-current={code === lang ? "true" : undefined}
                className={`font-headline text-label-sm px-2 py-1 rounded-md transition-colors ${
                  code === lang
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button className="hidden md:block font-headline text-label-md px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-on-surface/[0.04] transition-colors">
            {nav.login}
          </button>
          <button
            type="button"
            onClick={openContact}
            className="font-headline text-label-md px-4 sm:px-5 py-2.5 bg-primary text-on-primary rounded-lg font-semibold shadow-sm hover:bg-primary-container transition-colors"
          >
            {nav.contact}
          </button>
        </div>
      </div>
    </header>
  );
}
