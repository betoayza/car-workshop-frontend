import React, { useState, useEffect } from "react";
import axios from "axios";
import CarsTable from "./CarsTable";
import { API } from "../api/api.js";

export const AllCars = () => {
  const [cars, setCars] = useState({});
  //const [flag, setS] = useState(second);

  useEffect(() => {
    if (cars) {
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
    } else return;
  }, [cars]);

  return <div>{cars && <CarsTable cars={cars} setCars={setCars} />}</div>;
};
