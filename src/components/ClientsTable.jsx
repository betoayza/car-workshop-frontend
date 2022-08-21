import React, { useState } from "react";
import { ClientTableRow } from "./ClientTableRow";
import { Modal } from "./Modal";
import { DeleteClient } from "./DeleteClient";
import { ReAddClient } from "./ReAddClient";

export const ClientsTable = ({ clients, setClients, setModal2 }) => {
  const [modalDeleteClient, setModalDeleteClient] = useState(false);
  const [modal, setModal] = useState(false);
  const [clientCode, setClientCode] = useState(null);
  const [modalReAddClient, setModalReAddClient] = useState(false);

  if (!Array.isArray(clients)) {
    clients = [clients];
  }

  const handleClose = () => {
    setModal2(false);
  };

  const handleDelete = (clientCode) => {
    setClientCode(clientCode);
    setModalDeleteClient(true);
    setModal(true);
  };

  const handleReAdd = (clientCode) => {
    setModal(true);
    setModalReAddClient(true);
    setClientCode(clientCode);
  };

  return modal ? (
    <Modal>
      {modalDeleteClient && (
        <DeleteClient
          code={clientCode}
          setModal={setModal}
          setModalDeleteClient={setModalDeleteClient}
          setClients={setClients}
        />
      )}
      {modalReAddClient && (
        <ReAddClient
          code={clientCode}
          setModal={setModal}
          setModalReAddClient={setModalReAddClient}
        />
      )}
    </Modal>
  ) : (
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
              return (
                <ClientTableRow
                  key={client._id}
                  client={client}
                  handleDelete={handleDelete}
                  handleReAdd={handleReAdd}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
