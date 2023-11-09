/**
 * Sube un archivo al servidor. (ya implementado)
 */
export function uploadFile(file) {
  if (!file) {
    return Promise.reject("No se ha seleccionado ningún archivo.");
  }

  const formData = new FormData();
  formData.append("file", file);

  return fetch(process.env.REACT_APP_API_DOMAIN + "/excel/anicam", {
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
  fetch(process.env.REACT_APP_API_DOMAIN + "/excel/anicam", {
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
 * LOGIN
 */
export function login(email, password) {
  return fetch(process.env.REACT_APP_API_DOMAIN + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // body data type must match "Content-Type" header
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
 * SIGNUP
 */
export function signup(email, password) {
  if (!email || !password) {
    return Promise.reject("Email y password son requeridos.");
  }

  return fetch(process.env.REACT_APP_API_DOMAIN + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Include the email and password in the request body
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
