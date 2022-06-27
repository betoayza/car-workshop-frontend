import axios from "axios";
import React, { useState } from "react";

const DeleteClient = () => {
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uri=`/clients/delete/${code}`;
        await axios.delete(uri)
            .then(res=>{
                console.log(res);
                if(res.data){
                    alert("Delete successful!");
                }else{
                    alert("User not founded :(");
                }
            })
            .catch(error=>error);
            handleReset();
    };

    const handleChange=e=>{
        setCode(e.target.value);
    };

    const handleReset=e=>{
        setCode('');
    };

  return (
    <>
      <h2>Delete client:</h2>

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
        <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Enviar
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

export default DeleteClient;
