import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

const FiscalData = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const camposFormulario = [
    {
      label: "Id Impuesto",
      name: "id_impuesto",
      type: "number",
      required: true,
    },
    {
      label: "Id Paquete",
      name: "paquete_id",
      type: "character varying",
      required: true,
    },
    {
      label: "Poliza",
      name: "poliza",
      type: "character varying",
      required: true,
    },
    // Agregar más campos si es necesario
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
            <h1>Datos Fiscales</h1>
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
