import axios from "axios";
import React, { useState } from "react";
import { API } from "../api/api";

const initialForm = {
  code: "",
  id: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  status: "Active",
};

const ModifyClient = () => {
  const [form, setForm] = useState(initialForm);
  const [client, setClient] = useState(null);
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: `${API}/clients/search`,

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
        timeout: 3000,
      },
      params: { code },
    };

    await axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setClient(res.data);
          setForm(res.data);          
        } else {
          alert("Client not found :(");
        }
      })
      .catch((error) => error);
    handleReset();
  };

  const handleReset = (e) => {
    setCode("");
  };

  //---------
  //Handle Update Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const options = {
      url: `${API}/clients/modify`,
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
          alert("Client updated!");
        } else {
          alert("Update error :(");
        }
      })
      .catch((error) => {
        console.error(error);
      });
      handleReset2();
  };

  const handleReset2 = (e) => {
    setForm(initialForm);
    setClient(null);
  };

  return (
    <>
      <h2>Search client:</h2>

      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
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
            Find!
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
      <br />
      <br />

      {client && (
        <div>
          <h2>Modify Client:</h2>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <label htmlFor="code">Code:</label>           
              <div className="input-group mb-3">  
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  id="code"
                  value={form.code}
                  disabled
                  readOnly
                />
              </div>

              <label htmlFor="id">ID:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  id="id"
                  value={form.id}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="name">Name:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name..."
                  value={form.name}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="surname">Surname:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  id="surname"
                  placeholder="Surname..."
                  value={form.surname}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="email">Email:</label>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  value={form.email}
                  onChange={handleChange2}
                  required
                />
              </div>

              <label htmlFor="phone">Phone:</label>
              <div className="input-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Phone..."
                  value={form.phone}
                  onChange={handleChange2}
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
                Update
              </button>

              <button
                className="btn btn-danger"
                type="reset"
                onClick={handleReset2}
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

export default ModifyClient;
