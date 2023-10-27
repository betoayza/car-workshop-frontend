import React, { useState, useEffect } from "react";
import axios from "axios";

export const ReAddClient = ({ code, setModal, setModalReAddClient }) => {
  const [isReAdded, setIsReAdded] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setModal(false);
    setModalReAddClient(false);
    setIsReAdded(false);
  };

  useEffect(() => {
    const reAddClient = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/clients/re-add`,
        method: "put",
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
        const response = await axios.request(options);

        if (response.data) setIsReAdded(true);
        else return;
      } catch (error) {
        setError("Something went wrong :(");
      }
    };
    reAddClient();
  }, []);

  return error ? (
    <div>Error: {error}</div>
  ) : (
    isReAdded && (
      <>
        <h3>Client re added ;)</h3>
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};
