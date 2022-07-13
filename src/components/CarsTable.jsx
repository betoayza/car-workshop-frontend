import React from "react";
import CarTableRow from "./CarTableRow";

const CarsTable = ({ cars, setCars }) => {
  if (!Array.isArray(cars)) {
    cars = [cars];
  }

  const handleCloseTable = () => {
    setCars(null);
  };
  
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
            <th scope="col">Client code</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((car) => {
              return <CarTableRow key={car._id} car={car} />;
            })}
        </tbody>
      </table>

      <div className="col-12">
        <button
          className="btn btn-danger"
          type="reset"
          onClick={handleCloseTable}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default CarsTable;
