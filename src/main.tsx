import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.sass'
import {RouterProvider} from "react-router-dom"
import { AppRouter } from './routes/router'
import { TaagProvider } from './context/TaagContext'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaagProvider>
        <RouterProvider router={AppRouter}/>
      </TaagProvider>
  </React.StrictMode>,
)
