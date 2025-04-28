import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        // Modificar la URL para obtener los detalles en español con el parámetro language=es
        const response = await fetch(`https://www.omdbapi.com/?apikey=6efdb57&i=${id}&language=es`);
        const data = await response.json();
        
        if (data.Response === "True") {
          setMovie(data);
        } else {
          alert("Película no encontrada.");
        }
      } catch (error) {
        alert("Hubo un problema al obtener los detalles de la película.");
      }
      setLoading(false);
    };

    fetchMovieDetail();
  }, [id]);

  const handleAddToFavorites = () => {
    if (movie) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
        favorites.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${movie.Title} ha sido agregado a favoritos`);
      } else {
        alert(`${movie.Title} ya está en tus favoritos`);
      }
    }
  };

  if (loading) return <p className="text-center text-2xl mt-4">Cargando...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 h-96 object-cover rounded-md"
        />
        <div className="mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p className="text-xl text-gray-600">{movie.Released}</p>
          <p className="mt-4 text-lg">{movie.Plot}</p>  {/* Descripción en español */}
          <p className="mt-2 font-semibold">Rating: {movie.imdbRating}</p>
          <p className="mt-2">Director: {movie.Director}</p>

          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleAddToFavorites}
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Añadir a Favoritos
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;












