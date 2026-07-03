export default function CTA() {
  return (
    <section className="scroll-section py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl layer-gradient px-6 py-16 md:px-16 md:py-20 text-center">
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-tertiary/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="font-headline text-[30px] leading-tight md:text-headline-xl font-bold tracking-tight text-white text-balance">
              Sẵn sàng nâng tầm doanh nghiệp?
            </h2>
            <p className="text-body-lg text-white/70">
              Gia nhập cộng đồng 1,000+ SMB đang vận hành thông minh hơn cùng AI4W.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
              <button className="group px-8 py-4 bg-white text-primary rounded-xl font-headline text-label-md flex items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
                Liên hệ tư vấn 1-1
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <button className="px-8 py-4 rounded-xl font-headline text-label-md text-white border border-white/30 hover:bg-white/10 transition-colors">
                Bắt đầu miễn phí
              </button>
            </div>
            <p className="flex items-center gap-1.5 text-label-sm text-white/60 mt-2">
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              Không cần thẻ tín dụng · Miễn phí tư vấn giải pháp quy trình
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
