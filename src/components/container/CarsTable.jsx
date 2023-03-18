import React, { useState } from "react";
import CarTableRow from "../pure/CarTableRow";
import ModifyCar from "./ModifyCar";
import { Modal } from "../pure/Modal";
import { DeleteCar } from "./DeleteCar";
import AddCar from "./AddCar";
import SearchClient from "./SearchClient";
import { ReAddCar } from "./ReAddCar";
import { CarsSearchingBar } from "./CarsSearchingBar";
import { SelectCarLists } from "./SelectCarLists";
import CarsList1 from "./CarsList1";

const CarsTable = ({ cars, setCars, showAddAndSearch = true }) => {
  const [clientCode, setClientCode] = useState(null);
  const [carCode, setCarCode] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalCarEdit, setModalCarEdit] = useState(false);
  const [modalCarDelete, setModalCarDelete] = useState(false);
  const [modalAddCar, setModalAddCar] = useState(false);
  const [modalSearchCar, setModalSearchCar] = useState(false);
  const [modalSearchClient, setModalSearchClient] = useState(false);
  const [modalReAddCar, setModalReAddCar] = useState(false);
  const [searchedCars, setSearchedCars] = useState(null);
  const [modalSelected, setModalSelected] = useState(false);
  const [carList, setCarList] = useState(null);

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

  const handleAddCar = () => {
    setModal(true);
    setModalAddCar(true);
  };

  const handleSearchCar = () => {
    setModal(true);
    setModalSearchCar(true);
  };

  const handleActivateCar = (carCode, clientCode) => {
    setModal(true);
    setModalReAddCar(true);
    setCarCode(carCode);
    setClientCode(clientCode);
  };

  const handleSelect = (carList) => {
    setModal(true);
    setModalSelected(true);
    setCarList(carList);
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
        <>
          <CarsSearchingBar
            cars={searchedCars}
            setCars={setSearchedCars}
            setModal={setModal}
            setModalSearchCar={setModalSearchCar}
          />
        </>
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
          clientCode={clientCode}
          setModal={setModal}
          setModalReAddCar={setModalReAddCar}
        />
      )}
      {modalSelected && (
        <>
          <CarsList1 setModal={setModal} setModalSelected={setModalSelected} />
        </>
      )}
    </Modal>
  ) : (
    <>
      {showAddAndSearch && (
        <div>
          <button className={"btn btn-success"} onClick={handleAddCar}>
            Add
          </button>
          <button className={"btn btn-primary"} onClick={handleSearchCar}>
            Search
          </button>
          <SelectCarLists handleSelect={handleSelect} />
        </div>
      )}

      {cars.length === 1 ? <h2>Car:</h2> : <h2>Cars:</h2>}
      <div className={"table-responsive"}>
        <table
          className={"table table-dark table-striped table-hover border-info"}
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
