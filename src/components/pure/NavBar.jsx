import React from "react";
import { NavLink } from "react-router-dom";

const styleLink = {
  textDecoration: "none",
  color: "yellowgreen"
}

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" style={styleLink}>
            {({ isActive }) => (
              <p
                className={
                  isActive
                    ? "dropdown-item navbar-brand"
                    : "dropdown-item navbar-brand"
                }
              >
                SuperCar
              </p>
            )}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" style={styleLink}>
                  {({ isActive }) => (
                    <p
                      className={
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </p>
                  )}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/cars/all" style={styleLink}>
                  {({ isActive }) => (
                    <p
                      className={
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Cars
                    </p>
                  )}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/clients/all" style={styleLink}>
                  {({ isActive }) => (
                    <p
                      className={
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Clients
                    </p>
                  )}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services/all" style={styleLink}>
                  {({ isActive }) => (
                    <p
                      className={
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Services
                    </p>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
