import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { HelmetProvider } from "react-helmet-async";

import Places from "./Componets/Places/Places";
import Packages from "./Componets/Packages/Packages";
import Blogs from "./Componets/Blogs/Blogs";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Loop from "./Componets/Loop/Loop";
import Home from "./Componets/Home/Home";
import Register from "./Componets/Register/Register";
import Login from "./Componets/Login/Login";
import AuthProvider from "./Componets/AuthProvider/AuthProvider";
import ErrorPage from "./Componets/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Loop></Loop>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/places",
        element: <Places></Places>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
