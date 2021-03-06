import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";

export const AllClients = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
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
        .get(`${API}/clients/all`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setClients(res.data);
            alert("Clients found!");
          } else alert("No clients yet :(");
        })
        .catch((error) => error);
    };
    getAllCars();
  }, []);

  return (
    <div>
      {clients && <ClientsTable clients={clients} setClients={setClients} />}
    </div>
  );
};
