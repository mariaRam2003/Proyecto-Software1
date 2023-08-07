import { useState } from "react";
import "./Uploader.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };

  return (
    <main>
      <form className="uploader-container">
        {!selectedFile ? (
          <>
            <label htmlFor="file-input" className="file-input-label">
              <MdCloudUpload className="upload-icon" />
              Subir archivo
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </>
        ) : (
          <>
            <div className="file-info">
              <AiFillFileImage className="file-icon" />
              <span>{selectedFile.name}</span>
            </div>
            <button
              type="button"
              className="clear-button"
              onClick={handleClearFile}
            >
              <MdDelete className="delete-icon" />
            </button>
          </>
        )}
      </form>
    </main>
  );
}

export default Uploader;
