import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/pure/NavBar";

export const BaseLayout = () => {
  return (
    <div>
      <NavBar />
      <main className="mb-5 text-center mt-3">
        <Outlet />
      </main>
      <footer className={"text-center fixed-bottom"} style={{ color: "white" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
