import React, { useEffect, useState } from "react";
import Uploader from "../components/Uploader";
import { downloadFile } from "../apiRequests";
import FetchData from "../components/FetchData";
import "./ANICAM.css";
import Table from "../components/Table";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const ANICAM = () => {
  // Estado para almacenar los datos de ANICAM
  const [data, setData] = useState(null);

  /**
   * Carga los datos de ANICAM al montar la página.
   */
  // useEffect(() => {
  //   fetchANICAMData();
  // }, []);

  /**
   * Maneja la actualización de datos en la vista ANICAM.
   */
  // const fetchANICAMData = async () => {
  //   try {
  //     const anicamData = await anicamView();
  //     setData(anicamData);
  //     console.log("Datos de ANICAM:", anicamData);
  //   } catch (error) {
  //     console.error("Error al obtener datos de ANICAM:", error);
  //   }
  // };

  /**
   * Descarga un archivo.
   */
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div className="page anicam">
      <h1>DATOS DE ANICAM</h1>
      <FetchData/>
      <button onClick={handleDownload}>Descargar</button>
      <Uploader />
    </div>
  );
};

export default ANICAM;