import { insertAnicamViewData } from "./supabaseClient";

const insertData = async (data) => {
  data.map((row) => {
    console.log("row", row);
    insertAnicamViewData(data);
  });
};

export { insertData };
