export default function TrustBar() {
  return (
    <div className="bg-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-3">

        {/* MOBİL (tek satır, ortalı) */}
        <div className="flex items-center justify-center gap-5 text-xs md:hidden">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>🔒</span>
            <span>Güvenli Alışveriş</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>🚚</span>
            <span>Hızlı Kargo</span>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap">
            <span>📞</span>
            <span>7/24 Destek</span>
          </div>
        </div>

        {/* WEB (eski hali gibi geniş) */}
        <div className="hidden md:flex items-center justify-between text-sm py-2">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Güvenli Alışveriş</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🚚</span>
            <span>Hızlı Kargo</span>
          </div>

          <div className="flex items-center gap-2">
            <span>✨</span>
            <span>Orijinal Ürün</span>
          </div>
        </div>

      </div>
    </div>
  );
}
