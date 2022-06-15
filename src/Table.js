import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const row = props.charactersData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => props.removeCharacter(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{row}</tbody>;
};
class Table extends Component {
  render() {
    const { charactersData, removeCharacter } = this.props;
    return (
      <table className="table">
        <TableHeader />
        <TableBody
          charactersData={charactersData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}
export default Table;
