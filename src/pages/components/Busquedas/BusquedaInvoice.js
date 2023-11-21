import React, { useState, useEffect } from "react";
import Search from "./Search";
import Table from "./Table";

const BusquedaPaquete = () => {
  const getTokenFromCookie = () => {
    const cookieArray = document.cookie.split("; ");
    let token = null;

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i];
      if (cookie.startsWith("token=")) {
        token = cookie.split("=")[1];
        break;
      }
    }

    return token;
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const token = getTokenFromCookie();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_DOMAIN}/search/invoice/${searchTerm}?token=${token}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Actualiza los resultados de búsqueda en el estado
      setSearchResults(data);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
      // Puedes manejar el error de la forma que desees
    }
  };

  useEffect(() => {
    // Puedes realizar alguna acción cuando los resultados de búsqueda cambien
  }, [searchResults]);

  return (
    <div>
      <h2>Buscar por factura del Paquete</h2>
      <Search onSearch={handleSearch} />
      <Table
        headers={Object.keys(searchResults[0] || {})}
        data={searchResults}
      />
    </div>
  );
};

export default BusquedaPaquete;
