import type { Dictionary } from "@/i18n/dictionaries";

export default function Architecture({ dict }: { dict: Dictionary }) {
  const t = dict.architecture;

  return (
    <section className="scroll-section py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">{t.eyebrow}</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-body-md text-on-surface-variant">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 flex flex-col gap-3">
            <div className="layer-gradient p-8 rounded-2xl text-white flex justify-between items-center h-32">
              <div>
                <span className="material-symbols-outlined text-[28px] text-white/70 mb-2">storefront</span>
                <p className="font-headline text-headline-md">{t.sales}</p>
              </div>
              <p className="hidden sm:block text-body-sm text-white/70 max-w-[15rem] text-right">
                {t.salesDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">inventory_2</span>
                <div>
                  <p className="font-headline text-headline-md text-on-surface">{t.inventory}</p>
                  <p className="text-body-sm text-on-surface-variant mt-1">{t.inventoryDesc}</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">groups</span>
                <div>
                  <p className="font-headline text-headline-md text-on-surface">{t.crm}</p>
                  <p className="text-body-sm text-on-surface-variant mt-1">{t.crmDesc}</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/40 h-32 flex justify-between items-center">
              <div>
                <span className="material-symbols-outlined text-[28px] text-primary mb-1">autorenew</span>
                <p className="font-headline text-headline-md text-on-surface">{t.automation}</p>
              </div>
              <p className="hidden sm:block text-body-sm text-on-surface-variant max-w-[14rem] text-right">
                {t.automationDesc}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-on-surface p-8 rounded-2xl text-white flex flex-col justify-between min-h-64">
            <div>
              <span className="material-symbols-outlined text-[28px] text-primary-fixed-dim mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
              <p className="font-headline text-headline-md">{t.security}</p>
              <p className="text-body-sm mt-4 text-white/60">{t.securityDesc}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 w-fit">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
              <span className="font-headline text-label-sm">{t.securityBadge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
