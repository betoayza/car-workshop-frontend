import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  data: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      url: "/api/login",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
      params: form,
      timeout: 3000,
    };
    console.log(form);
    await axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Login Successful!");
          console.log("Bienvenido: ", res.data.username, "!");
          navigate(uri, { state: { userData } });
        } else {
          alert("Wrong credentials :(");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    handleReset();
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              navigate("/signup");
            }}
          >
            SignUp
          </button>
        </div>
      </div>

      <h2>Login</h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              className="form-control"
              name="data"
              placeholder="Email o usuario..."
              value={form.data}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password..."
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="reset" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
