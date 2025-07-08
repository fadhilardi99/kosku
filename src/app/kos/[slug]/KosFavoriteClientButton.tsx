"use client";
import { useFavoriteKos } from "@/lib/useFavoriteKos";
import dynamic from "next/dynamic";
const FavoriteButton = dynamic(() => import("@/components/ui/FavoriteButton"), {
  ssr: false,
});

export default function KosFavoriteClientButton({ kosId }: { kosId: string }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavoriteKos();
  return (
    <FavoriteButton
      isFavorite={isFavorite(kosId)}
      onClick={() =>
        isFavorite(kosId) ? removeFavorite(kosId) : addFavorite(kosId)
      }
    />
  );
}
