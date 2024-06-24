import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Componets/Home/Home';
import Places from './Componets/Places/Places';
import Packages from './Componets/Packages/Packages';
import Blogs from './Componets/Blogs/Blogs';
import Dashboard from './Componets/Dashboard/Dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
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
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
