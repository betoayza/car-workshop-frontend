import axios from "axios";
import React, { useState, useEffect } from "react";
import CarsTable from "./CarsTable";

const CarsList1 = ({ setModal, setModalSelected }) => {
  const [cars, setCars] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getList = async () => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/cars/search/lists/1`, options)
        .then((res) => {
          if (res.data) {
            setCars(res.data);
          } else setError(true);
        })
        .catch((error) => error);
    };
    getList();
  }, [cars]);

  const handleClose = () => {
    setModal(false);
    setModalSelected(false);
  };

  return error ? (
    <>
      <h3>Cars not found :(</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Cars with more 3 years old & just 1 service done</h3>

      <div className={"table-responsive car-list-table-div"}>
        {cars && (
          <CarsTable cars={cars} setCars={setCars} showAddAndSearch={false} />
        )}
      </div>

      <button className={"btn btn-danger"} type={"reset"} onClick={handleClose}>
        Close
      </button>
    </>
  );
};

export default CarsList1;
