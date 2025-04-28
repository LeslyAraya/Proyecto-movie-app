import React from "react";

const FavoriteCard = ({ movie, onRemove }) => {
  // Crea una descripción corta para mostrar solo una parte de la trama
  const shortDescription = movie.Plot
    ? movie.Plot.split(" ").slice(0, 15).join(" ") + "..."
    : "Sin descripción"; // Si no hay descripción, mostramos "Sin descripción"

  return (
    <div className="w-72 p-4 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
        alt={movie.Title}
        className="w-full h-96 object-cover rounded-md"
      />
      <div className="p-4">
        {/* Título de la película */}
        <h3 className="text-lg font-semibold mb-2">{movie.Title}</h3>
        {/* Año de la película */}
        <p className="text-sm text-gray-400">{movie.Year}</p>
        {/* Descripción corta */}
        <p className="text-sm text-gray-300 mt-2">{shortDescription}</p>
        {/* Botón para eliminar */}
        <button
          onClick={() => onRemove(movie.imdbID)}  // Llama a la función para eliminar de favoritos
          className="mt-2 bg-red-600 text-white py-2 px-4 rounded-md w-full hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;


