import React from "react";

const ServiceTableRow = ({ service, seeCar }) => {
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
    </tr>
  );
};

export default ServiceTableRow;
