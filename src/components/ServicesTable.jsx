import React from "react";
import ServiceTableRow from "./ServiceTableRow";

const ServicesTable = ({ services, setServices }) => {
  const [car, setCar] = useState(null);

  if (!Array.isArray(services)) {
    services = [services];
  }

  useEffect(() => {
    const getClient = async (car) => {
      const code = car;
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
          } else {
            return;
          }
        })
        .catch((error) => error);
    };
    getClient(car);
  }, [car]);

  const seeCar = (carCode) => {
    setCar(carCode);
  };

  return (
    <div>
      <h2>Services:</h2>
      <table
        id="services-table"
        className="table table-dark table-striped table-hover border-success"
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
          </tr>
        </thead>
        <tbody>
          {services &&
            services.map((service) => {
              return (
                <ServiceTableRow
                  key={service._id}
                  service={service}
                  seeCar={seeCar}
                />
              );
            })}
        </tbody>
      </table>
      {car && <CarsTable cars={car} />}
    </div>
  );
};

export default ServicesTable;
