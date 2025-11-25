import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WayGibb",
  description:
    "WayGibb helps you order everything from gadgets to heavy-duty building materials with one tap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased bg-[#f9f7ff]`}>
        {children}
      </body>
    </html>
  );
}
