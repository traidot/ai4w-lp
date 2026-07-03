export default function Solutions() {
  return (
    <section className="scroll-section py-32 bg-inverse-surface text-white overflow-hidden transition-all duration-700 opacity-0 translate-y-10">
      <div className="max-w-max-width mx-auto px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-xl mb-20">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg mb-md text-surface-container">Giải pháp chuyên biệt cho từng ngành hàng</h2>
            <p className="font-body-md text-body-md text-surface-variant/70">Mỗi lĩnh vực có những đặc thù riêng, AI4W được thiết kế để thích ứng và tối ưu hóa cho từng quy trình cụ thể.</p>
          </div>
          <div className="flex gap-md">
            <button className="w-12 h-12 rounded-full border border-surface-variant/30 flex items-center justify-center hover:bg-surface-variant/10 transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:brightness-110 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative h-[500px] group shadow-2xl">
            <img alt="Spa and Salon Solution" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMmP95FVKoP8gM3awZxS-3YJOTeBEQ58JjDSC21WVhjS-bYw0aeazhG6VG9DVtPrD3SygK4Jn3VvmZLvgYuVSmaKA3Fk_owJD1f3dUddZDFZIyPdX19epQlLx16AAFpjhfrbfWiTGDDYC2BNMDSdywKcoNX1KZYgW7f4nUnmQuIoAnG2LULCYxrqddWxOB2RraTiBsQhYUBlVlukSxkqGCdG512a39x9OKIGmqv4M-fAlEr2CnV4R6fg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-xl">
              <span className="font-label-md text-label-md bg-primary-container text-on-primary-container px-md py-1 rounded-full w-fit mb-md">Giải pháp Spa & Salon</span>
              <h3 className="font-headline-md text-headline-md mb-sm">Quản lý lịch hẹn & CRM tự động</h3>
              <p className="font-body-sm text-body-sm text-white/80 max-w-lg">Tự động hóa 90% quy trình đặt lịch, nhắc hẹn và chăm sóc khách hàng cũ qua Zalo OA.</p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-lg">
            <div className="bg-surface-variant/10 p-xl rounded-3xl border border-surface-variant/20 hover:bg-surface-variant/20 transition-all cursor-pointer">
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-primary-fixed">storefront</span>
                <h3 className="font-headline-md text-headline-md">Bán lẻ (Retail)</h3>
              </div>
              <p className="font-body-sm text-body-sm text-surface-variant/70">Quản lý kho thông minh, dự báo hàng tồn và tích hợp vận chuyển GHN/AhaMove tức thì.</p>
            </div>
            <div className="bg-surface-variant/10 p-xl rounded-3xl border border-surface-variant/20 hover:bg-surface-variant/20 transition-all cursor-pointer">
              <div className="flex items-center gap-md mb-md">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">campaign</span>
                <h3 className="font-headline-md text-headline-md">Marketing Agency</h3>
              </div>
              <p className="font-body-sm text-body-sm text-surface-variant/70">Quản lý dự án tập trung, tự động hóa báo cáo và phân bổ nguồn lực Agent hiệu quả.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
