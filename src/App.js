import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importar las páginas
import Home from "./pages/Home";
import ANICAM from "./pages/ANICAM";
import CUSCAR from "./pages/CUSCAR";
import VALIDACION from "./pages/validacion";

/**
 * Componente raíz que define las rutas y la navegación de la aplicación.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Navegación */}
      <nav>
        <Link to="/">
          <img
            src="https://lirp.cdn-website.com/1b29e013/dms3rep/multi/opt/GRUPO-SLI-01-151w.png"
            alt="Logo-Grupo-SLI"
          />
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/ANICAM">ANICAM</Link>
        <Link to="/CUSCAR">CUSCAR</Link>
        <Link to="/validacion">VALIDACION</Link>
        {/* No hay Link para "/facturacion" todavia */}
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ANICAM" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/validacion" element={<VALIDACION />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
