// Search.js
import React, { useState } from "react";
import "./Search.css";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Ingrese el término de búsqueda"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Search;
