import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importar las páginas principales
import VIEWS from "./pages/principalPages/Views";
import FACTURACION from "./pages/principalPages/facturacion";
import CUSCAR from "./pages/principalPages/CUSCAR";
import VALIDACION from "./pages/principalPages/validacion";
// Importar las paginas de views
import ANICAM from "./pages/viewsPages/ANICAM";
import CX from "./pages/viewsPages/CX";
import OPERATIONS from "./pages/viewsPages/OPERATIONS";
import FINANCE from "./pages/viewsPages/FINANCE";

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
        <Link to="/">VIEWS</Link>
        <Link to="/CUSCAR">CUSCAR</Link>
        <Link to="/validacion">VALIDACION</Link>
        <Link to="/facturacion">FACTURACION</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<VIEWS />} />
        <Route path="/ANICAM" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/validacion" element={<VALIDACION />} />
        <Route path="/facturacion" element={<FACTURACION />} />
        <Route path="/CX" element={<CX />} />
        <Route path="/OPERATIONS" element={<OPERATIONS />} />
        <Route path="/FINANCE" element={<FINANCE />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
