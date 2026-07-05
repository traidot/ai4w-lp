const SIDE_SOLUTIONS = [
  {
    icon: "storefront",
    iconClass: "text-primary-fixed-dim",
    title: "Bán lẻ (Retail)",
    description:
      "Quản lý kho chính xác, dự báo hàng tồn và tích hợp vận chuyển GHN/AhaMove tức thì.",
  },
  {
    icon: "campaign",
    iconClass: "text-tertiary-fixed-dim",
    title: "Marketing Agency",
    description:
      "Quản lý dự án tập trung, tự động hóa báo cáo và phân bổ nguồn lực nhân sự hiệu quả.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-section py-20 lg:py-28 bg-inverse-surface text-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3 !text-primary-fixed-dim">Giải pháp theo ngành</p>
          <h2 className="font-headline text-headline-lg mb-4 text-white text-balance">
            Giải pháp chuyên biệt cho từng ngành hàng
          </h2>
          <p className="text-body-md text-white/60">
            Mỗi lĩnh vực có những đặc thù riêng, AI4W được thiết kế để thích ứng và tối ưu hóa cho từng quy trình cụ thể.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative h-[400px] lg:h-[500px] shadow-2xl">
            <img
              alt="Nhân viên spa sử dụng phần mềm AI4W tại quầy lễ tân"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMmP95FVKoP8gM3awZxS-3YJOTeBEQ58JjDSC21WVhjS-bYw0aeazhG6VG9DVtPrD3SygK4Jn3VvmZLvgYuVSmaKA3Fk_owJD1f3dUddZDFZIyPdX19epQlLx16AAFpjhfrbfWiTGDDYC2BNMDSdywKcoNX1KZYgW7f4nUnmQuIoAnG2LULCYxrqddWxOB2RraTiBsQhYUBlVlukSxkqGCdG512a39x9OKIGmqv4M-fAlEr2CnV4R6fg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-8">
              <span className="font-headline text-label-sm bg-primary text-on-primary px-3 py-1 rounded-full w-fit mb-4">
                Giải pháp Spa &amp; Salon
              </span>
              <h3 className="font-headline text-headline-md mb-2">Quản lý lịch hẹn &amp; CRM tự động</h3>
              <p className="text-body-sm text-white/80 max-w-lg">
                Tự động hóa 90% quy trình đặt lịch, nhắc hẹn và chăm sóc khách hàng cũ qua Zalo OA.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {SIDE_SOLUTIONS.map((item) => (
              <div
                key={item.title}
                className="flex-1 bg-white/[0.05] p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`material-symbols-outlined ${item.iconClass}`}>{item.icon}</span>
                  <h3 className="font-headline text-headline-md">{item.title}</h3>
                </div>
                <p className="text-body-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
