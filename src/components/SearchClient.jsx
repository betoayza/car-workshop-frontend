import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";

const SearchClient = ({ code, setModal, setModalSeeClient }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const getClient = async () => {
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
          if (res.data) setClient(res.data);
        })
        .catch((error) => error);
    };
    getClient();
  }, [client]);

  const handleClose = () => {
    setModal(false);
    setModalSeeClient(false);
    setClient(false);
  };

  return client ? (
    <>
      <ClientsTable
        clients={client}
        setClients={setClient}
        addAndSearch={false}
      />
      <button className="btn btn-danger" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Not found :(</h3>
      <button className="btn btn-danger" onClick={handleClose}>
        Close
      </button>
    </>
  );
};

export default SearchClient;
