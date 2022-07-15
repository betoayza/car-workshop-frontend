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
    <div>
      <p>Cars with more 3 years old and just 1 service done</p>

      <button className="btn btn-primary" type="submit" onClick={handleClick}>
        Find!
      </button>

      <br />
      <br />

      {cars && <CarsTable cars={cars} setCars={setCars} />}
    </div>
  );
};

export default CarsList1;
