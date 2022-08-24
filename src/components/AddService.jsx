import axios from "axios";
import React, { useState } from "react";
import moment from "moment";
import { API } from "../api/api";

const initialForm = {
  code: Date.now(),
  date: moment(new Date()).format("DD/MM/YYYY"),
  amount: "",
  carCode: "",
  work: "",
  carKms: "",
  status: "Active",
};

const AddService = ({ setModal, setModalAddService }) => {
  const [form, setForm] = useState(initialForm);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: `${API}/services/add`,
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
        if (res.data) setAdded(true);
        else setError(true);
      })
      .catch((error) => error);
    handleClean();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClean = (e) => {
    setForm({ ...initialForm, code: Date.now() });
  };

  const handleClose = () => {
    setModal(false);
    setModalAddService(false);
    setAdded(false);
  };

  return error ? (
    <>
      <h3>Added failed :(</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : added ? (
    <>
      <h3>Service added ;)</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h2> Add Service: </h2>
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
              type="hidden"
              className="form-control"
              name="date"
              value={form.date}
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="amount"
              placeholder="Amount..."
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="carCode"
              placeholder="Car code..."
              value={form.carCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="work"
              placeholder="Work..."
              value={form.work}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="carKms"
              placeholder="Car Kms..."
              value={form.carKms}
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

          <button
            className="btn btn-warning"
            type="reset"
            onClick={handleClean}
          >
            Clean
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default AddService;
