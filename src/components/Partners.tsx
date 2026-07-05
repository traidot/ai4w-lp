import type { Dictionary } from "@/i18n/dictionaries";

const PARTNERS = ["SAPO", "MISA", "GHN", "VietQR", "Zalo OA"];

export default function Partners({ dict }: { dict: Dictionary }) {
  return (
    <section className="scroll-section py-16 lg:py-20 bg-surface">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <p className="text-center text-label-md text-on-surface-variant/70 mb-10">
          {dict.partners.label}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-20">
          {PARTNERS.map((partner) => (
            <span
              key={partner}
              className="font-headline text-headline-md font-bold text-on-surface-variant/50 hover:text-on-surface transition-colors"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
