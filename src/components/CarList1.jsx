import axios from "axios";
import React, {useState} from "react";
import CarsTable from './CarsTable';

const CarList1 = () => {    
    const [cars, setCars] = useState(null);   
    
    const handleClick=async e=>{      
        const uri='/cars/search/lists/carlist1';
        const res = await axios.get(uri);
        console.log(res);      
        if(res.data){
             alert("Cars found!");
             setCars(res.data);                          
        }else 
             alert("No matches!");
    };   

    return (
      <>      
        <p>
          See all cars with more 3 years old and just 1 service done
        </p>
       
        <button
            className="btn btn-primary"
            type="submit"
            onClick={handleClick}
          >
            Find!
        </button>         

        {cars && <CarsTable cars={cars} />} 
      </>
  );  
};

export default CarList1;
