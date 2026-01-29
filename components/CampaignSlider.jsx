"use client";
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function CampaignSlider({ products }) {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [progress, setProgress] = useState(0);

  const discountedProducts = products.filter(
    (p) => p.oldPrice && p.oldPrice > p.price
  );

  if (discountedProducts.length === 0) return null;

  const updateScrollStatus = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      const scrollPercent = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrollPercent || 0);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="px-4 mt-12 mb-16 relative group max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="text-red-500 animate-pulse">🔥</span> HAFTANIN FIRSATLARI
          </h2>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.3em] mt-1">
            Yana Kaydırarak Keşfet
          </span>
        </div>

        {/* Web Navigasyon Okları */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className={`p-2 rounded-full bg-neutral-900 border border-white/10 hover:border-amber-400 transition-all ${!showLeftArrow ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button 
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:border-amber-400 transition-all"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={updateScrollStatus}
        className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory"
      >
        {discountedProducts.map((product) => (
          <div key={product.id} className="flex-none w-[200px] md:w-[260px] snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* İlerleme Çubuğu - Webde daha belirgin yaptık */}
      <div className="hidden md:block w-full h-[2px] bg-neutral-800 mt-6 relative rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}