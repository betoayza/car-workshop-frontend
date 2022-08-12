import React from "react";
import { ClientTableRow } from "./ClientTableRow";

export const ClientsTable = ({ clients }) => {
  if (!Array.isArray(clients)) {
    clients = [clients];
  }

  return (
    <div>
      <h2>Clients:</h2>
      <table
        id="users-table"
        className="table table-dark table-striped table-hover border-danger"
      >
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map((client) => {
              return <ClientTableRow key={client._id} client={client} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
