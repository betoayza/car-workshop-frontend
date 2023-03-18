import React, { useState, useEffect } from "react";
import axios from "axios";
import CarsTable from "../../components/container/CarsTable";
import { Loading } from "../../components/pure/Loading";

export const AllCars = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    const getAllCars = async () => {
      const options = {       
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/cars/all`, options)
        .then((res) => {
          if (res.data) {
            setCars(res.data);
          } else return;
        })
        .catch((error) => error);
    };
    getAllCars();
  }, [cars]);

  return (
    <div>
      {cars ? <CarsTable cars={cars} setCars={setCars} /> : <Loading />}
    </div>
  );
};
