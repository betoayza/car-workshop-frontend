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

const ModifyClient = ({ data, setClient }) => {
  const [form, setForm] = useState(data);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let uri = "/clients/modify";
    await axios
      .put(uri, { form })
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Modify seccessful!");          
        } else {
          alert("User not founded :(");
        }
      })
      .catch((error) => error);
    handleReset();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setForm(initialForm); 
    setClient(null);   
  };

  return (
    <>
      <h2>Modify client:</h2>
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

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
          <div className="col-12">
            <button
              className="btn btn-danger"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ModifyClient;
