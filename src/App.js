import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Style
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlightTakeoffTwoToneIcon from "@mui/icons-material/FlightTakeoffTwoTone";
import "./index.css";

// Importar las páginas principales
import LOGIN from "./pages/principalPages/Login";
import SINGUP from "./pages/principalPages/SingUp";
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
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Estado para controlar si el menú aside está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir el menú aside
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Función para cerrar el menú aside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Navegación */}
      <nav>
        <FlightTakeoffTwoToneIcon
          sx={{
            fontSize: 50,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 1,
            paddingBottom: 1,
          }}
        />
        <Link to="/VIEWS">VIEWS</Link>
        <Link to="/CUSCAR">CUSCAR</Link>
        <Link to="/validacion">VALIDACION</Link>
        <Link to="/facturacion">FACTURACION</Link>
        <button onClick={openMenu}>
          <AccountCircleIcon sx={{ fontSize: 45, color: "white" }} />
        </button>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<LOGIN />} />
        <Route path="/SINGUP" element={<SINGUP />} />
        <Route path="/VIEWS" element={<VIEWS />} />
        <Route path="/ANICAM" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/validacion" element={<VALIDACION />} />
        <Route path="/facturacion" element={<FACTURACION />} />
        <Route path="/CX" element={<CX />} />
        <Route path="/OPERATIONS" element={<OPERATIONS />} />
        <Route path="/FINANCE" element={<FINANCE />} />
      </Routes>

      <aside className={isMenuOpen ? "menu-open" : "menu-closed"}>
        {/* Contenido del menú aside */}
        <ul>
          <AccountCircleIcon sx={{ fontSize: 80, paddingLeft: 7 }} />
          <li>Perfil</li>
          <li>Cerrar Sesion</li>
        </ul>
        {/* Botón para cerrar el menú aside */}
        <button onClick={closeMenu}>Cerrar</button>
      </aside>
    </BrowserRouter>
  );
}

export default App;
