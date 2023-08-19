import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import Uploader from "../components/Uploader";
import { anicamView } from "../config/supabaseClient";
import { downloadFile } from "../apiRequests";
import "./ANICAM.css";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const ANICAM = () => {
  // Estado para almacenar los datos de ANICAM
  const [data, setData] = useState(null);

  /**
   * Carga los datos de ANICAM al montar la página.
   */
  useEffect(() => {
    fetchANICAMData();
  }, []);

  /**
   * Maneja la actualización de datos en la vista ANICAM.
   */
  const fetchANICAMData = async () => {
    try {
      const anicamData = await anicamView();
      setData(anicamData);
      console.log("Datos de ANICAM:", anicamData);
    } catch (error) {
      console.error("Error al obtener datos de ANICAM:", error);
    }
  };

  /**
   * Descarga un archivo.
   */
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div className="page anicam">
      <h1>DATOS DE ANICAM</h1>
      <Table data={data} functionName={"update_data_func"} />

      <button onClick={handleDownload}>Descargar</button>

      <Uploader />
    </div>
  );
};

export default ANICAM;
