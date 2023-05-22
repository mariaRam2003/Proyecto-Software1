import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {
  return (
    <div className="page home">
      <h1>Bienvenido Usuario 'X'</h1>
      <div className="card-container">
        <Link to="/ANICAM" className="card">
          {/* <img src="/img/anicam.png" /> */}
          <h2>DATOS ANICAM</h2>
          <p>Descripción breve de ANICAM</p>
        </Link>

        <Link to="/CUSCAR" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>DATOS CUSCAR</h2>
          <p>Descripción breve de ANICAM</p>
        </Link>

        <Link to="/validacion" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>VALIDACION DE GUIAS</h2>
          <p>Descripción breve de ANICAM</p>
        </Link>

        <Link to="/facturacion" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>FACTURACION</h2>
          <p>Descripción breve de ANICAM</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
