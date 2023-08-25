import React, { useState } from "react";
import "./Uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { uploadFile } from "../apiRequests"; // Importa la función uploadFile

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.name.toLowerCase().endsWith(".xlsx")) {
      setSelectedFile(file);

      uploadFile(file)
        .then((response) => {
          console.log("Archivo subido:", response);
          // Aquí puedes manejar la actualización de la vista si es necesario
        })
        .catch((error) => {
          console.error("Error al subir el archivo:", error);
        });
    } else {
      console.error("Formato de archivo no válido. Sube un archivo .xlsx.");
    }
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
              onClick={() => setSelectedFile(null)}
            >
              <MdDelete className="delete-icon" />
            </button>
          </div>
        )}
      </form>
    </main>
  );
}

export default Uploader;
