import React from "react";

const ServiceTableRow = ({
  service,
  handleSearchCar,
  handleEdit,
  handleReAdd,
  handleDelete,
}) => {
  return (
    <tr
      style={
        service.status === "Active" ? { color: "white" } : { color: "red" }
      }
    >
      <td>{service.code}</td>
      <td>{service.date}</td>
      <td>{service.amount}</td>
      <td>
        {service.carCode}
        {"  "}
        <button
          className="btn btn-outline-light"
          onClick={() => handleSearchCar(service.carCode)}
        >
          See
        </button>
      </td>
      <td>{service.work}</td>
      <td>{service.carKms}</td>
      <td>{service.status}</td>
      <td>
        <button
          className="btn btn-outline-primary"
          onClick={() => handleEdit(service.code)}
        >
          Edit
        </button>
        {service.status === "Inactive" && (
          <button
            className="btn btn-outline-warning"
            onClick={() => handleReAdd(service.code)}
          >
            Re Add
          </button>
        )}
        {service.status === "Active" && (
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(service.code)}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default ServiceTableRow;
