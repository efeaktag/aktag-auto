import { MetadataRoute } from "next";
import products from "@/data/products";

export default function sitemap() {
  const siteUrl = "https://aktagauto.com";
  const lastModified = new Date();

  const staticRoutes = [
    {
      url: siteUrl, // slash koyma, buna gerek yok
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/product/${product.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
