import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClientsTable } from "../../components/container/ClientsTable";
import { Loading } from "../../components/pure/Loading";

export const AllClients = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    const getAllClients = async () => {
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
        .get(`${import.meta.env.VITE_API}/clients/all`, options)
        .then((res) => {
          if (res.data) {
            setClients(res.data);
          } else alert("No clients yet :(");
        })
        .catch((error) => error);
    };
    getAllClients();
  }, [clients]);

  return (
    <div>
      {clients ? (
        <ClientsTable clients={clients} setClients={setClients} />
      ) : (
        <Loading />
      )}
    </div>
  );
};
