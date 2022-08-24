import React, { useState } from "react";
import axios from "axios";
import { API } from "../api/api";

const initialForm = {
  code: Date.now(),
  patent: "",
  brand: "",
  model: "",
  year: "",
  clientCode: "",
  status: "Active",
};

const AddCar = ({ setModal, setModalAddCar }) => {
  const [form, setForm] = useState(initialForm);
  const [patentError, setPatentError] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      url: `${API}/cars/add`,
      method: "post",
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
        if (res.data) setUpdated(true);
        else setError(true);
      })
      .catch((error) => error);
  };

  const handleClose = (e) => {
    setForm({ ...initialForm, code: Date.now() });
    setModal(false);
    setModalAddCar(false);
  };

  //Patent validation
  const handleBlur = (e) => {
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

  return error ? (
    <>
      <h3>Add failed :(</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : updated ? (
    <>
      <h3>Car added ;)</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h2> Add car: </h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-2">
            <input
              type="hidden"
              className="form-control"
              name="code"
              value={form.code}
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="patent"
              placeholder="Patent..."
              value={form.patent}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>

          {patentError && (
            <p style={{ color: "yellow" }}>Not valid patent: e.g. "ABC 123"</p>
          )}

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="brand"
              placeholder="Brand..."
              value={form.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="model"
              placeholder="Model..."
              value={form.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="year"
              placeholder="Year..."
              min="1900"
              max="2022"
              value={form.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="clientCode"
              placeholder="Client code..."
              value={form.clientCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="hidden"
              className="form-control"
              name="status"
              value={form.status}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Add
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
