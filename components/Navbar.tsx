"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaMagnifyingGlass,
  FaBell,
  FaHeart,
  FaCircleQuestion,
  FaGlobe,
} from "react-icons/fa6";

export default function Navbar() {
  {
    /* logika: state simulasi status login (ubah ke true untuk testing mode login) */
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-primary text-white shadow-sm font-sans">
        {/* ================= BARIS 1: TOP NAVBAR (OTOMATIS HILANG DI MOBILE) ================= */}
        <div className="hidden md:block w-full border-b border-white/10 bg-black/10">
          <div className="max-w-7xl mx-auto h-9 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[12px] font-light text-white/90">
            {/* Menu akses instansi & sosial media sebelah kiri */}
            <div className="flex items-center gap-3">
              <Link
                href="/mitra"
                className="hover:text-white transition-colors"
              >
                Pusat Petani
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href="/download"
                className="hover:text-white transition-colors"
              >
                Mulai Bergabung
              </Link>
              <span className="text-white/20">|</span>

              <div className="hidden sm:flex items-center gap-2">
                <span className="text-white/80">Ikuti kami di</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                  title="Threads"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.42 2.31a9.23 9.23 0 014.28 1.83 8.33 8.33 0 012.7 3.66 11.45 11.45 0 01.76 4.41v.83a4.7 4.7 0 01-.64 2.45 4.19 4.19 0 01-1.89 1.68 6.55 6.55 0 01-2.83.56 5.56 5.56 0 01-3.72-1.12 4 4 0 01-1.34-3.15 3.91 3.91 0 011.43-3.21 6.06 6.06 0 013.91-1.14h1.76v-.55a4.09 4.09 0 00-.39-1.93 3 3 0 00-1.11-1.25 3.33 3.33 0 00-1.74-.45 4.09 4.09 0 00-2.64.93 6.94 6.94 0 00-1.89 2.53 13.09 13.09 0 00-.73 4.75 12.06 12.06 0 00.75 4.54 6.42 6.42 0 001.95 2.54 4.5 4.5 0 002.77.87 5.25 5.25 0 003.35-1.07 7.42 7.42 0 002.11-2.73l1.83.73a9.42 9.42 0 01-2.89 3.86 7.45 7.45 0 01-4.4 1.34 6.46 6.46 0 01-4.08-1.25 8.16 8.16 0 01-2.61-3.48 14.18 14.18 0 01-1-5.6 15 15 0 011-5.83 8.5 8.5 0 012.71-3.66 6.36 6.36 0 014.07-1.31 5.37 5.37 0 013.2.91zm2.38 8.85h-1.46a4.13 4.13 0 00-2.5.65 2 2 0 00-.78 1.68 2.08 2.08 0 00.67 1.63 2.65 2.65 0 001.76.54 3.79 3.79 0 002.31-.77 2.89 2.89 0 001-2.11v-1.62z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu fungsional sebelah kanan */}
            <div className="flex items-center gap-4">
              {isLoggedIn && (
                <Link
                  href="/notifikasi"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <FaBell className="text-sm" />
                  <span>Notifikasi</span>
                </Link>
              )}

              <Link
                href="/bantuan"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <FaCircleQuestion className="text-sm" />
                <span>Bantuan</span>
              </Link>

              <button className="flex items-center gap-1.5 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit">
                <FaGlobe className="text-sm" />
                <span>Bahasa Indonesia</span>
              </button>

              {!isLoggedIn ? (
                <div className="flex items-center gap-2.5 font-medium">
                  <Link
                    href="/register"
                    className="hover:text-white/80 transition-colors"
                  >
                    Daftar
                  </Link>
                  <span className="text-white/20">|</span>
                  <Link
                    href="/login"
                    className="hover:text-white/80 transition-colors"
                  >
                    Log In
                  </Link>
                </div>
              ) : (
                <Link
                  href="/profile"
                  className="font-medium hover:text-white transition-colors"
                >
                  <span>Alief Faisal</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ================= BARIS 2: MAIN NAVBAR (LOGO, SEARCH, FAVORIT) ================= */}
        <div className="max-w-7xl mx-auto py-3 md:pt-4 md:pb-3 px-4 sm:px-6 lg:px-8 flex items-center md:items-start justify-between gap-3 md:gap-8">
          {/* Logo utama: hanya muncul di desktop (md ke atas) */}
          <Link href="/" className="hidden md:flex items-center shrink-0 pt-1">
            <Image
              src="/images/logo.png"
              alt="Cari Tani Logo"
              width={140}
              height={44}
              priority
              className="object-contain w-auto h-11"
            />
          </Link>

          {/* SISI TENGAH: Search bar (Otomatis meluas penuh di mobile karena tombol hamburger dihapus) */}
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="w-full relative flex items-center">
              <input
                type="text"
                placeholder="Daftar & Dapatkan Voucher Kelompok Tani..."
                className="w-full bg-white text-slate-900 pl-3 pr-11 md:pl-4 md:pr-14 py-2 md:py-2.5 rounded-[2px] text-xs sm:text-sm focus:outline-none placeholder-slate-400 font-normal shadow-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 md:px-5 bg-primary hover:bg-primary/95 text-white rounded-[2px] transition-all flex items-center justify-center cursor-pointer border-none">
                <FaMagnifyingGlass className="text-[11px] sm:text-sm" />
              </button>
            </div>

            {/* Baris tag kategori: tersembunyi di mobile, hanya tampil di desktop */}
            <div className="hidden md:flex items-center gap-4 text-[11px] text-white/85 overflow-x-auto no-scrollbar whitespace-nowrap font-light">
              <Link
                href="/komoditas/cabai"
                className="hover:text-zinc-200 transition-colors"
              >
                Cabai Rawit Merah
              </Link>
              <Link
                href="/komoditas/padi"
                className="hover:text-zinc-200 transition-colors"
              >
                Beras Organik Premium
              </Link>
              <Link
                href="/komoditas/jagung"
                className="hover:text-zinc-200 transition-colors"
              >
                Jagung Pipit Pakis
              </Link>
              <Link
                href="/komoditas/bawang"
                className="hover:text-zinc-200 transition-colors"
              >
                Bawang Merah Lokal
              </Link>
              <Link
                href="/komoditas/tomat"
                className="hover:text-zinc-200 transition-colors"
              >
                Tomat Sayur Segar
              </Link>
            </div>
          </div>

          {/* SISI KANAN: Ikon Favorit (Tetap di pojok kanan untuk mobile & desktop) */}
          <div className="flex items-center shrink-0 text-white">
            <Link
              href="/favorit"
              className="p-1.5 md:p-2.5 hover:text-zinc-200 transition-colors relative flex items-center justify-center"
              title="Petani Favorit Saya"
            >
              <FaHeart className="text-lg md:text-2xl" />
              <span className="absolute -top-0.5 -right-0.5 bg-white text-primary text-[9px] md:text-[10px] font-bold h-3.5 w-3.5 md:h-4 md:w-4 rounded-full flex items-center justify-center border border-primary shadow-sm">
                3
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
