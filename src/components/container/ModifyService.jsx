import React, { useEffect, useState } from "react";
import axios from "axios";

const initialForm = {
  code: "",
  date: "",
  amount: "",
  carCode: "",
  work: "",
  carKms: "",
};

export const ModifyService = ({ code, setModal, setModalEditService }) => {
  const [service, setService] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState(null);

  // GET service data to fill form
  useEffect(() => {
    const getService = async () => {
      const options = {
        url: `${import.meta.env.VITE_API}/services/search/one`,

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
          setService(response.data);
          setForm(response.data);
        }
      } catch (error) {
        setError(error);
      }
    };
    getService();
  }, []);

  const handleClose = () => {
    setModal(false);
    setModalEditService(false);
    setService(null);
    setIsUpdated(false);
  };

  //---------
  //Handle Form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    const options = {
      url: `${import.meta.env.VITE_API}/services/modify`,
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
      <h3>Service isUpdated ;)</h3>
      <button className="btn btn-danger" type="button" onClick={handleClose}>
        Close
      </button>
    </>
  ) : (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        service && (
          <div className={"add-update-div"}>
            <h1>Edit Service:</h1>
            <div>
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="btn btn-primary" type="submit">
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
