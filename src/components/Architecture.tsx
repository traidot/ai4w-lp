export default function Architecture() {
  return (
    <section className="scroll-section py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Kiến trúc nền tảng</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            Kiến trúc 5 lớp chuẩn Enterprise
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Xây dựng trên nền tảng vững chắc, sẵn sàng cho mọi quy mô doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 flex flex-col gap-3">
            <div className="layer-gradient p-8 rounded-2xl text-white flex justify-between items-center group relative overflow-hidden h-32">
              <div className="relative z-10">
                <h4 className="font-headline text-label-sm opacity-70 uppercase tracking-[0.18em]">Layer 05</h4>
                <p className="font-headline text-headline-md mt-1">Experience Layer</p>
              </div>
              <span className="material-symbols-outlined text-[52px] opacity-25 transition-transform duration-500 group-hover:scale-110">
                web
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">smart_toy</span>
                <div>
                  <h4 className="font-headline text-label-sm text-primary uppercase tracking-[0.16em]">Layer 04</h4>
                  <p className="font-headline text-headline-md text-on-surface mt-1">Agent Layer</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">neurology</span>
                <div>
                  <h4 className="font-headline text-label-sm text-primary uppercase tracking-[0.16em]">Layer 03</h4>
                  <p className="font-headline text-headline-md text-on-surface mt-1">Intelligence</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/40 h-32 flex justify-between items-center">
              <div>
                <h4 className="font-headline text-label-sm text-primary uppercase tracking-[0.16em]">Layer 02</h4>
                <p className="font-headline text-headline-md text-on-surface mt-1">Integration Hub</p>
              </div>
              <div className="flex gap-3 text-on-surface-variant/60">
                <span className="material-symbols-outlined">api</span>
                <span className="material-symbols-outlined">database</span>
                <span className="material-symbols-outlined">lan</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-on-surface p-8 rounded-2xl text-white flex flex-col justify-between overflow-hidden relative group min-h-64">
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-tertiary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[28px] text-tertiary-fixed-dim mb-4">
                shield_lock
              </span>
              <h4 className="font-headline text-label-sm text-primary-fixed-dim uppercase tracking-[0.16em]">Layer 01</h4>
              <p className="font-headline text-headline-md mt-1">Governance &amp; Security</p>
              <p className="text-body-sm mt-4 text-white/60">
                Lớp bảo mật tối cao, đảm bảo dữ liệu doanh nghiệp luôn an toàn theo tiêu chuẩn Enterprise.
              </p>
            </div>
            <div className="relative z-10 mt-8 flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary-fixed opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tertiary-fixed" />
              </span>
              <span className="font-headline text-label-sm">System Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
