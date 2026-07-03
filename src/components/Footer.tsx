import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg py-xl px-margin-desktop max-w-max-width mx-auto">
        <div className="flex flex-col gap-md">
          <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-primary-fixed">AI4W</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant">Hệ điều hành cho công việc thế hệ mới. Tiên phong giải pháp AI & Automation tại Việt Nam.</p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface dark:text-on-primary-fixed mb-md">Sản phẩm</h4>
          <div className="flex flex-col gap-sm">
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Tính năng</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Bảng giá</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Demo</Link>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface dark:text-on-primary-fixed mb-md">Công ty</h4>
          <div className="flex flex-col gap-sm">
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">About Us</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Careers</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Support</Link>
          </div>
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-on-surface dark:text-on-primary-fixed mb-md">Pháp lý</h4>
          <div className="flex flex-col gap-sm">
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Privacy Policy</Link>
            <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary underline transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="py-lg px-margin-desktop max-w-max-width mx-auto border-t border-outline-variant/10 text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant">© 2024 AI4W OS. All rights reserved.</p>
      </div>
    </footer>
  );
}
