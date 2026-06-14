
"use client";

import {
  FaUsers,
  FaBuildingShield,
  FaTriangleExclamation,

} from "react-icons/fa6";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-zinc-800 pb-5">
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight uppercase flex items-center gap-3">
            <FaBuildingShield className="text-red-600" /> Control Room Global
            Admin
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Manajemen otorisasi enkripsi penuh, verifikasi data registrasi IMEI,
            serta kurasi Gapoktan se-Indonesia.
          </p>
        </div>

        {/* Top Critical Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Entitas Pengguna
              </p>
              <p className="text-3xl font-black text-slate-800 dark:text-white mt-1">
                42,910
              </p>
            </div>
            <FaUsers className="text-3xl text-slate-300" />
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Butuh Verifikasi Berkas
              </p>
              <p className="text-3xl font-black text-amber-600 mt-1">
                18 Kelompok
              </p>
            </div>
            <FaTriangleExclamation className="text-3xl text-amber-500/70" />
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Integritas API Gateways
              </p>
              <p className="text-3xl font-black text-emerald-600 mt-1">
                100% Operational
              </p>
            </div>

          </div>
        </div>

        {/* Antrean Approval Penjual */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-zinc-800 font-bold uppercase tracking-wider text-xs text-slate-800 dark:text-white">
            Persetujuan Legalitas Lapangan Gapoktan Baru
          </div>
          <div className="divide-y divide-slate-100 dark:divide-zinc-800/60">
            {[
              {
                nama: "Kelompok Tani Sumber Rejeki",
                wilayah: "Dieng, Wonosobo",
                komoditas: "Kentang Dieng",
              },
              {
                nama: "Gapoktan Tani Subur",
                wilayah: "Sukabumi, Jawa Barat",
                komoditas: "Tomat & Bawang Merah",
              },
            ].map((tani, idx) => (
              <div
                key={idx}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                    {tani.nama}
                  </h4>
                  <p className="text-slate-400">
                    {tani.wilayah} • Komoditas: {tani.komoditas}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold px-4 py-2 uppercase text-[10px] tracking-wider rounded-none">
                    Tolak
                  </button>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 uppercase text-[10px] tracking-wider rounded-none">
                    Setujui Akun
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
