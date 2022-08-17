import React, { useState, useEffect } from "react";
import CarTableRow from "./CarTableRow";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";
import axios from "axios";
import ModifyCar from "./ModifyCar";
import { Modal } from "./Modal";
import { DeleteCar } from "./DeleteCar";
import AddCar from "./AddCar";
import { SelectCarsCodes } from "./SelectCarsCodes";
import SearchCar from "./SearchCar";

const CarsTable = ({ cars, AddAndSearch=true }) => {
  const [client, setClient] = useState(null);
  const [clientCode, setClientCode] = useState(null);
  const [carCode, setCarCode] = useState(null);
  const [delCode, setDelCode] = useState(null);
  const [car, setCar] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalCarEdit, setModalCarEdit] = useState(false);
  const [modalCarDelete, setModalCarDelete] = useState(false);
  const [modalClient, setModalClient] = useState(false);
  const [modalAddCar, setModalAddCar] = useState(false);
  const [modalSearchCar, setModalSearchCar] = useState(false);
  const [showAddAndSearch, setShowAddAndSearch] = useState(AddAndSearch);

  if (!Array.isArray(cars)) {
    cars = [cars];
  }

  useEffect(() => {
    const getClient = async () => {
      const code = clientCode;
      const options = {
        url: `${API}/clients/search`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/json",
          timeout: 3000,
        },
        params: { code },
      };

      await axios
        .request(options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setClient(res.data);
            setModal(true);
            setModalClient(true);
          } else return;
        })
        .catch((error) => error);
    };
    clientCode ? getClient() : null;
  }, [clientCode]);

  const seeClient = (clientCode) => {
    setClientCode(clientCode);
  };

  const editCar = (carCode) => {
    setCarCode(carCode);
    setModalCarEdit(true);
    setModal(true);
  };

  const deleteCar = (carCode) => {
    setCarCode(carCode);
    setModal(true);
    setModalCarDelete(true);
  };

  const addCar = () => {
    setModal(true);
    setModalAddCar(true);
  };

  return modal ? (
    <Modal>
      {modalCarEdit && <ModifyCar code={carCode} setModal={setModal} />}
      {modalCarDelete && <DeleteCar code={carCode} setModal={setModal} />}
      {modalClient && (
        <ClientsTable
          clients={client}
          setClients={setClient}
          setModal={setModal}
        />
      )}
      {modalAddCar && <AddCar setModal={setModal} />}
      {modalSearchCar && (
        <SearchCar
          code={carCode}
          setModal={setModal}
          setShowAddAndSearch={setShowAddAndSearch}
        />
      )}
    </Modal>
  ) : (
    <>
      {showAddAndSearch && (
        <div>
          <button className={"btn btn-success"} onClick={addCar}>
            Add
          </button>
          <SelectCarsCodes
            cars={cars}
            setModal={setModal}
            setCarCode={setCarCode}
            setModalSearchCar={setModalSearchCar}
            setShowAddAndSearch={setShowAddAndSearch}
          />
        </div>
      )}

      <h2>Cars:</h2>
      <table
        id="cars-table"
        className="table table-dark table-striped table-hover border-info"
      >
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Patent</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Client code</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((car) => {
              return (
                <CarTableRow
                  key={car._id}
                  car={car}
                  seeClient={seeClient}
                  editCar={editCar}
                  deleteCar={deleteCar}
                />
              );
            })}
        </tbody>
      </table>
      {/* <button className="btn btn-danger" onClick={handleClose}>
        Close
      </button> */}
    </>
  );
};

export default CarsTable;
