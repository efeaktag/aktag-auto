"use client";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SortBottomSheet({ currentSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const options = [
    { label: "Varsayılan", value: "default" },
    { label: "Fiyat: Düşükten Yükseğe", value: "price-asc" },
    { label: "Fiyat: Yüksekten Düşüğe", value: "price-desc" },
    { label: "En Yeniler", value: "newest" },
  ];

  // 🚀 Kritik Değişiklik: Fonksiyon çağırmak yerine URL'yi güncelliyoruz
  const handleSort = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val === "default") {
      params.delete("sort");
    } else {
      params.set("sort", val);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* 📱 MOBİL TETİKLEYİCİ */}
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-between w-full bg-neutral-900/50 border border-white/5 px-4 py-3 rounded-xl text-[11px] font-bold text-slate-300 uppercase tracking-widest"
      >
        <span>SIRALAMA: {options.find(o => o.value === currentSort)?.label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-amber-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
      </button>

      {/* 💻 MASAÜSTÜ: Şık butonlar */}
      <div className="hidden md:flex gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSort(opt.value)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all border ${
              currentSort === opt.value 
              ? 'bg-white text-black border-white' 
              : 'bg-transparent text-slate-500 border-white/5 hover:border-white/20'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* 📱 MOBİL PANEL (Bottom Sheet) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-0 left-0 w-full bg-neutral-950 rounded-t-[2.5rem] border-t border-white/10 p-8 animate-slideUp shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="w-12 h-1.5 bg-neutral-800 rounded-full mx-auto mb-8" />
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-center">Sıralama Seçenekleri</h3>
            <div className="flex flex-col gap-3">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleSort(opt.value)}
                  className={`flex items-center justify-between w-full p-5 rounded-2xl transition-all ${
                    currentSort === opt.value ? 'bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20' : 'text-slate-300 active:bg-white/5'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest">{opt.label}</span>
                  {currentSort === opt.value && <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}