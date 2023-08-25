import React, { useEffect, useState } from "react";
import "./Table.css";

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://softapi-development.up.railway.app/views/anicam/")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Registro</th>
            {records.length > 0 &&
              Object.keys(records[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="cell">Registro {index + 1}</td>
              {Object.values(record).map((value, keyIndex) => (
                <td className="cell" key={keyIndex}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
