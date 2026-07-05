import type { Dictionary } from "@/i18n/dictionaries";

const ICONS = [
  { icon: "sync_alt", iconClass: "bg-primary/10 text-primary" },
  { icon: "insights", iconClass: "bg-tertiary/10 text-tertiary" },
  { icon: "hub", iconClass: "bg-secondary/10 text-secondary" },
];

export default function Features({ dict }: { dict: Dictionary }) {
  const t = dict.features;

  return (
    <section
      id="features"
      className="scroll-section py-20 lg:py-28 bg-surface-container-low border-y border-outline-variant/30"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-body-md text-on-surface-variant">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <div
              key={item.title}
              className="relative bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/30 transition-colors"
            >
              <span className="absolute top-8 right-8 font-headline text-headline-lg font-bold text-outline-variant/40 tabular-nums select-none">
                0{index + 1}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${ICONS[index].iconClass}`}>
                <span className="material-symbols-outlined text-[28px]">{ICONS[index].icon}</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface mb-3">{item.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
