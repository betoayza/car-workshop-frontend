import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import axios from "axios";

export const ReAddCar = ({ code, setModal, setModalReAddCar }) => {
  const [reAdded, setReAdded] = useState(false);

  const handleClose = () => {
    setModal(false);
    setModalReAddCar(false);
    setReAdded(false);
  };

  useEffect(() => {
    const reAddCar = async () => {
      const options = {
        url: `${API}/cars/re-add`,
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
          timeout: 3000,
        },
        data: { code },
      };

      await axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          if (res.data) setReAdded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    reAddCar();
  }, []);

  return reAdded ? (
    <>
      <h3>Car re added :)</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Car was already active</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  );
};
