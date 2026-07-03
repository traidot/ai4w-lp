export default function Architecture() {
  return (
    <section className="scroll-section py-32 transition-all duration-700 opacity-0 translate-y-10">
      <div className="max-w-max-width mx-auto px-margin-desktop">
        <div className="mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Kiến trúc 5 lớp chuẩn Enterprise</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Xây dựng trên nền tảng vững chắc, sẵn sàng cho mọi quy mô doanh nghiệp.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          <div className="md:col-span-8 flex flex-col gap-base">
            <div className="layer-gradient p-xl rounded-2xl text-white flex justify-between items-center group relative overflow-hidden h-32">
              <div className="relative z-10">
                <h4 className="font-label-md text-label-md opacity-80 uppercase tracking-widest">Layer 05</h4>
                <p className="font-headline-md text-headline-md">Experience Layer</p>
              </div>
              <span className="material-symbols-outlined text-[48px] opacity-20 group-hover:scale-125 transition-transform">web</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
              <div className="bg-surface-container-high p-xl rounded-2xl border border-outline-variant/30 h-40 flex flex-col justify-end">
                <h4 className="font-label-md text-label-md text-primary opacity-80 uppercase">Layer 04</h4>
                <p className="font-headline-md text-headline-md text-on-surface">Agent Layer</p>
              </div>
              <div className="bg-surface-container-high p-xl rounded-2xl border border-outline-variant/30 h-40 flex flex-col justify-end">
                <h4 className="font-label-md text-label-md text-primary opacity-80 uppercase">Layer 03</h4>
                <p className="font-headline-md text-headline-md text-on-surface">Intelligence</p>
              </div>
            </div>
            <div className="bg-surface-container-highest p-xl rounded-2xl border border-outline-variant/30 h-32 flex justify-between items-center">
              <div>
                <h4 className="font-label-md text-label-md text-primary opacity-80 uppercase">Layer 02</h4>
                <p className="font-headline-md text-headline-md text-on-surface">Integration Hub</p>
              </div>
              <div className="flex gap-md grayscale opacity-50">
                <span className="material-symbols-outlined">api</span>
                <span className="material-symbols-outlined">database</span>
                <span className="material-symbols-outlined">lan</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-on-surface p-xl rounded-2xl text-white flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <h4 className="font-label-md text-label-md text-primary-fixed opacity-80 uppercase">Layer 01</h4>
              <p className="font-headline-md text-headline-md">Governance & Security</p>
              <p className="font-body-sm text-body-sm mt-md opacity-60">Lớp bảo mật tối cao, đảm bảo dữ liệu doanh nghiệp luôn an toàn theo tiêu chuẩn Enterprise.</p>
            </div>
            <div className="relative z-10 mt-xl">
              <div className="flex items-center gap-base">
                <div className="w-3 h-3 bg-tertiary-fixed rounded-full animate-pulse"></div>
                <span className="font-label-sm text-label-sm">System Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
