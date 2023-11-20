import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

const FiscalData = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const camposFormulario = [
    {
      label: "Porcentaje DAI",
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
      label: "Consignatario",
      name: "consignatorio",
      type: "text",
      required: true,
    },
  ];

  // SI ES NECESARIO VALIDAR FECHAS, INTS, O STRINGS
  
  // const validateDate = (date) => {
  //   // Validar el formato de fecha (YYYY-MM-DD)
  //   const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  //   return datePattern.test(date);
  // };

  // const isInteger = (value) => {
  //   return Number.isInteger(Number(value));
  // };

  // const isString = (value) => {
  //   return typeof value === "string";
  // };

  return (
    <>
      <Header />
      <div>
        <div className="page Facturacion">
          <div className="page-title">
            <h1>Impuesto</h1>
          </div>
          <p>
            Aqui puedes realizar la precarga de datos Fiscales. Completa todos
            los campos en el formato correspondiente. Una vez listo solo envia
            para guardar.
          </p>
          <Formulario fields={camposFormulario} />
        </div>
      </div>
    </>
  );
};

export default FiscalData;
