import axios from "axios";
import React, { useState, useEffect } from "react";
import ServicesTable from "./ServicesTable";
import { API } from "../api/api";

const SearchService = ({ code, setModal, setModalSearchService }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    const getService = async () => {
      const options = {
        url: `${API}/services/search`,

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
          console.log(res);
          if (res.data) setService(res.data);
        })
        .catch((error) => error);
    };
    getService();
  }, [service]);

  const handleClose = () => {
    setModal(false);
    setModalSearchService(false);
    setService(null);
  };

  return service ? (
    <>
      <ServicesTable
        services={service}
        setServices={setService}
        showAddAndSearch={false}
      />
      ;
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h3>Service not found :(</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  );
};

export default SearchService;