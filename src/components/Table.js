import './Table.css';
import React, { useState } from 'react';
import {insertAnicamViewData} from '../config/supabaseClient'

function Table({ data }) {
    const dataCopy = JSON.parse(JSON.stringify(data));
    const [tableData, setTableData] = useState([...data]);


    //compara dos objetos
    function isEqual(obj1, obj2) {
        // Get the keys of the first object
        const keys = Object.keys(obj1);
      
        // Check if the number of keys is the same in both objects
        if (keys.length !== Object.keys(obj2).length) {
            return false;
        }
      
        // Iterate over the keys
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
        
            // Check if the attribute exists in the second object
            if (!obj2.hasOwnProperty(key)) {
                return false;
            }
      
            // Compare the attribute values
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
      
        // All attributes have the same values
        return true;
    }

    //genera el array de filas con cambios y filas nuevas
    const makeCommitArray = (initialData, newData) => {
        const length = initialData.length > newData.length ? initialData.length : newData.length;

        let commitArray = [];
        for (let row = 0; row < length; row++) {
            if (!isEqual(initialData[row], newData[row])) {
                commitArray.push(newData[row]);
            }
        }
        console.log('commit array', commitArray); //borrame
        return commitArray;  
    };

    //envia los cambios a la base de datos
    const commitChanges = () => {
        const commitArray = makeCommitArray(dataCopy, tableData);
        console.log('commit changes function', commitArray); //borrame
        insertAnicamViewData(commitArray);
    };

  
    //modifica los datos de la tabla (tableData) cuando el usuario hace cambios
    const handleChange = (index, fieldName, event) => {
        const newData = JSON.parse(JSON.stringify(data));
        newData[index][fieldName] = event.target.value;
        setTableData(newData);
    };
  
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key) => {
                            return <th key={`${key}-title`}>{key}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((object, index) => {
                        return (
                            <tr key={`${index}`}>
                                {Object.keys(object).map((key) => (
                                    <td key={`${key}-${index}`}>
                                        <input
                                        className="cell"
                                        type="text"
                                        onChange={(event) => handleChange(index, key, event)}
                                        value={object[key]}
                                        />
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="commit-container">
                <button className='commit-commit-button' onClick={commitChanges}>
                    Commit
                </button>     
                <button className='commit-cancel-button'>
                    Cancel
                </button>
            </div>
        </>
    );
  }
  

export default Table;