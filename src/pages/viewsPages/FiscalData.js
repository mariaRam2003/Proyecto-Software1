// FiscalData.js
import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import "../styles/Pages.css";

const FISCALDATA = () => {
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
      label: "Porcentaje DAI",
      name: "dai_porcentaje",
      type: "text",
      required: true,
    },
    {
      label: "Poliza",
      name: "poliza",
      type: "text",
      required: true,
    },
    {
      label: "Partida",
      name: "partida",
      type: "text",
      required: true,
    },
    {
      label: "Consignatario",
      name: "consignatorio",
      type: "text",
      required: false,
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
      paquete_id: formData.paquete_id,
      dai_porcentaje: formData.dai_porcentaje,
      poliza: formData.poliza,
      partida: formData.partida,
      consignatario: formData.consignatario,
    };

    fetch(process.env.REACT_APP_API_DOMAIN + `/impuesto?token=${token}`, {
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
          setErrorMessage("Error de validación");
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
            <h1>Informacion Fiscal</h1>
          </div>
          <p>
            Aqui puedes realizar la precarga de los datos de impuesto. Completa
            todos los campos en el formato correspondiente. Una vez listo solo
            envia para guardar.
          </p>
          <Formulario
            fields={camposFormulario}
            onSubmit={handleSubmit}
            sections={1}
            sectionNames={["Impuesto"]}
            sectionCampos={{
              Impuesto: [
                {
                  label: "ID paquete",
                  name: "paquete_id",
                  type: "number",
                  required: true,
                },
                {
                  label: "Porcetaje DAI",
                  name: "dai_porcentaje",
                  type: "number",
                  required: true,
                },
                {
                  label: "Poliza",
                  name: "poliza",
                  type: "text",
                  required: true,
                },
                {
                  label: "Partida",
                  name: "partida",
                  type: "text",
                  required: true,
                },
                {
                  label: "Consignatorio",
                  name: "consignatario",
                  type: "text",
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

export default FISCALDATA;
