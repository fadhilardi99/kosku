"use client";

import { useState, useEffect, useCallback } from "react";

export function useFavoriteKos() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch favorite kos dari API
  const fetchFavorites = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/favorite");
      if (res.ok) {
        const data = await res.json();
        setFavoriteIds(
          Array.isArray(data) ? data.map((kos: { id: string }) => kos.id) : []
        );
      } else {
        setFavoriteIds([]);
      }
    } catch {
      setFavoriteIds([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  // Tambah favorite
  const addFavorite = async (kosId: string) => {
    await fetch("/api/favorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kosId }),
    });
    fetchFavorites();
  };

  // Hapus favorite
  const removeFavorite = async (kosId: string) => {
    await fetch("/api/favorite", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kosId }),
    });
    fetchFavorites();
  };

  // Cek apakah kos difavoritkan
  const isFavorite = (kosId: string) => favoriteIds.includes(kosId);

  return { favoriteIds, addFavorite, removeFavorite, isFavorite, loading };
}
