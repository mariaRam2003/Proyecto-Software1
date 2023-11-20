// Formulario-btn.js
import React, { useState } from "react";
import "./Formulario.css";

const FormularioWithoutBtn = ({ fields, onSubmit }) => {
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
      if (!formData[field.name]) {
        setErrorMessage(`Por favor, llena el campo ${field.label}.`);
        return;
      }
    }

    // Llama a la función onSubmit proporcionada como prop con los datos del formulario
    onSubmit(formData);
  };

  return (
    <div className="page Anicam">
      <form className="UniversalForm" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label className="universal-label">{field.label}:</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              className="universal-input"
            />
          </div>
        ))}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default FormularioWithoutBtn;
