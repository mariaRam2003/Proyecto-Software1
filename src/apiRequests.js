  import { useState, useEffect } from "react";
  import Table from "./components/Table";

  /**
   * Sube un archivo al servidor. (aun no implementado)
   */
  export function uploadFile() {
    const input = document.querySelector("#excelFile");
    const file = input.files[0];

    const formData = new FormData();
    formData.append("file", file);

    fetch("https://softapi-development.up.railway.app/excel/anicam", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  /**
   * Descarga un archivo del servidor. (ya implementado)
   */
  export function downloadFile() {
    fetch("https://softapi-production.up.railway.app/uploadfiles", {
      method: "GET",
      mode: "no-cors",
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "base_datos.xlsx";
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
