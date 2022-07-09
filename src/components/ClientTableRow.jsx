import React from "react";

export const ClientTableRow = ({ client }) => {
  return (    
      <tr>
        <td>{client.code}</td>
        <td>{client.id}</td>
        <td>{client.name}</td>
        <td>{client.surname}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{client.status}</td>
      </tr>   
  );
};
