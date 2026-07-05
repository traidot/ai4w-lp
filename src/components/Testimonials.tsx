import type { Dictionary } from "@/i18n/dictionaries";

const META = [
  {
    name: "Nguyễn Thu Hà",
    company: "Thẩm mỹ viện Hà Anh",
    initials: "HA",
    avatarClass: "bg-primary/12 text-primary",
    metricValue: "+42%",
  },
  {
    name: "Trần Quốc Bảo",
    company: "Cửa hàng Quốc Bảo",
    initials: "QB",
    avatarClass: "bg-tertiary/12 text-tertiary",
    metricValue: "12h",
  },
  {
    name: "Lê Minh Châu",
    company: "Công ty Minh Châu Media",
    initials: "MC",
    avatarClass: "bg-secondary/12 text-secondary",
    metricValue: "3×",
  },
];

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const t = dict.testimonials;

  return (
    <section className="scroll-section py-20 lg:py-28 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-body-md text-on-surface-variant">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const person = META[index];
            return (
              <figure
                key={person.name}
                className="flex flex-col bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-0.5 mb-5 text-primary" aria-label={t.ratingLabel}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                      aria-hidden="true"
                    >
                      star
                    </span>
                  ))}
                </div>

                <blockquote className="flex-1 text-body-md text-on-surface mb-6">
                  “{item.quote}”
                </blockquote>

                <div className="flex items-center justify-between gap-4 pt-6 border-t border-outline-variant/40">
                  <figcaption className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full font-headline text-label-md font-bold ${person.avatarClass}`}
                      aria-hidden="true"
                    >
                      {person.initials}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-headline text-label-md text-on-surface">{person.name}</span>
                      <span className="text-body-sm text-on-surface-variant">
                        {item.role}, {person.company}
                      </span>
                    </span>
                  </figcaption>
                  <div className="text-right">
                    <div className="font-headline text-headline-md font-bold text-primary tabular-nums leading-none">
                      {person.metricValue}
                    </div>
                    <div className="text-label-sm text-on-surface-variant mt-1">{item.metricLabel}</div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
