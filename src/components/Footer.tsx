import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/i18n/dictionaries";

export default function Footer({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const t = dict.footer;

  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant/30">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="col-span-2 flex flex-col gap-4 max-w-xs">
          <Link href={`/${lang}`} className="flex items-center gap-2" aria-label={dict.nav.home}>
            <Image src="/dxbiz-mark.png" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="font-headline text-headline-md font-bold text-on-surface tracking-tight">
              DXBiz
            </span>
          </Link>
          <p className="text-body-sm text-on-surface-variant">{t.tagline}</p>
          <p className="text-body-sm text-on-surface-variant">
            {t.serviceOf}{" "}
            <a
              href="https://dxsolution.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline font-semibold text-on-surface hover:text-primary transition-colors"
            >
              DXS Việt Nam
            </a>
          </p>
        </div>

        {t.groups.map((group) => (
          <div key={group.title}>
            <h4 className="font-headline text-label-md text-on-surface mb-4">{group.title}</h4>
            <div className="flex flex-col gap-3">
              {group.links.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-body-sm text-on-surface-variant hover:text-primary transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 md:px-8 max-w-[1440px] mx-auto">
          <p className="text-body-sm text-on-surface-variant">{t.copyright}</p>
          <a
            href="https://dxsolution.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            dxsolution.vn
          </a>
        </div>
      </div>
    </footer>
  );
}
