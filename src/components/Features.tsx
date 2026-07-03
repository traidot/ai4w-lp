const FEATURES = [
  {
    icon: "sync_alt",
    iconClass: "bg-primary/10 text-primary",
    title: "Automation",
    description:
      "Chạy việc lặp lại, tự động hóa quy trình phê duyệt và thông báo nội bộ một cách liền mạch.",
  },
  {
    icon: "psychology",
    iconClass: "bg-tertiary/10 text-tertiary",
    title: "AI Intelligence",
    description:
      "Phân tích dữ liệu khách hàng sâu rộng, dự báo xu hướng thị trường và đề xuất chiến lược tối ưu.",
  },
  {
    icon: "hub",
    iconClass: "bg-secondary/10 text-secondary",
    title: "Integration",
    description:
      "Kết nối sâu hệ sinh thái Việt Nam: Sapo, MISA, GHN, VietQR. Đồng bộ hóa dữ liệu thời gian thực.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-section py-20 lg:py-28 bg-surface-container-low border-y border-outline-variant/30"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Lợi thế cạnh tranh</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            Không chỉ là Chatbot — là bộ não vận hành doanh nghiệp
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Vượt xa các công cụ giao tiếp thông thường, AI4W trực tiếp tham gia vào quy trình lõi của doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/30 hover:shadow-[0_20px_40px_-24px_rgba(11,28,48,0.35)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="absolute top-8 right-8 font-headline text-headline-lg font-bold text-outline-variant/40 tabular-nums select-none">
                0{index + 1}
              </span>
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.iconClass}`}
              >
                <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface mb-3">{feature.title}</h3>
              <p className="text-body-sm text-on-surface-variant mb-6">{feature.description}</p>
              <span className="inline-flex items-center gap-1 font-headline text-label-md text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Tìm hiểu thêm
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
