import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";
import ProductGallery from "@/components/ProductGallery";

// 🔁 ÖNERİLEN ÜRÜNLERİ GETİR
const getRecommendedProducts = (products, currentProduct) => {
  return products
    .filter(
      (p) =>
        p.id !== currentProduct.id &&
        p.category.some((cat) => currentProduct.category.includes(cat))
    )
    .slice(0, 4);
};
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aktagauto.com";
const whatsappPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905426310167";


// 1. SEO ve Metadata Alanı (Server-Side)
export async function generateMetadata({ params }) {
  const { id } = await Promise.resolve(params);
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Aktağ Auto",
      description: "Aradığınız ürün bulunamadı.",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aktagauto.com";
const whatsappPhone =
  process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905426310167";
  const canonicalPath = `/product/${product.id}`;
  const ogImage =
    typeof product.image === "string" && product.image.startsWith("/")
      ? `${siteUrl}${product.image}`
      : product.image;

  return {
    title: `${product.name} | Aktağ Auto`,
    description: product.description || `${product.name} - Profesyonel Oto Bakım`,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${product.name} | Aktağ Auto`,
      description: product.description || `${product.name} - Profesyonel Oto Bakım`,
      url: `${siteUrl}${canonicalPath}`,
      siteName: "Aktağ Auto",
      images: ogImage ? [{ url: ogImage }] : undefined,
      locale: "tr_TR",
      type: "website",
    },
  };
}

// 2. Sayfa İçeriği (Server Component)
export default async function ProductPage({ params }) {
  const { id } = await Promise.resolve(params);
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        Ürün bulunamadı
      </div>
    );
  }

  const recommendedProducts = getRecommendedProducts(products, product);
  const siteUrl = "https://aktagauto.com";

  const productUrl = `${siteUrl}/product/${product.id}`;
  const absoluteMainImage =
    typeof product.image === "string" && product.image.startsWith("/")
      ? `${siteUrl}${product.image}`
      : product.image;

  // ✅ Product JSON-LD (Structured Data)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteMainImage ? [absoluteMainImage] : undefined,
    description: product.description || `${product.name} - Aktağ Auto`,
    brand: product.brand ? { "@type": "Brand", name: product.brand } : undefined,
    sku: String(product.id),
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "TRY",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  const whatsappMessage = `Merhaba 👋\n\nAktağ Auto üzerinden aşağıdaki ürün ile ilgileniyorum:\n\n 🧴 Ürün: ${
    product.name
  }\n 💰 Fiyat: ${product.price.toFixed(
    2
  )} TL\n\n 🔗 Ürün Linki:\n${productUrl}\n\nBilgi alabilir miyim?`;

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-10">
      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 📋 ANA ÜRÜN BİLGİ ALANI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* 🖼️ GÖRSEL KUTUSU */}
        <div className="flex justify-center items-start">
          <div className="w-full max-w-md">
            <ProductGallery
              images={product.images}
              name={product.name}
              mainImage={product.image}
            />
          </div>
        </div>

        {/* ℹ️ SAĞ TARAF: SATIN ALMA ALANI */}
        <div className="flex flex-col justify-start pt-2">
          {product.brand && (
            <span className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase mb-1">
              {product.brand}
            </span>
          )}

          <h1 className="text-2xl font-bold mb-4 leading-tight">{product.name}</h1>

          {/* 💰 FİYAT BLOĞU */}
          <div className="flex items-center gap-4 mb-8 bg-neutral-900/50 p-4 rounded-xl w-fit border border-white/5">
            <div>
              {product.oldPrice && (
                <span className="block text-slate-500 text-xs line-through">
                  {product.oldPrice.toFixed(2)} TL
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-amber-400">
                  {product.price.toFixed(2)} TL
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  (KDV Dahil)
                </span>
              </div>
            </div>

            {product.oldPrice && (
              <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                %{(100 - (product.price / product.oldPrice) * 100).toFixed(0)} İNDİRİM
              </div>
            )}
          </div>

          {/* WHATSAPP BUTONU */}
          <a
            href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-xl bg-green-500 py-4 text-center text-sm font-bold hover:bg-green-600 transition shadow-lg shadow-green-500/20"
          >
            WhatsApp ile Sipariş Ver
          </a>

          {/* GÜVEN ROZETLERİ */}
          <div className="flex items-center justify-between mt-6 px-1 py-4 border-t border-b border-white/5">
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">🚚</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                Hızlı Kargo
              </span>
            </div>
            <div className="flex flex-col items-center gap-1 border-x border-white/5 px-8">
              <span className="text-lg">🔒</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                Güvenli Alışveriş
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">✨</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">
                Orijinal Ürün
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 📝 ALT BİLGİ MERKEZİ */}
      <div className="max-w-6xl mx-auto mt-14">
        {product.description && (
          <div className="rounded-2xl bg-neutral-900/40 p-6 border border-white/5 mb-6">
            <h2 className="text-[11px] font-bold mb-3 uppercase tracking-widest text-slate-500">
              Ürün Açıklaması
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.features?.length > 0 && (
            <div className="rounded-2xl bg-neutral-900/40 p-6 border border-white/5">
              <h2 className="text-[11px] font-bold mb-4 uppercase tracking-widest text-slate-500 border-b border-white/5 pb-2">
                Teknik Özellikler
              </h2>
              <ul className="space-y-2.5">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[13px] text-slate-300"
                  >
                    <span className="h-1 w-1 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.usage && (
            <div className="rounded-2xl bg-neutral-900/40 p-6 border border-amber-500/10 relative overflow-hidden">
              <h2 className="text-[11px] font-bold mb-4 uppercase tracking-widest text-amber-500 border-b border-amber-500/10 pb-2 flex items-center gap-2">
                <span>💡</span> Uygulama Yöntemi
              </h2>
              <p className="text-[13px] text-slate-300 leading-relaxed italic">
                {product.usage}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 🔁 ÖNERİLEN ÜRÜNLER */}
      {recommendedProducts.length > 0 && (
        <div className="max-w-6xl mx-auto mt-20">
          <h2 className="mb-8 text-lg font-bold border-b border-white/5 pb-2">
            Bu Ürünü Alanlar Bunlara da Baktı
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="rounded-xl bg-neutral-900/40 p-3 hover:scale-[1.02] transition-all border border-white/5 group"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-neutral-800/50 mb-4 relative flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>

                <p className="text-[9px] text-blue-500 font-bold uppercase mb-1">
                  {item.brand}
                </p>
                <p className="text-xs font-medium line-clamp-1 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </p>
                <p className="mt-2 font-black text-amber-400 text-sm">
                  {item.price.toFixed(2)} TL
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
