import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Routes/Router.jsx'
import DataProvider from './Provider/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={Router}/>
    </DataProvider>
  </StrictMode>,
)
