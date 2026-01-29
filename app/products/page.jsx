import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";
import SortBottomSheet from "@/components/SortBottomSheet";

export default async function ProductsPage({ searchParams }) {
  const sParams = await searchParams;
  const category = sParams.category;
  const search = sParams.search?.toLowerCase();
  const sort = sParams.sort || "default";
  const categoryTitles = {
    "cam-bakim": "CAM BAKIM ÜRÜNLERİ",
    "dis-bakim": "DIŞ BAKIM ÜRÜNLERİ",
    "ic-bakim": "İÇ BAKIM ÜRÜNLERİ",
    "setler": "SETLER",
  };
  // 1. Filtreleme
  let filteredProducts = products.filter((product) => {
    const matchCategory = category ? product.category.includes(category) : true;
    const matchSearch = search ? 
      (product.name.toLowerCase().includes(search) || product.brand?.toLowerCase().includes(search)) 
      : true;
    return matchCategory && matchSearch;
  });

  // 2. Sıralama
  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "newest") {
    filteredProducts.sort((a, b) => b.id - a.id);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-8 md:py-12 max-w-6xl mx-auto">
      {/* BAŞLIK ALANI */}
      <div className="flex flex-col gap-1 mb-6 text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">
          {/* Eğer kategori varsa sözlükten çek, yoksa "TÜM ÜRÜNLER" yaz */}
          {category ? (categoryTitles[category] || category.replace("-", " ")) : "TÜM ÜRÜNLER"}
        </h1>
        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          {filteredProducts.length} ÜRÜN LİSTELENİYOR
        </p>
      </div>

      {/* 🔍 MODERN FİLTRE VE SIRALAMA SİSTEMİ */}
      <div className="flex flex-col  mb-5">
        <SearchFilter />
        
        {/* Eski Select Kutusunu Sildim, Sadece Yeni Panel Kaldı */}
        <SortBottomSheet currentSort={sort} />
      </div>

      {/* ÜRÜN LİSTESİ */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center bg-neutral-900/20 rounded-3xl border border-white/5">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Aradığınız kriterlere uygun ürün bulunamadı.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}