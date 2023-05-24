import { insertAnicamViewData } from "./supabaseClient";

const insertData = async (data) => {
    data.map((row) => {
        console.log('row', row); //borrame
        insertAnicamViewData(row);
    });
};

export default insertData;