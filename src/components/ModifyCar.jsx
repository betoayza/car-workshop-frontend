import axios from "axios";
import React, { useState } from "react";
import { API } from "../api/api";

const initialForm = {
  code: "",
  patent: "",
  brand: "",
  model: "",
  year: "",
  clientCode: "",
  status: "",
};

const ModifyCar = (car) => {
  const [form, setForm] = useState(car);
  const [patentError, setPatentError] = useState(false);

  //---------
  //Handle Update Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const options = {
      url: `${API}/cars/modify`,
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
        timeout: 3000,
      },
      data: form,
    };

    await axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Car updated!");
        } else {
          alert("Error in update :(");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    handleClose2();
  };

  const handleClose2 = (e) => {
    setForm(null);
  };

  const handleBlur = () => {
    console.log(form.patent);
    let regExp = new RegExp("^[A-Z]{3} [0-9]{3}$");
    let match = regExp.test(form.patent);
    if (match) {
      setPatentError(false);
    } else {
      setPatentError(true);
      setForm({ ...form, patent: "" });
    }
  };

  return (
    <>
      {form && (
        <div>
          <h2>Modify Car:</h2>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <label htmlFor="code">Code:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  value={form.code}
                  disabled
                  readOnly
                />
              </div>

              <label htmlFor="patent">Patent:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="patent"
                  id="patent"
                  placeholder="Patent..."
                  value={form.patent}
                  onChange={handleChange2}
                  onBlur={handleBlur}
                  required
                />
              </div>

              {patentError && (
                <p className="error-p" style={{ color: "#ff6347" }}>
                  Not valid patent: e.g. "ABC 123"
                </p>
              )}

              <label htmlFor="brand">Brand:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  id="brand"
                  placeholder="Brand..."
                  value={form.brand}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="model">Model:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  id="model"
                  placeholder="Model..."
                  value={form.model}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="year">Year:</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  id="year"
                  placeholder="Year..."
                  min="1900"
                  max="2022"
                  value={form.year}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="clientCode">Client code:</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="clientCode"
                  id="clientCode"
                  value={form.clientCode}
                  disabled
                  readOnly
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Update
              </button>

              <button
                className="btn btn-danger"
                type="reset"
                onClick={handleClose2}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModifyCar;
