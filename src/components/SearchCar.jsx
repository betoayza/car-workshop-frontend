import React, { useState, useEffect } from "react";
import axios from "axios";
import CarsTable from "./CarsTable";
import { API } from "../api/api";

const SearchCar = ({ code, setModal, setShowAddAndSearch }) => {
  const [car, setCar] = useState(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const getCar = async () => {
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
        .get(`${API}/cars/search`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setCar(res.data);
            setFound(true);
          } else return;
        })
        .catch((error) => error);
    };
    getCar();
  }, []);

  const handleClose = () => {
    setModal(false);
    setShowAddAndSearch(true);
  };

  return found ? (
    <div>
      {car && <CarsTable cars={car} setCars={setCar} AddAndSearch={false} />}
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </div>
  ) : (
    <div>
      <h3>Car not found :(</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default SearchCar;
