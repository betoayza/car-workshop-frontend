import axios from "axios";
import React, { useState } from "react";


const DeleteCar = () => {
  const [code, setCode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uri = `/cars/delete/${code}`;
    await axios.delete(uri)
      .then((res) => {
        console.log(res);       
        if (res.data) {
          alert("Delete Successful!");
        } else {
          alert("Car not founded!");          
        }
      })
      .catch(error=>error);
  };

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleReset = (e) => {
    setCode('');
  };

  return (
    <>
      <h2> Delete a Car </h2>
        <form onSubmit={handleSubmit}>
      <div className="form-group w-25">
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
              Enviar
            </button>
         
            <button
              className="btn btn-danger"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
       
      </div>
        </form>
    </>
  );
};

export default DeleteCar;