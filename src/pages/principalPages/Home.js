import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import Typist from "react-typist";
import "react-typist/dist/Typist.css"; // Importa los estilos de react-typist
import React from "react";
import { useState } from "react";
// import { navigate } from "@reach/router";
import Header from "../components/Header";
import "../styles/Home.css";

const Home = () => {

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="content-right">
          <h1 className="title1">Ship Smart.</h1>
          <ConnectingAirportsIcon
            sx={{ fontSize: "300px", marginLeft: "180px" }}
          />
        </div>
        <div className="content">
          <div className="title">
            <p>
              ¡ Utiliza nuestro software para controlar tus ventas y llevar el
              tracking de tus paquetes de forma ordenada y limpia !
            </p>
            <p className="atajos">Atajos:</p>
          </div>
          <div className="buttons">
            <a href="/PRECARGA" className="button">
              <div className="icon">
                <DriveFolderUploadIcon sx={{ fontSize: "50px" }} />
              </div>
              Precarga
            </a>
            <a href="/USUARIOS" className="button">
              <div className="icon">
                <DataObjectIcon sx={{ fontSize: "50px" }} />
              </div>
              Modificar y Ver Datos
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
