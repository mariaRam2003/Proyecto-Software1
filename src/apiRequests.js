import { useState, useEffect } from "react";
import Table from "./components/Table";
import { resolve, reject } from "promise";

/**
 * Sube un archivo al servidor. (ya implementado)
 */
export function uploadFile(file) {
  if (!file) {
    return Promise.reject("No se ha seleccionado ningún archivo.");
  }

  const formData = new FormData();
  formData.append("file", file);

  return fetch("https://softapi-production.up.railway.app/excel/anicam", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data; // Devuelve los datos recibidos
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error; // Lanza una excepción en caso de error
    });
}

/**
 * Descarga un archivo del servidor. (ya implementado)
 */
export function downloadFile() {
  fetch("https://softapi-production.up.railway.app/excel/anicam", {
    method: "GET",
    headers: {
      Accept: "application/json", // Specify the desired content type
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "prueba.xlsx";
      a.click();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/**
 * Busca la data para mostrar en views. (ya implementado)
 */
// export function FetchData() {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     fetch("https://softapi-development.up.railway.app/views/anicam/")
//       .then((response) => response.json())
//       .then((data) => setRecords(data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>Registros de Supabase</h1>
//       <Table data={records} />
//     </div>
//   );
// }
