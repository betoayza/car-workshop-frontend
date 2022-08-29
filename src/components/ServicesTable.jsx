import React, { useState } from "react";
import ServiceTableRow from "./ServiceTableRow";
import { Modal } from "./Modal";
import SearchCar from "./SearchCar";
import { ReAddService } from "./ReAddService";
import { ModifyService } from "./ModifyService";
import { DeleteService } from "./DeleteService";
import AddService from "./AddService";
import { ServicesSearchingBar } from "./ServicesSearchingBar";

export const ServicesTable = ({
  services,
  setServices,
  showAddAndSearch = true,
}) => {
  const [carCode, setCarCode] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalSearchCar, setModalSearchCar] = useState(false);
  const [modalReAddService, setModalReAddService] = useState(false);
  const [modalEditService, setModalEditService] = useState(false);
  const [modalDeleteService, setModalDeleteService] = useState(false);
  const [serviceCode, setServiceCode] = useState(null);
  const [modalSearchService, setModalSearchService] = useState(false);
  const [modalAddService, setModalAddService] = useState(false);
  const [servicesFound, setServicesFound] = useState(null);

  if (!Array.isArray(services)) {
    services = [services];
  }

  const handleSearchCar = (carCode) => {
    setCarCode(carCode);
    setModal(true);
    setModalSearchCar(true);
  };

  const handleReAdd = (serviceCode) => {
    setServiceCode(serviceCode);
    setModal(true);
    setModalReAddService(true);
  };

  const handleEdit = (serviceCode) => {
    setServiceCode(serviceCode);
    setModal(true);
    setModalEditService(true);
  };

  const handleDelete = (serviceCode) => {
    setServiceCode(serviceCode);
    setModal(true);
    setModalDeleteService(true);
  };

  const handleAddService = () => {
    setModal(true);
    setModalAddService(true);
  };

  const handleSearchService = () => {
    setModal(true);
    setModalSearchService(true);
  };

  return modal ? (
    <Modal>
      {modalSearchCar && (
        <SearchCar
          code={carCode}
          setModal={setModal}
          setModalSearchCar={setModalSearchCar}
        />
      )}
      {modalReAddService && (
        <ReAddService
          code={serviceCode}
          setModal={setModal}
          setModalReAddService={setModalReAddService}
        />
      )}
      {modalEditService && (
        <ModifyService
          code={serviceCode}
          setModal={setModal}
          setModalEditService={setModalEditService}
        />
      )}
      {modalDeleteService && (
        <DeleteService
          code={serviceCode}
          setModal={setModal}
          setModalDeleteService={setModalDeleteService}
          setServices={setServices}
        />
      )}
      {modalSearchService && (
        <ServicesSearchingBar
          services={servicesFound}
          setServices={setServicesFound}
          setModal={setModal}
          setModalSearchService={setModalSearchService}
        />
      )}
      {modalAddService && (
        <AddService
          setModal={setModal}
          setModalAddService={setModalAddService}
        />
      )}
    </Modal>
  ) : (
    <div>
      {showAddAndSearch && (
        <>
          <button className="btn btn-success" onClick={handleAddService}>
            Add
          </button>
          <button className="btn btn-primary" onClick={handleSearchService}>
            Search
          </button>
        </>
      )}

      {services.length === 1 ? <h2>Service:</h2> : <h2>Services:</h2>}
      <div className={"table-responsive"}>
        <table
          className={
            "table table-dark table-striped table-hover border-success"
          }
        >
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Date</th>
              <th scope="col">Amount (USD)</th>
              <th scope="col">Car Code</th>
              <th scope="col">Work</th>
              <th scope="col">Car Kms</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services.map((service) => {
                return (
                  <ServiceTableRow
                    key={service._id}
                    service={service}
                    handleSearchCar={handleSearchCar}
                    handleEdit={handleEdit}
                    handleReAdd={handleReAdd}
                    handleDelete={handleDelete}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
