import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALDLIMI | المنصة الاحترافية",
  description: "منصة ALDLIMI تقدم حلولاً احترافية وتصاميم حديثة ومتجاوبة.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
