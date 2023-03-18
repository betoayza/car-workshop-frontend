import axios from "axios";
import React, { useState, useEffect } from "react";

export const DeleteClient = ({
  code,
  setModal,
  setModalDeleteClient,
}) => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const deleteClient = async () => {
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

      await axios
        .delete(`${import.meta.env.VITE_API}/clients/delete`, options)
        .then((res) => {
          console.log(res);
          if (res.data) setDeleted(true);
        })
        .catch((error) => error);
    };

    deleteClient();
  }, []);

  const handleClose = () => {
    setModal(false);
    setModalDeleteClient(false);
    setDeleted(false);
  };

  return (
    deleted && (
      <>
        <h3>Client deleted ;)</h3>
        <button className="btn btn-danger" type="button" onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};
