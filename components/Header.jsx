"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [showSearch]);

  function handleSearch(e) {
    if (e.key === "Enter" && searchText.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchText)}`);
      setSearchText(""); 
      setShowSearch(false);
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-12 md:h-13 transition-colors duration-300">
        <div className="container mx-auto px-4 h-full flex items-center justify-between relative">

          {/* ☰ SOL: Menü Butonu (Arama açıkken mobilde gizle) */}
          <button 
            onClick={() => setOpen(true)} 
            className={`transition-all duration-300 ${showSearch ? 'scale-0 w-0' : 'scale-100 w-10'} text-white/80`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* 💎 ORTA: Logo (Arama açıkken mobilde gizle) */}
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${showSearch ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-90 md:scale-100'}`}>
            <Link href="/" className="flex flex-col items-center select-none">
              <div className="flex items-baseline gap-1">
                <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none text-nowrap">AKTAĞ</h1>
                <span className="text-lg md:text-xl font-light italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 opacity-80 leading-none">AUTO</span>
              </div>
              <div className="flex items-center gap-1.5 w-full mt-1 opacity-60">
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                <span className="text-[7px] font-bold tracking-[0.4em] text-slate-500 uppercase leading-none whitespace-nowrap">Premium Care</span>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-800 via-slate-800 to-transparent"></div>
              </div>
            </Link>
          </div>

          {/* 🔍 SAĞ: Akıllı Arama Alanı */}
          <div className={`flex items-center transition-all duration-500 ${showSearch ? 'flex-grow justify-end' : 'w-10 justify-end'}`}>
            <div className={`flex items-center overflow-hidden transition-all duration-500 ${showSearch ? 'w-full md:w-64 opacity-100 ml-2' : 'w-0 opacity-0'}`}>
              <input
                suppressHydrationWarning
                ref={searchInputRef}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Ürün veya marka ara..."
                className="w-full bg-neutral-900/50 text-sm text-white placeholder-slate-500 border border-white/10 rounded-full py-2 px-4 focus:outline-none focus:border-white/20 transition-all"
              />
            </div>
            
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 transition-all duration-300 shrink-0 ${showSearch ? 'text-amber-500 rotate-90 ml-2' : 'text-white/80'}`}
            >
              {showSearch ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 📱 MOBİL MENÜ (Drawer) - Tasarım İyileştirildi */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-[320px] bg-neutral-950 p-6 shadow-2xl ring-1 ring-white/5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-10">
               <button onClick={() => setOpen(false)} className="text-white/40 text-xl">✕</button>
            </div>

            <nav className="flex flex-col gap-5 text-sm font-semibold tracking-wider uppercase">
              <Link href="/" onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Ana Sayfa</Link>
              <Link href="/products" onClick={() => setOpen(false)} className="py-2 border-b border-white/5">Tüm Ürünler</Link>
              <div className="mt-4 flex flex-col gap-4 pl-2 border-l-2 border-amber-500/20 text-slate-400">
                <Link href="/products?category=cam-bakim" onClick={() => setOpen(false)}>Cam Bakım</Link>
                <Link href="/products?category=ic-bakim" onClick={() => setOpen(false)}>İç Bakım</Link>
                <Link href="/products?category=dis-bakim" onClick={() => setOpen(false)}>Dış Bakım</Link>
                <Link href="/products?category=setler" onClick={() => setOpen(false)}>Setler</Link>
              </div>
              <a href="#hakkimizda" onClick={() => setOpen(false)} className="mt-4 text-xs text-slate-500">Hakkımızda</a>
              <a href="https://wa.me/905426310167" target="_blank" className="mt-6 rounded-xl bg-green-600 py-4 text-center text-white text-xs font-black shadow-lg shadow-green-600/20">
                WHATSAPP DESTEK
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}