import React, { useState } from "react";
import { ClientTableRow } from "../pure/ClientTableRow";
import { Modal } from "../pure/Modal";
import { DeleteClient } from "./DeleteClient";
import { ReAddClient } from "./ReAddClient";
import ModifyClient from "./ModifyClient";
import AddClient from "./AddClient";
import { ClientsSearchingBar } from "./ClientsSearchingBar";

export const ClientsTable = ({
  clients,
  setClients,
  showAddAndSearch = true,
}) => {
  const [modalDeleteClient, setModalDeleteClient] = useState(false);
  const [modal, setModal] = useState(false);
  const [clientCode, setClientCode] = useState(null);
  const [modalReAddClient, setModalReAddClient] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalSearchClient, setModalSearchClient] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [clientsFound, setClientsFound] = useState(null);

  if (!Array.isArray(clients)) {
    clients = [clients];
  }

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

  const handleEdit = (clientCode) => {
    setModal(true);
    setModalEdit(true);
    setClientCode(clientCode);
  };

  const handleAdd = () => {
    setModal(true);
    setModalAdd(true);
  };

  const handleSearchClient = () => {
    setModal(true);
    setModalSearchClient(true);
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
      {modalEdit && (
        <ModifyClient
          code={clientCode}
          setModal={setModal}
          setModalEdit={setModalEdit}
        />
      )}
      {modalAdd && <AddClient setModal={setModal} setModalAdd={setModalAdd} />}
      {modalSearchClient && (
        <ClientsSearchingBar
          clients={clientsFound}
          setClients={setClientsFound}
          setModal={setModal}
          setModalSearchClient={setModalSearchClient}
        />
      )}
    </Modal>
  ) : (
    <div className={""}>
      {showAddAndSearch && (
        <>
          <button className={"btn btn-outline-success"} onClick={handleAdd}>
            Add
          </button>
          <button
            className={"btn btn-outline-primary"}
            onClick={handleSearchClient}
          >
            Search
          </button>
        </>
      )}

      {clients.length === 1 ? <h2>Client:</h2> : <h2>Clients:</h2>}
      <div className={"table-responsive container border border-2 rounded p-0"}>
        <table className={"table table-dark table-hover border-danger"}>
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
            {clients.map((client) => {
              return (
                <ClientTableRow
                  key={client._id}
                  client={client}
                  handleDelete={handleDelete}
                  handleReAdd={handleReAdd}
                  handleEdit={handleEdit}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
