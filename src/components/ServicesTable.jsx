import React from "react";
import ServiceTableRow from "./ServiceTableRow";

const ServicesTable = ({ services }) => {
  if (!Array.isArray(services)) {
    services = [services];
  }
  return (
    <>
      <h2>Services:</h2>
      <table id="services-table" className="table table-success">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Car Code</th>
            <th scope="col">Work</th>
            <th scope="col">Car Kms</th>    
            <th scope="col">Status</th>                  
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((service) => {
              return <ServiceTableRow key={service._id} service={service} />;
            })}
        </tbody>
      </table>
    </>
  );
};

export default ServicesTable;
