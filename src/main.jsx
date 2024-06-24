import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './index.css'

import Places from './Componets/Places/Places';
import Packages from './Componets/Packages/Packages';
import Blogs from './Componets/Blogs/Blogs';
import Dashboard from './Componets/Dashboard/Dashboard';
import Loop from './Componets/Loop/Loop';
import Home from './Componets/Home/Home';
import Register from './Componets/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Loop></Loop>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/places',
        element:<Places></Places>
      },
      {
        path:'/packages',
        element:<Packages></Packages>
      },
      {
        path:'/Blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
        
    ]
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
