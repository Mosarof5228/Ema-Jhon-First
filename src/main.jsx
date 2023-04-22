import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/MainLayout/Home';
import Shop from './assets/components/SHOP/Shop';
import Orders from './assets/components/Orders/Orders';
import Inventory from './assets/components/Inventory/Inventory';
import Login from './assets/components/Login/Login'
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './assets/components/Checkout/Checkout';
import SignUp from './assets/components/SignUp/SignUp';
import AuthProvider from './assets/components/Providers/AuthProvider';
import PrivetRout from './Routes/PrivetRout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: '/Orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'Inventory',
        element: <PrivetRout><Inventory></Inventory></PrivetRout>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <PrivetRout> <Checkout></Checkout></PrivetRout>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
