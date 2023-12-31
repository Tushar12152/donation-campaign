import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
      
    </HelmetProvider>
 </React.StrictMode>,
)
