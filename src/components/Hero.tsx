import Image from "next/image";

export default function Hero() {
  return (
    <section className="scroll-section relative overflow-hidden pt-20 pb-32 transition-all duration-700 opacity-0 translate-y-10">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"></div>
      <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="flex flex-col gap-lg">
          <div className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="material-symbols-outlined text-[18px] text-primary">auto_awesome</span>
            <span className="font-label-md text-label-md text-primary">Thế hệ AI tiếp theo cho SMB</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface max-w-xl">
            Hệ điều hành cho công việc (AI4W)
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Giải pháp AI & Automation toàn diện cho doanh nghiệp SMB Việt Nam. Thay thế việc lặp lại, xử lý việc phức tạp một cách tự động và thông minh.
          </p>
          <div className="flex flex-wrap gap-md mt-md">
            <button className="px-xl py-md bg-primary text-white rounded-xl font-label-md text-label-md flex items-center gap-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
              Bắt đầu ngay miễn phí
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="px-xl py-md bg-surface border border-outline-variant rounded-xl font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-all active:scale-95">
              Xem Demo
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="relative bg-surface rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden aspect-[16/10]">
            <img alt="Enterprise AI Dashboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqrSfnw-l96EXLl5dC59NtMYfCG5jiGSWKwLBdqeJCI1GjYIDG457FXYIhNnpcRitzVxQPwB0wccU96J-jg0pZOto1ZBu6SWTjiHnapRLVZBrQlAG98sNGUkeanBOFYZP1KmuujRYELm3IBuhwi6Uf8tCttyXQCi9X9-FX94_2hh00kOSYX-nNpmNq4LqVGZXr4Kt2EfJy2OcMmY94AClW1aFGSUkoPyiK0H8Y0tVWQVhKa7z0XGQQlw" />
            <div className="absolute bottom-base right-base glass-panel p-md rounded-xl border border-white/20 shadow-lg animate-pulse flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
              <span className="font-label-md text-label-md text-on-surface">AI Agent đang tối ưu hóa đơn hàng...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
