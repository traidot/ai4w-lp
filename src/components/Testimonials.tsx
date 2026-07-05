const TESTIMONIALS = [
  {
    quote:
      "AI4W thay thế gần như toàn bộ việc nhắc lịch và chăm sóc khách cũ. Nhân viên lễ tân giờ tập trung phục vụ tại quầy, tỷ lệ khách quay lại tăng rõ rệt.",
    name: "Nguyễn Thu Hà",
    role: "Chủ chuỗi Spa",
    company: "Hà Anh Beauty",
    initials: "HA",
    avatarClass: "bg-primary/12 text-primary",
    metric: { value: "+42%", label: "Khách quay lại" },
  },
  {
    quote:
      "Đồng bộ tồn kho giữa Sapo và kho thực tế theo thời gian thực giúp chúng tôi hết cảnh bán vượt hàng. Báo cáo cuối ngày tự chạy, không phải ngồi nhập tay nữa.",
    name: "Trần Quốc Bảo",
    role: "Giám đốc vận hành",
    company: "Bảo Store Retail",
    initials: "QB",
    avatarClass: "bg-tertiary/12 text-tertiary",
    metric: { value: "12h", label: "Tiết kiệm mỗi tuần" },
  },
  {
    quote:
      "Phần mềm tự phân bổ đầu việc và tổng hợp báo cáo chiến dịch cho từng client. Team account nhẹ đầu hẳn, chúng tôi nhận thêm dự án mà không cần tuyển gấp.",
    name: "Lê Minh Châu",
    role: "Founder",
    company: "Chau Digital Agency",
    initials: "MC",
    avatarClass: "bg-secondary/12 text-secondary",
    metric: { value: "3×", label: "Năng suất team" },
  },
];

export default function Testimonials() {
  return (
    <section className="scroll-section py-20 lg:py-28 bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Khách hàng nói gì</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            Được các doanh nghiệp SMB tin tưởng vận hành mỗi ngày
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Từ spa, bán lẻ đến agency — AI4W đang giúp hàng nghìn đội ngũ làm việc ít hơn mà hiệu quả hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/40 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-0.5 mb-5 text-primary" aria-label="Đánh giá 5 trên 5 sao">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden="true"
                  >
                    star
                  </span>
                ))}
              </div>

              <blockquote className="flex-1 text-body-md text-on-surface mb-6">
                “{item.quote}”
              </blockquote>

              <div className="flex items-center justify-between gap-4 pt-6 border-t border-outline-variant/40">
                <figcaption className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-headline text-label-md font-bold ${item.avatarClass}`}
                    aria-hidden="true"
                  >
                    {item.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-headline text-label-md text-on-surface">{item.name}</span>
                    <span className="text-body-sm text-on-surface-variant">
                      {item.role}, {item.company}
                    </span>
                  </span>
                </figcaption>
                <div className="text-right">
                  <div className="font-headline text-headline-md font-bold text-primary tabular-nums leading-none">
                    {item.metric.value}
                  </div>
                  <div className="text-label-sm text-on-surface-variant mt-1">{item.metric.label}</div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
