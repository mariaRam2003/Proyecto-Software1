import { insertAnicamViewData } from "./supabaseClient";

const insertData = async (data) => {
    data.map((row) => {
        console.log('row', row);
        insertAnicamViewData(data);
    });    
};

const updatedArray = array.map(obj => {
    // Create a new object with modified key names
    const updatedObj = {};
    for (let key in obj) {
        updatedObj['p_' + key] = obj[key];
    }
    return updatedObj;
});

export { insertData };