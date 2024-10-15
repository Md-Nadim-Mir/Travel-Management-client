
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
import PackagesUpdate from "./Componets/Dashboard/Components/PackagesCollection/PackagesUpdate";
import Statistics from "./Componets/Dashboard/Components/Statistics";
import HotelsUpdates from "./Componets/Dashboard/Components/HotelsCollection/HotelsUpdates";
import UpcomingTour from "./Componets/Dashboard/Components/UpcomingTour";
import PlacesDetails from "./Componets/Places/PlacesDetails";
import PlacesAdded from "./Componets/Dashboard/Components/PlacesCollection/PlacesAdded";
import SinglePlaceUpdate from "./Componets/Dashboard/Components/PlacesCollection/SinglePlaceUpdate";
import Hotels from "./Componets/Hotels/Hotels";
import HotelsAdded from "./Componets/Dashboard/Components/HotelsCollection/HotelsAdded";
import SingleHotelUpdate from "./Componets/Dashboard/Components/HotelsCollection/SingleHotelUpdate";
import HotelsDetails from "./Componets/Hotels/HotelsDetails";
import BlogsAdded from "./Componets/Dashboard/Components/BlogsCollection/BlogsAdded";
import BlogsUpdates from "./Componets/Dashboard/Components/BlogsCollection/BlogsUpdates";
import SingleBlogUpdate from "./Componets/Dashboard/Components/BlogsCollection/SingleBlogUpdate";
import BlogsDetails from "./Componets/Blogs/BlogsDetails";
import PackagesAdded from "./Componets/Dashboard/Components/PackagesCollection/PackagesAdded";
import SinglePackageUpdate from "./Componets/Dashboard/Components/PackagesCollection/SinglePackageUpdate";
import PackagesDetails from "./Componets/Packages/PackagesDetails";
import UserInfo from "./Componets/UserDashboard/UserInfo";
import Chat from "./Componets/Chatbot/Chat";
import Success from "./Componets/PaymentPage/Success";
import Fail from "./Componets/PaymentPage/Fail";
import Cancel from "./Componets/PaymentPage/Cancel";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Loop></Loop>,
    loader:()=>fetch('http://localhost:3000/users'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      //  <-------  UI places route -------------->



      {
        path: "/places",
        element: <PrivateRoutes><Places></Places></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/places')
      },
      {
        path: "/places/:id",
        element: <PrivateRoutes><PlacesDetails></PlacesDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/places/${params.id}`)
      },




       //  <-------  UI hotels route -------------->

      {
        path:'/hotels',
        element:<PrivateRoutes><Hotels></Hotels></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/hotels')
      },
      {
        path: "/hotels/:id",
        element: <PrivateRoutes><HotelsDetails></HotelsDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/hotels/${params.id}`)
      },


      //  <-------  UI packages route -------------->


      {
        path: "/packages",
        element: <PrivateRoutes><Packages></Packages></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/packages')
      },
      {
        path: "/packages/:id",
        element: <PrivateRoutes><PackagesDetails></PackagesDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/packages/${params.id}`)
      },

      //  <------- Blogs -------------->

      {
        path: "/blogs",
        element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>,
        loader:()=>fetch('http://localhost:3000/blogs')
      },
      {
        path: "/blogs/:id",
        element: <PrivateRoutes><BlogsDetails></BlogsDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:3000/blogs/${params.id}`)
      },
      {
         path:"/chatbot",
         element:<Chat></Chat>
      },
      {
         path:'/success',
         element: <Success></Success>
      },
      {
        path:'/fail',
        element:<Fail></Fail>
     },
     {
      path:'/cancel',
      element:<Cancel></Cancel>
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

  // <<< --------------  User Dashboard Route ----------->>>

  {
      path:"/dashboard/user-statistics",
      element:<PrivateRoutes><UserInfo></UserInfo></PrivateRoutes>,
      loader:()=>fetch('http://localhost:3000/bookings-packages/')
  },

 

  // <<----------  Admin Panel Route ------------->>
  {
    
      path: "/dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'/dashboard/statistics',
          element:<Statistics></Statistics>,
          loader:()=>fetch('http://localhost:3000/bookings-packages')
        },
        {
          path:'/dashboard/users',
          element:<Users></Users>,
          loader:()=>fetch('http://localhost:3000/users')
        },

        //  <-------- places route admin --------->

        {
          path:'/dashboard/places-added',
          element:<PlacesAdded></PlacesAdded>,
         
        },
        {
          path:'/dashboard/places-updates',
          element:<PlacesUpdates></PlacesUpdates>,
          loader:()=>fetch('http://localhost:3000/places')
        },
        {
          path:'/dashboard/places-updates/:id',
          element:<SinglePlaceUpdate></SinglePlaceUpdate>,
          loader:({params})=>fetch(`http://localhost:3000/places/${params.id}`)
        },


        // <--------  hotels admin   ---------> 
        {
          path:'/dashboard/hotels-added',
          element:<HotelsAdded></HotelsAdded>,
         
        },
        {
          path:'/dashboard/hotels-updates',
          element:<HotelsUpdates></HotelsUpdates>,
          loader:()=>fetch('http://localhost:3000/hotels')
        },
        {
          path:'/dashboard/hotels-updates/:id',
          element:<SingleHotelUpdate></SingleHotelUpdate>,
          loader:({params})=>fetch(`http://localhost:3000/hotels/${params.id}`)
        },


        //  <-------- packages admin -------->

      
        {
          path:'/dashboard/packages-added',
          element:<PackagesAdded></PackagesAdded>,
         
        },
        {
          path:'/dashboard/packages-updates',
          element:<PackagesUpdate></PackagesUpdate>,
          loader:()=>fetch('http://localhost:3000/packages')
        },
        {
          path:'/dashboard/packages-updates/:id',
          element:<SinglePackageUpdate></SinglePackageUpdate>,
          loader:({params})=>fetch(`http://localhost:3000/packages/${params.id}`)
        },


        // <-----------  blogs admin -------------- >
        {
          path:'/dashboard/blogs-added',
          element:<BlogsAdded></BlogsAdded>,
         
        },
        {
          path:'/dashboard/blogs-updates',
          element:<BlogsUpdates></BlogsUpdates>,
          loader:()=>fetch('http://localhost:3000/blogs')
        },
        {
          path:'/dashboard/blogs-updates/:id',
          element:<SingleBlogUpdate></SingleBlogUpdate>,
          loader:({params})=>fetch(`http://localhost:3000/blogs/${params.id}`)
        },

        //  <----------  upcoming tour admin ------------>
        {
          path:'/dashboard/sta',
          element:<UpcomingTour></UpcomingTour>
        },
      ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  
);
