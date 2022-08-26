import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import * as Components from "./components/indexComponents.jsx";
//import Login from "./components/Login";

const App = () => {
  return (
    <div id="app-div" className={"container-fluid"}>
      <h1>SuperCar Workshop</h1>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink to="/">
              {({ isActive }) => (
                <p
                  className={
                    isActive
                      ? "dropdown-item navbar-brand"
                      : "dropdown-item navbar-brand"
                  }
                >
                  Menu
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
                  <NavLink to="/">
                    {({ isActive }) => (
                      <p
                        className={
                          isActive ? "nav-link active" : "nav-link active"
                        }
                      >
                        Home
                      </p>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/cars/all">
                    {({ isActive }) => (
                      <p
                        className={
                          isActive ? "nav-link active" : "nav-link active"
                        }
                      >
                        Cars
                      </p>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/clients/all">
                    {({ isActive }) => (
                      <p
                        className={
                          isActive ? "nav-link active" : "nav-link active"
                        }
                      >
                        Clients
                      </p>
                    )}
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/services/all">
                    {({ isActive }) => (
                      <p
                        className={
                          isActive ? "nav-link active" : "nav-link active"
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

      <div id="components-div"></div>
      <Routes>
        <Route exact path="/" element={<Components.Home />} />

        {/* <Route exact path="/login" element={<Components.Login />} /> */}

        {/* <Route exact path="/signup" element={<Components.SignUp />} /> */}

        <Route exact path="/cars/add/" element={<Components.AddCar />} />

        <Route exact path="/cars/modify" element={<Components.ModifyCar />} />

        <Route
          exact
          path="/cars/search"
          element={<Components.SearchCarForms />}
        />

        <Route
          exact
          path="/cars/search/getcar"
          element={<Components.SearchCar />}
        />

        <Route exact path="/cars/all" element={<Components.AllCars />} />

        <Route
          exact
          path="/cars/searchCar/lists/CarsList1"
          element={<Components.CarsList1 />}
        />

        <Route exact path="/services/add" element={<Components.AddService />} />

        <Route
          exact
          path="/services/delete"
          element={<Components.DeleteService />}
        />

        <Route
          exact
          path="/services/modify"
          element={<Components.ModifyService />}
        />

        <Route
          exact
          path="/services/search"
          element={<Components.SearchService />}
        />

        <Route
          exact
          path="/services/all"
          element={<Components.AllServices />}
        />

        <Route exact path="/clients/add" element={<Components.AddClient />} />

        <Route
          exact
          path="/clients/delete"
          element={<Components.DeleteClient />}
        />

        <Route
          exact
          path="/clients/modify"
          element={<Components.ModifyClient />}
        />

        <Route
          exact
          path="/clients/search"
          element={<Components.SearchClient />}
        />

        <Route exact path="/clients/all" element={<Components.AllClients />} />

        <Route exact path="*" element={<Components.Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
