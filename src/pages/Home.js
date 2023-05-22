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
          <p>Busque, edite y vea los datos de ANICAM</p>
        </Link>

        <Link to="/CUSCAR" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>DATOS CUSCAR</h2>
          <p>Busque, edite y vea los datos de CUSCAR</p>
        </Link>

        <Link to="/validacion" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>VALIDACION DE GUIAS</h2>
          <p>Busque y edite la informacion de las guias validadas y no validadas</p>
        </Link>

        <Link to="/facturacion" className="card">
          {/* <img src="ruta_de_la_imagen_anicam.jpg" alt="Imagen ANICAM" /> */}
          <h2>FACTURACION</h2>
          <p>Genere y edite los datos de las facturas de cada cliente</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
