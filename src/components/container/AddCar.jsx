import React, { useState } from "react";
import axios from "axios";

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
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      url: `${import.meta.env.VITE_API}/cars/add`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
      timeout: 3000,
      data: form,
    };

    try {
      const response = await axios.request(options);
      if (response.data) setIsUpdated(true);
    } catch (error) {
      setError(error);
    }
  };

  const handleClose = (e) => {
    setForm({ ...initialForm, code: Date.now() });
    setModal(false);
    setModalAddCar(false);
  };

  //Patent validation
  const handleBlur = (e) => {
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
  ) : isUpdated ? (
    <>
      <h3>Car added ;)</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <div className={"add-update-div"}>
      <h2>Add car:</h2>
      <div>
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
    </div>
  );
};

export default AddCar;
