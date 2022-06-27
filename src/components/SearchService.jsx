import axios from "axios";
import React, { useState } from "react";

const SearchService = () => {
  const [code, setCode] = useState("");
  const [service, setService] = useState(null);

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
          setService(res.data);
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
        <div id="table-div">
          <h3>Service:</h3>
          <table className="table">
            <thead>
              <tr className="table-success" id="tr-table-header">
                <th scope="col">Code</th>
                <th scope="col">Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Car Code</th>
                <th scope="col">Work</th>
                <th scope="col">Car Kms</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(service).length === 0 ? (
                <tr colSpan="7">
                  <td>No data</td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td>{service.code}</td>
                    <td>{service.date}</td>
                    <td>{service.amount}</td>
                    <td>{service.carCode}</td>
                    <td>{service.work}</td>
                    <td>{service.carKms}</td>
                    <td>{service.status}</td>
                  </tr>
                 
                </>
              )}
            </tbody>
          </table>
        </div>
      )
      
      }
    </>
  );
};

export default SearchService;
