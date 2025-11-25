import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Routes/Router.jsx'
import DataProvider from './Provider/DataProvider.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import LogoutModal from './Components/Modals/LogoutModal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>,
)
