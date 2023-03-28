import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Auth from "./Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
