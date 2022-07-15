import React, { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      url: "/api/clients/add",
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
          alert("Error: user already exist :(");
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
              placeholder="DNI..."
              value={form.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre..."
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
              placeholder="Apellido..."
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
              placeholder="Tel..."
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
