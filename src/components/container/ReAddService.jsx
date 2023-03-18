import React, { useState, useEffect } from "react";
import axios from "axios";

export const ReAddService = ({ code, setModal, setModalReAddService }) => {
  const [reAdded, setReAdded] = useState(false);

  const handleClose = () => {
    setModal(false);
    setModalReAddService(false);
    setReAdded(false);
  };

  useEffect(() => {
    const reAddService = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/services/re-add`,
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

      await axios
        .request(options)
        .then((res) => {
          if (res.data) setReAdded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    reAddService();
  }, []);

  return (
    reAdded && (
      <>
        <h3>Service re added ;)</h3>
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};
