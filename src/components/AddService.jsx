import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import moment from 'moment';

const AddService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      code: Date.now(),
      date: moment(new Date()).format("DD/MM/YYYY"),
      amount: "",
      carCode: "",
      work: "",
      carKms: "",      
      status: "Active",
    },
  });
  const onError = (errors, e) => console.log(errors, e);

  const onSubmit = async (data, e) => {
    //e.preventDefault();
    const uri = "/services/add";
    console.log(data);
    await axios.post(uri, data)
      .then(res=>{
        console.log(res);
        if(res.data){
          alert("Add Succesful!");
        }else{
          alert("Car not founded :(");
        }
      })
      .catch(error=>error)
    e.target.reset();
  };

  return (
    <>
      <h2>Add service:</h2>
      <div className="form-group w-25">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            {...register("code", { required: { value: true } })}
            type="hidden"
            className="form-control"            
          />

          <input
            {...register("date", {
              required: { value: true, message: "Especify a date" },
            })}
            type="hidden"
            className="form-control mb-2"            
          />

          {errors.date && (
            <span className="text-danger text-small d-block mb-2">
              <p>{errors.date.message}</p>
            </span>
          )}

          <input
            {...register("amount", {
              required: { value: true, message: "Especify amount" },
            })}
            type="number"
            className="form-control mb-2"          
            placeholder="Amount..."
          />

          {errors.amount && (
            <span className="text-danger text-small d-block mb-2">
              <p>{errors.amount.message}</p>
            </span>
          )}

          <input
            {...register("carCode", {
              required: { value: true, message: "Especify car code" },
            })}
            type="number"
            className="form-control mb-2"          
            placeholder="Car code..."
          />

          {errors.carCode && (
            <span className="text-danger text-small d-block mb-2">
              <p>{errors.carCode.message}</p>
            </span>
          )}

          <input
            {...register("work", {
              required: { value: true, message: "Especify work done" },
            })}
            type="text"
            className="form-control mb-2"          
            placeholder="Work..."
          />

          {errors.work && (
            <span className="text-danger text-small d-block mb-2">
              <p>{errors.work.message}</p>
            </span>
          )}

          <input
            {...register("carKms", {
              required: { value: true, message: "Especify car kms" },
            })}
            type="number"
            className="form-control mb-2"          
            placeholder="Car Kms..."
          />

          {errors.carKms && (
            <span className="text-danger text-small d-block mb-2">
              <p>{errors.carKms.message}</p>
            </span>
          )}          

          <input
            {...register("status", { required: { value: true } })}
            type="hidden"
            className="form-control"            
          />

          <input type="submit" className="btn btn-primary" value="Add" />
        </form>
      </div>
    </>
  );
};

export default AddService;
