import axios from "axios";
import React, { useState, useEffect } from "react";
import CarsTable from "./CarsTable";

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
        },
        timeout: 3000,
        params: { term },
      };

      await axios
        .get(`${import.meta.env.VITE_API}/cars/search`, options)
        .then((res) => {
          if (res.data) {
            setCars(res.data);
            setSearchedCars(res.data);
          } else setCars(null);
        })
        .catch((error) => error);
    };
    if (term.length > 0) getCar();
  }, [term, cars]);

  const handleClose = () => {
    setModal(false);
    setModalSearchCar(false);
    setCars(null);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className={"searching-bar-div"}>
      <input
        type={"text"}
        className={"form-control w-50"}
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
          <div className={"searching-table-div table-responsive"}>
            <CarsTable cars={cars} setCars={setCars} showAddAndSearch={false} />
          </div>
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </>
      )}
    </div>
  );
};
