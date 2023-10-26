import axios from "axios";
import React, { useState, useEffect } from "react";

const initialForm = {
  code: "",
  id: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  status: "Active",
};

const ModifyClient = ({ code, setModal, setModalEdit }) => {
  const [form, setForm] = useState(initialForm);
  const [client, setClient] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  // GET client data to fill form
  useEffect(() => {
    const getClient = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/clients/search/one`,

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
        },
        timeout: 3000,
        params: { code },
      };

      try {
        const response = await axios.request(options);

        if (response.data) {
          setClient(response.data);
          setForm(response.data);
        }
      } catch (error) {
        setError(error);
      }
    };
    getClient();
  }, []);

  const handleClose = () => {
    setModal(false);
    setModalEdit(false);
    setClient(null);
    setIsUpdated(false);
  };

  //---------
  //Handle Update Form
  const handleChange2 = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const options = {
      url: `${import.meta.env.VITE_API}/clients/modify`,
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
      timeout: 3000,
      data: form,
    };

    try {
      const response = await axios.request(options);

      if (response.data) setIsUpdated(true);
    } catch (error) {
      setError(error);
    }
  };

  return isUpdated ? (
    <>
      <h3>Client isUpdated :)</h3>
      <button className="btn btn-danger" type="reset" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        client && (
          <div className={"add-update-div"}>
            <h2>Modify Client:</h2>
            <div>
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
                    placeholder="ID..."
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

                <button className="btn btn-success" type="submit">
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ModifyClient;
