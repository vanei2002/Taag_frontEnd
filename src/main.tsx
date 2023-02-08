import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.sass'
import {RouterProvider} from "react-router-dom"
import { TaagProvider } from './context/ContextPage'
import { AppRouter } from './routes/router'
import { TaagClientsProvider } from './context/TaagClients'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <TaagClientsProvider>
      <TaagProvider>
        <RouterProvider router={AppRouter}/>
      </TaagProvider>
    </TaagClientsProvider>

  </React.StrictMode>,
)
