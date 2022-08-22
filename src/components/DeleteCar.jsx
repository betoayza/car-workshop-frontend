import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";

export const DeleteCar = ({ code, setModal, setModalCarDelete, setCars }) => {
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

    if(deleted){
      const getAllCars = async () => {
        const options = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/json",
            timeout: 3000,
          },
        };

        await axios
          .get(`${API}/cars/all`, options)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              setCars(res.data);              
            } else return;
          })
          .catch((error) => error);
      };
      getAllCars();   
    }
  }, []);

  return deleted ? (
    <>
      <h2>Delete successful!</h2>
      <button className={"btn btn-danger"} type={"reset"} onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h2>Can't Delete :(</h2>
      <button className={"btn btn-danger"} type={"reset"} onClick={handleClose}>
        Close
      </button>
    </>
  );
};
