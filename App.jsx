import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import MovieDetail from "./Components/MovieDetail";
import Favorites from "./Components/Favorites"; 

const App = () => {
  const [movies, setMovies] = useState([]);  
  const [searchedMovies, setSearchedMovies] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false); 

  // Cargar películas al inicio
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=6efdb57&s=movie&type=movie` 
      );
      const data = await response.json();
      setMovies(data.Search || []);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  // Maneja la búsqueda de películas
  const handleSearch = (query) => {
    const filteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())  
    );
    setSearchedMovies(filteredMovies);  
    setSearching(true);
  };

  // Función para volver a la página principal
  const handleGoBack = () => {
    setSearching(false); 
    setSearchedMovies([]); 
  };

  return (
    <Router>
      <div className="font-sans bg-black text-white min-h-screen">
        {/* Contenedor de la barra de búsqueda y botones */}
        <div className="flex justify-between items-center p-4 bg-[#8B0000] text-white">
          <h1 className="text-3xl font-bold">Películas</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <SearchBar onSearch={handleSearch} /> {/* Pasar la función de búsqueda */}
              <Link to="/favorites">
                <button className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700">
                  Favoritos
                </button>
              </Link>
              {/* Mostrar el botón de "Volver" solo cuando estamos buscando películas */}
              {searching && (
                <button
                  onClick={handleGoBack} 
                  className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Volver
                </button>
              )}
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              loading ? (
                <p>Cargando...</p>
              ) : searching ? (  
                <SearchResults movies={searchedMovies} />
              ) : (
                <SearchResults movies={movies} />  
              )
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

























