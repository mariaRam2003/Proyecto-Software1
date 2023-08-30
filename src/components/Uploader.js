import React, { useState } from "react";
import "./Uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { uploadFile } from "../apiRequests";

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileReady, setFileReady] = useState(false); // Nuevo estado
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.name.toLowerCase().endsWith(".xlsx")) {
      setSelectedFile(file);
      setFileReady(true); // Habilita el botón para enviar
      setError("");

      uploadFile(file)
        .then((response) => {
          console.log("Archivo subido:", response);
          // Aquí puedes manejar la actualización de la vista si es necesario
        })
        .catch((error) => {
          console.error("Error al subir el archivo:", error);
        });
    } else {
      setSelectedFile(null);
      setFileReady(false); // Deshabilita el botón
      setError("Formato de archivo no válido. Sube un archivo .xlsx.");
    }
  };

  const handleSendFile = () => {
    uploadFile();
  };

  return (
    <main>
      <form className="uploader-container">
        {!selectedFile ? (
          <label htmlFor="file-input" className="file-input-label">
            <MdCloudUpload className="upload-icon" />
            Subir archivo
            <input
              id="file-input"
              type="file"
              accept=".xlsx" // Acepta solo archivos .xlsx
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        ) : (
          <div className="file-info">
            <AiFillFileImage className="file-icon" />
            <span>{selectedFile.name}</span>
            <button
              type="button"
              className="clear-button"
              onClick={() => {
                setSelectedFile(null);
                setFileReady(false);
              }}
            >
              <MdDelete className="delete-icon" />
            </button>
          </div>
        )}
        {error && <p className="error-message">{error}</p>}

        {/* Agrega el botón para enviar */}
        {fileReady && (
          <button
            type="button"
            className="send-button"
            onClick={handleSendFile}
          >
            Enviar Archivo
          </button>
        )}
      </form>
    </main>
  );
}

export default Uploader;
