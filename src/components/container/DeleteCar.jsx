import axios from "axios";
import React, { useState, useEffect } from "react";

export const DeleteCar = ({ code, setModal, setModalCarDelete }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setModal(false);
    setModalCarDelete(false);
    setIsDeleted(false);
  };

  useEffect(() => {
    const deleteCar = async () => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
        data: { code },
      };

      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API}/cars/delete`,
          options
        );

        if (response.data) setIsDeleted(true);
        else return;
      } catch (error) {
        setError("Something went wrong :(");
      }
    };
    deleteCar();
  }, []);

  return error ? (
    <div>Error: {error}</div>
  ) : (
    isDeleted && (
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
