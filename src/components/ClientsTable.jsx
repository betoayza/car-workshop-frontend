import React from "react";
import { ClientTableRow } from "./ClientTableRow";

export const ClientsTable = ({ clients, setClients }) => {
  if (!Array.isArray(clients)) {
    clients = [clients];
  }

  const handleCloseTable = () => {
    setClients(null);
  };

  return (
    <div>
      <h2>Clients:</h2>
      <table
        id="users-table"
        className="table table-dark table-striped table-hover border-danger"
      >
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">DNI</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Status</th>
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
