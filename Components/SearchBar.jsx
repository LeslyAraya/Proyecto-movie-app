import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Por favor ingrese un título de película.");
    } else {
      onSearch(query);  
    }
  };

  return (
    <div className="flex items-center gap-4 mt-4 justify-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="p-2 border-2 border-gray-300 rounded-md w-64"
        placeholder="Buscar película..."
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;










