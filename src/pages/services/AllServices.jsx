import React, { useState, useEffect } from "react";
import axios from "axios";
import { ServicesTable } from "../../components/container/ServicesTable";
import { Loading } from "../../components/pure/Loading";

export const AllServices = () => {
  const [services, setServices] = useState(null);

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

      await axios
        .get(`${import.meta.env.VITE_API}/services/all`, options)
        .then((res) => {
          if (res.data) {
            setServices(res.data);
          } else alert("No services yet :(");
        })
        .catch((error) => error);
    };
    getAllServices();
  }, [services]);

  return (
    <div>
      {services ? (
        <ServicesTable services={services} setServices={setServices} />
      ) : (
        <Loading />
      )}
    </div>
  );
};
