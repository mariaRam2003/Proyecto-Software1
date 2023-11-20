import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";

const PRECARGA = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const camposFormulario = [
    {
      label: "Id Consolidado",
      name: "Id_consolidado",
      type: "number",
      required: true,
    },
    {
      label: "Descripción",
      name: "descripcion",
      type: "text",
      required: true,
    },
    {
      label: "Fecha (YYYY-MM-DD)",
      name: "fecha",
      type: "text",
      required: true,
    },
    {
      label: "Transportista",
      name: "transportista",
      type: "text",
      required: true,
    },
    {
      label: "Id Paquete",
      name: "id_paquete",
      type: "text",
      required: false, // Puedes cambiar a true si es obligatorio
    },
    {
      label: "Factura",
      name: "factura",
      type: "text",
      required: false,
    },
    {
      label: "Fecha de Orden (YYYY-MM-DD)",
      name: "fecha_orden",
      type: "text",
      required: false,
    },
    {
      label: "Contenido",
      name: "contenido",
      type: "text",
      required: false,
    },
    {
      label: "Alto",
      name: "alto",
      type: "number",
      required: false,
    },
    {
      label: "Ancho",
      name: "ancho",
      type: "number",
      required: false,
    },
    {
      label: "Largo",
      name: "largo",
      type: "number",
      required: false,
    },
    {
      label: "Peso en Libras",
      name: "peso_libras",
      type: "number",
      required: false,
    },
    {
      label: "Peso Volumétrico",
      name: "peso_volumetrico",
      type: "number",
      required: false,
    },
    {
      label: "Valor Producto en Dólares",
      name: "valor_producto_dolar",
      type: "number",
      required: false,
    },
    {
      label: "Unidades",
      name: "unidades",
      type: "number",
      required: false,
    },
    {
      label: "Dirección de Casillero",
      name: "direccion_casillero",
      type: "text",
      required: false,
    },
    {
      label: "Empresa Remitente",
      name: "empresa_remitente",
      type: "text",
      required: false,
    },
    {
      label: "Nombre del Cliente",
      name: "cliente_nombre",
      type: "text",
      required: false,
    },
    {
      label: "Teléfono del Cliente",
      name: "cliente_telefono",
      type: "text",
      required: false,
    },
    {
      label: "Correo Electrónico del Cliente",
      name: "cliente_email",
      type: "text",
      required: false,
    },
    {
      label: "Dirección del Cliente",
      name: "cliente_direccion",
      type: "text",
      required: false,
    },
    // Agrega más campos según sea necesario
  ];

  const validateDate = (date) => {
    // Validar el formato de fecha (YYYY-MM-DD)
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    return datePattern.test(date);
  };

  const isInteger = (value) => {
    return Number.isInteger(Number(value));
  };

  const isString = (value) => {
    return typeof value === "string";
  };

  const handleSubmit = (formData) => {
    // Validación y lógica específica del API
    for (const field of camposFormulario) {
      const { name, type, required } = field;
      const value = formData[name];

      if (required && !value) {
        setErrorMessage(`Por favor, llena el campo ${field.label}.`);
        return; // No se envía la solicitud si hay campos vacíos obligatorios
      }

      if (type === "number" && !isInteger(value)) {
        setErrorMessage(`El campo ${field.label} debe ser un número entero.`);
        return; // No se envía la solicitud si el número no es entero
      }

      if (type === "string" && !isString(value)) {
        setErrorMessage(
          `El campo ${field.label} debe ser una cadena de texto.`
        );
        return; // No se envía la solicitud si la cadena no es de texto
      }

      // Puedes agregar más validaciones según sea necesario
    }

    // Validar el formato de fecha
    if (!validateDate(formData.fecha)) {
      setErrorMessage("Ingresa una fecha válida en formato YYYY-MM-DD.");
      return; // No se envía la solicitud si la fecha no cumple con el formato
    }

    // Puedes realizar la lógica de envío al API aquí
    fetch("http://3.88.218.62/precarga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Solicitud exitosa");
          setSuccessMessage("Los datos han sido cargados exitosamente");
        } else if (response.status === 422) {
          console.log("Error de validación");
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
        <div className="page Facturacion">
          <div className="page-title">
            <h1>PRECARGA</h1>
          </div>
          <p>Aqui puedes realizar la precarga de datos inicial. Completa todos los campos en el formato correspondiente. Una vez listo solo envia para guardar.</p>
          <Formulario fields={camposFormulario} onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default PRECARGA;
