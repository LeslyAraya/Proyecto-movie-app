import React from "react";
import MovieCard from "./MovieCard"; 
import { useNavigate } from "react-router-dom"; 

const SearchResults = ({ movies }) => {
  const navigate = useNavigate(); 

  // Función para volver a la página principal
  const handleGoBack = () => {
    navigate("/"); 
  };

  if (movies.length === 0) return <p>No se encontraron resultados.</p>;

  return (
    <div className="flex flex-col items-center mt-4">
      {/* Mostrar las tarjetas de película */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;




























