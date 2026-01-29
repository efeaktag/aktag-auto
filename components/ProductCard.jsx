import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const discountRate = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`} className="group block h-full">
      <div className="relative h-full rounded-2xl bg-neutral-900/60 border border-white/5 p-3 transition-all duration-300 hover:border-amber-400/50 shadow-xl flex flex-col">
        {/* 🏷️ İNDİRİM ROZETİ */}
        {discountRate > 0 && (
          <div className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
            %{discountRate} İNDİRİM
          </div>
        )}

        {/* 🖼️ GÖRSEL ALANI */}
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-800/50 mb-4 relative flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/20 rounded-xl"></div>
        </div>

        {/* ℹ️ ÜRÜN BİLGİLERİ */}
        <div className="px-1 flex flex-col flex-grow">
          {product.brand && (
            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1 block">
              {product.brand}
            </span>
          )}

          <h3 className="text-sm font-semibold text-white line-clamp-1 mb-3 group-hover:text-amber-400 transition-colors">
            {product.name}
          </h3>

          {/* 💰 FİYAT ALANI */}
          <div className="flex flex-col mb-4 mt-auto">
            {product.oldPrice && (
              <span className="text-[9px] text-slate-500 line-through leading-none mb-1">
                {product.oldPrice.toFixed(2)} TL
              </span>
            )}

            <div className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="text-[15px] md:text-lg font-black text-amber-400 leading-none">
                {product.price.toFixed(2)} TL
              </span>
              <span className="text-[7px] md:text-[8px] text-slate-500 font-bold uppercase tracking-tighter shrink-0">
                (KDV Dahil)
              </span>
            </div>
          </div>

          <div className="w-full rounded-xl bg-blue-600 py-2.5 text-center text-xs font-bold text-white transition-all group-hover:bg-blue-500 group-hover:shadow-lg group-hover:shadow-blue-600/20">
            Siparişe Git
          </div>
        </div>
      </div>
    </Link>
  );
}
