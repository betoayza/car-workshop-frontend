import React, {useState} from "react";
import axios from 'axios';

const initialForm = {
  code: "",
  date: "",
  amount: "",
  carCode: "",
  work: "",
  carKms: "",
  status: ""
};

const ModifyService = () => {
  const [code, setCode] = useState("");
  const [service, setService] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uri = `/services/search/${code}`;
    await axios
      .get(uri)
      .then((res) => {
        console.log(res);
        if (res.data) {
          alert("Service finded!");
          setService(true);
          setForm(res.data);
        } else {
          alert("Service not finded :(");
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
    const uri = "/services/modify";
    await axios
      .put(uri, form)
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log("Service updated: ", res.data);
          alert("Service updated!");          
        } else {          
          alert("Service not updated :(");
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

          <button className="btn btn-danger" type="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      {service && (
        <div>
          <h1>Edit Service:</h1>
          <div className="form-group w-25">
            <form onSubmit={handleSubmit2}>

              <label className="col-sm-2 col-form-label">Code: {form.code}</label>
              <br />
              <label className="col-sm-2 col-form-label">Date: {form.date}</label>


             
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  placeholder="Amount..."
                  value={form.amount}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="carCode"
                  placeholder="Car code..."
                  value={form.carCode}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="work"
                  placeholder="Work..."
                  value={form.work}
                  onChange={handleChange2}
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="carKms"
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

export default ModifyService;
