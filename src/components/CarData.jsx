import React from "react";

const CarData = ({ car }) => {
  return (
    <>
      <table id="car-table" className="table table-success">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Patent</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {car && (
              <>
                <td>{car.code}</td>
                <td>{car.patent}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.year}</td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CarData;
