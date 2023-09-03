import React, { useState } from "react";
import Uploader from "../../components/Uploader";
import { downloadFile, uploadFile } from "../../apiRequests";
import FetchData from "../../components/FetchData";
import "../styles/Pages.css";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const CX = () => {
  /**
   * COMENTADO POR EL MOMENTO PARA NO GASTAR LLAMADAS AL API
   */

  // // Estado para almacenar los datos de ANICAM
  // const [data, setData] = useState(null);

  // /**
  //  * Subir un archivo.
  //  */
  // const handleUpload = () => {
  //   uploadFile();
  // };

  // /**
  //  * Descarga un archivo.
  //  */
  // const handleDownload = () => {
  //   downloadFile();
  // };

  return (
    <div className="page anicam">
      <h1>DATOS DE CX</h1>
      {/* <FetchData /> */}
      {/* <button onClick={handleDownload}>Descargar</button> */}
      <Uploader />
    </div>
  );
};

export default CX;
