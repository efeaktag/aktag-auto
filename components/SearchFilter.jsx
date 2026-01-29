"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // URL'deki mevcut değerleri alalım
  const currentSearch = searchParams.get("search") || "";
  const currentSort = searchParams.get("sort") || "default";

  const updateUrl = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "default") {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    // Sayfayı yenilemeden URL'yi günceller ve Next.js içeriği sunucuda süzüp getirir.
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-2">
      {/* Arama Kutusu */}
      <div className="relative flex-1">
        <input
          type="text"
          defaultValue={currentSearch}
          placeholder="Ürün adı veya marka ara..."
          onChange={(e) => updateUrl("search", e.target.value)}
          className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-amber-400 outline-none transition"
        />
      </div>
    </div>
  );
}