import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <div className="mb-5 relative h-80 w-full">
        <Image
          src="/kesfet.png"
          alt="Profesyonel Bakım Ürünleri"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-xl font-semibold">Profesyonel Bakım Ürünleri</h1>

          <Link
            href="/products"
            className="mt-4 rounded-xl bg-white px-6 py-2 text-sm font-semibold text-black"
          >
            Ürünleri Keşfet
          </Link>
        </div>
      </div>

      {/* KATEGORİLER */}
      <div className="relative px-4">
        <h2 className="text-l font-bold flex items-center gap-2 mb-4">
          Kategoriler
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              title: "Cam Bakım",
              slug: "cam-bakim",
              image: "/categories/cam-bakim.png",
            },
            {
              title: "Dış Bakım",
              slug: "dis-bakim",
              image: "/categories/dis-bakim.png",
            },
            {
              title: "İç Bakım",
              slug: "ic-bakim",
              image: "/categories/ic-bakim.png",
            },
            { title: "Setler", slug: "setler", image: "/categories/setler.png" },
          ].map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="relative aspect-square overflow-hidden rounded-xl block"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />

              {/* ORTALI + SAYDAM ETİKET */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="
                    bg-black/50
                    text-white
                    text-sm
                    font-medium
                    px-4
                    py-1.5
                    rounded-md
                    backdrop-blur-sm
                  "
                >
                  {cat.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 🔥 KAMPANYALI ÜRÜNLER (Fırsat Bölümü) */}
      <div className="px-4 mt-12 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-l font-bold flex items-center gap-2">
            <span className="text-red-600">🔥</span> Haftanın Fırsatları
          </h2>
          <span className="text-xs text-slate-400 font-medium px-2 py-1 bg-neutral-900 rounded-lg border border-white/5">
            Sınırlı Stok
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {products
            .filter((product) => product.oldPrice && product.oldPrice > product.price)
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* ÜRÜNLER */}
      <div className="px-4 mt-8">
        <h2 className="text-l font-bold flex items-center gap-2 mb-4">
          Ürünlerimiz
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
