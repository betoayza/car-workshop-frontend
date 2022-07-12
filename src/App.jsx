import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Components from "./components/indexComponents.jsx";

const App = () => {
  return (
    <div id="app-div">
      <h1>SuperCar Workshop:</h1>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Menu
            </a>
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cars
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/cars/add">
                        Add
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cars/delete">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cars/search">
                        Search
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cars/modify">
                        Modify
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cars/all">
                        All
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clients
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/clients/add">
                        Add
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/clients/delete">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/clients/search">
                        Search
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/clients/modify">
                        Modify
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/clients/all">
                        All
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/services/add">
                        Add
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/services/delete">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/services/search">
                        Search
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/services/modify">
                        Modify
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/services/all">
                        All
                      </a>
                    </li>
                  </ul>
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

        <Route exact path="/cars/delete" element={<Components.DeleteCar />} />

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
          path="/cars/searchCar/lists/carlist1"
          element={<Components.CarList1 />}
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
