import React from "react";

const CarTableRow = ({ car, seeClient }) => {
  return (
    <tr>
      <td>{car.code}</td>
      <td>{car.patent}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>
        {car.clientCode}{" "}
        <button className="btn btn-light" onClick={()=>seeClient(car.clientCode)}>
          See
        </button>
      </td>
      <td>{car.status}</td>
    </tr>
  );
};

export default CarTableRow;
