import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer"; // ← הוספנו את הפוטר

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "A demo project built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        {children}
        <Footer /> {/* ← כאן יופיע הכפתור “צור קשר” שפותח את הטופס */}
      </body>
    </html>
  );
}
