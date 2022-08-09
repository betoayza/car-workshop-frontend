import axios from "axios";
import React, { useState } from "react";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";

const SearchClient = () => {
  const [code, setCode] = useState("");
  const [client, setClient] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        if (res.data) {
          setClient(res.data);
        } else {
          alert("No matches :(");
        }
      })
      .catch((error) => error);
    handleReset();
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleReset = (e) => {
    setCode("");
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

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Send
          </button>

          <button type="reset" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
      <br />
      <br />
      {client && <ClientsTable clients={client} setClients={setClient} />}
    </div>
  );
};

export default SearchClient;
