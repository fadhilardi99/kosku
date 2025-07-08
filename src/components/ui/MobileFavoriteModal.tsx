"use client";
import React from "react";
import { useFavoriteKos } from "@/lib/useFavoriteKos";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

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

export default function MobileFavoriteModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const { favoriteIds } = useFavoriteKos();
  const [kosList, setKosList] = React.useState<Kos[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-4 relative max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-[#4E342E] hover:text-red-500"
          onClick={onClose}
          aria-label="Tutup"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-[#4E342E] mb-4 text-center">
          Kos Favorit
        </h2>
        {loading ? (
          <div className="text-center text-[#4E342E] opacity-70 py-6">
            Memuat...
          </div>
        ) : kosList.length === 0 ? (
          <div className="text-center text-[#4E342E] opacity-70 py-6">
            Belum ada kos favorit.
          </div>
        ) : (
          <div className="space-y-4">
            {kosList.map((kos) => {
              const images = JSON.parse(kos.images);
              return (
                <Link
                  key={kos.id}
                  href={`/kos/${kos.slug}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-amber-50 transition-all"
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
            })}
          </div>
        )}
      </div>
    </div>
  );
}
