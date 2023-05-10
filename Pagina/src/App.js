import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import ANICAM from "./pages/ANICAM"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Aduana Grupo SLI</h1>
        <Link to="/">Home</Link>
        <Link to="/ANICAM">ANICAM</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Anicam" element={<ANICAM />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
