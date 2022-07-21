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

const AddClient = () => {
  const [form, setForm] = useState(initialForm);
  const [idError, setIdError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        if (res.data) {
          alert("Add successful!");
        } else {
          alert("Error: User already exists :(");
        }
      })
      .catch((error) => error);
    handleReset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
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

  return (
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
            Enviar
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default AddClient;
