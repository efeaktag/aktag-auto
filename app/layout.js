import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PromoBar from "@/components/PromoBar";
import TrustBar from "@/components/TrustBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Aktağ Auto | Profesyonel Oto Bakım Ürünleri",
    template: "%s | Aktağ Auto",
  },
  description:
    "Aktağ Auto ; cam, iç ve dış oto bakım ürünleri ile profesyonel araç bakım çözümleri sunar. Hızlı kargo, güvenli alışveriş.",
  metadataBase: new URL("https://aktagauto.com"),

  icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",

  openGraph: {
    title: "Aktağ Auto",
    description:
      "Profesyonel oto bakım ürünleri. Cam, iç ve dış bakım çözümleri.",
    url: "https://aktagauto.com",
    siteName: "Aktağ Auto",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aktağ Auto",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // ✅ Organization JSON-LD (Structured Data)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aktağ Auto",
    url: "https://aktagauto.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-542-631-0167",
        contactType: "sales",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
    sameAs: [],
  };

  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        {/* ✅ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <Header />
        <PromoBar />
        <TrustBar />
        {/* SAYFA İÇERİĞİ */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
