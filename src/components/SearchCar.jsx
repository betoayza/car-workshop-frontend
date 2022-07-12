import React, { useState } from "react";
import axios from "axios";
import CarsTable from "./CarsTable";

const SearchCar = () => {
  const [code, setCode] = useState("");
  const [car, setCar] = useState(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
        timeout: 3000,
      },
      params: { code },
    };

    await axios
      .get("/api/cars/search", options)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setCar(res.data);
          alert("Car finded!");
        } else alert("No matches :(");
      })
      .catch((error) => error);
  };

  const handleReset = (e) => {
    setCode("");
    setCar(null);
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

      {car && <CarsTable cars={car} setCars={setCar}/>}
    </>
  );
};

export default SearchCar;
