function uploadFile() {
  let input = document.querySelector("#excelFile");
  let file = input.files[0];

  let formData = new FormData();
  formData.append("file", file); // Asegúrate de que 'file' es el nombre correcto que espera el backend

  fetch("https://softapi-production.up.railway.app/uploadfile", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });
}

export function downloadFile() {
  fetch("https://softapi-production.up.railway.app/uploadfiles", {
    method: "GET",
    mode: "no-cors", // Add the 'mode' option with 'no-cors'
  })
    .then((response) => response.blob()) // obtienes la respuesta como un blob
    .then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "base_datos.xlsx"; // o el nombre de tu archivo
      a.click();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}