import React, { useState } from "react";
import axios from "axios";

const SearchCar = () => {
  const [code, setCode] = useState("");
  const [car, setCar] = useState(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let uri = `/cars/search/${code}`;
    await axios
      .get(uri)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setCar(res.data);
          alert("Car finded!");
        } else alert("No matches :(");
      })
      .catch((error) => error);
    handleReset();
  };

  const handleReset = (e) => {
    setCode("");
  };

  return (
    <>
      <h2> Find car: </h2>

      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              name="code"
              placeholder="Code..."
              value={code}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Find!
            </button>
          </div>

          <div className="col-12">
            <button
              className="btn btn-danger"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {car && (
        <div id="table-div">
          <h2>Car:</h2>
          <table className="table">
            <thead>
              <tr className="table-success" id="tr-table-header">
                <th scope="col">Code</th>
                <th scope="col">Patent</th>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(car).length === 0 ? (
                <tr colSpan="6">
                  <td>No data</td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td>{car.code}</td>
                    <td>{car.patent}</td>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.year}</td>
                    <td>{car.owner}</td>
                  </tr>
                 
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SearchCar;
