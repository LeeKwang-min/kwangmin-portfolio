import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import PdfHeader from "@/components/common/PdfHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "이광민 | Kwangmin Lee",
  description: "프론트엔드 개발자 이광민의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <PdfHeader /> */}
        {children}
      </body>
    </html>
  );
}
