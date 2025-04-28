import { useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=6efdb57&s=movie&type=movies=${title}`
      );
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (e) {
      setError("Error en la conexión.");
    }
  };

  return { movies, error, searchMovies };
}
