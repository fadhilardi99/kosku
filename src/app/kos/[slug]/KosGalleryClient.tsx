"use client";
import Image from "next/image";
import { useState } from "react";

export default function KosGalleryClient({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="relative bg-white rounded-3xl shadow-xl border border-amber-100 p-6">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-4">
        <Image
          src={mainImage}
          width={640}
          height={480}
          alt="Foto utama"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <span className="absolute top-4 right-4 bg-white/90 text-[#4E342E] text-sm px-3 py-1 rounded-full font-semibold">
          {images.length} Foto
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div key={i} className="relative group cursor-pointer">
            <Image
              src={img}
              width={64}
              height={48}
              alt={`Foto ${i + 1}`}
              className={`w-full h-20 object-cover rounded-xl border-2 ${
                mainImage === img ? "border-[#4E342E]" : "border-amber-100"
              } group-hover:border-[#4E342E] transition-all duration-300`}
              onClick={() => setMainImage(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
