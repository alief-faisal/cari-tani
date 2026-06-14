"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMagnifyingGlass,
  FaUsers,
  FaLocationDot,
  FaLeaf,
  FaLocationCrosshairs,
  FaUserPlus,
} from "react-icons/fa6";

export default function HeroBanner() {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [radius, setRadius] = useState<string>("5");

  const handleGpsDetection = () => {
    if (!navigator.geolocation) {
      alert("Browser Anda tidak mendukung fitur deteksi lokasi GPS.");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocating(false);
        if (radius === "semua") {
          setRadius("5");
        }
      },
      (error) => {
        console.error("Gagal mendapatkan lokasi GPS:", error);
        setIsLocating(false);
        alert(
          "Gagal mendeteksi lokasi GPS. Pastikan izin lokasi perangkat telah aktif.",
        );
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      komoditas: formData.get("komoditas"),
      kelompokTani: formData.get("kelompokTani"),
      radius: radius,
      gpsLocation: coordinates,
    };
    console.log("Memproses Pencarian Tani:", payload);
  };

  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden shadow-sm border border-slate-200/40 dark:border-zinc-800/40">
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

          <div className="relative z-10 w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full items-end gap-6">
              {/* SISI KIRI - Teks Informasi & Klaster Tombol Besar Pojok Bawah */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] hidden md:flex">
                <div className="pt-12 px-6 md:px-12">
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    Saatnya generasi muda mengambil peran.
                  </h1>
                  <p className="mt-3 text-xs md:text-sm text-zinc-100 max-w-sm font-normal">
                    Menghubungkan petani, komunitas, dan generasi muda dalam
                    ekosistem pertanian digital yang lebih maju.
                  </p>
                </div>

                {/* Container grid diperlebar (max-w-xl) & diberi border-t */}
                <div className="w-full max-w-xl grid grid-cols-2 border-t border-white/30 backdrop-blur-[1px] bg-black/5">
                  {/* Tombol Kiri: Mendaftar Menjadi Tani (Ikon + Teks Sejajar, tanpa tumpuk) */}
                  <Link
                    href="/register"
                    className="w-full border-r border-white/30 border-t-0 border-l-0 border-b-0 hover:bg-white/10 text-white font-bold py-4 px-4 rounded-none transition-all text-[11px] md:text-xs flex items-center justify-center text-center gap-2 tracking-wider uppercase whitespace-nowrap active:scale-[0.99]"
                  >
                    <FaUserPlus className="text-sm shrink-0" />
                    <span>Bergabung Menjadi Petani</span>
                  </Link>

                  {/* Tombol Kanan: Cari Petani (Memiliki border kiri dan kanan yang jelas) */}
                  <Link
                    href="/register"
                    className="w-full border-l border-r border-white/30 border-t-0 border-b-0 hover:bg-white/10 text-white font-bold py-4 px-4 rounded-none transition-all text-[11px] md:text-xs flex items-center justify-center text-center gap-2 tracking-wider uppercase whitespace-nowrap active:scale-[0.99]"
                  >
                    <FaMagnifyingGlass className="text-[10px] shrink-0" />
                    <span>Panen Trending</span>
                  </Link>
                </div>
              </div>

              {/* SISI KANAN - Kotak Form Pencarian Tani */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end w-full pb-6 pr-6 md:pr-12">
                <div className="w-full max-w-sm bg-white dark:bg-zinc-900 p-6 rounded-none shadow-2xl border border-slate-200/80 dark:border-zinc-800/80">
                  <header className="mb-4">
                    <h2 className="text-base font-bold uppercase tracking-wider text-slate-800 dark:text-white">
                      Pencarian Tani
                    </h2>
                  </header>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Pilih Komoditas
                      </label>
                      <div className="relative flex items-center">
                        <FaLeaf className="absolute left-3.5 text-slate-400 text-xs pointer-events-none" />
                        <select
                          name="komoditas"
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-none border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-800 dark:text-zinc-100 appearance-none font-medium"
                          required
                        >
                          <option value="">Pilih rumpun hasil tani...</option>
                          <option value="padi">
                            Padi (Beras Organik/Premium)
                          </option>
                          <option value="cabai-rawit">Cabai Rawit Merah</option>
                          <option value="cabai-keriting">
                            Cabai Merah Keriting
                          </option>
                          <option value="jagung">Jagung Pipit / Manis</option>
                          <option value="bawang-merah">
                            Bawang Merah Lokal
                          </option>
                          <option value="bawang-putih">Bawang Putih</option>
                          <option value="tomat">Tomat Sayur</option>
                          <option value="kentang">Kentang Dieng</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Kelompok Tani
                      </label>
                      <div className="relative flex items-center">
                        <FaUsers className="absolute left-3.5 text-slate-400 text-xs pointer-events-none" />
                        <select
                          name="kelompokTani"
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-none border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-800 dark:text-zinc-100 appearance-none font-medium"
                        >
                          <option value="semua">Semua Kelompok Tani</option>
                          <option value="tani-mulya">
                            Gapoktan Tani Mulya
                          </option>
                          <option value="makmur-jaya">
                            Kelompok Tani Makmur Jaya
                          </option>
                          <option value="sumber-rejeki">
                            Kelompok Tani Sumber Rejeki
                          </option>
                          <option value="tani-subur">
                            Gapoktan Tani Subur
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                          Jangkauan Wilayah
                        </label>
                        <button
                          type="button"
                          onClick={handleGpsDetection}
                          className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide border-none bg-transparent cursor-pointer transition-colors ${
                            coordinates
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-primary hover:text-opacity-80"
                          }`}
                          disabled={isLocating}
                        >
                          <FaLocationCrosshairs
                            className={`text-xs ${isLocating ? "animate-spin" : ""}`}
                          />
                          {isLocating
                            ? "Mencari..."
                            : coordinates
                              ? "GPS Terkunci"
                              : "Deteksi GPS"}
                        </button>
                      </div>

                      <div className="relative flex items-center">
                        <FaLocationDot className="absolute left-3.5 text-slate-400 text-xs pointer-events-none" />
                        <select
                          value={radius}
                          onChange={(e) => setRadius(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 text-xs rounded-none border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-800 dark:text-zinc-100 appearance-none font-medium"
                        >
                          <option value="5">
                            Radius 5 KM{" "}
                            {coordinates ? "(Sesuai GPS)" : "(Terdekat)"}
                          </option>
                          <option value="15">Radius 15 KM</option>
                          <option value="50">Radius 50 KM</option>
                          <option value="semua">Semua Wilayah</option>
                        </select>
                      </div>

                      {coordinates && (
                        <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 font-light">
                          Akurasi optimal aktif: Lokasi Anda disinkronkan.
                        </p>
                      )}
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-opacity-95 text-white font-bold py-3 px-4 rounded-none transition-colors text-xs flex items-center justify-center gap-2 active:scale-[0.99] border-none cursor-pointer"
                      >
                        <FaMagnifyingGlass className="text-[10px]" />
                        Cari Sekarang
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
