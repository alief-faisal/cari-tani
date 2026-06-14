
"use client";

import {

  FaHeart,
  FaTicket,
  FaArrowRight,
  FaClock,
} from "react-icons/fa6";

export default function UserDashboard() {
  // Simulasi data user logis
  const stats = [
    {
      id: 1,
      name: "Pesanan Aktif",
      value: "2",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Petani Favorit",
      value: "12",
      icon: FaHeart,
      color: "bg-rose-500",
    },
    {
      id: 3,
      name: "Voucher Tersimpan",
      value: "4",
      icon: FaTicket,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-5">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white tracking-tight">
              Halo, Alief Faisal 👋
            </h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-zinc-400 mt-1">
              Selamat datang kembali. Cek pesanan pangan organik Anda hari ini.
            </p>
          </div>
          <button className="bg-primary hover:bg-opacity-95 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all flex items-center gap-2">
            Belanja Komoditas <FaArrowRight />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white dark:bg-zinc-900 p-6 border border-slate-200/60 dark:border-zinc-800/60 flex items-center justify-between shadow-sm"
              >
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    {stat.name}
                  </p>
                  <p className="text-3xl font-black text-slate-800 dark:text-white">
                    {stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800/60 shadow-sm">
          <div className="p-5 border-b border-slate-200 dark:border-zinc-800 flex items-center gap-2">
            <FaClock className="text-slate-400" />
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-white">
              Riwayat Transaksi Terakhir
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-950/50 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-zinc-800">
                  <th className="p-4 font-bold">ID Pesanan</th>
                  <th className="p-4 font-bold">Komoditas</th>
                  <th className="p-4 font-bold">Kelompok Tani</th>
                  <th className="p-4 font-bold">Total Harga</th>
                  <th className="p-4 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 font-medium text-slate-700 dark:text-zinc-300">
                <tr>
                  <td className="p-4 font-mono text-primary">#TRX-98231</td>
                  <td className="p-4">Cabai Rawit Merah (5 Kg)</td>
                  <td className="p-4">Gapoktan Tani Mulya</td>
                  <td className="p-4">Rp 175.000</td>
                  <td className="p-4">
                    <span className="bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 px-2 py-1 text-[10px] font-bold uppercase">
                      Dikirim
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-primary">#TRX-97110</td>
                  <td className="p-4">Beras Organik Premium (25 Kg)</td>
                  <td className="p-4">Makmur Jaya</td>
                  <td className="p-4">Rp 340.000</td>
                  <td className="p-4">
                    <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-2 py-1 text-[10px] font-bold uppercase">
                      Selesai
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
