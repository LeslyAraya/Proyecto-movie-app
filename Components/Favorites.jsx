import React, { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleGoBack = () => {
    navigate("/"); // Redirige a la página principal (puedes cambiar la ruta si deseas)
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Películas Favoritas</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {favorites.length === 0 ? (
          <p>No tienes películas favoritas guardadas.</p>
        ) : (
          favorites.map((movie) => (
            <FavoriteCard
              key={movie.imdbID}
              movie={movie}
              onRemove={removeFromFavorites}
            />
          ))
        )}
      </div>

      {/* Botón para volver */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleGoBack}
          className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default Favorites;




