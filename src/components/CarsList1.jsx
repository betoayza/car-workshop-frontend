import axios from "axios";
import React, { useState } from "react";
import CarsTable from "./CarsTable";

const CarsList1 = () => {
  const [cars, setCars] = useState(null);

  const handleClick = async (e) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
        timeout: 3000,
      },
    };

    await axios
      .get("/api/cars/search/lists/CarsList1", options)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setCars(res.data);
          alert("Cars finded!");
        } else alert("No matches :(");
      })
      .catch((error) => error);
  };

  return (
    <>
      <p>Cars with more 3 years old and just 1 service done</p>

      <div className="col-12">
        <button className="btn btn-primary" type="submit" onClick={handleClick}>
          Find!
        </button>
      </div>

      {cars && <CarsTable cars={cars} setCars={setCars} />}
    </>
  );
};

export default CarsList1;
