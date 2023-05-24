import { insertAnicamViewData } from "./supabaseClient";

const insertData = async (data) => {
    insertAnicamViewData(data);
};

export { insertData };