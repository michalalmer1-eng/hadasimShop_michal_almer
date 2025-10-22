import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Hadasim Boutique",
  description: "Modern clothing store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
