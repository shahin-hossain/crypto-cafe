import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Homepage from './components/Homepage/Homepage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header'
import Coins from './components/Coins/Coins'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import CoinDetails from './components/CoinDetails/CoinDetails'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import NotFound from './components/NotFound/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: "coins",
        element: <Coins />,
        loader: () => fetch('data.json')
      },
      {
        path: 'coin-details/:coinId',
        element: <CoinDetails></CoinDetails>,
        loader: ({ params }) => fetch(`https://api.coingecko.com/api/v3/coins/${params.coinId}`)

      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
        children: [
          {
            path: 'bd-address',
            element: <BdAddress></BdAddress>
          },
          {
            path: 'us-address',
            element: <UsAddress></UsAddress>
          }
        ]
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ],
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
