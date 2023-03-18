import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClientsTable } from "./ClientsTable";

const SearchClient = ({ code, setModal, setModalSearchClient }) => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const getClient = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/clients/search/one`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
        params: { code },
      };

      await axios
        .request(options)
        .then((res) => {
          if (res.data) setClient(res.data);
        })
        .catch((error) => error);
    };
    getClient();
  }, [client]);

  const handleClose = () => {
    setModal(false);
    setModalSearchClient(false);
    setClient(false);
  };

  return (
    client && (
      <>
        <div className={"table-responsive single-table-div"}>
          <ClientsTable
            clients={client}
            setClients={setClient}
            showAddAndSearch={false}
          />
        </div>
        <button className="btn btn-danger" onClick={handleClose}>
          Close
        </button>
      </>
    )
  );
};

export default SearchClient;
