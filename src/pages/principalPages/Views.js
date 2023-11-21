import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";

import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import PreviewIcon from "@mui/icons-material/Preview";
import PaidIcon from "@mui/icons-material/Paid";
import EditNoteIcon from "@mui/icons-material/EditNote";

import "../styles/Views.css";

const Views = () => {
  return (
    <>
      <Header />
      <div className="page views">
        <h1 className="views-title">DATOS</h1>
        <p>Visualiza y modifica datos de distintas áreas de forma ordenada.</p>
        <Grid container spacing={2} className="card-container">
          <Grid item xs={12} sm={6} md={4}>
            <Card component={Link} to="/FISCALDATA" className="card">
              <CardContent>
                <RequestQuoteIcon sx={{ fontSize: 80, color: "white" }} />
                <Typography variant="h5">Informacion Fiscal</Typography>
                <Typography variant="body2" className="card-text">
                  Cargar la informacion de impuestos correspondiente.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card component={Link} to="/ESTADOPAQUETE" className="card">
              <CardContent>
                <EditLocationAltIcon sx={{ fontSize: 80, color: "white" }} />
                <Typography variant="h5">Estado del Paquete</Typography>
                <Typography variant="body2" className="card-text">
                  Actualiza informacion del estado de un paquete.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card component={Link} to="/SELECTIVOSAT" className="card">
              <CardContent>
                <PreviewIcon sx={{ fontSize: 80, color: "white" }} />
                <Typography variant="h5">Selectivo SAT</Typography>
                <Typography variant="body2" className="card-text">
                  Escoge y precarga los datos del con respecto al SAT para los
                  paquetes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="/GASTOS" className="card">
              <CardContent>
                <PaidIcon sx={{ fontSize: 80, color: "white" }} />
                <Typography variant="h5">Gastos por paquete</Typography>
                <Typography variant="body2" className="card-text">
                  Modifica los gastos que se tienen por paquete.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Card component={Link} to="/REVISIONSAT" className="card">
              <CardContent>
                <EditNoteIcon sx={{ fontSize: 80, color: "white" }} />
                <Typography variant="h5">Revision SAT</Typography>
                <Typography variant="body2" className="card-text">
                  Revisa y edita los datos de los paquetes con respecto al SAT.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Views;
