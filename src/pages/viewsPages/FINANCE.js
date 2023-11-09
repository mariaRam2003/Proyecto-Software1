import React, { useState } from "react";
import Uploader from "../../components/Uploader";
import { downloadFile, uploadFile } from "../../apiRequests";
import FetchDataFinance from "../../components/FetchDataFinance";
import "../styles/Pages.css";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const FINANCE = () => {
  /**
   * Descarga un archivo.
   */
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div className="page anicam">
      <h1>DATOS DE ADMINISTRACIÓN Y FINANZAS</h1>
      <FetchDataFinance />
      <button className="Download-button" onClick={handleDownload}>
        Descargar
      </button>
      <Uploader />
    </div>
  );
};

export default FINANCE;
