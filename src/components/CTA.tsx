export default function CTA() {
  return (
    <section className="scroll-section py-32 relative overflow-hidden transition-all duration-700 opacity-0 translate-y-10">
      <div className="absolute inset-0 bg-primary/5 -z-10"></div>
      <div className="max-w-max-width mx-auto px-margin-desktop text-center relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-lg">
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Sẵn sàng nâng tầm doanh nghiệp?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Gia nhập cộng đồng 1,000+ SMB đang vận hành thông minh hơn cùng AI4W.</p>
          <div className="mt-xl">
            <button className="px-32 py-xl bg-primary text-white rounded-2xl font-headline-md text-headline-md shadow-xl shadow-primary/30 hover:scale-105 hover:brightness-110 transition-all active:scale-95 duration-300">
              Liên hệ tư vấn 1-1
            </button>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-md">Không cần thẻ tín dụng. Miễn phí tư vấn giải pháp quy trình.</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
