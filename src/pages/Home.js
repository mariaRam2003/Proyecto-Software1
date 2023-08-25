import { Link } from "react-router-dom";
import image1 from "./img/anicam.png";
import image2 from "./img/cuscar.png";
import image3 from "./img/guias.png";
import image4 from "./img/facturacion.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="page home">
      <h1>Bienvenido Usuario 'X'</h1>
      <div className="card-container">
        <Link to="/ANICAM" className="card">
          <img src={image1} alt="Imagen ANICAM" />
          <h2>DATOS ANICAM</h2>
          <p>Busque, edite y vea los datos de ANICAM</p>
        </Link>

        <Link to="/CUSCAR" className="card">
          <img src={image2} alt="Imagen CUSCAR" />
          <h2>DATOS CUSCAR</h2>
          <p>Busque, edite y vea los datos de CUSCAR</p>
        </Link>

        <Link to="/validacion" className="card">
          <img src={image3} alt="Imagen GUIAS" />
          <h2>VALIDACION DE GUIAS</h2>
          <p>
            Busque y edite la informacion de las guias validadas y no validadas
          </p>
        </Link>

        <Link to="/facturacion" className="card">
          <img src={image4} alt="Imagen FACTURACION" />
          <h2>FACTURACION</h2>
          <p>Genere y edite los datos de las facturas de cada cliente</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
