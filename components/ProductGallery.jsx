"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, name, mainImage }) {
  const allImages = [mainImage, ...(images || [])];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div className="flex flex-col gap-5">
      {/* 📸 ANA GÖRSEL */}
      <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-sm relative">
        <Image
          key={activeImage}
          src={activeImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover transition-transform duration-700 animate-fadeIn"
          priority
        />
      </div>

      {/* 🎞️ KÜÇÜK RESİMLER (Thumbnails) */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-1">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                activeImage === img
                  ? "ring-2 ring-amber-500 scale-95 opacity-100 shadow-lg"
                  : "opacity-40 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name}-${index}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
