import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleSeeMore = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="w-60 p-4 bg-gray-800 shadow-md rounded-lg m-2">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
        alt={movie.Title}
        className="w-full h-96 object-cover rounded-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.Title}</h3>
        <p className="text-sm text-gray-600">{movie.Year}</p>
        <button
          onClick={handleSeeMore}
          className="mt-2 bg-[#8B0000] text-white p-2 rounded-md w-full"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default MovieCard;









