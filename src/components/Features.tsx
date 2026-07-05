const FEATURES = [
  {
    icon: "sync_alt",
    iconClass: "bg-primary/10 text-primary",
    title: "Tự động hóa",
    description:
      "Chạy các việc lặp lại, tự động hóa quy trình phê duyệt và nhắc việc nội bộ, giảm thao tác thủ công mỗi ngày.",
  },
  {
    icon: "insights",
    iconClass: "bg-tertiary/10 text-tertiary",
    title: "Báo cáo & Phân tích",
    description:
      "Tổng hợp số liệu bán hàng, kho và khách hàng theo thời gian thực, giúp bạn ra quyết định dựa trên dữ liệu.",
  },
  {
    icon: "hub",
    iconClass: "bg-secondary/10 text-secondary",
    title: "Kết nối & Đồng bộ",
    description:
      "Tích hợp sâu hệ sinh thái Việt Nam: Sapo, MISA, GHN, VietQR. Dữ liệu đồng bộ giữa các nền tảng tức thì.",
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
          <p className="eyebrow mb-3">Tính năng cốt lõi</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            Một phần mềm, thay cho hàng loạt công cụ rời rạc
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Thay vì dùng nhiều app tách rời, AI4W gom toàn bộ việc vận hành về một nơi và tự động hóa phần lặp lại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/30 transition-colors"
            >
              <span className="absolute top-8 right-8 font-headline text-headline-lg font-bold text-outline-variant/40 tabular-nums select-none">
                0{index + 1}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.iconClass}`}>
                <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
              </div>
              <h3 className="font-headline text-headline-md text-on-surface mb-3">{feature.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
