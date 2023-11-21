import React, { useState } from "react";
import "./Formulario.css";

// ...

const Formulario = ({
  fields,
  onSubmit,
  sections,
  sectionNames,
  sectionCampos,
}) => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: Comprueba si los campos obligatorios están llenos
    for (const field of fields) {
      if (field.required && !formData[field.name]) {
        setErrorMessage(`Por favor, llena el campo ${field.label}.`);
        setSuccessMessage(null); // Clear success message if there was an error
        return;
      }
    }

    onSubmit(formData);

    setFormData({});
    setSuccessMessage("Los datos han sido cargados exitosamente");
    setErrorMessage(null);
  };

  const renderSections = () => {
    return sectionNames.map((sectionName, index) => {
      const sectionFields = sectionCampos[sectionName] || [];
      return (
        <div key={index} className="form-section">
          <h2 className="sectionName">{sectionName}</h2>
          {sectionFields.map((field) => (
            <div key={field.name} className="form-group">
              <label className="universal-label">{field.label}:</label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="universal-input"
                >
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="universal-input"
                />
              )}
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="page Anicam">
      <form className="UniversalForm" onSubmit={handleSubmit}>
        {renderSections()}
        <button type="submit" className="universal-btn">
          Enviar
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Formulario;
