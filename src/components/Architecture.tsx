export default function Architecture() {
  return (
    <section className="scroll-section py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Nền tảng hợp nhất</p>
          <h2 className="font-headline text-headline-lg text-on-surface mb-4 text-balance">
            Một nền tảng cho toàn bộ nghiệp vụ vận hành
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Từ bán hàng, kho, khách hàng đến tự động hóa — mọi thứ kết nối trong cùng một hệ thống, không còn dữ liệu rời rạc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-8 flex flex-col gap-3">
            <div className="layer-gradient p-8 rounded-2xl text-white flex justify-between items-center h-32">
              <div>
                <span className="material-symbols-outlined text-[28px] text-white/70 mb-2">storefront</span>
                <p className="font-headline text-headline-md">Bán hàng đa kênh</p>
              </div>
              <p className="hidden sm:block text-body-sm text-white/70 max-w-[15rem] text-right">
                Đơn hàng từ cửa hàng, website và sàn gộp về một nơi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">inventory_2</span>
                <div>
                  <p className="font-headline text-headline-md text-on-surface">Quản lý kho</p>
                  <p className="text-body-sm text-on-surface-variant mt-1">Tồn kho chính xác, cảnh báo hết hàng.</p>
                </div>
              </div>
              <div className="bg-surface-container-high p-8 rounded-2xl border border-outline-variant/40 h-40 flex flex-col justify-between hover:border-primary/30 transition-colors">
                <span className="material-symbols-outlined text-[28px] text-primary">groups</span>
                <div>
                  <p className="font-headline text-headline-md text-on-surface">Khách hàng &amp; CRM</p>
                  <p className="text-body-sm text-on-surface-variant mt-1">Lịch sử mua, chăm sóc và nhắc hẹn.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-highest p-8 rounded-2xl border border-outline-variant/40 h-32 flex justify-between items-center">
              <div>
                <span className="material-symbols-outlined text-[28px] text-primary mb-1">autorenew</span>
                <p className="font-headline text-headline-md text-on-surface">Tự động hóa &amp; Nhắc việc</p>
              </div>
              <p className="hidden sm:block text-body-sm text-on-surface-variant max-w-[14rem] text-right">
                Quy trình lặp lại tự chạy, đúng người đúng lúc.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-on-surface p-8 rounded-2xl text-white flex flex-col justify-between min-h-64">
            <div>
              <span className="material-symbols-outlined text-[28px] text-primary-fixed-dim mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                lock
              </span>
              <p className="font-headline text-headline-md">Bảo mật &amp; Phân quyền</p>
              <p className="text-body-sm mt-4 text-white/60">
                Dữ liệu được mã hóa và phân quyền theo vai trò, đảm bảo thông tin doanh nghiệp luôn an toàn.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 w-fit">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                shield
              </span>
              <span className="font-headline text-label-sm">Dữ liệu được mã hóa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
