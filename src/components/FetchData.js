import React, { Component } from "react";
import "./Table.css";

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      editingIndex: null, // Índice de la fila en edición
      editedFieldName: null, // Nombre del campo en edición
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_DOMAIN + "/views/anicam/")
      .then((response) => response.json())
      .then((data) => this.setState({ records: data }))
      .catch((err) => console.log(err));
  }

  handleCellClick = (index, fieldName) => {
    this.setState({
      editingIndex: index,
      editedFieldName: fieldName,
    });
  };

  handleCellChange = (event) => {
    const { records, editingIndex, editedFieldName } = this.state;
    const newData = [...records];
    newData[editingIndex][editedFieldName] = event.target.value;
    this.setState({ records: newData });
  };

  render() {
    const { records, editingIndex, editedFieldName } = this.state;

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
                {Object.entries(record).map(([key, value], keyIndex) => (
                  <td
                    className={`cell ${
                      editingIndex === index && editedFieldName === key
                        ? "editing"
                        : ""
                    }`}
                    key={keyIndex}
                    onClick={() => this.handleCellClick(index, key)}
                  >
                    {editingIndex === index && editedFieldName === key ? (
                      <input
                        className="cell"
                        type="text"
                        value={value}
                        onChange={this.handleCellChange}
                        autoFocus
                        onBlur={() =>
                          this.setState({
                            editingIndex: null,
                            editedFieldName: null,
                          })
                        }
                      />
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FetchData;
