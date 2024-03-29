import axios from "axios";
import React, { useState, useEffect } from "react";

const initialForm = {
  code: "",
  patent: "",
  brand: "",
  model: "",
  year: "",
  clientCode: "",
};

const ModifyCar = ({ code, setModal, setModalCarEdit }) => {
  const [form, setForm] = useState(initialForm);
  const [patentError, setPatentError] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState(null);

  // GET car data to fill form
  useEffect(() => {
    const searchCar = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/cars/search/one`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
        params: { code },
      };

      try {
        const response = await axios.request(options);
        if (response.data) setForm(response.data);
      } catch (error) {
        setError("Couldn't get car data :(");
      }
    };
    searchCar();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const options = {
      url: `${import.meta.env.VITE_API}/cars/modify`,
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
      timeout: 3000,
      data: form,
    };

    await axios
      .request(options)
      .then((res) => {
        if (res.data) setIsUpdated(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = () => {
    setModal(false);
    setModalCarEdit(false);
    setIsUpdated(false);
  };

  const handleBlur = () => {
    let regExp = new RegExp("^[A-Z]{3} [0-9]{3}$");
    let match = regExp.test(form.patent);

    if (match) {
      setPatentError(false);
    } else {
      setPatentError(true);
      setForm({ ...form, patent: "" });
    }
  };

  return isUpdated ? (
    <>
      <h2>Car updated ;)</h2>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : error ? (
    <div>Error: {error}</div>
  ) : (
    <div className={"add-update-div"}>
      <h2>Modify Car:</h2>
      <div>
        <form onSubmit={handleUpdate}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button className="btn btn-danger" type="reset" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModifyCar;
