import type { Dictionary } from "@/i18n/dictionaries";
import ContactButton from "./ContactButton";

export default function CTA({ dict }: { dict: Dictionary }) {
  const t = dict.cta;

  return (
    <section className="scroll-section py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="rounded-3xl layer-gradient px-6 py-16 md:px-16 md:py-20 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="font-headline text-[30px] leading-tight md:text-headline-xl font-bold tracking-tight text-white text-balance">
              {t.title}
            </h2>
            <p className="text-body-lg text-white/70">{t.subtitle}</p>
            <div className="mt-2">
              <ContactButton className="px-8 py-4 bg-white text-primary rounded-xl font-headline text-label-md flex items-center gap-2 shadow-sm hover:bg-white/90 transition-colors">
                {t.primary}
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </ContactButton>
            </div>
            <p className="flex items-center gap-1.5 text-label-sm text-white/60 mt-2">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
