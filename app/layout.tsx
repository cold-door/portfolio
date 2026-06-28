import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import AmbientBackground from "../components/AmbientBackground";

export const metadata: Metadata = {
  title: "Frozen Door | Portfolio",
  description: "Frozen Door の制作物と学習ログをまとめるポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AmbientBackground />
        <Header />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
