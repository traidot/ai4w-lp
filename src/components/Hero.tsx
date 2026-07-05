import type { Dictionary } from "@/i18n/dictionaries";

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="scroll-section relative overflow-hidden pt-14 lg:pt-24 pb-20 lg:pb-32">
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/50 w-fit max-w-full mx-auto lg:mx-0">
            <span className="material-symbols-outlined text-[18px] text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="text-[12.5px] sm:text-label-md text-on-surface-variant whitespace-nowrap">
              {t.badge}
            </span>
          </div>

          <h1 className="font-headline text-[32px] leading-[1.12] md:text-[44px] lg:text-headline-2xl font-bold tracking-tight text-on-surface text-balance">
            {t.title}
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mt-2">
            <button className="px-7 py-4 bg-primary text-on-primary rounded-xl font-headline text-label-md flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-colors">
              {t.ctaPrimary}
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <button className="px-7 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl font-headline text-label-md text-on-surface flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-[20px] text-primary">play_circle</span>
              {t.ctaSecondary}
            </button>
          </div>

          <dl className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 border-t border-outline-variant/40 pt-6">
            {t.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-body-sm text-on-surface-variant">{stat.label}</dt>
                <dd className="font-headline text-headline-md font-bold text-on-surface tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-[0_16px_40px_-24px_rgba(11,28,48,0.25)] overflow-hidden aspect-[16/10]">
            <img
              alt={t.imgAlt}
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqrSfnw-l96EXLl5dC59NtMYfCG5jiGSWKwLBdqeJCI1GjYIDG457FXYIhNnpcRitzVxQPwB0wccU96J-jg0pZOto1ZBu6SWTjiHnapRLVZBrQlAG98sNGUkeanBOFYZP1KmuujRYELm3IBuhwi6Uf8tCttyXQCi9X9-FX94_2hh00kOSYX-nNpmNq4LqVGZXr4Kt2EfJy2OcMmY94AClW1aFGSUkoPyiK0H8Y0tVWQVhKa7z0XGQQlw"
            />
            <div className="absolute bottom-3 left-3 glass-panel px-4 py-3 rounded-xl border border-white/40 shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <span className="font-headline text-label-md text-on-surface">{t.chipSync}</span>
            </div>
            <div className="absolute top-3 right-3 glass-panel px-4 py-3 rounded-xl border border-white/40 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-tertiary">trending_up</span>
                <span className="font-headline text-headline-md font-bold text-on-surface tabular-nums">+37%</span>
              </div>
              <span className="text-label-sm text-on-surface-variant">{t.chipRevenueLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
