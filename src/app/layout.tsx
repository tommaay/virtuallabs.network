import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virtual Labs | First Omnichain PerpDEX",
  description:
    "Virtual Labs is creator and maintainer of the Virtual Rollups and VDEX. VDEX offers No Slippage and Sustainable Bitcoin Yield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-background text-foreground min-h-screen flex flex-col bg-[url('/stars_bg.avif')] bg-cover bg-center bg-fixed`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
