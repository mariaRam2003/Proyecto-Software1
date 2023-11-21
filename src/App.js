import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Style
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
import UserTable from "./pages/principalPages/UsersTable";
// Importar las paginas de views
import FISCALDATA from "./pages/viewsPages/FiscalData";
import ANICAM from "./pages/viewsPages/ANICAM";
import ESTADOPAQUETE from "./pages/viewsPages/EstadoPaquete";
import SELECTIVOSAT from "./pages/viewsPages/SelectivoSat";
import GASTOS from "./pages/viewsPages/GASTOS";
import REVISIONSAT from "./pages/viewsPages/RevisionSat";

/**
 * Componente raíz que define las rutas y la navegación de la aplicación.
 */
function App() {
  return (
    <BrowserRouter>
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<LOGIN />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/SINGUP" element={<SINGUP />} />
        <Route path="/VIEWS" element={<VIEWS />} />
        <Route path="/PRECARGA" element={<PRECARGA />} />
        <Route path="/FISCALDATA" element={<FISCALDATA />} />
        <Route path="/ANICAM" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/USUARIOS" element={<USUARIOS />} />
        <Route path="/USERTABLE" element={<UserTable />} />
        <Route path="/BUSQUEDA" element={<BUSQUEDA />} />
        <Route path="/ESTADOPAQUETE" element={<ESTADOPAQUETE />} />
        <Route path="/SELECTIVOSAT" element={<SELECTIVOSAT />} />
        <Route path="/GASTOS" element={<GASTOS />} />
        <Route path="/REVISIONSAT" element={<REVISIONSAT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
