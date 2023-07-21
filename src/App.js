import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import ANICAM from "./pages/ANICAM";
import CUSCAR from "./pages/CUSCAR";
import VALIDACION from "./pages/validacion";
import Registro_Anicam from "./pages/Registro_Anicam";
import Dev from "./pages/Dev";

function App() {
  return (
    <BrowserRouter>
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
        <Link to="/facturacion">FACTURACION</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Anicam" element={<ANICAM />} />
        <Route path="/CUSCAR" element={<CUSCAR />} />
        <Route path="/validacion" element={<VALIDACION />} />
        <Route path="/registro-anicam" element={<Registro_Anicam />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
