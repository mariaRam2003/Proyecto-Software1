// SelectivoSat.js
import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import "../styles/Pages.css";

/**
 * Página para mostrar y administrar los datos de ANICAM.
 */
const SELECTIVOSAT = () => {
  const getTokenFromCookie = () => {
    const cookieArray = document.cookie.split("; ");
    let token = null;

    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i];
      if (cookie.startsWith("token=")) {
        token = cookie.split("=")[1];
        break;
      }
    }

    return token;
  };

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const camposFormulario = [
    {
      label: "ID Consolidado",
      name: "consolidado_id",
      type: "numero",
      required: true,
    },
    {
      label: "Selectivo Asignado",
      name: "selectivo_asignado",
      type: "select",
      options: ["Elige", "Rojo", "Verde"],
      required: true,
    },
  ];

  const isInteger = (value) => {
    return Number.isInteger(Number(value));
  };

  const isString = (value) => {
    return typeof value === "string";
  };

  const handleSubmit = (formData) => {
    // Validación y lógica específica del API
    const errorMessages = [];
    console.log(formData);

    for (const field of camposFormulario) {
      const { name, type, required } = field;
      const value = formData[name];

      if (required && !value) {
        errorMessages.push(`Por favor, llena el campo ${field.label}.`);
      }

      if (type === "number" && !isInteger(value)) {
        errorMessages.push(
          `El campo ${field.label} debe ser un número entero.`
        );
      }

      if (type === "string" && !isString(value)) {
        errorMessages.push(
          `El campo ${field.label} debe ser una cadena de texto.`
        );
      }
    }

    // Mostrar mensajes de error acumulados
    if (errorMessages.length > 0) {
      setErrorMessage(errorMessages.join(" "));
      return;
    }

    // API: Enviar solicitud POST
    const token = getTokenFromCookie();

    const apiData = {
      consolidado_id: formData.consolidado_id,
      selectivo_asignado: formData.selectivo_asignado,
    };

    fetch(process.env.REACT_APP_API_DOMAIN + `/selectivo?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Solicitud exitosa");
          setSuccessMessage("Los datos han sido cargados exitosamente");
        } else if (response.status === 422) {
          console.log("Error de validación");
        } else if (response.status === 201) {
          console.log("Solicitud exitosa");
          setSuccessMessage("Los datos han sido cargados exitosamente");
        } else {
          console.log("Error inesperado");
        }
      })
      .catch((error) => {
        console.error("Error de red:", error);
      });
  };

  return (
    <>
      <Header />
      <div>
        <div className="pages">
          <div className="page-title">
            <h1>Selectivo SAT</h1>
          </div>
          <p>
            Aqui puedes realizar la precarga de los datos del seguimiento del
            paquete. Completa todos los campos en el formato correspondiente.
            Una vez listo solo envia para guardar.
          </p>
          <Formulario
            fields={camposFormulario}
            onSubmit={handleSubmit}
            sections={1}
            sectionNames={["Selectivo"]}
            sectionCampos={{
              Selectivo: [
                {
                  label: "ID Consolidado",
                  name: "consolidado_id",
                  type: "numero",
                  required: true,
                },
                {
                  label: "Selectivo Asignado",
                  name: "selectivo_asignado",
                  type: "select",
                  options: ["Elige", "Rojo", "Verde"],
                  required: true,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SELECTIVOSAT;
