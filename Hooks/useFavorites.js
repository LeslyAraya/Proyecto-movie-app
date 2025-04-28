import { useState, useEffect } from "react";

// Hook personalizado para manejar favoritos
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Leer los favoritos desde localStorage cuando el componente se monta
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Agregar una película a los favoritos
  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Eliminar una película de los favoritos
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
};

export default useFavorites;
