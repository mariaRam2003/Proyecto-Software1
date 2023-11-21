import React, { useEffect, useState } from "react";
// import "./Table.css";

/**
 * Componente de tabla para mostrar y editar datos.
 * @param {Array} data - Los datos que se mostrarán en la tabla.
 * @param {Function} functionName - Una función de callback (probablemente no utilizada aquí).
 */
function Table({ data, functionName }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  /**
   * Componente para renderizar una fila en la tabla.
   * @param {Object} object - Objeto de datos para esta fila.
   * @param {number} index - Índice de la fila en la tabla.
   * @param {Function} handleChange - Función para manejar cambios en la tabla.
   */
  function TableRow({ object, index, handleChange }) {
    return (
      <tr className="table-row">
        {Object.keys(object).map((key) => (
          <TableCell
            key={`${key}-${index}`}
            value={object[key]}
            onChange={(event) => handleChange(index, key, event)}
          />
        ))}
      </tr>
    );
  }

  /**
   * Componente para renderizar una celda en la tabla.
   * @param {string} value - Valor actual de la celda.
   * @param {Function} onChange - Función para manejar cambios en la celda.
   */
  function TableCell({ value, onChange }) {
    return (
      <td>
        <input className="cell" type="text" onChange={onChange} value={value} />
      </td>
    );
  }

  /**
   * Función para manejar los cambios en los datos de la tabla.
   * @param {number} index - Índice de la fila afectada.
   * @param {string} fieldName - Nombre del campo afectado.
   * @param {Object} event - Evento de cambio de valor.
   */
  const handleChange = (index, fieldName, event) => {
    const newData = JSON.parse(JSON.stringify(tableData));
    newData[index][fieldName] = event.target.value;
    setTableData(newData);
  };

  return (
    <>
      <div className="table-container">
        {data && tableData && (
          <table className="table-table">
            <thead className="table-head">
              <tr className="table-head-row">
                {Object.keys(data[0]).map((key) => (
                  <th className="table-header" key={`${key}-title`}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table-body">
              {tableData.map((object, index) => (
                <TableRow
                  key={index}
                  object={object}
                  index={index}
                  handleChange={handleChange}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Contenedor para agregar una nueva fila (actualmente vacío) */}
      {/* <div className="addRow-container">
      </div> */}
    </>
  );
}

export default Table;
