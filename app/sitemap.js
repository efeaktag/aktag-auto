import products from "@/data/products";

export default function sitemap() {
  const siteUrl = "https://aktagauto.com";

  // Statik sayfalar
  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Ürün sayfaları
  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/product/${product.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // ✅ lastModified sabit: build zamanı / deploy zamanı gibi düşün
  // (her request'te değişip botları şaşırtmasın)
  const lastModified = new Date();

  return [...staticRoutes, ...productRoutes].map((route) => ({
    ...route,
    lastModified,
  }));
}
