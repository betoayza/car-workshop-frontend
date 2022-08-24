import React, { useState } from "react";

export const SelectCarsCodes = ({
  cars,
  setModal,
  setCarCode,
  setModalSearchCar,
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
    setCarCode(e.target.value);
    setModal(true);
    setModalSearchCar(true);
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
          {cars &&
            cars.map((car) => (
              <option key={car._id} value={car.code}>
                {car.code}
              </option>
            ))}
        </select>
      </label>
      <br /><br />
    </div>
  );
};
