import Link from "next/link";

export default function Footer() {
  return (
    <footer id="hakkimizda" className="mt-10 bg-neutral-900 text-slate-400 text-sm">

      {/* ÜST BLOK */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">

        <Link href="/" className="group flex flex-col items-center select-none scale-90 md:scale-100 transition-transform">
  <div className="flex items-baseline gap-1">
    {/* AKTAĞ - Daha küçük ve keskin font boyutu */}
    <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
      AKTAĞ
    </h1>
    
    {/* AUTO - İncelik ve şeffaflık korunarak küçültüldü */}
    <span className="text-lg md:text-xl font-light italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 opacity-80 leading-none">
      AUTO
    </span>
  </div>

  {/* Alt Detay - Çizgi kalınlığı 1px'ten daha ince (0.5px) hissi için opacity düşürüldü */}
  <div className="flex items-center gap-1.5 w-full mt-1 opacity-60">
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
    <span className="text-[7px] font-bold tracking-[0.4em] text-slate-500 uppercase leading-none">
      Premium Care
    </span>
    <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-800 via-slate-800 to-transparent"></div>
  </div>
</Link>

        <p className="mb-4 mt-5">
          İletişim
        </p>

        {/* ADRES */}
        <p className="text-xs leading-relaxed mb-2">
          Kepez Mahallesi Hacı Musa Sokak Zonguldak / Ereğli
        </p>

        {/* TELEFON */}
        <p className="mb-2">
          📞 05426310167
        </p>

        {/* MAİL */}
        <p className="mb-6">
          📧 e-mail: aktagauto@gmail.com
        </p>

        {/* BİZ KİMİZ BUTON */}
        <Link
          href="/hakkimizda"
          className="inline-block mb-4 rounded-lg bg-neutral-800 px-6 py-2 text-white font-medium"
        >
          BİZ KİMİZ ?
        </Link>

        {/* BİZ KİMİZ METNİ */}
        <p className="text-xs leading-relaxed text-slate-400 max-w-3xl mx-auto ">
          Aktağ Auto, oto bakım sektöründe kaliteli, güvenilir ve
          profesyonel ürünleri kullanıcılarla buluşturmak amacıyla kurulmuştur.
          Cam, iç ve dış bakım ürünlerinden kampanyalı setlere kadar geniş ürün
          yelpazemizle, araç bakımını zahmetsiz ve etkili hale getiriyoruz.
          Hızlı kargo, güvenli alışveriş ve müşteri memnuniyeti odaklı hizmet
          anlayışımızla her zaman yanınızdayız.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-400 mt-6">
  <a href="/kvkk" className="hover:text-white">KVKK</a>
  <a href="/gizlilik" className="hover:text-white">Gizlilik Politikası</a>
  <a href="/iletisim" className="hover:text-white">İletişim</a>
</div>

      {/* ALT ÇİZGİ */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs">
        © 2026 AKTAGAUTO | Tüm Hakları Saklıdır
        <div className="mt-1 text-neutral-500">
          Developed by EFE AKTAĞ
        </div>
      </div>

    </footer>
  );
}
