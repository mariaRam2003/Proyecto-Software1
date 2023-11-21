// Table.js
import React from "react";
import "./Table.css";

const Table = ({ headers, data }) => {
  // Verificar si data es un array
  if (Array.isArray(data)) {
    return (
      <div className="table-contenedor">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (typeof data === "object") {
    // Si data es un objeto, mostrar una fila con las propiedades como datos
    return (
      <div>
        <table className="tablita-invoice">
          <thead>
            <tr>
              <th>Propiedad</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    console.error("Los datos no son ni un array ni un objeto:", data);
    return null;
  }
};

export default Table;
