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

const AddService = () => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: '/api/services/add',
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
        if (res.data) {
          console.log(res.data);
          alert("Add successful!");
        } else {
          alert("Add failed :(");
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
    <div>
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
              type="text"
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
            Enviar
          </button>

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
