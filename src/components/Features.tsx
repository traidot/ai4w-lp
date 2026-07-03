export default function Features() {
  return (
    <section className="scroll-section py-32 bg-surface-container-low transition-all duration-700 opacity-0 translate-y-10">
      <div className="max-w-max-width mx-auto px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Lợi thế cạnh tranh: Không chỉ là Chatbot, là bộ não vận hành.</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Vượt xa các công cụ giao tiếp thông thường, AI4W trực tiếp tham gia vào quy trình lõi của doanh nghiệp.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          <div className="group bg-surface p-xl rounded-2xl border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">sync_alt</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Automation</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Chạy việc lặp lại, tự động hóa quy trình phê duyệt và thông báo nội bộ một cách liền mạch.</p>
          </div>
          <div className="group bg-surface p-xl rounded-2xl border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">AI Intelligence</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Phân tích dữ liệu khách hàng sâu rộng, dự báo xu hướng thị trường và đề xuất chiến lược tối ưu.</p>
          </div>
          <div className="group bg-surface p-xl rounded-2xl border border-outline-variant/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Integration</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Kết nối sâu hệ sinh thái Việt Nam: Sapo, MISA, GHN, VietQR. Đồng bộ hóa dữ liệu thời gian thực.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
