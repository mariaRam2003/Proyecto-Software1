import React, { useState } from "react";
import Uploader from "../../components/Uploader";
import { downloadFile, uploadFile } from "../../apiRequests";
import FetchDataAnicam from "../../components/FetchDataAnicam";
import "../styles/Pages.css";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const ANICAM = () => {
  /**
   * Descarga un archivo.
   */
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div className="page anicam">
      <h1>DATOS DE ANICAM</h1>
      <FetchDataAnicam />
      <button className="Download-button" onClick={handleDownload}>
        Descargar
      </button>
      <Uploader />
    </div>
  );
};

export default ANICAM;
