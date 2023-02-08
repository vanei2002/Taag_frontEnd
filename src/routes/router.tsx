import { createBrowserRouter } from "react-router-dom"
import App from "../pages/App/App"
import Clients from "../pages/Client/Clients"
import NewClients from "../pages/Client/NewClients/NewClients"
import Employees from "../pages/Employees/Employees"
import Home from "../pages/Home/Home"
import Providers from "../pages/Providers/Providers"
import Reports from "../pages/Reports/Reports"
import Sales from "../pages/Sales/Sales"
import Settings from "../pages/Settings/Settings"
import Stock from "../pages/Stock/Stock"

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (<App/>),
    },
    {
        path: "/home",
        element: (<Home/>)
    },
    {
        path: "/stock",
        element: (<Stock/>)
    },
    {
        path: "/sales",
        element: (<Sales/>)
    },
    {
        path: "/clients",
        element: (<Clients/>)
    },
    {
        path: "/clients/newClient",
        element: (<NewClients/>)
    },
    {
        path: "/providers",
        element: (<Providers/>)
    },
    {
        path: "/employees",
        element: (<Employees/>)
    },
    {
        path: "reports",
        element: (<Reports/>)
    },
    {
        path: "settings",
        element: (<Settings/>)
    },
])