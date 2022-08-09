import axios from "axios";
import React, { useState } from "react";
import { API } from "../api/api";

const DeleteClient = () => {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
        timeout: 3000,
      },
      data: { code },
    };

    await axios
      .delete(`${API}/clients/delete`, options)
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Delete successful!");
        } else {
          alert("Not found :(");
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
    <>
      <h2>Delete client:</h2>

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
            Send
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteClient;
