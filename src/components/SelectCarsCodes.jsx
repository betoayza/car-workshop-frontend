import React, { useState } from "react";

export const SelectCarsCodes = ({ cars, setModal, setCarCode, setModalSearchCar, setShowAddAndSearch }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    setCarCode(e.target.value);
    setModal(true);
    setModalSearchCar(true);    
  };

  return (
    <div>
      <h4>Search car:</h4>
      <select value={selected} onChange={handleChange}>
        {cars &&
          cars.map((car) => (
            <option key={car._id} value={car.code}>
              {car.code}
            </option>
          ))}
      </select>
    </div>
  );
};
