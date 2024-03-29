import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClientsTable } from "./ClientsTable";

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
        },
        timeout: 3000,
        params: { term },
      };

      await axios
        .get(`${import.meta.env.VITE_API}/clients/search`, options)
        .then((res) => {
          if (res.data) {
            setClients(res.data);
            setSearchedClients(res.data);
          } else setClients(null);
        })
        .catch((error) => error);
    };
    if (term.length > 0) getClient();
  }, [term, clients]);

  const handleClose = () => {
    setModal(false);
    setModalSearchClient(false);
    setClients(null);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className={"searching-bar-div"}>
      <input
        type={"text"}
        className={"form-control w-50"}
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
          <div className={"searching-table-div table-responsive"}>
            <ClientsTable
              clients={clients}
              setClients={setClients}
              showAddAndSearch={false}
            />
          </div>

          <button className={"btn btn-danger"} onClick={handleClose}>
            Close
          </button>
        </>
      )}
    </div>
  );
};
