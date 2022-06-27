import axios from "axios";
import React, { useState } from "react";

const initialForm = {
  code: "",
  patent: "",
  brand: "",
  model: "",
  year: "",
  owner: "",
  status: ""
};

const ModifyCar = () => {
  const [form, setForm] = useState(initialForm);
  const [car, setCar] = useState(false);
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uri = `/cars/search/${code}`;
    await axios
      .get(uri)
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Car finded!");
          setCar(true); 
          setForm(res.data);         
        } else {
          alert("Car not finded :(");
        }
      })
      .catch((error) => error);
    handleReset();
  };

  const handleReset = (e) => {
    setCode("");
  };

  //---------
  //Handle Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const uri = "/cars/modify/edit";
    await axios.put(uri, { form })
      .then((res) => {
        if (res.data) {
          console.log("New data: ", res.data);
          alert("Car updated!");
        } else {
          alert("Error in update :(");
        }
      })
      .catch((error) => {
        console.error(error);
      });
      handleReset2();
  };

  const handleReset2 = (e) => {
    setForm(initialForm);
  };

  return (
    <>
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

      {car && (
        <div>
          <h1>Edit Car:</h1>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <div className="input-group mb-3">
                {/* code isnt updatable */}
                <label>Code: {form.code}</label>             
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="patent"
                  id="patent"
                  placeholder="Patent..."
                  value={form.patent}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  placeholder="Brand..."
                  value={form.brand}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  placeholder="Model..."
                  value={form.model}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  placeholder="Year..."
                  value={form.year}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="owner"
                  placeholder="Owner..."
                  value={form.owner}
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
                onClick={handleReset2}
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

export default ModifyCar;
