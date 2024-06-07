import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import HomeLayout from './layout/Homelayout/HomeLayout.jsx';
import MenuItems from './components/MenuItems/MenuItems.jsx';
import MenuItemspages from './pages/Menuitems/MenuItemspages.jsx';
import RestaurentItemspage from './pages/RestaurentItemspage/RestaurentItemspage.jsx';
const router = createBrowserRouter([
  {
   
    element: <HomeLayout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"fooditems",
        element:<MenuItemspages/>
      },{
        path:"restaurantitems",
        element:<RestaurentItemspage/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
