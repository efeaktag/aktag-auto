import products from "@/data/products";

export async function generateMetadata({ searchParams }) {
  // 🔑 Next.js 15 kuralı: searchParams artık bir Promise, await ile açıyoruz.
  const sParams = await searchParams; 
  const category = sParams?.category;

  const titles = {
    "cam-bakim": "Cam Bakım Ürünleri",
    "dis-bakim": "Dış Bakım Ürünleri",
    "ic-bakim": "İç Bakım Ürünleri",
    "setler": "Setler",
  };

  const descriptions = {
    "cam-bakim": "Cam temizliği ve cam bakım ürünleri.",
    "dis-bakim": "Araç dış yüzeyleri için profesyonel bakım ürünleri.",
    "ic-bakim": "Araç içi temizlik ve bakım ürünleri.",
    "setler": "Avantajlı kampanyalı oto bakım setleri.",
  };

  const title = category
    ? `${titles[category]} | Aktağ Auto`
    : "Tüm Ürünler | Aktağ Auto"; 

  const description = category
    ? descriptions[category]
    : "Aktağ Auto profesyonel oto bakım ürünleri.";

  return {
    title: category ? titles[category] : "Tüm Ürünler",
    description: description,
    alternates: {
      canonical: category ? `/products?category=${category}` : "/products",
    },
  };
}

export default function ProductsLayout({ children }) {
  return <section>{children}</section>;
}