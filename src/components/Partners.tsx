export default function Partners() {
  return (
    <section className="scroll-section py-24 bg-surface transition-all duration-700 opacity-0 translate-y-10">
      <div className="max-w-max-width mx-auto px-margin-desktop text-center">
        <p className="font-label-md text-label-md text-on-surface-variant mb-xl uppercase tracking-widest opacity-60">Đối tác & Tích hợp chiến lược</p>
        <div className="flex flex-wrap justify-center items-center gap-xl md:gap-32 grayscale opacity-70">
          <div className="flex items-center gap-sm">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">SAPO</span>
          </div>
          <div className="flex items-center gap-sm">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">MISA</span>
          </div>
          <div className="flex items-center gap-sm">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">GHN</span>
          </div>
          <div className="flex items-center gap-sm">
            <span className="font-headline-md text-headline-md font-bold text-on-surface">VietQR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
