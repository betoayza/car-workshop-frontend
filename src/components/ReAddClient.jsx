import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import axios from "axios";

export const ReAddClient = ({ code, setModal, setModalReAddClient }) => {
  const [reAdded, setReAdded] = useState(false);

  const handleClose = () => {
    setModal(false);
    setModalReAddClient(false);
    setReAdded(false);
  };

  useEffect(() => {
    const reAddClient = async () => {
      const options = {
        url: `${API}/clients/re-add`,
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
          else return;
        })
        .catch((error) => {
          console.error(error);
        });
    };
    reAddClient();
  }, []);

  return reAdded ? (
    <>
      <h3>Client re added :)</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Failed: client already active</h3>
      <button className={"btn btn-danger"} onClick={handleClose}>
        Close
      </button>
    </>
  );
};
