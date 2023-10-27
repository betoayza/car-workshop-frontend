import axios from "axios";
import React, { useState, useEffect } from "react";

export const DeleteService = ({ code, setModal, setModalDeleteService }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteService = async () => {
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
          `${import.meta.env.VITE_API}/services/delete`,
          options
        );
        if (response.data) setIsDeleted(true);
        else return;
      } catch (error) {
        setError("Something went wrong :(");
      }
    };
    deleteService();
  }, []);

  const handleClose = () => {
    setModal(false);
    setModalDeleteService(false);
    setIsDeleted(false);
  };

  return error ? (
    <div>Error: {error}</div>
  ) : (
    isDeleted && (
      <>
        <h3>Service deleted ;)</h3>
        <button className="btn btn-danger" type="button" onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};
