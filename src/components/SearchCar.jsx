import React, { useState, useEffect } from "react";
import axios from "axios";
import CarsTable from "./CarsTable";
import { API } from "../api/api";

const SearchCar = ({ code, setModal, setModalSearchCar }) => {
  const [car, setCar] = useState(null);

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
        .get(`${API}/cars/search/one`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) setCar(res.data);
        })
        .catch((error) => error);
    };
    getCar();
  }, [car]);

  const handleClose = () => {
    setModal(false);
    setModalSearchCar(false);
    setCar(null);
  };

  return (
    car && (
      <>
        <CarsTable cars={car} setCars={setCar} showAddAndSearch={false} />
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};

export default SearchCar;
