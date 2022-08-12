import React, { useState } from "react";
import axios from "axios";
import { API } from "../api/api";

const initialForm = {
  code: "",
  date: "",
  amount: "",
  carCode: "",
  work: "",
  carKms: "",
  status: "",
};

const ModifyService = () => {
  const [code, setCode] = useState("");
  const [service, setService] = useState(null);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: `${API}/services/search`,

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
          setService(res.data);
          setForm(res.data);
        } else {
          alert("Service not found :(");
        }
      })
      .catch((error) => error);
    handleClean();
  };

  const handleClean = (e) => {
    setCode("");
  };

  //---------
  //Handle Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const options = {
      url: `${API}/services/modify`,
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
          alert("Service updated!");
        } else {
          alert("Update error :(");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    handleClean2();
  };

  const handleClean2 = (e) => {
    setForm(initialForm);
    setService(null);
  };

  return (
    <>
      <h2>Find Service: </h2>
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

          <button className="btn btn-danger" type="reset" onClick={handleClean}>
            Clean
          </button>
        </form>
      </div>

      {service && (
        <div>
          <h1>Edit Service:</h1>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <label htmlFor="amount">Code:</label>
              <div className="input-group mb-2">
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
              <label htmlFor="amount">Date:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="date"
                  id="date"
                  value={form.date}
                  disabled
                  readOnly
                />
              </div>
              <label htmlFor="amount">Amount:</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  id="amount"
                  placeholder="Amount..."
                  value={form.amount}
                  onChange={handleChange2}
                  required
                />
              </div>
              <label htmlFor="carCode">Car code:</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="carCode"
                  id="carCode"
                  value={form.carCode}
                  disabled
                  readOnly
                />
              </div>
              <label htmlFor="work">Work:</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="work"
                  id="work"
                  placeholder="Work..."
                  value={form.work}
                  onChange={handleChange2}
                  required
                />
              </div>
              <label htmlFor="carKms">Car Kms:</label>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="carKms"
                  id="carKms"
                  placeholder="Car Kms..."
                  value={form.carKms}
                  onChange={handleChange2}
                  required
                />
              </div>

              <button className="btn btn-primary" type="submit">
                Update
              </button>

              <button
                className="btn btn-danger"
                type="reset"
                onClick={handleClean2}
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

export default ModifyService;
