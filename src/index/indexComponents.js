import { Home } from "../pages/home/Home";
// import SignUp from "./SignUp";
// import Login from "./Login";

import AddClient from "../components/container/AddClient";
import { DeleteClient } from "../components/container/DeleteClient";
import ModifyClient from "../components/container/ModifyClient";
import { AllClients } from "../pages/clients/AllClients";

import AddService from "../components/container/AddService";
import { DeleteService } from "../components/container/DeleteService";
import { ModifyService } from "../components/container/ModifyService";
import { AllServices } from "../pages/services/AllServices";

import AddCar from "../components/container/AddCar";
import ModifyCar from "../components/container/ModifyCar";
import CarsList1 from "../components/container/CarsList1";
import { AllCars } from "../pages/cars/AllCars";

import Error404 from "../pages/404/Error404";
import { BaseLayout } from "../layout/BaseLayout";

export {
  Home,
  AddClient,
  DeleteClient,
  ModifyClient,
  AllClients,
  AddService,
  DeleteService,
  ModifyService,
  AllServices,
  AddCar,
  ModifyCar,
  AllCars,
  CarsList1,
  Error404,
  BaseLayout,
};
