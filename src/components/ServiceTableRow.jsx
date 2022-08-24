import React from "react";

const ServiceTableRow = ({ service, seeCar, handleEdit, handleDelete }) => {
  return (
    <tr>
      <td>{service.code}</td>
      <td>{service.date}</td>
      <td>{service.amount}</td>
      <td>
        {service.carCode}{" "}
        <button
          className="btn btn-light"
          onClick={() => seeCar(service.carCode)}
        >
          See
        </button>
      </td>
      <td>{service.work}</td>
      <td>{service.carKms}</td>
      <td>{service.status}</td>
      <td><button className="button" onClick={()=>handleEdit(service.code)}>Edit
        </button>
        <button className="button" onClick={()=>handleDelete(service.code)}></button>
        </td>
    </tr>
  );
};

export default ServiceTableRow;
