import { insertAnicamViewData } from "./supabaseClient";

const updateArray = (array) => {
    const updatedArray = array.map(obj => {
            // Create a new object with modified key names
            const updatedObj = {};
            for (let key in obj) {
                updatedObj['p_' + key] = obj[key];
            }
            return updatedObj;
        });
    console.log('updatedArray', updatedArray)
    return updatedArray;
};

const insertData = async (data) => {
    const updatedData = updateArray(data);

    updatedData.map((row) => {        
        insertAnicamViewData(row);
    });
};

export { insertData };
