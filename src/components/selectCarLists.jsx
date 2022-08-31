import React, { useState } from "react";

export const SelectCarLists = ({ handleSelect }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    handleSelect(selected);
  };

  return (
    <div>
      <label>
        Lists:{" "}
        <select
          className={"form-select"}
          value={selected}
          onChange={handleChange}
        >
          <option value={"---"}>{"---"}</option>
          <option value={"list1"}>{">3 years old & just 1 service"}</option>
        </select>
      </label>
    </div>
  );
};
