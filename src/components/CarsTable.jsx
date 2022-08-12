import React, { useState, useEffect } from "react";
import CarTableRow from "./CarTableRow";
import { ClientsTable } from "./ClientsTable";
import { API } from "../api/api";
import axios from "axios";
import ModifyCar from "./ModifyCar";

const CarsTable = ({ cars }) => {
  const [client, setClient] = useState(null);
  const [modCar, setModCar] = useState(null);
  const [delCar, setDelCar] = useState(null);

  if (!Array.isArray(cars)) {
    cars = [cars];
  }

  useEffect(() => {
    const getClient = async (client) => {
      const code = client;
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
          } else {
            return;
          }
        })
        .catch((error) => error);
    };
    getClient(client);
  }, [client]);

  const seeClient = (clientCode) => {
    setClient(clientCode);
  };

  useEffect(() => {
    const searchCar = async () => {
      const code = carCode;
      const options = {
        url: `${API}/cars/search`,

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
            setCar(res.data);
            setForm(res.data);
          } else {
            alert("Car not found :(");
          }
        })
        .catch((error) => error);
    };
    searchCar();
  }, [modCar])
  

  const editCar = (carCode) => {
    setModCar(carCode);
  };

  useEffect(() => {
    console.log(delCar);
    const deleteCar = async () => {
      if (delCar) {
        if (confirm("Are you sure you want to delete?") == true) {
          const code = delCar;
          const options = {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*",
              Accept: "application/json",
              timeout: 3000,
            },
            data: { code },
          };

          await axios
            .delete(`${API}/cars/delete`, options)
            .then((res) => {
              console.log(res.data);
              if (res.data) {
                alert("Delete Successful!");
              } else {
                alert("Delete failed :(");
              }
            })
            .catch((error) => error);
        } else alert("Delete aborted.");
      } else return;
    };
    deleteCar();
  }, [delCar]);

  const deleteCar = (carCode) => {
    setDelCar(carCode);
  };

  return (
    <>
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
      <br />
      {client && <ClientsTable clients={client} setClients={setClient} />};
      <br />
      {modCar && <ModifyCar carCode={modCar} />}
    </>
  );
};

export default CarsTable;
