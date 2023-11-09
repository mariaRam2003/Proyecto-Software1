import React, { useState } from "react";
import Uploader from "../../components/Uploader";
import { downloadFile, uploadFile } from "../../apiRequests";
import FetchDataCuscar from "../../components/FetchDataCuscar";
import "../styles/Pages.css";

const CUSCAR = () => {
  /**
   * Descarga un archivo.
   */
  const handleDownload = () => {
    downloadFile();
  };

  return (
    <div className="page anicam">
      <h1>DATOS DE CUSCAR</h1>
      <FetchDataCuscar />
      <button className="Download-button" onClick={handleDownload}>
        Descargar
      </button>
      <Uploader />
    </div>
  );
};

export default CUSCAR;
