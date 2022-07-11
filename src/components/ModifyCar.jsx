import axios from "axios";
import React, { useState } from "react";

const initialForm = {
  code: "",
  patent: "",
  brand: "",
  model: "",
  year: "",
  clientCode: "",
  status: "",
};

const ModifyCar = () => {
  const [form, setForm] = useState(initialForm);
  const [car, setCar] = useState(null);
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: `/api/cars/search`,

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
          setCar(res.data);
          setForm(res.data);
          alert("Car finded!");
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
  //Handle Update Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const options = {
      url: "/api/cars/modify",
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
    setCar(null);
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
          <h1>Modify Car:</h1>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>
              <div className="input-group mb-3">
                {/* code isnt updatable */}                
                <input
                  type="text"
                  className="form-control"
                  name="code"        
                  value={form.code}  
                  disabled  
                  readOnly      
                />
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
                  type="number"
                  className="form-control"
                  name="clientCode"                  
                  value={form.clientCode}
                  disabled
                  readOnly
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
