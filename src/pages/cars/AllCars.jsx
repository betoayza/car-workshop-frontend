import React, { useState, useEffect } from "react";
import axios from "axios";
import CarsTable from "../../components/container/CarsTable";
import { Loading } from "../../components/pure/Loading";

export const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllCars = async () => {
      const options = {
        timeout: 3000,
      };

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/cars/all`,
          options
        );

        if (response.data) setCars(response.data);
        else {
          setError("Invalid response data");
        }
      } catch (error) {
        setError("Couldn't get data");
      } finally {
        setIsLoading(false);
      }
    };
    // execute one time inititally
    getAllCars();
    // execute every 5 seconds
    const interval = setInterval(() => {
      getAllCars();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loading />;
  if (error) <div>Error: {error}</div>;

  return (
    <div>
      {cars.length ? (
        <CarsTable cars={cars} setCars={setCars} />
      ) : (
        <div>No cars available :(</div>
      )}
    </div>
  );
};
