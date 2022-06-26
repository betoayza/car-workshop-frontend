import axios from "axios";
import React, { useState } from "react";

const DeleteService = () => {
  const [code, setCode] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uri = `/services/delete/${code}`;
    await axios
      .delete(uri)
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Delete Successful!");
        } else {
          alert("Service not found!");
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

      <h2>Delete service:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group w-25">
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
            Enviar
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default DeleteService;
