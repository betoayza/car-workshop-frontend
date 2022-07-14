import React from "react";
import ServiceTableRow from "./ServiceTableRow";

const ServicesTable = ({ services, setServices }) => {
  if (!Array.isArray(services)) {
    services = [services];
  }

  const handleCloseTable = () => {
    setServices(null);
  };

  return (
    <div>
      <h2>Services:</h2>
      <table id="services-table" className="table table-dark table-striped table-hover border-success">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Date</th>
            <th scope="col">Amount (USD)</th>
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

      <div className="col-12">
        <button
          className="btn btn-danger"
          type="reset"
          onClick={handleCloseTable}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ServicesTable;
