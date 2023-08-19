import { createClient } from "@supabase/supabase-js";

// Obtén la URL y la clave de acceso anónimo de Supabase desde las variables de entorno
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_ANON_KEY;

// Crea una instancia del cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Obtiene datos de la vista 'anicam_table_view'.
 * @returns {Promise} - Datos de la vista o un objeto de error.
 */
const anicamView = async () => {
  const { data, error } = await supabase.from("anicam_table_view").select("*");

  if (error) console.log("error", error);
  return data;
};

/**
 * Obtiene datos de la tabla 'Cuscar'.
 * @returns {Promise} - Datos de la tabla o un objeto de error.
 */
const cuscarView = async () => {
  const { data, error } = await supabase.from("Cuscar").select("*");

  if (error) console.log("error", error);
  return data;
};

/**
 * Inserta datos en una vista específica usando una función RPC de Supabase.
 * @param {Object} data - Datos que se insertarán.
 * @param {string} functionName - Nombre de la función RPC en Supabase.
 */
const insertViewData = async (data, functionName) => {
  console.log("data", data);
  supabase
    .rpc(functionName, data)
    .then((response) => {
      console.log("response", response);
      // Manejar la respuesta AQUI
    })
    .catch((error) => {
      console.log("error", error);
      alert("Error al actualizar los datos", error);
    });
};

// Exporta las funciones y la instancia de supabase para su uso en otros módulos
export { anicamView, cuscarView, insertViewData, supabase };
