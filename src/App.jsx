import "./App.css";
import { Routes, Route } from "react-router-dom";
import * as Components from "./components/indexComponents.js";

const App = () => {
  return (
    <div id="app-div">
      <h1>SuperCar Workshop:</h1>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Menu
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/car-workshop-frontend/#/">
                    Home
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cars
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="/car-workshop-frontend/#/cars/add">
                        Add
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/cars/delete"
                      >
                        Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/cars/search"
                      >
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/cars/modify"
                      >
                        Modify
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Clients
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/clients/add"
                      >
                        Add
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/clients/delete"
                      >
                        Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/clients/search"
                      >
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/clients/modify"
                      >
                        Modify
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/services/add"
                      >
                        Add
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/services/delete"
                      >
                        Delete
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/services/search"
                      >
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="/car-workshop-frontend/#/services/modify"
                      >
                        Modify
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

          <Route
            exact
            path="/cars/searchCar/lists/carlist1"
            element={<Components.CarList1 />}
          />

          <Route
            exact
            path="/services/add"
            element={<Components.AddService />}
          />

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

          <Route exact path="/clients/add" element={<Components.AddClient />} />

          <Route
            exact
            path="/clients/delete"
            element={<Components.DeleteClient />}
          />

          <Route
            exact
            path="/clients/modify"
            element={<Components.SearchClient />}
          />

          <Route
            exact
            path="/clients/search"
            element={<Components.SearchClient />}
          />

          <Route exact path="*" element={<Components.Error404 />} />
        </Routes>
     
    </div>
  );
};

export default App;
