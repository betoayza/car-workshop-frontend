import axios from "axios";
import React, {useState} from "react";
import ModifyClient from "./ModifyClient";


const SearchClient = () => {
  const [code, setCode]=useState('');  
  const [client, setClient]=useState(null);

  const handleSubmit= async e=>{
    e.preventDefault();
    const uri=`/clients/search/${code}`;
    //search doc
    await axios.get(uri)
      .then(res=>{
        console.log(res);
        if(res.data){                   
          setClient(res.data);          
        }else{
          alert("No matches! :(");
        }
      })
      .catch(error=>error)
      handleReset();    
  };

  const handleChange=e=>{
    setCode(e.target.value);
  };

  const handleReset=e=>{
    setCode('');
  };

  return (
    <div>
      <h2>Search client:</h2>

      <div className="form-group w-25">
        <form onSubmit={handleSubmit}>          

          <div className="row mb-3">
            <input
              type="number"
              className="form-control"
              name="code"
              placeholder="Code..."
              value={code}
              onChange={handleChange}
            />
          </div>        

          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Enviar
              </button>
              <button
                type="reset"
                className="btn btn-danger"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      {client && <ModifyClient data={client} setClient={setClient}/> }
    </div>
  );
};

export default SearchClient;
