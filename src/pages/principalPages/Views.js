import { Link } from "react-router-dom";

import MarkunreadMailboxTwoToneIcon from "@mui/icons-material/MarkunreadMailboxTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import RequestQuoteTwoToneIcon from "@mui/icons-material/RequestQuoteTwoTone";

import "../styles/Views.css";

const Views = () => {
  return (
    <div className="page views">
      <h1>VIEW DATA</h1>
      <p>Aqui puedes visualizar todos los datos de distintas áreas.</p>
      <div className="card-container">
        <Link to="/ANICAM" className="card">
          <MarkunreadMailboxTwoToneIcon
            sx={{ fontSize: 80, color: "#ffb700" }}
          />
          <h2>DATOS ANICAM</h2>
          <p>Busque, edite y vea los datos de ANICAM</p>
        </Link>

        <Link to="/CX" className="card">
          <SupportAgentTwoToneIcon sx={{ fontSize: 80, color: "#ffb700" }} />
          <h2>DATOS CX</h2>
          <p>Busque, edite y vea los datos de CUSTOMER EXPERIENCE</p>
        </Link>

        <Link to="/OPERATIONS" className="card">
          <SettingsTwoToneIcon sx={{ fontSize: 80, color: "#ffb700" }} />
          <h2>DATOS OPERACIONES</h2>
          <p>Busque, edite y vea los datos de OPERACIONES</p>
        </Link>

        <Link to="/FINANCE" className="card">
          <RequestQuoteTwoToneIcon sx={{ fontSize: 80, color: "#ffb700" }} />
          <h2>DATOS A&F</h2>
          <p>Busque, edite y vea los datos de ADMINISTRACION Y FINANZAS</p>
        </Link>
      </div>
    </div>
  );
};

export default Views;
