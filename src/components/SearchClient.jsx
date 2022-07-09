import axios from "axios";
import React, { useState } from "react";
import { ClientsTable } from "./ClientsTable";

const SearchClient = () => {
  const [code, setCode] = useState("");
  const [client, setClient] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: "/api/clients/search",

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
        if (res.data) {
          setClient(res.data);
          alert("Client found!");
        } else {
          alert("No matches :(");
        }
      })
      .catch((error) => error);    
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleReset = (e) => {
    setCode("");
    setClient(null);
  };

  return (
    <div>
      <h2>Search client:</h2>

      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <input
              type="number"
              className="form-control"
              name="code"
              placeholder="Code..."
              value={code}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Enviar
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      {client && <ClientsTable clients={client} />}
    </div>
  );
};

export default SearchClient;
