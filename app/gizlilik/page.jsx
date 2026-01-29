export const metadata = {
  title: "Gizlilik Politikası",
  description: "Aktağ Auto gizlilik politikası",
};

export default function GizlilikPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-300">
      <h1 className="text-2xl font-bold text-white mb-6">
        Gizlilik Politikası
      </h1>

      <p className="mb-4">
        Aktağ Auto, ziyaretçilerinin gizliliğini korumayı ilke edinmiştir.
        Web sitemizi ziyaret ettiğinizde herhangi bir kişisel veri otomatik
        olarak toplanmaz.
      </p>

      <p className="mb-4">
        Sipariş ve ürün bilgileri, yalnızca WhatsApp üzerinden yapılan
        görüşmeler aracılığıyla alınır ve üçüncü kişilerle paylaşılmaz.
      </p>

      <p className="mb-4">
        Sitemiz, kullanıcı deneyimini geliştirmek amacıyla teknik çerezler
        kullanabilir. Reklam veya üçüncü taraf takip çerezleri
        kullanılmamaktadır.
      </p>

      <p className="mb-4">
        Gizlilik politikamız hakkında sorularınız için bizimle iletişime
        geçebilirsiniz.
      </p>
    </div>
  );
}
