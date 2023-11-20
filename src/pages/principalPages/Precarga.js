import React, { useState } from "react";
import Header from "../components/Header";
import Formulario from "../components/Formulario";
import FormularioWithoutBtn from "../components/Fomulario-btn";
import "../styles/Pages.css";

const PRECARGA = () => {
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
      label: "Descripción",
      name: "descripcion",
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

    // Validar el formato de fecha
    if (!validateDate(formData.fecha_orden)) {
      setErrorMessage("Ingresa una fecha válida en formato YYYY-MM-DD.");
      return;
    }

    // API: Enviar solicitud POST
    const token = getTokenFromCookie();

    const apiData = {
      paquetes: [
        {
          factura: formData.factura,
          fecha_orden: formData.fecha_orden,
          contenido: formData.contenido,
          descripcion: formData.descripcion,
          alto: formData.alto,
          ancho: formData.ancho,
          largo: formData.largo,
          peso_libras: formData.peso_libras,
          peso_volumetrico: formData.peso_volumetrico,
          valor_producto_dolar: formData.valor_producto_dolar,
          unidades: formData.unidades,
          direccion_casillero: formData.direccion_casillero,
          empresa_remitente: formData.empresa_remitente,
          cliente_nombre: formData.cliente_nombre,
          cliente_telefono: formData.cliente_telefono,
          cliente_email: formData.cliente_email,
          cliente_direccion: formData.cliente_direccion,
        },
      ],
      consolidado: {
        descripcion: formData.descripcion,
        transportista: formData.transportista,
      },
    };

    fetch(process.env.REACT_APP_API_DOMAIN + `/precarga?token=${token}`, {
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
            <h1>PRECARGA</h1>
          </div>
          <p>
            Aqui puedes realizar la precarga de datos inicial. Completa todos
            los campos en el formato correspondiente. Una vez listo solo envia
            para guardar.
          </p>
          <h2>Consolidado:</h2>
          <Formulario fields={camposFormulario} onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default PRECARGA;
