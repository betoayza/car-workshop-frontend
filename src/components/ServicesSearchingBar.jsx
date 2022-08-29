import axios from "axios";
import React, { useState, useEffect } from "react";
import { API } from "../api/api";
import { ServicesTable } from "./ServicesTable";
import "./servicesSearchingBar.css";

export const ServicesSearchingBar = ({
  services,
  setServices,
  setModal,
  setModalSearchService,
}) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getServices = async () => {
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
        .get(`${API}/services/search`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setServices(res.data);
            setSearchedServices(res.data);
          } else setServices(null);
        })
        .catch((error) => error);
    };
    if (term.length > 0) getServices();
  }, [term]);

  const handleClose = () => {
    setModal(false);
    setModalSearchService(false);
    setServices(null);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div id="search-service-div" className={"container-xxl"}>
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

      {services && term !== "" && (
        <>
          <ServicesTable
            services={services}
            setServices={setServices}
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
