import React, { useState } from "react";
import axios from "axios";
import {API} from '../api/api';

const initialForm = {
  code: Date.now(),
  patent: "",
  brand: "",
  model: "",
  year: "",
  owner: "",
  status: "Active",
};


const AddCar = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
       url: `${API}/cars/add`,
       method: 'get',
       headers: {
        'Content-Type': 'application/json',
        
       },
       data: { form },       
    }
    await axios
      .request(options)
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Add successful!");
        } else {
          alert("Add failed :(");
        }
      })
      .catch((error) => error);
      handleReset();
  };

  const handleReset = (e) => {
    setForm({...initialForm, code: Date.now()});
  };

  return (
    <div>
      <h2> Add car: </h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-2">
            <input
              type="hidden"
              className="form-control"
              name="code"
              id="code"
              value={form.code}
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="patent"
              id="patent"
              placeholder="Patent..."
              value={form.patent}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="brand"
              placeholder="Brand..."
              value={form.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="model"
              placeholder="Model..."
              value={form.model}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              name="year"
              placeholder="Year..."
              value={form.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              name="owner"
              placeholder="Owner..."
              value={form.owner}
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

export default AddCar;
