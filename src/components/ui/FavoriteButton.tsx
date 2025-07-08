import { Heart } from "lucide-react";
import React from "react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
}

export default function FavoriteButton({
  isFavorite,
  onClick,
  className,
}: FavoriteButtonProps) {
  return (
    <button
      type="button"
      aria-label={isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
      className={
        "flex items-center gap-1 text-rose-500 hover:text-rose-600 transition-all " +
        (className || "")
      }
    >
      <Heart
        className={
          "w-5 h-5 " + (isFavorite ? "fill-current" : "stroke-current")
        }
        fill={isFavorite ? "currentColor" : "none"}
      />
      <span className="sr-only">
        {isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"}
      </span>
    </button>
  );
}
