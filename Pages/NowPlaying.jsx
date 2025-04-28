import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";

const NowPlaying = ({ onMovieSelect }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=6efdb57&s=now%20playing&type=movie`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search); 
      }
      setLoading(false);
    };
    fetchNowPlaying();
  }, []);

  if (loading) return <p className="text-center text-xl">Cargando...</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onSelect={onMovieSelect} />
      ))}
    </div>
  );
};

export default NowPlaying;



