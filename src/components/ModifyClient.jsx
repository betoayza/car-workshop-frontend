import axios from "axios";
import React, { useState } from "react";

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
      url: "/api/clients/search",

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
          alert("Client finded!");
        } else {
          alert("Not found :(");
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
      url: "/api/clients/modify",
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
      <h2>Modify client:</h2>
      <h2>Find car: </h2>
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

      {client && (
        <div>
          <h3>Modify Client:</h3>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <div className="input-group mb-3">
                {/* code isnt updatable */}
                <label>Code: {form.code}</label>
              </div>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control"
                  name="id"
                  placeholder="Identify Number..."
                  value={form.id}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
                Update
              </button>

              <button
                className="btn btn-danger"
                type="reset"
                onClick={handleReset}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModifyClient;
