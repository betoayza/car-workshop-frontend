import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";

export const DeleteClient = ({ code, setModal, setModalDeleteClient, setClients }) => {
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const deleteClient = async () => {
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
        .delete(`${API}/clients/delete`, options)
        .then((res) => {
          console.log(res);
          if (res.data) setDeleted(true);
        })
        .catch((error) => error);
    };

    if(deleted){
      console.log("asdasdsdsd");
      const getAllClients = async () => {
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
          .get(`${API}/clients/all`, options)
          .then((res) => {
            console.log(res.data);
            if (res.data) {
              setClients(res.data);
            } else alert("No clients yet :(");
          })
          .catch((error) => error);
      };
      getAllClients();
    }
    deleteClient();
  }, []);



  const handleClose = () => {
    setModal(false);
    setModalDeleteClient(false);
    setDeleted(false);
  };

  return deleted ? (
    <>
      <h3>Delete successful :)</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Delete failed :(</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  );
};
