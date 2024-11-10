import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 */
const bai_Jamjuree = Bai_Jamjuree({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-primary",
  preload: false,
});

export const metadata: Metadata = {
  title: "Ataide Jr Portfolio",
  description: "transformo experiências digitais com paixão e criatividade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" className={bai_Jamjuree.className}>
      <body className={`${bai_Jamjuree} antialiased`}>{children}</body>
    </html>
  );
}
