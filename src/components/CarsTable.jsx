import React, { useState, useEffect } from "react";
import CarTableRow from "./CarTableRow";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";
import axios from "axios";


const CarsTable = ({ cars }) => {
  const [client, setClient] = useState(null);

  if (!Array.isArray(cars)) {
    cars = [cars];
  }

  useEffect(() => {
    const getClient = async (client) => {
      const code = client;
      const options = {
        url: `${API}/clients/search`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
          timeout: 3000,
        },
        params: { code },
      };

      await axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setClient(res.data);
          } else {
            return;
          }
        })
        .catch((error) => error);
    };
    getClient(client);
  }, [client]);

  const seeClient = (clientCode) => {
    setClient(clientCode);
  };

  return (
    <>
      <h2>Cars:</h2>
      <table
        id="cars-table"
        className="table table-dark table-striped table-hover border-info"
      >
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Patent</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Client code</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((car) => {
              return (
                <CarTableRow key={car._id} car={car} seeClient={seeClient} />
              );
            })}
        </tbody>
      </table>
      <br />
      {client && <ClientsTable clients={client} setClients={setClient} />};
    </>
  );
};

export default CarsTable;
