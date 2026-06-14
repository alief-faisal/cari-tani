import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar"; // Pastikan path import benar
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cari Tani | Pencarian Petani Online",
  description: "Platform pencarian komoditas tani terdekat berbasis geolokasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 pb-16 md:pb-0">
        {/* Navbar Global */}
        <Navbar />

        {/* Konten Halaman */}
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
