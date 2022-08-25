import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";

export const DeleteCar = ({ code, setModal, setModalCarDelete }) => {
  const [deleted, setDeleted] = useState(false);

  const handleClose = () => {
    setModal(false);
    setModalCarDelete(false);
    setDeleted(false);
  };

  useEffect(() => {
    const deleteCar = async () => {
      const options = {
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
        .delete(`${API}/cars/delete`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) setDeleted(true);
        })
        .catch((error) => error);
    };
    deleteCar();
  }, []);

  return (
    deleted && (
      <>
        <h2>Car deleted ;)</h2>
        <button
          className={"btn btn-danger"}
          type={"button"}
          onClick={handleClose}
        >
          Close
        </button>
      </>
    )
  );
};
