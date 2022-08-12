import axios from "axios";
import React, { useState } from "react";
import ServicesTable from "./ServicesTable";
import { API } from "../api/api";

const SearchService = () => {
  const [code, setCode] = useState("");
  const [service, setService] = useState(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        if (res.data) {
          setService(res.data);
        } else {
          alert("Not found :(");
        }
      })
      .catch((error) => error);
    handleClean();
  };

  const handleClean = (e) => {
    setCode("");
  };

  return (
    <div>
      <h2>Find Service: </h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              name="code"
              placeholder="Code..."
              value={code}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Find!
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleClean}>
            Clean
          </button>
        </form>
      </div>
      <br />
      <br />
      {service && <ServicesTable services={service} setServices={setService} />}
    </div>
  );
};

export default SearchService;
