import type { Dictionary } from "@/i18n/dictionaries";

const STYLES = [
  { icon: "bolt", accent: "bg-primary/10 text-primary" },
  { icon: "receipt_long", accent: "bg-tertiary/10 text-tertiary" },
  { icon: "web", accent: "bg-secondary/10 text-secondary" },
  { icon: "search", accent: "bg-primary/10 text-primary" },
];

export default function Products({ dict }: { dict: Dictionary }) {
  const t = dict.products;

  return (
    <section
      id="products"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <div
              key={item.name}
              className="flex flex-col bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 hover:border-primary/30 transition-colors"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${STYLES[index].accent}`}>
                <span className="material-symbols-outlined text-[26px]">{STYLES[index].icon}</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface">{item.name}</h3>
              <span
                className={`inline-flex w-fit mt-2 px-2.5 py-0.5 rounded-full font-headline text-label-sm ${STYLES[index].accent}`}
              >
                {item.tag}
              </span>
              <p className="text-body-sm text-on-surface-variant mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
