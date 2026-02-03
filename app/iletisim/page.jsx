export const metadata = {
  title: "İletişim",
  description: "Aktağ Auto iletişim bilgileri",
};

export default function IletisimPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "aktagauto@gmail.com";
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "05444720467";
  const address =
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "Zonguldak / Ereğli";
  const whatsappPhone =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "905426310167";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-slate-300 bg-neutral-950">
      <h1 className="text-2xl font-bold text-white mb-6">İletişim</h1>

      <p className="mb-4">
        Ürünlerimiz ve siparişler hakkında bilgi almak için bizimle aşağıdaki
        kanallardan iletişime geçebilirsiniz.
      </p>

      <div className="mt-6 space-y-3">
        <p>
          📍 <strong>Adres:</strong> {address}
        </p>
        <p>
          📞 <strong>Telefon:</strong> {phone}
        </p>
        <p>
          📧 <strong>E-posta:</strong> {email}
        </p>
      </div>

      <a
        href={`https://wa.me/${whatsappPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white hover:bg-green-600 transition"
      >
        WhatsApp ile İletişime Geç
      </a>
    </div>
  );
}
