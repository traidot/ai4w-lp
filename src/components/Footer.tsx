import Link from "next/link";

const LINK_GROUPS = [
  {
    title: "Sản phẩm",
    links: ["Tính năng", "Bảng giá", "Demo"],
  },
  {
    title: "Công ty",
    links: ["About Us", "Careers", "Support"],
  },
  {
    title: "Pháp lý",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant/30">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-14 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="col-span-2 flex flex-col gap-4 max-w-xs">
          <Link href="#" className="flex items-center gap-2" aria-label="AI4W trang chủ">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-on-primary font-headline text-label-md font-bold">
              A
            </span>
            <span className="font-headline text-headline-md font-bold text-on-surface tracking-tight">
              AI4W
            </span>
          </Link>
          <p className="text-body-sm text-on-surface-variant">
            Hệ điều hành cho công việc thế hệ mới. Tiên phong giải pháp AI &amp; Automation tại Việt Nam.
          </p>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="font-headline text-label-md text-on-surface mb-4">{group.title}</h4>
            <div className="flex flex-col gap-3">
              {group.links.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-body-sm text-on-surface-variant hover:text-primary transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 md:px-8 max-w-[1440px] mx-auto">
          <p className="text-body-sm text-on-surface-variant">© 2024 AI4W OS. All rights reserved.</p>
          <p className="text-body-sm text-on-surface-variant">
            Được xây dựng cho doanh nghiệp SMB Việt Nam.
          </p>
        </div>
      </div>
    </footer>
  );
}
