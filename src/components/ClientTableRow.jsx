import React from "react";

export const ClientTableRow = ({
  client,
  handleDelete,
  handleReAdd,
  handleEdit,
}) => {
  return (
    <tr>
      <td>{client.code}</td>
      <td>{client.id}</td>
      <td>{client.name}</td>
      <td>{client.surname}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>{client.status}</td>
      <td>
        <button
          className={"btn btn-primary"}
          onClick={() => handleEdit(client.code)}
        >
          Edit
        </button>
        {client.status === "Inactive" && (
          <button
            className={"btn btn-warning"}
            onClick={() => handleReAdd(client.code)}
          >
            Re Add
          </button>
        )}

        {client.status === "Active" && (
          <button
            className={"btn btn-danger"}
            onClick={() => handleDelete(client.code)}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};
