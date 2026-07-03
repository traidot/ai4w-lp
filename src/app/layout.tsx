import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "AI4W - Hệ điều hành cho công việc",
  description: "Giải pháp AI & Automation toàn diện cho doanh nghiệp SMB Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`light ${geist.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-background text-on-surface selection:bg-primary/20 min-h-full flex flex-col">
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  );
}
