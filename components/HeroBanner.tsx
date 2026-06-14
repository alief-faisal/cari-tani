"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass, FaUserPlus } from "react-icons/fa6";

export default function HeroBanner() {
  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 pt-4">
      {/* Di mobile, padding kiri-kanan container dihilangkan agar banner full kanan-kiri */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Tinggi disesuaikan: h-[200px] di mobile agar lebih pipih, dan h-[450px] di desktop */}
        <div className="relative w-full h-[200px] md:h-[450px] overflow-hidden shadow-sm border border-slate-200/40 dark:border-zinc-800/40">
          {/* Latar Belakang Gambar Banner */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/banner.jpg"
              alt="Hamparan sawah pertanian"
              fill
              priority
              sizes="(max-w-7xl) 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Konten di Dalam Banner */}
          <div className="relative z-10 w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-center pl-0 md:pl-12">
              {/* SISI KIRI: Teks Informasi (Disembunyikan total di mobile agar muat tombol saja) */}
              <div className="lg:col-span-6 text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] hidden md:block">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Saatnya generasi muda mengambil peran
                </h1>
                <p className="mt-3 text-xs md:text-sm text-zinc-100 max-w-sm font-normal">
                  Menghubungkan petani, komunitas, dan generasi muda dalam
                  ekosistem pertanian digital yang lebih maju.
                </p>
              </div>

              {/* SISI KANAN: Tombol Bertumpuk Menempel Penuh ke Kanan-Atas-Bawah */}
              <div className="lg:col-span-6 flex flex-col items-end justify-center w-full h-full">
                {/* Di mobile max-w-xs agar proporsional dengan tinggi banner yang pipih */}
                <div className="w-full max-w-[260px] md:max-w-sm flex flex-col backdrop-blur-[4px] bg-black/25 shadow-2xl">
                  {/* Button Atas: Mendaftar Menjadi Tani */}
                  <Link
                    href="/register"
                    className="w-full border-b border-white/20 border-t-0 border-l-0 border-r-0 hover:bg-white/10 text-white font-bold py-4 md:py-6 px-4 transition-all text-[11px] md:text-sm flex items-center justify-center text-center gap-2 tracking-wider uppercase whitespace-nowrap active:scale-[0.99]"
                  >
                    <FaUserPlus className="text-sm shrink-0" />
                    <span>Bergabung Menjadi Petani</span>
                  </Link>

                  {/* Button Bawah: Cari Petani */}
                  <Link
                    href="/register"
                    className="w-full border-none hover:bg-white/10 text-white font-bold py-4 md:py-6 px-4 transition-all text-[11px] md:text-sm flex items-center justify-center text-center gap-2 tracking-wider uppercase whitespace-nowrap active:scale-[0.99]"
                  >
                    <FaMagnifyingGlass className="text-[10px]" />
                    <span>Komoditas Unggul Panen</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
