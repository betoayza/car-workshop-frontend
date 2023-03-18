import React from "react";
import ferrari from "../../img/ferrari.jpg";

export const Home = () => {
  return (
    <div className={"text-center"}>
      <h2>For Admins</h2>
      <img src={ferrari} alt="Ferrari" />
    </div>
  );
};
