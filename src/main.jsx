import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import HomeLayout from "./layout/Homelayout/HomeLayout.jsx";
import MenuItemspages from "./pages/Menuitems/MenuItemspages.jsx";
import RestaurentItemspage from "./pages/RestaurentItemspage/RestaurentItemspage.jsx";
import Search from "./components/Search/Search.jsx";
import Couponpage from "./pages/Couponpage/Couponpage.jsx";
import AdminLayout from "./layout/AdminLayout/AdminLayout.jsx";
import Add from "./components/Admin/Add/Add.jsx";
import Addrestaurant from "./components/Admin/Addrestaurant/Addrestaurant.jsx";
import Placeorderpage from "./pages/Placeorderpage/Placeorderpage.jsx";
import Orders from "./components/Admin/Orders/Orders.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Error from "./components/Error/Error.jsx";
import Contactpage from "./pages/Contactpage/Contactpage.jsx";
import Signup from "./components/Sign/Signup/Signup.jsx";
import Signin from "./components/Sign/Signin/Signin.jsx";
import { Provider } from 'react-redux';
import { store } from "./Redux/store.js";
import AddCustomization from "./components/Admin/AddCustomization/AddCustomization.jsx";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },{
    path:"/signup",
    element:<Signup/>
  },
  {
   
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fooditems/:items",
        element: <MenuItemspages />,
      },
      {
        path: "/restaurantitems/:id",
        element: <RestaurentItemspage />,
      },
      {
        path: "/searchitems",
        element: <Search />,
      },
      {
        path: "/coupons",
        element: <Couponpage />,
      },
      {
        path: "/placeorder",
        element: <Placeorderpage />,
      },{
        path:"*",
        element:<Error/>
      },{
        path:"/contact",
        element:<Contactpage/>
      }
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Add />,
      },
      {
        path: "/addrestaurant",
        element: <Addrestaurant />,
      },
      {
        path: "/adminorders",
        element: <Orders />,
      },{
        path:"/addcustomization",
        element:<AddCustomization/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
      </Provider>
  
  </React.StrictMode>
);
