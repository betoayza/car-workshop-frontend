import React, { useState } from "react";

export const SelectServicesCodes = ({
  services,
  setModal,
  setServiceCode,
  setModalSearchService,
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    setServiceCode(e.target.value);
    setModal(true);
    setModalSearchService(true);
  };

  return (
    <div>
      <label>
        Search:{" "}
        <select
          className={"form-select"}
          value={selected}
          onChange={handleChange}
        >
          <option value={"---"}>---</option>
          {services &&
            services.map((service) => (
              <option key={service._id} value={service.code}>
                {service.code}
              </option>
            ))}
        </select>
      </label>
      <br /><br />
    </div>
  );
};
