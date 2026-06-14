"use client";

import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  FaBoxesStacked,
  FaHandshake,
  FaLocationDot,
  FaPercent,
  FaCertificate,
  FaShieldHalved,
} from "react-icons/fa6";

export default function FeatureMenu() {
  // inisialisasi keen slider untuk efek geser smooth di mobile
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 4.2, // menampilkan 4.2 item di hp agar user tahu bisa digeser
      spacing: 12,
    },
    // kembali ke layout grid murni saat di layar desktop
    breakpoints: {
      "(min-width: 640px)": {
        disabled: true,
      },
    },
  });

  const features = [
    {
      id: 1,
      label: "Tani Terdekat",
      icon: FaLocationDot,
      href: "/direktori?filter=terdekat",
    },
    {
      id: 2,
      label: "Komoditas Unggul",
      icon: FaBoxesStacked,
      href: "/direktori?filter=unggul",
    },
    { id: 3, label: "Kemitraan", icon: FaHandshake, href: "/kemitraan" },
    { id: 4, label: "Promo Panen", icon: FaPercent, href: "/promo" },
    { id: 5, label: "Sertifikasi", icon: FaCertificate, href: "/sertifikasi" },
    { id: 6, label: "Pabrik Penggiling", icon: FaShieldHalved, href: "/garansi" },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* wrapper keen-slider */}
        <div
          ref={sliderRef}
          className="keen-slider flex items-center sm:grid sm:grid-cols-6 sm:gap-6 overflow-hidden select-none"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="keen-slider__slide flex flex-col items-center text-center shrink-0 group min-w-0"
              >
                {/* dikembalikan ke bentuk lingkaran penuh sesuai permintaan */}
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-150">
                  <Icon className="text-xl" />
                </div>

                {/* label menu */}
                <span className="mt-2 text-xs font-semibold text-slate-700 dark:text-zinc-300 group-hover:text-primary transition-colors tracking-tight whitespace-nowrap sm:whitespace-normal">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
