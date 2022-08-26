import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import CarsTable from "./CarsTable";
import "./carsSearchingBar.css";

export const CarsSearchingBar = ({
  cars,
  setCars,
  setModal,
  setModalSearchCar,
}) => {
  const [term, setTerm] = useState("");

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
        params: { term },
      };

      await axios
        .get(`${API}/cars/search`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setCars(res.data);
            setSearchedCars(res.data);
          } else setCars(null);
        })
        .catch((error) => error);
    };
    if (term.length > 0) getCar();
  }, [term]);

  const handleClose = () => {
    setModal(false);
    setModalSearchCar(false);
    setCars(null);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div id="main-div" className={"container-xxl"}>
      <input
        type={"text"}
        className={"form-control w-25"}
        value={term}
        placeholder={"Search..."}
        onChange={handleChange}
      />
      <br />

      {!term && (
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      )}

      {cars && term !== "" && (
        <>
          <CarsTable cars={cars} setCars={setCars} showAddAndSearch={false} />
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </>
      )}
    </div>
  );
};
