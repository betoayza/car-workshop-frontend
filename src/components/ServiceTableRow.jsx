import React from "react";

const ServiceTableRow = ({ service }) => {
  return (
    <tr>
      <td>{service.code}</td>
      <td>{service.date}</td>
      <td>{service.amount}</td>
      <td>{service.carCode}</td>
      <td>{service.work}</td>
      <td>{service.carKms}</td>     
      <td>{service.status}</td>
    </tr>
  );
};

export default ServiceTableRow;