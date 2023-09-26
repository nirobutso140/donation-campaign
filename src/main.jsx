import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import DonationDetails from './components/DonationDetails/DonationDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: ()=>fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation/>
      },
      {
        path: "/statistics",
        element: <Statistics/>,
        
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails/>,
        loader: ()=> fetch('/donation.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
