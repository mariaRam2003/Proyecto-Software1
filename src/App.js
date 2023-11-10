import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Style
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlightTakeoffTwoToneIcon from "@mui/icons-material/FlightTakeoffTwoTone";
import "./index.css";

// Importar las páginas principales
import Home from "./pages/principalPages/Home";
import LOGIN from "./pages/principalPages/Login";
import SINGUP from "./pages/principalPages/SingUp";
import VIEWS from "./pages/principalPages/Views";
import PRECARGA from "./pages/principalPages/Precarga";
import BUSQUEDA from "./pages/principalPages/Busqueda";
import CUSCAR from "./pages/principalPages/CUSCAR";
import USUARIOS from "./pages/principalPages/Usuarios";
// Importar las paginas de views
import ANICAM from "./pages/viewsPages/ANICAM";
import CX from "./pages/viewsPages/CX";
import OPERATIONS from "./pages/viewsPages/OPERATIONS";
import FINANCE from "./pages/viewsPages/FINANCE";

/**
 * Componente raíz que define las rutas y la navegación de la aplicación.
 */
function App() {
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<LOGIN />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/SINGUP" element={<SINGUP />} />
        <Route path="/VIEWS" element={<VIEWS />} />
        <Route path="/PRECARGA" element={<PRECARGA />} />
        <Route path="/ANICAM" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/USUARIOS" element={<USUARIOS />} />
        <Route path="/BUSQUEDA" element={<BUSQUEDA />} />
        <Route path="/CX" element={<CX />} />
        <Route path="/OPERATIONS" element={<OPERATIONS />} />
        <Route path="/FINANCE" element={<FINANCE />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
