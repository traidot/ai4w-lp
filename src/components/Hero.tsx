const TRUST_STATS = [
  { value: "1,000+", label: "Doanh nghiệp SMB" },
  { value: "90%", label: "Tác vụ tự động hóa" },
  { value: "24/7", label: "Vận hành liên tục" },
];

export default function Hero() {
  return (
    <section className="scroll-section relative overflow-hidden pt-14 lg:pt-24 pb-20 lg:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl -z-10"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/50 shadow-sm w-fit mx-auto lg:mx-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 shrink-0">
              <span className="material-symbols-outlined text-[16px] text-primary">auto_awesome</span>
              <span className="eyebrow !tracking-wider">AI Native</span>
            </span>
            <span className="text-label-md text-on-surface-variant">Tự động hóa vận hành cho SMB Việt</span>
          </div>

          <h1 className="font-headline text-[32px] leading-[1.12] md:text-[44px] lg:text-headline-2xl font-bold tracking-tight text-on-surface text-balance">
            Hệ điều hành cho công việc,{" "}
            <span className="text-primary">vận hành bằng AI</span>
          </h1>

          <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto lg:mx-0">
            Giải pháp AI &amp; Automation toàn diện cho doanh nghiệp SMB Việt Nam. Thay thế việc lặp lại, xử lý việc phức tạp một cách tự động và thông minh.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 mt-2">
            <button className="group px-7 py-4 bg-primary text-on-primary rounded-xl font-headline text-label-md flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
              Bắt đầu ngay miễn phí
              <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button className="px-7 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl font-headline text-label-md text-on-surface flex items-center justify-center gap-2 hover:bg-surface-container-low hover:border-outline transition-all duration-200 active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px] text-primary">play_circle</span>
              Xem Demo
            </button>
          </div>

          <dl className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 border-t border-outline-variant/40 pt-6">
            {TRUST_STATS.map((stat) => (
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
          <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant/40 shadow-[0_24px_60px_-20px_rgba(11,28,48,0.28)] overflow-hidden aspect-[16/10] ring-1 ring-black/[0.02]">
            <img
              alt="Bảng điều khiển AI4W hiển thị số liệu vận hành doanh nghiệp theo thời gian thực"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqrSfnw-l96EXLl5dC59NtMYfCG5jiGSWKwLBdqeJCI1GjYIDG457FXYIhNnpcRitzVxQPwB0wccU96J-jg0pZOto1ZBu6SWTjiHnapRLVZBrQlAG98sNGUkeanBOFYZP1KmuujRYELm3IBuhwi6Uf8tCttyXQCi9X9-FX94_2hh00kOSYX-nNpmNq4LqVGZXr4Kt2EfJy2OcMmY94AClW1aFGSUkoPyiK0H8Y0tVWQVhKa7z0XGQQlw"
            />
            <div className="absolute bottom-3 left-3 glass-panel px-4 py-3 rounded-xl border border-white/40 shadow-lg flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-tertiary" />
              </span>
              <span className="font-headline text-label-md text-on-surface">AI Agent đang tối ưu hóa đơn hàng…</span>
            </div>
            <div className="absolute top-3 right-3 glass-panel px-4 py-3 rounded-xl border border-white/40 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-tertiary">trending_up</span>
                <span className="font-headline text-headline-md font-bold text-on-surface tabular-nums">+37%</span>
              </div>
              <span className="text-label-sm text-on-surface-variant">Doanh thu tháng này</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
