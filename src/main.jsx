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
import PrivateRoutes from "./Componets/PrivateRoutes/PrivateRoutes";
import Users from "./Componets/Dashboard/Components/UsersCollection/Users";
import PlacesUpdates from "./Componets/Dashboard/Components/PlacesCollection/PlacesUpdates";
import BlogsUpadate from "./Componets/Dashboard/Components/BlogsCollection/BlogsUpadate";
import PackagesUpdate from "./Componets/Dashboard/Components/PackagesCollection/PackagesUpdate";
import Statistics from "./Componets/Dashboard/Components/Statistics";
import HotelsUpdates from "./Componets/Dashboard/Components/HotelsCollection/HotelsUpdates";
import UpcomingTour from "./Componets/Dashboard/Components/UpcomingTour";

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
        element: <PrivateRoutes><Places></Places></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/places')
      },
      {
        path: "/packages",
        element: <PrivateRoutes><Packages></Packages></PrivateRoutes>,
      },
      {
        path: "/Blogs",
        element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>,
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
  {
    
      path: "/dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'/dashboard/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/dashboard/users',
          element:<Users></Users>,
          loader:()=>fetch('http://localhost:3000/users')
        },
        {
          path:'/dashboard/places',
          element:<PlacesUpdates></PlacesUpdates>
        },
        {
          path:'/dashboard/hotels',
          element:<HotelsUpdates></HotelsUpdates>
        },
        {
          path:'/dashboard/packages',
          element:<PackagesUpdate></PackagesUpdate>
        },
        {
          path:'/dashboard/blogs',
          element:<BlogsUpadate></BlogsUpadate>
        },
        {
          path:'/dashboard/upcoming-tour',
          element:<UpcomingTour></UpcomingTour>
        },
      ]
  }
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
