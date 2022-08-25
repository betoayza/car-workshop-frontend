import React, { useState, useEffect } from "react";
import CarTableRow from "./CarTableRow";
import ModifyCar from "./ModifyCar";
import { Modal } from "./Modal";
import { DeleteCar } from "./DeleteCar";
import AddCar from "./AddCar";
import { SelectCarsCodes } from "./SelectCarsCodes";
import SearchCar from "./SearchCar";
import SearchClient from "./SearchClient";
import { ReAddCar } from "./ReAddCar";

const CarsTable = ({ cars, setCars, AddAndSearch = true }) => {
  const [clientCode, setClientCode] = useState(null);
  const [carCode, setCarCode] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalCarEdit, setModalCarEdit] = useState(false);
  const [modalCarDelete, setModalCarDelete] = useState(false);
  const [modalAddCar, setModalAddCar] = useState(false);
  const [modalSearchCar, setModalSearchCar] = useState(false);
  const [showAddAndSearch, setShowAddAndSearch] = useState(AddAndSearch);
  const [modalSearchClient, setModalSearchClient] = useState(false);
  const [modalReAddCar, setModalReAddCar] = useState(false);

  if (!Array.isArray(cars)) {
    cars = [cars];
  }

  const seeClient = (clientCode) => {
    setClientCode(clientCode);
    setModal(true);
    setModalSearchClient(true);
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

  const handleActivateCar = (carCode) => {
    setModal(true);
    setModalReAddCar(true);
    setCarCode(carCode);
  };

  return modal ? (
    <Modal>
      {modalCarEdit && (
        <ModifyCar
          code={carCode}
          setModal={setModal}
          setModalCarEdit={setModalCarEdit}
        />
      )}
      {modalCarDelete && (
        <DeleteCar
          code={carCode}
          setModal={setModal}
          setModalCarDelete={setModalCarDelete}
          setCars={setCars}
        />
      )}
      {modalAddCar && (
        <AddCar setModal={setModal} setModalAddCar={setModalAddCar} />
      )}
      {modalSearchCar && (
        <SearchCar
          code={carCode}
          setModal={setModal}
          setShowAddAndSearch={setShowAddAndSearch}
          setModalSearchCar={setModalSearchCar}
        />
      )}
      {modalSearchClient && (
        <SearchClient
          code={clientCode}
          setModal={setModal}
          setModalSearchClient={setModalSearchClient}
        />
      )}
      {modalReAddCar && (
        <ReAddCar
          code={carCode}
          setModal={setModal}
          setModalReAddCar={setModalReAddCar}
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

      {cars.length === 1 ? <h2>Car:</h2> : <h2>Cars:</h2>}
      <div className={"table-responsive"}>
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
                    handleActivateCar={handleActivateCar}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarsTable;
