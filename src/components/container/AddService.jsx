import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

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
  const [isAdded, setIsAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: `${import.meta.env.VITE_API}/services/add`,
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
      if (response.data) setIsAdded(true);
    } catch (error) {
      setError(true);
    }
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
    setIsAdded(false);
  };

  return error ? (
    <>
      <h3>Added failed :(</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : isAdded ? (
    <>
      <h3>Service added ;)</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <div className={"add-update-div"}>
      <h2> Add Service: </h2>
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
            className="btn btn-danger"
            type="button"
            onClick={handleClose}
          >
            Close
          </button>

          <button
            className="btn btn-warning"
            type="reset"
            onClick={handleClean}
          >
            <i className="bi-stars"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
