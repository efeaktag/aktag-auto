/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#000000",        // site genel arkaplan
        cardBg: "#1c1d1f",        // ürün kartları
        whatsapp: "#22c55e",      // WhatsApp yeşili
        headerBlack: "#0b0b0b",   // header & footer
      },
    },
  },
  plugins: [],
};
