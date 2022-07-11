import React from "react";
import { ClientTableRow } from "./ClientTableRow";

export const ClientsTable = ({ clients }) => {
  if (!Array.isArray(clients)) {
    clients = [clients];
  }

  return (
    <div>
      <h1>Clients found:</h1>
      <table id="users-table" className="table table-success">
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