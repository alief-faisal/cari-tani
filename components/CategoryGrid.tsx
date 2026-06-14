import Link from "next/link";
import {
  FaWheatAwn,
  FaPepperHot,
  FaSeedling,
  FaTree,
  FaCow,
  FaFishFins,
} from "react-icons/fa6";

export default function CategoryGrid() {
  // list rumpun pertanian riil
  const categories = [
    {
      id: 1,
      name: "Padi & Beras",
      count: "124 Kelompok",
      icon: FaWheatAwn,
      href: "/komoditas/padi",
    },
    {
      id: 2,
      name: "Hortikultura (Cabai/Bawang)",
      icon: FaPepperHot,
      href: "/komoditas/hortikultura",
    },
    {
      id: 3,
      name: "Palawija & Jagung",
      icon: FaSeedling,
      href: "/komoditas/palawija",
    },
    {
      id: 4,
      name: "Perkebunan & Kopi",
      icon: FaTree,
      href: "/komoditas/perkebunan",
    },
    {
      id: 5,
      name: "Peternakan Lokal",
      icon: FaCow,
      href: "/komoditas/peternakan",
    },
    {
      id: 6,
      name: "Perikanan Air Tawar",
      icon: FaFishFins,
      href: "/komoditas/perikanan",
    },
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-zinc-950 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* box penampung utama pembagi kategori */}
        <div className="bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 shadow-sm overflow-hidden">
          {/* header judul komponen */}
          <header className="px-6 py-4 border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/50">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
              Kategori Utama Pertanian
            </h2>
          </header>

          {/* susunan susunan kotak grid simetris */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-slate-100 dark:divide-zinc-800">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50/50 dark:hover:bg-zinc-950/30 transition-colors group"
                >
                  {/* render ikon representasi produk */}
                  <div className="text-primary dark:text-secondary mb-3">
                    <Icon className="text-3xl" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
