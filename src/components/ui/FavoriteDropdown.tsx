"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFavoriteKos } from "@/lib/useFavoriteKos";

type Kos = {
  id: string;
  slug: string;
  name: string;
  address: string;
  price: number | string;
  originalPrice?: number | string | null;
  rating: number;
  reviews: number;
  type: string;
  images: string;
};

export default function FavoriteDropdown({
  onClose,
}: {
  onClose?: () => void;
}) {
  const { favoriteIds } = useFavoriteKos();
  const [kosList, setKosList] = useState<Kos[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      setLoading(true);
      try {
        const res = await fetch("/api/favorite");
        if (res.ok) {
          setKosList(await res.json());
        } else {
          setKosList([]);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchFavorites();
  }, [favoriteIds]);

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#3E2723]/20 py-2 z-50">
      <div className="px-4 py-3 border-b border-[#3E2723]/10">
        <p className="text-sm font-bold text-[#4E342E]">Kos Favorit</p>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {loading ? (
          <div className="text-center text-[#4E342E] opacity-70 py-6">
            Memuat...
          </div>
        ) : kosList.length === 0 ? (
          <div className="text-center text-[#4E342E] opacity-70 py-6">
            Belum ada kos favorit.
          </div>
        ) : (
          kosList.map((kos) => {
            const images = JSON.parse(kos.images);
            return (
              <Link
                key={kos.id}
                href={`/kos/${kos.slug}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 transition-all"
                onClick={onClose}
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-amber-100">
                  <Image
                    src={images[0]}
                    alt={kos.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#4E342E] truncate">
                    {kos.name}
                  </div>
                  <div className="text-xs text-[#4E342E] opacity-70 truncate">
                    {kos.address}
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
