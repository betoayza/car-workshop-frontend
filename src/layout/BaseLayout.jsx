import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/pure/NavBar";

export const BaseLayout = () => {
  return (
    <div className="text-center">
      <NavBar />
      <main className="mb-3 text-center mt-3">
        <Outlet />
      </main>
      <footer style={{ color: "#fcc200" }}>@ 2023 betoayza | Copyright</footer>
    </div>
  );
};
