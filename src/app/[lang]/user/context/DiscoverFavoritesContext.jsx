'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const DiscoverFavoritesContext = createContext({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export function DiscoverFavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback((symbol) => {
    setFavorites((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  }, []);

  const isFavorite = useCallback(
    (symbol) => favorites.includes(symbol),
    [favorites]
  );

  return (
    <DiscoverFavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </DiscoverFavoritesContext.Provider>
  );
}

export function useDiscoverFavorites() {
  const ctx = useContext(DiscoverFavoritesContext);
  return ctx || { favorites: [], toggleFavorite: () => {}, isFavorite: () => false };
}
