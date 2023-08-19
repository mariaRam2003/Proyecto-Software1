import React, { useState } from "react";
import "./Uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

/**
 * Componente para subir y mostrar imágenes.
 */
function Uploader() {
  // Estado para almacenar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState(null);

  /**
   * Maneja el cambio de archivo seleccionado.
   * @param {Object} event - Evento de cambio de archivo.
   */
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /**
   * Limpia el archivo seleccionado.
   */
  const handleClearFile = () => {
    setSelectedFile(null);
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
              accept="image/*"
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
              onClick={handleClearFile}
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
