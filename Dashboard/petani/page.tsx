
"use client";

import { FaWheatAwn, FaScaleBalanced, FaMoneyBillWave, FaPlus, FaLocationDot } from "react-icons/fa6";

export default function PetaniDashboard() {
  const stats = [
    { id: 1, name: "Estimasi Hasil Panen", value: "4.8 Ton", icon: FaWheatAwn, color: "bg-emerald-600" },
    { id: 2, name: "Komoditas Terjual", value: "1,240 Kg", icon: FaScaleBalanced, color: "bg-teal-600" },
    { id: 3, name: "Pendapatan Bulan Ini", value: "Rp 14.2M", icon: FaMoneyBillWave, color: "bg-primary" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
              Panel Pengelola Mitra Tani
            </h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 mt-1">
              <FaLocationDot className="text-primary" />
              <span>Gapoktan Tani Mulya • Cluster Padi & Cabai</span>
            </div>
          </div>
          <button className="bg-primary hover:bg-opacity-95 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center gap-2">
            <FaPlus /> Update Stok Panen
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between shadow-sm">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">{stat.name}</p>
                  <p className="text-3xl font-black text-slate-800 dark:text-white">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-4 text-white rounded-none`}>
                  <Icon className="text-xl" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Grid Management Lahan */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">Daftar Komoditas di Sawah Anda</h3>
            <div className="space-y-3">
              {[
                { name: "Padi Beras Organik Cianjur", stock: "2,400 Kg", status: "Siap Panen (Minggu Depan)" },
                { name: "Cabai Rawit Merah Premium", stock: "450 Kg", status: "Masa Petik Aktif" }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800/80 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white text-sm">{item.name}</p>
                    <p className="text-slate-400 mt-1">{item.status}</p>
                  </div>
                  <div className="text-right font-mono font-bold text-primary text-base">{item.stock}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">Status Verifikasi QRIS</h3>
            <div className="my-4 p-4 border border-dashed border-emerald-500/40 bg-emerald-50/30 dark:bg-emerald-950/10 text-xs text-emerald-600 dark:text-emerald-400 leading-relaxed font-medium">
              Akun Merchant Anda sudah terhubung BI-FAST dan QRIS Nasional. Penarikan dana hasil tani langsung cair dalam 1x24 jam kerja.
            </div>
            <button className="w-full bg-slate-800 dark:bg-zinc-800 text-white font-bold py-3 text-xs uppercase tracking-wider rounded-none">
              Cek Dompet Tani
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}