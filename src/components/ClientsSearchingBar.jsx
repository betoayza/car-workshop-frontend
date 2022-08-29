import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import { ClientsTable } from "./ClientsTable";
import "./clientsSearchingBar.css";

export const ClientsSearchingBar = ({
  clients,
  setClients,
  setModal,
  setModalSearchClient,
}) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getClient = async () => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
          timeout: 3000,
        },
        params: { term },
      };

      await axios
        .get(`${API}/clients/search`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setClients(res.data);
            setSearchedClients(res.data);
          } else setClients(null);
        })
        .catch((error) => error);
    };
    if (term.length > 0) getClient();
  }, [term]);

  const handleClose = () => {
    setModal(false);
    setModalSearchClient(false);
    setClients(null);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div id="search-client-div" className={"container-xxl"}>
      <input
        type={"text"}
        className={"form-control w-100"}
        value={term}
        placeholder={"Search..."}
        onChange={handleChange}
      />
      <br />

      {!term && (
        <button className={"btn btn-danger"} onClick={handleClose}>
          Close
        </button>
      )}

      {clients && term !== "" && (
        <>
          <ClientsTable
            clients={clients}
            setClients={setClients}
            showAddAndSearch={false}
          />
          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </>
      )}
    </div>
  );
};
