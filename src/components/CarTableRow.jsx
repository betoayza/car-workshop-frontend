import React from "react";

const CarTableRow = ({ car }) => {
  return (
    <tr>
      <td>{car.code}</td>
      <td>{car.patent}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.name}</td>
      <td>{car.lastName}</td>
      <td>{car.status}</td>
    </tr>
  );
};

export default CarTableRow;
