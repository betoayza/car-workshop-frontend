import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClientsTable } from "../../components/container/ClientsTable";
import { Loading } from "../../components/pure/Loading";

export const AllClients = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // GET all clients
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

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/clients/all`,
          options
        );

        if (response.data) setClients(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    // execute 1 time initially
    getAllClients();
    // execute every 6 seconds
    const interval = setInterval(() => {
      getAllClients();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  return clients.length ? (
    <div>{<ClientsTable clients={clients} setClients={setClients} />}</div>
  ) : (
    <div>No clients yet :(</div>
  );
};
