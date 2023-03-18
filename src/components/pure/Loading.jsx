import "../../styles/Loading.css";

import React from "react";

export const Loading = () => {
  return (
    <div id="loading-parent-div">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
};
