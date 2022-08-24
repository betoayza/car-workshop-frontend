import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";

export const DeleteService = ({ code, setModal, setModalDeleteService, setServices }) => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const deleteService = async () => {
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
        .delete(`${API}/services/delete`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) setDeleted(true);
        })
        .catch((error) => error);
    };
    deleteService();   
  }, []);

  const handleClose = () => {
    setModal(false);
    setModalDeleteService(false);
    setDeleted(false);
  };

  return deleted ? (
    <>
      <h3>Service deleted ;)</h3>

      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Service was already deleted</h3>

      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  );
};
