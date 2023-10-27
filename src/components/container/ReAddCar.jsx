import React, { useState, useEffect } from "react";
import axios from "axios";

export const ReAddCar = ({ code, clientCode, setModal, setModalReAddCar }) => {
  const [isReAdded, setIsReAdded] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setModal(false);
    setModalReAddCar(false);
    setIsReAdded(false);
  };

  useEffect(() => {
    const reAddCar = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/cars/re-add`,
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
        data: { code, clientCode },
      };

      try {
        const response = await axios.request(options);
        if (response.data) setIsReAdded(true);
        else return;
      } catch (error) {
        setError("Something went wrong :(");
      }
    };
    reAddCar();
  }, []);

  return error ? (
    <div>Error: {error}</div>
  ) : isReAdded ? (
    <>
      <h3>Car re added ;)</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Client not found :(</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  );
};
