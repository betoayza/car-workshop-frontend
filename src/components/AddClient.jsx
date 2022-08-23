import React, { useState } from "react";
import axios from "axios";
import { API } from "../api/api";

const initialForm = {
  code: Date.now(),
  id: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  status: "Active",
};

const AddClient = ({ setModal, setModalAdd }) => {
  const [form, setForm] = useState(initialForm);
  const [idError, setIdError] = useState(false);
  const [added, setAdded] = useState(false);

   
    const handleSubmit = async (e) => {
      e.preventDefault();

      const options = {
        url: `${API}/clients/add`,
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
          console.log(res);
          if (res.data) setAdded(true);
        })
        .catch((error) => error);
    };  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClean = (e) => {
    setForm({ ...initialForm, code: Date.now() });
  };

  const handleBlur = () => {
    console.log(form.id);
    let regExp = new RegExp("^[0-9]{8}$");
    let match = regExp.test(form.id);
    if (match) {
      setIdError(false);
    } else {
      setIdError(true);
      setForm({ ...form, id: "" });
    }
  };

  const handleClose = () => {
    setModal(false);
    setModalAdd(false);
    setAdded(false);
  };

  return added ? (
    <>
      <h3>Client added ;)</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      <h2>Add client:</h2>

      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="hidden"
              className="form-control"
              name="code"
              value={form.code}
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              name="id"
              placeholder="ID..."
              value={form.id}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </div>

          {idError && (
            <p style={{ color: "yellow" }}>Not valid ID: e.g. "12345678"</p>
          )}

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name..."
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="surname"
              placeholder="Surname..."
              value={form.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email..."
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone..."
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="hidden"
              className="form-control"
              name="status"
              value={form.status}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Send
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleClean}>
            Clean
          </button>
        </form>
      </div>
    </>
  );
};

export default AddClient;
