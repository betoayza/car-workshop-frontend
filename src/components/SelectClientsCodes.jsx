import React, { useState } from "react";

export const SelectClientsCodes = ({
  clients,
  setModal,
  setClientCode,
  setModalSearchClient,
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    setClientCode(e.target.value);
    setModal(true);
    setModalSearchClient(true);
  };

  return (
    <div>
      <label>
        Search:{" "}
        <select value={selected} onChange={handleChange}>
          <option value={"---"}>---</option>
          {clients &&
            clients.map((client) => (
              <option key={client._id} value={client.code}>
                {client.code}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};
