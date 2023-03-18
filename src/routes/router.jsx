import React from "react";
import { createHashRouter } from "react-router-dom";
import * as Components from "../index/indexComponents";

export const router = createHashRouter([
  {
    path: "/",
    element: <Components.BaseLayout />,
    errorElement: <Components.Error404 />,
    children: [
      {
        index: true,
        element: <Components.Home />,
      },
      {
        path: "cars/add",
        element: <Components.AddCar />,
      },
      {
        path: "cars/modify",
        element: <Components.ModifyCar />,
      },     
      {
        path: "cars/all",
        element: <Components.AllCars />,
      },
      {
        path: "cars/searchCar/lists/CarsList1",
        element: <Components.CarsList1 />,
      },
      {
        path: "services/add",
        element: <Components.AddService />,
      },
      {
        path: "services/modify",
        element: <Components.ModifyService />,
      },
      {
        path: "services/delete",
        element: <Components.DeleteService />,
      },
      {
        path: "services/all",
        element: <Components.AllServices />,
      },
      {
        path: "clients/add",
        element: <Components.AddClient />,
      },

      {
        path: "clients/delete",
        element: <Components.DeleteClient />,
      },
      {
        path: "clients/modify",
        element: <Components.ModifyClient />,
      },
      {
        path: "clients/all",
        element: <Components.AllClients />,
      },
    ],
  },
]);
