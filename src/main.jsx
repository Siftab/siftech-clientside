import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './routes/Routes.jsx'
import Authprovider from './Providers/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Authprovider>
        <RouterProvider router={myRoutes}></RouterProvider>
        </Authprovider>
  </React.StrictMode>,
)
