import React, { useState } from "react";

export const SelectCarLists = ({ handleSelect }) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
    handleSelect(selected);
  };

  return (
    <div className="d-flex justify-content-center mt-2 mb-2">
      <select
        className={"form-select bg-dark w-50"}
        value={selected}
        onChange={handleChange}
        style={{ color: "white" }}
      >
        <option style={{ color: "gold" }} value={""} disabled>
          Categories
        </option>
        <option value={"list1"}>
          {" More than 3 years old & just 1 service"}
        </option>
      </select>
    </div>
  );
};
