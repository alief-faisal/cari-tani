import HeroBanner from "@/components/HeroBanner";
import FeatureMenu from "@/components/FeatureMenu";
import CategoryGrid from "@/components/CategoryGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 font-sans antialiased">
      {/* isi konten semantik utama */}
      <main className="flex-1 w-full">
        {/* 1. banner besar atas */}
        <HeroBanner />

        {/* 2. baris menu jalan pintas */}
        <FeatureMenu />

        {/* 3. tabel grid pengelompokan kategori */}
        <CategoryGrid />
      </main>

      {/* footer semantik dasar platform */}
      <footer className="w-full bg-white dark:bg-zinc-900 border-t border-slate-200/60 dark:border-zinc-800/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-zinc-400">
          <div>
            <p className="font-semibold text-slate-700 dark:text-zinc-300">
              Cari Tani Indonesia
            </p>
            <p className="text-xs mt-0.5">
              Membangun kedaulatan pangan transparan lewat manajemen data
              terpadu.
            </p>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Cari Tani. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
