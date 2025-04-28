import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import MovieCard from "../Components/MovieCard";
import { useMovies } from "../Hooks/useMovies";
import Tabs from "../Components/Tabs";
import MovieDetail from "./MovieDetail";

const Home = () => {
  const [activeTab, setActiveTab] = useState("search");
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  const { movies, error, searchMovies } = useMovies();

  const handleSearch = (query) => {
    searchMovies(query);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDetailClick = (id) => {
    setSelectedMovieID(id);
    setActiveTab("detail");
  };

  return (
    <div className="p-4">
      <Tabs activeTab={activeTab} onTabClick={handleTabChange} />
      {activeTab === "search" && (
        <>
          <SearchBar onSearch={handleSearch} />
          {error && <p>{error}</p>}
          <div className="flex flex-wrap mt-4">
            {movies.length > 0 &&
              movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onDetailClick={handleDetailClick} />
              ))}
          </div>
        </>
      )}
      {activeTab === "detail" && selectedMovieID && <MovieDetail imdbID={selectedMovieID} />}
    </div>
  );
};

export default Home;
