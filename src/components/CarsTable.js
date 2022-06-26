import React from "react";
import CarTableRow from "./CarTableRow";

const CarsTable = ({ cars }) => {
  return (
    <>
      <h2>Cars:</h2>
      <table id="cars-table" className="table table-success">
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
          {cars &&
            cars.map((car) => {
              return <CarTableRow key={car._id} car={car} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default CarsTable;
