import React from "react";

const CarTableRow = ({
  car,
  seeClient,
  editCar,
  deleteCar,
  handleActivateCar,
}) => {
  return (
    <tr style={car.status === "Active" ? { color: "white" } : { color: "red" }}>
      <td>{car.code}</td>
      <td>{car.patent}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>
        {car.clientCode}{" "}
        <button
          className="btn btn-outline-light"
          onClick={() => seeClient(car.clientCode)}
        >
          See
        </button>
      </td>
      <td>{car.status}</td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={() => editCar(car.code)}
        >
          Edit
        </button>
        {car.status === "Inactive" && (
          <button
            className="btn btn-outline-warning"
            onClick={() => handleActivateCar(car.code, car.clientCode)}
          >
            Re Add
          </button>
        )}
        {car.status === "Active" && (
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteCar(car.code)}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default CarTableRow;
