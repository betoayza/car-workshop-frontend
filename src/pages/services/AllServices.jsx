import React, { useState, useEffect } from "react";
import axios from "axios";
import { ServicesTable } from "../../components/container/ServicesTable";
import { Loading } from "../../components/pure/Loading";

export const AllServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllServices = async () => {
      const options = {
        // headers: {
        //   "Content-Type": "application/json",
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Headers": "*",
        //   Accept: "application/json",
        // },
        timeout: 3000,
      };

      try {
        await axios
          .get(`${import.meta.env.VITE_API}/services/all`, options)
          .then((res) => {
            if (res.data) {
              setServices(res.data);
            } else alert("No services yet :(");
          })
          .catch((error) => error);
      } catch (error) {
        setError("Couldn't get services list :(");
      } finally {
        setIsLoading(false);
      }
    };
    //execute initally
    getAllServices();
    //execute every 5 seconds
    const interval = setInterval(() => {
      getAllServices();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {services.length ? (
        <ServicesTable services={services} setServices={setServices} />
      ) : (
        <div>No services available :(</div>
      )}
    </div>
  );
};
